"use client";

import { Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t border-slate-800 shadow-2xl">
      <div className="grid grid-cols-2 divide-x divide-slate-800">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
          aria-label="Call us"
        >
          <Phone className="h-4 w-4 text-amber-500" />
          Call Now
        </a>
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center justify-center gap-2 py-3.5 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
          aria-label="Email us"
        >
          <Mail className="h-4 w-4 text-amber-500" />
          Email Us
        </a>
      </div>
    </div>
  );
}
