"use client";

import { useState } from "react";
import { Play, X, ShieldCheck, Eye } from "lucide-react";

const videos = [
  { src: "/videos/operations-1.mp4", label: "Mining Operations" },
  { src: "/videos/operations-2.mp4", label: "Quality Inspection" },
  { src: "/videos/operations-3.mp4", label: "Refining Process" },
  { src: "/videos/operations-4.mp4", label: "Logistics & Transport" },
  { src: "/videos/operations-5.mp4", label: "Facility Tour" },
  { src: "/videos/operations-6.mp4", label: "Metal Processing" },
  { src: "/videos/operations-7.mp4", label: "Assay & Certification" },
  { src: "/videos/operations-8.mp4", label: "Secure Storage" },
  { src: "/videos/operations-9.mp4", label: "Supply Chain" },
  { src: "/videos/operations-10.mp4", label: "Field Operations" },
];

export function OperationsShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
            <Eye className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-semibold">Full Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            See Our Operations Firsthand
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Transparency isn&apos;t just a word — it&apos;s how we operate. These videos showcase
            our real mining operations, refining facilities, quality inspection processes, and
            secure logistics infrastructure. What you see is what you get.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((video) => (
            <button
              key={video.src}
              onClick={() => setActiveVideo(video.src)}
              className="group relative aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all"
            >
              <video
                src={video.src}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="h-5 w-5 text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white text-xs font-medium">{video.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>
            All footage captured directly from our verified operations and partner facilities.
          </span>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <div
            className="relative max-w-lg w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[85vh] rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
