"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="px-5 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
        className="rounded-[2rem] bg-[#6F2380] px-6 py-12 text-center relative overflow-hidden"
      >
        {/* dekorácia */}
        <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#FDA4C7]/10" />

        <div className="relative z-10">
          <h2 className="text-[2.4rem] font-black text-white leading-[1.1] mb-4">
            Prvý krok stačí.
          </h2>
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-xs mx-auto">
            Registrácia trvá 2 minúty. Bez záväzkov — prvý mesiac môžeš
            vyskúšať a kedykoľvek odísť.
          </p>
          <Link
            href="/register"
            className="block w-full rounded-full bg-[#FDA4C7] text-white font-black text-xl py-5 text-center active:scale-[0.98] transition-transform mb-4"
          >
            Chcem sa pripojiť
          </Link>
          <Link href="/login" className="text-white/40 text-sm underline underline-offset-2">
            Už som člen — Prihlásiť sa
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
