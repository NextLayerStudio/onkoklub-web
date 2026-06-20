"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACTIVITIES = [
  {
    emoji: "🧘",
    title: "Joga workshopy",
    desc: "Jemné cvičenie špeciálne pre onkologických pacientov. Bez nároku na kondíciu, v bezpečnom prostredí.",
    color: "#FDA4C7",
  },
  {
    emoji: "🧘‍♀️",
    title: "Mindfulness a meditácia",
    desc: "Skupinové sedenia zamerané na zvládanie stresu, dýchanie a prítomnosť.",
    color: "#6F2380",
  },
  {
    emoji: "🩺",
    title: "Odborné stretnutia",
    desc: "Stretnutia s lekármi, psychológmi a špecialistami. Priestor na otázky a zdieľanie skúseností.",
    color: "#FDA4C7",
  },
  {
    emoji: "☕",
    title: "Komunity meetupy",
    desc: "Neformálne stretnutia členov OnkoKlubu — káva, rozhovor, ľudia s podobnou skúsenosťou.",
    color: "#6F2380",
  },
];

const REGIONS = [
  {
    id: "zapad",
    name: "Západ",
    emoji: "🏙️",
    cities: ["Bratislava", "Nitra", "Trnava"],
  },
  {
    id: "stred",
    name: "Stred",
    emoji: "🏔️",
    cities: ["Žilina", "Banská Bystrica", "Trenčín", "Martin"],
  },
  {
    id: "vychod",
    name: "Východ",
    emoji: "🌄",
    cities: ["Košice", "Prešov", "Poprad"],
  },
];

export function EventsSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-5 pb-20">
      {/* Nadpis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#FDA4C7] text-sm font-bold uppercase tracking-widest mb-3">
          Po celom Slovensku
        </p>
        <h2 className="text-[2.2rem] font-black text-[#6F2380] leading-[1.1] mb-4">
          Stretni sa s nami.
          <br />
          Aktivity vo tvojom kraji.
        </h2>
        <p className="text-[#6F2380]/65 text-base leading-relaxed mb-10">
          Workshopy, stretnutia a odborné akcie sa konajú pravidelne po celom Slovensku.
          Ako člen si rezervuješ miesto priamo z platformy — jedným kliknutím, zadarmo.
        </p>
      </motion.div>

      {/* Typy aktivít */}
      <div className="flex flex-col gap-4 mb-14">
        {ACTIVITIES.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
              style={{ backgroundColor: a.color + "20" }}
            >
              {a.emoji}
            </div>
            <div>
              <h3 className="font-black text-[#6F2380] mb-1">{a.title}</h3>
              <p className="text-[#6F2380]/60 text-sm leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kontaktný formulár */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65 }}
        className="rounded-[2rem] bg-[#6F2380] px-6 py-8"
      >
        <h3 className="text-[1.5rem] font-black text-white leading-snug mb-3">
          Daj nám vedieť, kde si.
        </h3>
        <p className="text-white/65 text-sm leading-relaxed mb-8">
          Nechaj nám svoj email a my ťa upozorníme, keď sa bude konať akcia
          vo tvojom okolí. Žiadny spam — len skutočné akcie v tvojom kraji.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <p className="text-4xl mb-3">🎉</p>
              <p className="text-white font-black text-xl mb-2">Ďakujeme!</p>
              <p className="text-white/65 text-sm">Dáme ti vedieť, keď bude niečo vo tvojom kraji.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col gap-4"
            >
              {/* Výber oblasti — mapa */}
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">
                  Kde sa nachádzaš?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {REGIONS.map((region) => {
                    const isSelected = selectedRegion === region.id;
                    return (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => setSelectedRegion(region.id)}
                        className="flex flex-col items-center py-4 px-2 rounded-2xl border-2 transition-all duration-200"
                        style={{
                          borderColor: isSelected ? "#FDA4C7" : "rgba(255,255,255,0.15)",
                          backgroundColor: isSelected ? "#FDA4C7" : "rgba(255,255,255,0.08)",
                        }}
                      >
                        <span className="text-xl mb-1">{region.emoji}</span>
                        <span
                          className="text-sm font-black"
                          style={{ color: isSelected ? "white" : "rgba(255,255,255,0.85)" }}
                        >
                          {region.name}
                        </span>
                        <div className="mt-2 flex flex-col items-center gap-0.5">
                          {region.cities.slice(0, 2).map((city) => (
                            <span
                              key={city}
                              className="text-[10px] leading-tight"
                              style={{ color: isSelected ? "white" : "rgba(255,255,255,0.45)" }}
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* Slovakia "map" dekorácia — linka ktorá vizuálne spája regióny */}
                <div className="flex items-center mt-2 px-1">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-white/20 text-[10px] px-2">Slovensko</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              </div>

              {/* Meno */}
              <div>
                <label className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-2">
                  Meno
                </label>
                <input
                  type="text"
                  placeholder="Tvoje meno"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/35 px-4 py-3.5 text-sm outline-none focus:border-[#FDA4C7] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tvoj@email.sk"
                  required
                  className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/35 px-4 py-3.5 text-sm outline-none focus:border-[#FDA4C7] transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#FDA4C7] text-white font-black text-base py-4 mt-2 active:scale-[0.98] transition-transform"
              >
                Chcem byť informovaný o akciách
              </button>

              <p className="text-white/30 text-[11px] text-center leading-relaxed">
                Žiadny spam. Odhlásenie kedykoľvek jedným klikom.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
