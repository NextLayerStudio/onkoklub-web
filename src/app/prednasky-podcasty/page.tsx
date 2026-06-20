import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const TOPICS = [
  "Výživa počas chemoterapie a po nej",
  "Zvládanie úzkosti a strachu z relapsu",
  "Pohyb a fyzioterapia pre onkopacientov",
  "Právne poradenstvo — práva pacienta",
  "Sociálne dávky a invalidný dôchodok",
  "Lymfedém — prevencia a každodenná starostlivosť",
  "Intimita a sexualita počas liečby",
  "Návrat do práce po onkologickej liečbe",
  "Paliatívna starostlivosť a podpora blízkych",
  "Onkogenetika — dedičné predispozície k rakovine",
];

const PILLARS = [
  {
    emoji: "🎙️",
    title: "Živé prednášky",
    desc: "Pravidelné online aj offline prednášky s odborníkmi. Môžeš sa pýtať, diskutovať a dostať odpovede priamo od špecialistu. Termíny vždy vopred v kalendári.",
  },
  {
    emoji: "🎧",
    title: "Podcasty s odborníkmi",
    desc: "Séria rozhovorov s ľuďmi, ktorí sa onkológii venujú každý deň. Počúvaj kedykoľvek — v práci, pri varení, na prechádzke.",
  },
  {
    emoji: "📚",
    title: "Archív pre teba",
    desc: "Každá prednáška a každý podcast zostane v knižnici. Ak nestihneš živé vysielanie, nič nestratíš — archív je dostupný kedykoľvek.",
  },
];

export default function PrenasakyPodcastyPage() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      <section className="pt-24 pb-10 px-5">
        <p className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3">
          Zadarmo pre všetkých členov
        </p>
        <h1 className="text-[2.4rem] font-black text-[#6F2380] leading-[1.1] mb-5 max-w-xs">
          Odborníci, ktorým môžeš veriť.
        </h1>
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8 max-w-sm">
          V OnkoKlube pravidelne organizujeme odborné prednášky a nahrávame podcasty
          s lekármi, psychológmi, fyzioterapeutmi a ďalšími špecialistami.
          Živé aj v archíve — všetko máš ako člen zadarmo.
        </p>
        <Link
          href="/register"
          className="block w-full rounded-full bg-[#FDA4C7] text-white text-xl font-black py-5 text-center"
        >
          Chcem prístup k prednáškam
        </Link>
      </section>

      {/* 3 piliere */}
      <section className="px-5 pb-12">
        <div className="flex flex-col gap-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-2xl mb-2">{p.emoji}</p>
              <h3 className="font-black text-[#6F2380] mb-1">{p.title}</h3>
              <p className="text-[#6F2380]/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Témy */}
      <section className="px-5 pb-16">
        <h2 className="text-xl font-black text-[#6F2380] mb-6">Témy prednášok a podcastov</h2>
        <div className="flex flex-col gap-3">
          {TOPICS.map((topic) => (
            <div key={topic} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FDA4C7] shrink-0" />
              <p className="text-[#6F2380]/75 text-sm">{topic}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="rounded-[1.8rem] bg-[#6F2380] p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Prvá prednáška ťa čaká.</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Zaregistruj sa a okamžite získaš prístup k celému archívu prednášok a podcastov.
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
