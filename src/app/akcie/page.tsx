import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const CITIES = ["Bratislava", "Nitra", "Košice", "Poprad", "Ďalšie mestá pribudnú"];

const EVENT_TYPES = [
  {
    emoji: "🧘",
    title: "Joga workshopy",
    desc: "Workshopy s Petrou Joga — jemné cvičenie špeciálne pre onkologických pacientov. Bez nároku na kondíciu, v bezpečnom prostredí.",
  },
  {
    emoji: "🧘‍♀️",
    title: "Mindfulness a meditácia",
    desc: "Skupinové sedenia s odborníkmi. Techniky zvládania stresu, dýchanie, prítomnosť.",
  },
  {
    emoji: "🩺",
    title: "Odborné stretnutia",
    desc: "Stretnutia s lekármi, psychológmi a odborníkmi. Priestor na otázky a zdieľanie skúseností v malej skupine.",
  },
  {
    emoji: "☕",
    title: "Komunity meetupy",
    desc: "Neformálne stretnutia členov OnkoKlubu. Káva, rozhovor, ľudia s podobnou skúsenosťou.",
  },
];

const STEPS = [
  { n: "1", title: "Pozri si kalendár", desc: "Všetky nadchádzajúce akcie nájdeš v členskej sekcii, filtrované podľa tvojho kraja." },
  { n: "2", title: "Rezervuj si miesto", desc: "Jedným kliknutím — potvrdenie príde e-mailom a pripomienka 24 hodín vopred." },
  { n: "3", title: "Príď a spoznaj komunitu", desc: "Akcie sú pre členov zadarmo alebo so zvýhodnenou cenou. Kapacita je obmedzená." },
];

export default function AkciePage() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      <section className="pt-24 pb-10 px-5">
        <p className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3">
          Po celom Slovensku
        </p>
        <h1 className="text-[2.4rem] font-black text-[#6F2380] leading-[1.1] mb-5 max-w-xs">
          Stretni sa s nami vo tvojom meste.
        </h1>
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8 max-w-sm">
          Živé workshopy, stretnutia a akcie sa konajú pravidelne po celom Slovensku.
          Ako člen si rezervuješ miesto priamo z platformy — jedným kliknutím.
          Všetko zadarmo alebo so zvýhodnenou cenou.
        </p>
        <Link
          href="/register"
          className="block w-full rounded-full bg-[#FDA4C7] text-white text-xl font-black py-5 text-center"
        >
          Chcem sa zapojiť
        </Link>
      </section>

      {/* Mestá */}
      <section className="px-5 pb-12">
        <h2 className="text-xl font-black text-[#6F2380] mb-5">Kde sa stretávame</h2>
        <div className="flex flex-wrap gap-3">
          {CITIES.map((city) => (
            <div key={city} className="flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-sm">
              <span className="text-sm">📍</span>
              <span className="text-sm font-semibold text-[#6F2380]">{city}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typy eventov */}
      <section className="px-5 pb-12">
        <h2 className="text-xl font-black text-[#6F2380] mb-5">Typy akcií</h2>
        <div className="flex flex-col gap-4">
          {EVENT_TYPES.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-2xl mb-2">{e.emoji}</p>
              <h3 className="font-black text-[#6F2380] mb-1">{e.title}</h3>
              <p className="text-[#6F2380]/60 text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ako to funguje */}
      <section className="px-5 pb-16">
        <h2 className="text-xl font-black text-[#6F2380] mb-6">Ako to funguje</h2>
        <div className="flex flex-col gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#FDA4C7] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-base">{s.n}</span>
              </div>
              <div>
                <p className="font-black text-[#6F2380] mb-1">{s.title}</p>
                <p className="text-[#6F2380]/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="rounded-[1.8rem] bg-[#6F2380] p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Nájdi akciu vo tvojom kraji.</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Kalendár akcií je dostupný po registrácii. Kapacita na každom stretnutí je obmedzená.
          </p>
          <Link
            href="/register"
            className="inline-block rounded-full bg-[#FDA4C7] text-white font-black text-base px-8 py-4"
          >
            Chcem sa zapojiť
          </Link>
        </div>
      </section>

      <footer className="px-5 pb-10 text-center text-[#6F2380]/40 text-xs">
        <Link href="/" className="underline">← Späť na úvod</Link>
      </footer>
    </main>
  );
}
