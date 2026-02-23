import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="text-8xl font-bold text-amber-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
            <Link href="/"><Home className="mr-2 h-4 w-4" /> Back to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="max-w-sm mx-auto">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Popular Pages</h2>
          <div className="space-y-2">
            {[
              { label: "Services", href: "/services" },
              { label: "Commodities We Trade", href: "/commodities" },
              { label: "About Us", href: "/about" },
              { label: "Compliance & Ethics", href: "/compliance" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Why Choose IGTC", href: "/why-igtc" },
              { label: "FAQ", href: "/faq" },
              { label: "Insights & News", href: "/insights" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50/50 px-4 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
