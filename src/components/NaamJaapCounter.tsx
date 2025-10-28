"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Repeat2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Vedic-inspired presets, including Devanagari script
const PRESET_MANTRAS = [
  "राम राम",
  "ॐ नमः शिवाय",
  "जय हनुमान",
  "हरे कृष्ण",
  "Shri Ram",
  "Jai Hanuman",
  "Om Namah Shivaya",
  "Hare Krishna"
];

const STORAGE_KEYS = {
  mantra: "naamjaap:mantra",
  count: "naamjaap:count",
};

// For smooth bead mala simulation
const MALA_BEAD_COUNT = 108;
const BEAD_RADIUS = 98; // px, for svg rendering

export function NaamJaapCounter() {
  const [selectedMantra, setSelectedMantra] = useState<string>(PRESET_MANTRAS[0]);
  const [customMantra, setCustomMantra] = useState<string>("");
  // Counter always starts at 1 on refresh
  const [count, setCount] = useState<number>(1);
  const [justCompleted, setJustCompleted] = useState<boolean>(false);
  const jaapBtnRef = useRef<HTMLButtonElement | null>(null);

  // Determine which mantra to use
  const selectedMantraToUse = useMemo(() => {
    const m = customMantra.trim();
    return m.length > 0 ? m : selectedMantra;
  }, [customMantra, selectedMantra]);

  // Only restore mantra from localStorage, but count *always* starts at 1 after refresh!
  useEffect(() => {
    const savedMantra = localStorage.getItem(STORAGE_KEYS.mantra);
    if (savedMantra) {
      if (!PRESET_MANTRAS.includes(savedMantra)) {
        setCustomMantra(savedMantra);
      } else {
        setSelectedMantra(savedMantra);
      }
    }
    // Always reset count to 1 on refresh
    setCount(1);
  }, []);

  // Persist mantra to localStorage. Do NOT persist count anymore.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.mantra, selectedMantraToUse);
    // localStorage.removeItem(STORAGE_KEYS.count); // optional: clean up
  }, [selectedMantraToUse]);

  // Calculate progress within a cycle, starting from 1
  // So for 1 => 1, 2 => 2 ... 108 => 108, 109 => 1, etc.
  const progressWithinCycle =
    ((count - 1) % MALA_BEAD_COUNT) + 1;

  // Handle Jaap with mala bead animation
  function handleJaap() {
    setCount((prev) => {
      const newCount = prev + 1;
      // Feedback and vibration for "turning bead"
      if (window.navigator?.vibrate) window.navigator.vibrate(25);
      // Show complete after finishing each mala, i.e., divisible by 108
      if ((newCount - 1) % MALA_BEAD_COUNT === 0) {
        setJustCompleted(true);
        setTimeout(() => setJustCompleted(false), 2500);
      }
      return newCount;
    });
  }

  // Reset the jaap count, start from 1
  function handleReset() {
    setCount(1);
  }

  // Bead visualization for mala (108 beads)
  function MalaSVG({ activeBead }: { activeBead: number }) {
    // bead positions in a circle
    const cx = 120, cy = 120;
    return (
      <svg width="240" height="240" viewBox="0 0 240 240" className="relative z-10 pointer-events-none select-none">
        {/* Outer aura */}
        <circle
          cx={cx} cy={cy} r={BEAD_RADIUS + 14}
          fill="none"
          stroke="url(#auraGradient)"
          strokeWidth="19"
          filter="url(#auraGlow)"
        />
        {/* Mala string */}
        <circle
          cx={cx} cy={cy} r={BEAD_RADIUS - 8}
          fill="none"
          stroke="#ab8968aa"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        {/* Beads */}
        {[...Array(MALA_BEAD_COUNT)].map((_, idx) => {
          const angle = (2 * Math.PI * idx) / MALA_BEAD_COUNT - Math.PI / 2;
          const r = BEAD_RADIUS;
          const beadCx = cx + r * Math.cos(angle);
          const beadCy = cy + r * Math.sin(angle);
          // highlight is true if this bead is the "current" one (progressWithinCycle - 1)
          const highlight = idx === (activeBead - 1);
          // Make Guru bead at the top slightly larger and different color
          const isGuru = idx === 0;
          return (
            <circle
              key={idx}
              cx={beadCx}
              cy={beadCy}
              r={isGuru ? 9 : 6.3}
              fill={highlight
                ? "url(#beadActive)"
                : isGuru
                  ? "url(#guruBead)"
                  : "url(#beadBrown)"}
              stroke={isGuru ? "#f4c96a" : "#6b4000bb"}
              strokeWidth={highlight ? 2.3 : isGuru ? 3 : 1.2}
              filter={highlight ? "url(#activeGlow)" : isGuru ? "url(#guruGlow)" : "none"}
              style={{ transition: "fill 100ms" }}
              opacity={highlight || isGuru ? 1.0 : 0.97}
            />
          );
        })}
        {/* Gradients */}
        <defs>
          <radialGradient id="beadActive" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="#fff8be" />
            <stop offset="45%" stopColor="#e2ae5e" />
            <stop offset="100%" stopColor="#b99c45" />
          </radialGradient>
          <radialGradient id="guruBead" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ffe7b5" />
            <stop offset="100%" stopColor="#ffb400" />
          </radialGradient>
          <radialGradient id="beadBrown" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#efdec9" />
            <stop offset="60%" stopColor="#af8350" />
            <stop offset="100%" stopColor="#7b522a" />
          </radialGradient>
          <radialGradient id="auraGradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#ffe98b" stopOpacity="0.34" />
            <stop offset="70%" stopColor="#be7922" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#985e11" stopOpacity="0" />
          </radialGradient>
          {/* Glows */}
          <filter id="auraGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="activeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="colored" />
            <feOffset dx="0" dy="0" />
            <feMerge>
              <feMergeNode in="colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="guruGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Optional: add subtle mala knot */}
        <ellipse cx={cx} cy={cy - BEAD_RADIUS - 22} rx={8} ry={3.5} fill="#ffd281" opacity="0.50" />
      </svg>
    );
  }

  // Vedic background pattern
  function VedicAura() {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.90 }}
        animate={{
          opacity: [0.93, 0.99, 0.93],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `
            repeating-radial-gradient(circle at 60% 15%, #dfa84018 0 48%, transparent 52% 100%),
            repeating-radial-gradient(circle at 40% 80%, #c494340b 0 55%, transparent 56%),
            radial-gradient(circle at 50% 60%, #cfc58c18 0, transparent 78%),
            linear-gradient(135deg, #7d582b1e 0%, #efd18905 80%)
          `
        }}
      />
    );
  }

  // Chant button (mimicking bead turn & mala feel)
  function JaapBeadButton({ onClick, children, refToFocus }: any) {
    return (
      <motion.button
        ref={refToFocus}
        onClick={onClick}
        whileTap={{ scale: 0.93, rotate: -6 }}
        whileHover={{ scale: 1.01 }}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400/70
          px-12 py-4 rounded-full shadow-2xl border border-yellow-900/20
          bg-gradient-to-b from-yellow-50 via-yellow-300/80 to-amber-400
          font-dhyana font-semibold text-lg text-yellow-900 tracking-wider
          drop-shadow-sm
          hover:from-amber-200 hover:to-yellow-400 hover:shadow-inner transition-all
          ring-yellow-200/40 ring-1"
        style={{
          letterSpacing: "1.5px",
          fontWeight: 700,
          fontFamily: "Dhyana, Noto Sans Devanagari, serif",
        }}
      >
        <span className="drop-shadow-[0_0_7px_#fbbf24aa]">{children}</span>
      </motion.button>
    )
  }

  // Devnagari/Sanskrit font load
  // (Tailwind config or global.css ideally, but for demo:)
  const devnagariFont = {
    fontFamily: `'Noto Sans Devanagari', 'Dhyana', 'Gurajada', 'Poppins', serif, sans-serif`
  };

  return (
    <Card className="relative overflow-hidden border border-yellow-900/40 bg-gradient-to-b from-[#ede3c7] via-[#f9efd7_50%] to-[#efc87d] shadow-xl backdrop-blur-[1px]">
      {/* Vedic spiritual aura */}
      <VedicAura />

      <CardContent className="relative z-10 
          p-6 md:p-10
          flex flex-col items-center justify-center space-y-7
        ">
        {/* Stylized Vedic Header */}
        <div className="flex flex-col gap-2 items-center py-1">
          <div className="flex items-center gap-2">
            {/* Removed <img src="/mala.svg" .../> as requested */}
            <span
              className="text-2xl md:text-3xl font-vollkorn font-extrabold text-amber-900 drop-shadow-[0_2px_12px_rgba(203,135,13,0.18)]"
              style={{ letterSpacing: "1.5px" }}
            >
              नाम जप माला
            </span>
          </div>
          <div className="text-xs md:text-sm text-yellow-800 font-sanskrit"
            style={{ fontFamily: `Dhyana, Noto Sans Devanagari, Gurajada, sans-serif` }}
          >
            Virtually experience sacred mantra chanting on a Vedic mālā.
          </div>
        </div>

        {/* Mantra selection (with vedic feel) */}
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-md items-center">
          <Select
            value={selectedMantra}
            onValueChange={(v) => {
              setSelectedMantra(v);
              setCustomMantra("");
            }}
          >
            <SelectTrigger
              className="border-[2px] border-yellow-900/20 bg-gradient-to-b from-amber-50 via-amber-100/70 to-amber-200 text-yellow-900
              font-vollkorn
              shadow
              min-w-[122px]"
              style={devnagariFont}
            >
              <SelectValue placeholder="Choose mantra" />
            </SelectTrigger>
            <SelectContent>
              {PRESET_MANTRAS.map((m) => (
                <SelectItem key={m} value={m} style={devnagariFont}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            value={customMantra}
            onChange={(e) => setCustomMantra(e.target.value)}
            placeholder="या मंत्र लिखें (e.g., 'राम', 'ॐ नमः शिवाय')"
            className="border-yellow-700/20 bg-yellow-50/40 text-yellow-900 placeholder:text-yellow-600/60 font-vollkorn"
            style={{ ...devnagariFont, fontSize: 19 }}
          />
        </div>

        {/* The Jaap Mala */}
        <div className="relative w-[260px] h-[260px] flex items-center justify-center">
          <MalaSVG activeBead={progressWithinCycle} />
          {/* bead count in the middle */}
          <motion.div
            key={count}
            className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none"
            initial={{ scale: 0.90, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.26 }}
          >
            <div
              className="text-[2.55rem] md:text-5xl font-extrabold text-amber-900 font-dhyana drop-shadow-[0_0_7px_#ffef92a7]"
              style={devnagariFont}
            >
              {count}
            </div>
            <div
              className="text-base text-yellow-700/70 font-semibold tracking-wider"
              style={devnagariFont}
            >
              {progressWithinCycle}/१०८
            </div>
          </motion.div>
        </div>

        {/* Current Mantra, shloka style */}
        <div className="text-center max-w-[370px] mx-auto">
          <div
            className="text-lg md:text-xl text-yellow-900 font-dhyana tracking-wide py-1"
            style={{ ...devnagariFont, borderBottom: "1.2px dashed #b99554", marginBottom: 3 }}
          >
            <span className="text-amber-900 font-semibold text-xl" style={devnagariFont}>
              {selectedMantraToUse}
            </span>
          </div>
          <div className="text-[11.4px] text-yellow-800/70 px-2">Repeat after every bead</div>
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-4 pt-3">
          {/* Main Jaap bead (chant) button */}
          <JaapBeadButton onClick={handleJaap} refToFocus={jaapBtnRef}>
            जप !
          </JaapBeadButton>
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-2 border-yellow-400/80 text-yellow-900 font-bold bg-gradient-to-r from-yellow-200 to-amber-200 shadow hover:bg-amber-400/30 hover:text-yellow-800 hover:border-yellow-300 flex items-center px-5 py-2 rounded-full"
            style={{
              letterSpacing: "0.7px",
              fontFamily: "Vollkorn, Dhyana, Noto Sans Devanagari, serif",
              textShadow: "0 1px 8px #fbbf24AA",
              fontSize: 15
            }}
          >
            <Repeat2 className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>

        {/* Completion overlay */}
        <AnimatePresence>
          {justCompleted && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-200/70 via-yellow-100/90 to-amber-200/80 backdrop-blur-[7.5px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="px-7 py-6 bg-gradient-to-tr from-yellow-100/90 to-amber-100/80 border border-yellow-700/30 rounded-3xl shadow-xl text-amber-800 text-center relative"
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                {/* Removed <img src="/lotus-vidya.svg" .../> as image is not available */}
                <div className="text-[1.7rem] font-vollkorn font-bold mb-1 tracking-wider">🌸 जप पूर्ण हुआ! 🌸</div>
                <div className="text-base md:text-[1.12rem] mt-1 text-yellow-700/90 px-2 font-dhyana" style={devnagariFont}>
                  May your <span className="font-semibold text-yellow-900">devotion</span> deepen with each mala.<br />
                  शांति: शांति: शांति:
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export default NaamJaapCounter;
