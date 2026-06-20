import Link from "next/link";

const NAV = [
  { label: "Čo získaš",            href: "/#features" },
  { label: "Prednášky & Podcasty", href: "/prednasky-podcasty" },
  { label: "Eventy",               href: "/akcie" },
  { label: "Sponzori a zľavy",     href: "/#sponzori" },
  { label: "Cenník",               href: "/#cennik" },
  { label: "Prihlásiť sa",         href: "/login" },
  { label: "Registrácia",          href: "/register" },
];

export function Footer() {
  return (
    <footer className="bg-[#6F2380] px-5 pt-10 pb-8">
      {/* Logo */}
      <div className="mb-7">
        <p className="font-black text-2xl">
          <span className="text-white">ONKO</span>
          <span className="text-[#FDA4C7]">KLUB</span>
        </p>
        <p className="text-white/50 text-xs mt-1 leading-relaxed">
          Platforma pre onkologických pacientov a ich blízkych.
          <br />
          Prevádzkuje: NIE RAKOVINE, o. z.
        </p>
      </div>

      {/* Navigácia */}
      <div className="mb-7">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">Navigácia</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className="text-white/65 text-sm hover:text-white transition-colors">
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Kontakt */}
      <div className="mb-8">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">Kontakt</p>
        <a href="mailto:office@nierakovine.sk" className="text-[#FDA4C7] text-sm font-semibold">
          office@nierakovine.sk
        </a>
        <br />
        <a href="https://nierakovine.sk" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm">
          nierakovine.sk
        </a>
      </div>

      {/* Delič */}
      <div className="h-px bg-white/10 mb-6" />

      {/* Spodná lišta */}
      <div className="text-white/30 text-[11px] leading-relaxed">
        <p>NIE RAKOVINE, o. z. · IČO: 50654896</p>
        <p>Cukrová 2272/14, Bratislava</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
          <Link href="/ochrana-sukromia" className="underline">Ochrana súkromia</Link>
          <Link href="/podmienky" className="underline">Podmienky členstva</Link>
          <Link href="/kontakt" className="underline">Kontakt</Link>
        </div>
        <p className="mt-3">© 2026 NIE RAKOVINE, o. z.</p>
        <p className="mt-1 text-white/20">Vytvorené v spolupráci s NextLayer Studio</p>
      </div>
    </footer>
  );
}
