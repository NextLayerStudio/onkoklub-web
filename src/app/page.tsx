import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 px-5 max-w-lg">
        <h1 className="text-[2.6rem] font-black text-[#6F2380] leading-[1.1] mb-4">
          Komunita, ktorá vie, čím si prechádzaš.
        </h1>

        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8">
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
    </main>
  );
}
