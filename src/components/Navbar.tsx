"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── hlavná lišta ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3.5 bg-[#FFF3F9]">
        {/* Logo / názov */}
        <span className="text-purple font-black text-lg tracking-tight">
          ONKO<span className="text-accent">KLUB</span>
        </span>

        {/* Pravá strana — tlačidlo + hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full bg-accent text-white text-sm font-bold px-4 py-2 leading-none"
          >
            Prihlásiť sa
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-accent text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── mobilné menu ── */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#FFF3F9] flex flex-col pt-20 px-5 pb-8">
          <nav className="flex flex-col gap-6 flex-1">
            {[
              { label: "Čo získaš", href: "#co-ziskas" },
              { label: "Prednášky & Podcasty", href: "#prednasky" },
              { label: "Eventy", href: "#eventy" },
              { label: "Sponzori & Zľavy", href: "#sponzori" },
              { label: "Cenník", href: "#cennik" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black text-purple border-b border-purple/10 pb-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-accent text-white text-base font-bold py-4 mt-6"
          >
            Chcem sa zapojiť
          </Link>
        </div>
      )}
    </>
  );
}
