"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Čo získaš",            href: "/co-ziskas" },
  { label: "Prednášky & Podcasty", href: "/prednasky-podcasty" },
  { label: "Eventy",               href: "/akcie" },
  { label: "Sponzori & Zľavy",     href: "/sponzori" },
  { label: "Cenník",               href: "/cennik" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* ── hlavná lišta ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3.5 bg-[#FFF3F9]">
        <span className="text-[#6F2380] font-black text-lg tracking-tight">
          ONKO<span className="text-[#FDA4C7]">KLUB</span>
        </span>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full bg-[#FDA4C7] text-white text-base font-black px-6 py-3 leading-none"
          >
            Prihlásiť sa
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Otvoriť menu"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FDA4C7] text-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* ── backdrop ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden
      />

      {/* ── drawer — vyjde sprava ── */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-xs flex-col bg-[#FDA4C7] text-white
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        {/* Hlavička drawera */}
        <div className="flex items-center justify-between px-5 pt-8 pb-6">
          <span className="text-white font-black text-xl tracking-tight">
            ONKO<span className="text-white/60">KLUB</span>
          </span>
          <button
            onClick={close}
            aria-label="Zatvoriť menu"
            className="w-9 h-9 grid place-items-center rounded-full bg-white/20 hover:bg-white/30"
          >
            <X size={16} />
          </button>
        </div>

        {/* Navigačné položky */}
        <nav className="flex-1 px-3">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex items-center px-4 py-4 rounded-2xl text-lg font-black text-white hover:bg-white/15 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA tlačidlá */}
        <div className="shrink-0 px-5 pt-4 flex flex-col gap-3">
          <Link
            href="/register"
            onClick={close}
            className="block text-center rounded-full bg-white text-[#FDA4C7] text-sm font-black py-3.5"
          >
            Chcem sa zapojiť
          </Link>
          <Link
            href="/login"
            onClick={close}
            className="block text-center rounded-full bg-white/15 text-white text-sm font-semibold py-3"
          >
            Prihlásiť sa
          </Link>
        </div>
      </div>
    </>
  );
}
