import Link from "next/link";
import { Navbar } from "@/components/Navbar";

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

      {/* ── HLAVNÉ VIDEO / FOTO ── */}
      <section className="px-5 pb-16">
        <div className="w-full aspect-[4/3] rounded-[2rem] bg-[#6F2380]/25 -rotate-3" />
      </section>

      {/* ── NIE SI V TOM SÁM ── */}
      <section className="px-5 pb-16">
        {/* Nadpis + podnadpis */}
        <h2 className="text-[2.2rem] font-black text-[#6F2380] leading-[1.1] mb-4">
          Nie si v tom sám.
        </h2>
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-10">
          OnkoKlub vznikol z presvedčenia, že onkologickí pacienti a ich blízki
          potrebujú viac než len medicínsku starostlivosť. Potrebujú komunitu ľudí,
          ktorí to zažívajú tak isto. Potrebujú odborníkov, ktorým môžu dôverovať.
          A potrebujú praktické nástroje pre každodenný život — od cvičenia cez
          zvládanie stresu až po orientáciu v sociálnom systéme.
        </p>

        {/* Dva prelínajúce sa štvorčeky */}
        <div className="relative mb-12" style={{ height: "290px" }}>
          {/* Karta 1 — ľavá, vyššie, naklopená doľava */}
          <div
            className="absolute top-0 left-0 w-[70%] rounded-[1.6rem] bg-[#6F2380]/25"
            style={{ aspectRatio: "4/3", transform: "rotate(-8deg)", transformOrigin: "top left" }}
          />
          {/* Karta 2 — pravá, nižšie, naklopená doprava */}
          <div
            className="absolute bottom-0 right-0 w-[70%] rounded-[1.6rem] bg-[#6F2380]/25"
            style={{ aspectRatio: "4/3", transform: "rotate(6deg)", transformOrigin: "bottom right" }}
          />
        </div>

        {/* Zvyšný text sekcie */}
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8">
          OnkoKlub je uzavretá platforma, ktorú vytvorilo občianske združenie{" "}
          <span className="font-bold text-[#6F2380]">NIE RAKOVINE, o. z.</span> —
          organizácia, ktorá sa od svojho vzniku venuje podpore onkologických pacientov
          na Slovensku. Všetko, čo v OnkoKlube nájdeš, je overené, bezpečné a vytvorené
          s ohľadom na teba.
        </p>

        {/* 3 ikonové body */}
        <ul className="flex flex-col gap-4">
          {[
            { icon: "🔒", title: "Uzavretá komunita", desc: "Prístup iba pre registrovaných členov" },
            { icon: "✅", title: "Overený obsah", desc: "Všetko tvoria odborníci, nie anonymi" },
            { icon: "🇸🇰", title: "Slovenská komunita", desc: "Ľudia z tvojho okolia, eventy vo tvojom kraji" },
          ].map(({ icon, title, desc }) => (
            <li key={title} className="flex items-start gap-3">
              <span className="text-xl leading-none mt-0.5">{icon}</span>
              <div>
                <p className="font-bold text-[#6F2380] text-sm">{title}</p>
                <p className="text-[#6F2380]/60 text-sm">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
