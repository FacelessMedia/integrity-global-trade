"use client";

import { useState, useEffect, useCallback } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface PriceData {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  unit: string;
}

// Static fallback prices — always rendered immediately, no API dependency
const STATIC_PRICES: PriceData[] = [
  { symbol: "XAU", name: "Gold", price: 2935.40, changePercent: 0.42, unit: "/oz" },
  { symbol: "XAG", name: "Silver", price: 32.85, changePercent: 1.45, unit: "/oz" },
  { symbol: "XPT", name: "Platinum", price: 1012.50, changePercent: -0.41, unit: "/oz" },
  { symbol: "XPD", name: "Palladium", price: 968.75, changePercent: 0.90, unit: "/oz" },
  { symbol: "Cu", name: "Copper", price: 4.23, changePercent: 0.71, unit: "/lb" },
  { symbol: "Al", name: "Aluminum", price: 2618.00, changePercent: -0.44, unit: "/t" },
];

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
  // Start with static prices so it always renders immediately
  const [prices, setPrices] = useState<PriceData[]>(STATIC_PRICES);
  const [isLive, setIsLive] = useState(false);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (!res.ok) return;
      const data = await res.json();
      if (data.prices && data.prices.length > 0) {
        setPrices(data.prices.map((p: Record<string, unknown>) => ({
          symbol: p.symbol as string,
          name: p.name as string,
          price: p.price as number,
          changePercent: p.changePercent as number,
          unit: p.unit as string,
        })));
        setIsLive(data.isLive || false);
      }
    } catch {
      // Keep static prices on error — ticker still shows
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

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

        {/* Scrolling prices on mobile, static on desktop */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center animate-ticker md:animate-none md:justify-center gap-1">
            {[...prices, ...prices].map((p, i) => (
              <PriceCard key={`${p.symbol}-${i}`} data={p} />
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="hidden lg:flex items-center gap-1.5 px-4 py-2 bg-slate-900/80 border-l border-slate-800/50 shrink-0">
          <span className="text-[10px] text-slate-500">
            {isLive ? "Live Prices" : "Indicative"}
          </span>
        </div>
      </div>
    </div>
  );
}
