import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const VIDEOS = [
  { id: 1, title: "Príbehy členov" },
  { id: 2, title: "Odborné prednášky" },
  { id: 3, title: "Workshopy a eventy" },
  { id: 4, title: "Podcasty s odborníkmi" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 pb-10 px-5">
        <h1 className="text-[2.6rem] font-black text-[#6F2380] leading-[1.1] mb-4 max-w-xs">
          Komunita, ktorá vie, čím si prechádzaš.
        </h1>

        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8 max-w-sm">
          OnkoKlub je uzavretá platforma pre onkologických pacientov a ich blízkych.
          Videá, odborníci, podcasty, workshopy po celom Slovensku, zľavy od overených
          značiek a komunita ľudí, ktorí to žijú rovnako ako ty — všetko na jednom mieste.
        </p>

        <Link
          href="/register"
          className="inline-block rounded-full bg-[#FDA4C7] text-white text-base font-bold px-7 py-3.5 leading-none"
        >
          Chcem sa zapojiť
        </Link>
      </section>

      {/* ── VIDEO SEKCIA ── */}
      <section className="pb-12">
        {/* Horizontálny scroll — bez scrollbaru */}
        <div className="flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-none"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Ružový štvorec — rám */}
              <div className="w-[220px] rounded-[2rem] bg-[#FDA4C7] p-3">
                {/* Placeholder pre obrázok/video */}
                <div className="w-full aspect-[4/3] rounded-[1.4rem] bg-[#FFF3F9]/60 flex items-center justify-center">
                  <span className="text-[#FDA4C7]/60 text-xs font-bold tracking-wide uppercase">
                    foto / video
                  </span>
                </div>
              </div>
              {/* Titulok pod kartou */}
              <p className="mt-3 px-1 text-sm font-semibold text-[#6F2380]">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
