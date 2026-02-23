"use client";

import { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";

interface PriceData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  unit: string;
  currency: string;
  timestamp: number;
}

interface PriceResponse {
  prices: PriceData[];
  source: string;
  cachedAt: number;
  isLive: boolean;
}

const symbolColors: Record<string, string> = {
  XAU: "text-yellow-400",
  XAG: "text-slate-300",
  XPT: "text-blue-300",
  XPD: "text-emerald-300",
  Cu: "text-orange-400",
  Al: "text-sky-300",
};

function formatPrice(price: number, symbol: string): string {
  if (symbol === "Al") return price.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  if (symbol === "Cu") return price.toFixed(2);
  if (symbol === "XAG") return price.toFixed(2);
  return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function PriceCard({ data }: { data: PriceData }) {
  const isUp = data.changePercent > 0;
  const isDown = data.changePercent < 0;

  return (
    <div className="flex items-center gap-2.5 px-4 py-1.5 shrink-0">
      <span className={`text-xs font-bold ${symbolColors[data.symbol] || "text-white"}`}>
        {data.name}
      </span>
      <span className="text-sm font-semibold text-white tabular-nums">
        ${formatPrice(data.price, data.symbol)}
        <span className="text-[10px] text-slate-500 font-normal ml-0.5">{data.unit}</span>
      </span>
      <span className={`inline-flex items-center gap-0.5 text-[11px] font-medium tabular-nums ${
        isUp ? "text-emerald-400" : isDown ? "text-red-400" : "text-slate-500"
      }`}>
        {isUp ? <TrendingUp className="h-3 w-3" /> : isDown ? <TrendingDown className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
        {isUp ? "+" : ""}{data.changePercent.toFixed(2)}%
      </span>
    </div>
  );
}

export function CommodityPriceTicker() {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (!res.ok) return;
      const data: PriceResponse = await res.json();
      setPrices(data.prices);
      setIsLive(data.isLive);
      setLastUpdated(
        new Date(data.cachedAt).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    } catch {
      // Keep existing prices on error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5 * 60 * 1000); // Refresh every 5 min
    return () => clearInterval(interval);
  }, [fetchPrices]);

  if (loading || prices.length === 0) {
    return (
      <div className="bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-xs text-slate-500">
          <RefreshCw className="h-3 w-3 animate-spin" />
          Loading market data...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
      <div className="flex items-center">
        {/* Live indicator */}
        <div className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-slate-900/80 border-r border-slate-800/50 shrink-0">
          <div className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            {isLive ? "Live" : "Market"}
          </span>
        </div>

        {/* Scrolling prices on mobile, grid on desktop */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center animate-ticker md:animate-none md:justify-center gap-1">
            {/* Double the prices for seamless scroll on mobile */}
            {[...prices, ...prices].map((p, i) => (
              <PriceCard key={`${p.symbol}-${i}`} data={p} />
            ))}
          </div>
        </div>

        {/* Last updated */}
        <div className="hidden lg:flex items-center gap-1.5 px-4 py-2 bg-slate-900/80 border-l border-slate-800/50 shrink-0">
          <span className="text-[10px] text-slate-500">{lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
