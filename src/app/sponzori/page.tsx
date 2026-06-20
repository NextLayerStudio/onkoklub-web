import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QrCode, ScanLine, BadgeCheck, Tag, Check } from "lucide-react";

const KATEGORIE = [
  {
    accent: "#FDA4C7",
    title: "Zdravie a starostlivosť",
    desc: "Zdravotnícke pomôcky, paroché, kompresné oblečenie, liečebné kúpele, rehabilitácia.",
    logos: ["[IMG-09]", "[IMG-10]", "[IMG-11]"],
  },
  {
    accent: "#6F2380",
    title: "Výživa a doplnky",
    desc: "Zdravé potraviny, doplnky stravy, nutričné poradenstvo, organické produkty.",
    logos: ["[IMG-12]", "[IMG-13]", "[IMG-14]"],
  },
  {
    accent: "#FDA4C7",
    title: "Psychická pohoda",
    desc: "Wellness, masáže, aromaterapia, mindfulness aplikácie, relaxačné pobyty.",
    logos: ["[IMG-15]", "[IMG-16]", "[IMG-17]"],
  },
  {
    accent: "#6F2380",
    title: "Šport a pohyb",
    desc: "Fitness štúdiá, jogové štúdiá, športové oblečenie a vybavenie, plavárne.",
    logos: ["[IMG-18]", "[IMG-19]", "[IMG-20]"],
  },
  {
    accent: "#FDA4C7",
    title: "Každodenný život",
    desc: "Doprava, ubytovanie, reštaurácie, nákupy, kultúra, voľný čas.",
    logos: ["[IMG-21]", "[IMG-22]", "[IMG-23]"],
  },
];

const HOW_STEPS = [
  { icon: BadgeCheck, title: "Zaregistruj sa", desc: "Po aktivácii členstva ti OnkoKlub automaticky vygeneruje OKkartu s unikátnym QR kódom a ID." },
  { icon: QrCode,     title: "Nájdi zľavu",    desc: "V sekcii Zlavy a benefity najdes vsetky aktualne ponuky partnerskych znaciek — filtrovane podla kategorie." },
  { icon: ScanLine,   title: "Skenuj a šetri", desc: "Pri nákupe v predajni alebo v e-shope naskenuješ QR kód alebo napíšeš svoje ID. Zľava sa uplatní okamžite." },
];

