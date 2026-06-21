"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export function HeroSection() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-24 pb-10 px-5 relative overflow-hidden">
        {/* Dekoratívny blob */}
        <motion.div
          aria-hidden
          animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "#FDA4C7", opacity: 0.18 }}
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -12, 0], y: [0, 16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute top-32 -left-20 w-56 h-56 rounded-full blur-3xl"
          style={{ backgroundColor: "#6F2380", opacity: 0.08 }}
        />

        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          <motion.p
            variants={fadeUp}
            className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3"
          >
            Uzavretá platforma · NIE RAKOVINE, o. z.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[2.6rem] font-black text-[#6F2380] leading-[1.1] mb-4 max-w-xs"
          >
            Komunita, ktorá vie, čím si prechádzaš.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#6F2380]/70 text-base leading-relaxed mb-8 max-w-sm"
          >
            OnkoKlub je uzavretá platforma pre onkologických pacientov a ich blízkych.
            Videá, odborníci, podcasty, workshopy po celom Slovensku, zľavy od overených
            značiek a komunita ľudí, ktorí to žijú rovnako ako ty — všetko na jednom mieste.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/register"
              className="inline-block rounded-full bg-[#FDA4C7] text-white text-base font-black px-8 py-4 mb-4"
            >
              Chcem sa pripojiť
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#6F2380]/40 text-[13px]">
            Členstvo od 5 € / mesiac · prvý mesiac môžeš vyskúšať a kedykoľvek odísť.
          </motion.p>
        </motion.div>
      </section>

      {/* ── HLAVNÉ FOTO / VIDEO ── */}
      <section className="px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          {/* Jemný float efekt */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full aspect-[4/3] rounded-[2rem] bg-[#6F2380]/25"
            style={{ rotate: "-3deg" }}
          />
        </motion.div>
      </section>
    </>
  );
}
