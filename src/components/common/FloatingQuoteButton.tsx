"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, X } from "lucide-react";

export function FloatingQuoteButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2 md:bottom-8">
      <Link
        href="/contact"
        className="group flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold pl-4 pr-5 py-3 rounded-full shadow-lg shadow-amber-600/25 transition-all hover:shadow-xl hover:shadow-amber-600/30"
      >
        <MessageSquare className="h-4 w-4" />
        <span className="text-sm">Get a Quote</span>
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="p-1.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        aria-label="Dismiss quote button"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