export default function SponzoriPage() {
  return (
    <main className="min-h-screen bg-[#FFF3F9] font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-10 px-5">
        <p className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3">
          Exkluzívne len pre členov
        </p>
        <h1 className="text-[2.4rem] font-black text-[#6F2380] leading-[1.1] mb-5">
          Stovky eur ušetrených ročne.
        </h1>
        <p className="text-[#6F2380]/70 text-base leading-relaxed mb-8">
          Partnerské značky OnkoKlubu pripravili pre členov exkluzívne zľavy a benefity
          z oblasti zdravia, výživy, pohybu, wellness a každodenného života.
          Ako člen ich získavaš automaticky — stačí ukázať svoju OKkartu.
        </p>
        <Link
          href="/register"
          className="block w-full rounded-full bg-[#FDA4C7] text-white text-xl font-black py-5 text-center"
        >
          Chcem zľavy pre členov
        </Link>
      </section>

      {/* Veľký citát */}
      <section className="px-5 pb-14">
        <div className="rounded-[2rem] bg-[#6F2380] px-6 py-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5" />
          <p className="text-white font-black text-[1.5rem] leading-snug relative z-10">
            „Členstvo v OnkoKlube sa ti zaplatí len zo zliav u partnerských značiek."
          </p>
        </div>
      </section>

      {/* OKkarta vizuál */}
      <section className="px-5 pb-10">
        <h2 className="text-xl font-black text-[#6F2380] mb-5">Tvoja OKkarta</h2>

        {/* [IMG-24] Mockup OKkarty na telefóne */}
        <div className="w-full aspect-[9/16] max-h-[420px] rounded-[2rem] bg-[#FDA4C7]/20 flex flex-col items-center justify-center gap-3 mb-6">
          <QrCode size={40} className="text-[#FDA4C7]/40" />
          <p className="text-[#FDA4C7]/50 text-xs font-semibold">[IMG-24] OKkarta na telefóne</p>
        </div>

        <div className="flex flex-col gap-2">
          {[
            "Vždy po ruke — v telefóne, kedykoľvek",
            "Unikátny QR kód priradený k tvojmu účtu",
            "Uplatnenie zliav u partnerských značiek",
            "Vstup na eventy a workshopy",
            "Doklad o členstve OnkoKlubu",
          ].map((b) => (
            <div key={b} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#FDA4C7]/20 flex items-center justify-center shrink-0">
                <Check size={11} className="text-[#FDA4C7]" strokeWidth={3} />
              </div>
              <span className="text-[#6F2380]/70 text-[14px]">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Ako to funguje */}
      <section className="px-5 pb-14">
        <h2 className="text-xl font-black text-[#6F2380] mb-8">Ako zľavy uplatniť</h2>
        <div className="relative pl-5">
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#FDA4C7] via-[#FDA4C7]/50 to-transparent" />
          {HOW_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative flex gap-5 items-start pb-8 last:pb-0">
                <div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_0_4px_#FFF3F9]"
                  style={{ backgroundColor: i % 2 === 0 ? "#FDA4C7" : "#6F2380" }}
                >
                  <Icon size={17} className="text-white" strokeWidth={2} />
                </div>
                <div className="pt-1.5">
                  <p className="font-black text-[#6F2380] text-[16px] mb-1">{s.title}</p>
                  <p className="text-[#6F2380]/55 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Screenshot sekcie zliav v appke */}
      <section className="px-5 pb-14">
        <h2 className="text-xl font-black text-[#6F2380] mb-5">Zľavy v aplikácii</h2>
        {/* [IMG-30] Screenshot sekcie zliav */}
        <div className="w-full aspect-video rounded-[2rem] bg-[#6F2380]/15 flex flex-col items-center justify-center gap-2 mb-4">
          <Tag size={32} className="text-[#6F2380]/25" />
          <p className="text-[#6F2380]/25 text-xs font-semibold">[IMG-30] Screenshot sekcie zliav</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square rounded-2xl bg-[#FDA4C7]/15 flex items-center justify-center">
            <p className="text-[#FDA4C7]/50 text-[10px] font-semibold text-center px-2">[IMG] Detail zľavy</p>
          </div>
          <div className="aspect-square rounded-2xl bg-[#6F2380]/10 flex items-center justify-center">
            <p className="text-[#6F2380]/30 text-[10px] font-semibold text-center px-2">[IMG] QR skenovanie</p>
          </div>
        </div>
      </section>

      {/* Kategórie partnerov */}
      <section className="px-5 pb-14">
        <h2 className="text-xl font-black text-[#6F2380] mb-2">Kategórie partnerov</h2>
        <p className="text-[#6F2380]/50 text-sm mb-8">
          Logá partnerov budú doplnené po podpise partnerských zmlúv.
        </p>

        <div className="flex flex-col gap-8">
          {KATEGORIE.map((kat) => (
            <div key={kat.title}>
              <p
                className="text-[11px] font-black uppercase tracking-widest mb-2"
                style={{ color: kat.accent }}
              >
                {kat.title}
              </p>
              <p className="text-[#6F2380]/55 text-[13px] leading-relaxed mb-4">{kat.desc}</p>
              <div className="grid grid-cols-3 gap-3">
                {kat.logos.map((logo) => (
                  <div
                    key={logo}
                    className="aspect-square rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: kat.accent + "15", border: `1.5px solid ${kat.accent}25` }}
                  >
                    <p
                      className="text-[9px] font-bold text-center"
                      style={{ color: kat.accent + "60" }}
                    >
                      {logo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="rounded-[2rem] bg-[#6F2380] px-6 py-10 text-center">
          <h2 className="text-[2rem] font-black text-white leading-tight mb-3">
            Získaj svoju OKkartu.
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-7">
            Stačí sa zaregistrovať — karta čaká hneď po prvom prihlásení.
            Žiadne poplatky, žiadne formuláre.
          </p>
          <Link
            href="/register"
            className="block w-full rounded-full bg-[#FDA4C7] text-white font-black text-base py-4"
          >
            Chcem svoju OKkartu
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
