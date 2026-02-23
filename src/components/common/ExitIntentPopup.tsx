"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ArrowRight, ShieldCheck } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && !show) {
      const dismissed = localStorage.getItem("exit-intent-dismissed");
      if (!dismissed) {
        setShow(true);
      }
    }
  }, [show]);

  useEffect(() => {
    // Only trigger after 15 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("exit-intent-dismissed", Date.now().toString());
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="h-7 w-7 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Before You Go...
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Get a free compliance consultation and discover how IGTC can serve as your
            trusted, KYC-verified commodities trading partner.
          </p>
          <div className="space-y-3">
            <Link
              href="/contact"
              onClick={dismiss}
              className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-md"
            >
              Request Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={dismiss}
              className="w-full text-sm text-slate-400 hover:text-slate-600 py-2 transition-colors"
            >
              No thanks, I&apos;ll continue browsing
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-4">
            $3B+ in closed contract volume &bull; 50+ countries served &bull; 100% KYC/AML compliant
          </p>
        </div>
      </div>
    </div>
  );
}
