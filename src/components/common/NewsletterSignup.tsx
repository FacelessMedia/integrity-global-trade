"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-200 text-center">
        <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
        <h3 className="font-bold text-slate-900 mb-1">Subscribed</h3>
        <p className="text-sm text-slate-600">
          Thank you for subscribing. You&apos;ll receive our market insights and industry analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-xl p-8 text-center">
      <Mail className="h-8 w-8 text-amber-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Market Intelligence Newsletter</h3>
      <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
        Receive precious metals market analysis, compliance updates, and industry insights
        directly to your inbox. No spam — only valuable intelligence.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <Input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
        />
        <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shrink-0">
          Subscribe <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </form>
      <p className="text-xs text-slate-500 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
