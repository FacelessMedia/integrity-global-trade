"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:bottom-6 md:left-6 md:right-auto md:max-w-md">
      <div className="bg-white border border-slate-200 shadow-2xl rounded-t-xl md:rounded-xl p-6 mx-auto">
        <div className="flex items-start gap-3 mb-4">
          <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Cookie Notice</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We use essential cookies to ensure our website functions properly. We do not use
              tracking or advertising cookies without your consent. Read our{" "}
              <Link href="/privacy" className="text-amber-600 hover:text-amber-700 underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <button onClick={decline} className="text-slate-400 hover:text-slate-600 shrink-0" aria-label="Close cookie notice">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-3">
          <Button onClick={accept} size="sm" className="bg-slate-900 hover:bg-slate-800 text-white text-xs flex-1">
            Accept All
          </Button>
          <Button onClick={decline} size="sm" variant="outline" className="text-xs flex-1">
            Essential Only
          </Button>
        </div>
      </div>
    </div>
  );
}
