import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const CATEGORIES = [
  { emoji: "🧘", title: "Joga & pohyb", desc: "Jemné cvičenia špeciálne prispôsobené pre onkologických pacientov. Od 10-minútových ranných cvičení až po hodinové lekcie." },
  { emoji: "🧠", title: "Mindfulness & psychika", desc: "Meditácie, dýchacie techniky a mindfulness prax pre zvládanie stresu, úzkosti a emočnej záťaže počas liečby." },
  { emoji: "🥗", title: "Výživa & jedlo", desc: "Čo jesť počas chemoterapie, ako zvládnuť nevoľnosť, aké potraviny posilňujú imunitu. Rady od overených nutričných poradkýň." },
  { emoji: "💬", title: "Psychologická podpora", desc: "Rozhovory, prednášky a techniky od psychológov, ktorí pracujú s onkologickými pacientmi každý deň." },
  { emoji: "🩺", title: "Liečba & diagnóza", desc: "Zrozumiteľné vysvetlenia typov liečby, nežiaducich účinkov a toho, čo môžeš očakávať v jednotlivých fázach." },
  { emoji: "👨‍👩‍👧", title: "Rodina & vzťahy", desc: "Ako hovoriť s deťmi o chorobe, ako zvládnuť záťaž pre blízkych a ako udržiavať vzťahy počas liečby." },
];

export default function KontentKniznicaPage() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      <section className="pt-24 pb-10 px-5">
        <p className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3">
          Kontent knižnica
        </p>
        <h1 className="text-[2.4rem] font-black text-[#6F2380] leading-[1.1] mb-5 max-w-xs">
          Stovky videí. Vždy po ruke.
        </h1>
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8 max-w-sm">
          V knižnici OnkoKlubu nájdeš videá od overených odborníkov — joga, mindfulness,
          výživa, psychika, prednášky o liečbe. Pozri si ich kedykoľvek, odkiaľkoľvek,
          podľa seba. Nie je tu žiadny tlak — obsah na teba čaká vtedy, keď ty chceš.
        </p>
        <Link
          href="/register"
          className="block w-full rounded-full bg-[#FDA4C7] text-white text-xl font-black py-5 text-center"
        >
          Chcem prístup ku knižnici
        </Link>
      </section>

      {/* Placeholder video */}
      <section className="px-5 pb-14">
        <div className="w-full aspect-video rounded-[1.8rem] bg-[#6F2380]/20" />
      </section>

      {/* Kategórie */}
      <section className="px-5 pb-16">
        <h2 className="text-2xl font-black text-[#6F2380] mb-8">Čo v knižnici nájdeš</h2>
        <div className="flex flex-col gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-2xl mb-2">{cat.emoji}</p>
              <h3 className="font-black text-[#6F2380] mb-1">{cat.title}</h3>
              <p className="text-[#6F2380]/60 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="rounded-[1.8rem] bg-[#6F2380] p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Začni pozerať ešte dnes.</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Obsah je prístupný okamžite po registrácii. Žiadne čakanie, žiadny schvaľovací proces.
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
