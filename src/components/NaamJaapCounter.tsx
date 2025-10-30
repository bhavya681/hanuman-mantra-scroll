"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Repeat2, X } from "lucide-react";
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

const PRESET_MANTRAS = [
  "राम राम",
  "ॐ नमः शिवाय",
  "जय हनुमान",
  "हरे कृष्ण",
  "Shri Ram",
  "Jai Hanuman",
  "Om Namah Shivaya",
  "Hare Krishna",
];

const STORAGE_KEYS = {
  mantra: "naamjaap:mantra",
  count: "naamjaap:count",
};

const MALA_BEAD_COUNT = 108;

// Improved: Mala size responsive based on breakpoints and container width, not just window.innerWidth.
function useResponsiveMalaSize() {
  const [size, setSize] = useState(220);

  useEffect(() => {
    function update() {
      if (typeof window === "undefined") return;
      // use the smaller of window width and 500px for maximum
      const w = window.innerWidth;
      if (w < 340) setSize(Math.max(110, w - 30));
      else if (w < 390) setSize(Math.max(145, w - 22));
      else if (w < 480) setSize(Math.max(175, w - 18));
      else if (w < 680) setSize(210);
      else if (w < 900) setSize(240);
      else setSize(270);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export default function NaamJaapCounter({ onCloseModal }: { onCloseModal?: () => void }) {
  const [selectedMantra, setSelectedMantra] = useState(PRESET_MANTRAS[0]);
  const [customMantra, setCustomMantra] = useState("");
  const [count, setCount] = useState(1);
  const [justCompleted, setJustCompleted] = useState(false);
  const jaapBtnRef = useRef<HTMLButtonElement | null>(null);

  const malaSize = useResponsiveMalaSize();
  const BEAD_RADIUS = malaSize / 2 - 22;

  const selectedMantraToUse = useMemo(() => {
    const m = customMantra.trim();
    return m.length > 0 ? m : selectedMantra;
  }, [customMantra, selectedMantra]);

  useEffect(() => {
    const savedMantra = localStorage.getItem(STORAGE_KEYS.mantra);
    if (savedMantra) {
      if (!PRESET_MANTRAS.includes(savedMantra)) setCustomMantra(savedMantra);
      else setSelectedMantra(savedMantra);
    }
    setCount(1);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.mantra, selectedMantraToUse);
  }, [selectedMantraToUse]);

  const progressWithinCycle = ((count - 1) % MALA_BEAD_COUNT) + 1;

  // --- Cross-popup fix for 425x642 only -- No longer needed for two cross, but keep for correct styling ---
  const [showSpecialCross, setShowSpecialCross] = useState(false);
  useEffect(() => {
    function updateCrossVis() {
      if (typeof window === "undefined") return;
      // Allow some margin for browser chrome
      const wi = window.innerWidth;
      const hi = window.innerHeight;
      // Tolerate a few px variance
      if (Math.abs(wi - 425) <= 2 && Math.abs(hi - 642) <= 2) {
        setShowSpecialCross(true);
      } else {
        setShowSpecialCross(false);
      }
    }
    updateCrossVis();
    window.addEventListener("resize", updateCrossVis);
    return () => window.removeEventListener("resize", updateCrossVis);
  }, []);
  // --- End addition ---

  function handleJaap() {
    setCount((prev) => {
      const newCount = prev + 1;
      if (window.navigator?.vibrate) window.navigator.vibrate(25);
      if ((newCount - 1) % MALA_BEAD_COUNT === 0) {
        setJustCompleted(true);
        setTimeout(() => setJustCompleted(false), 2500);
      }
      return newCount;
    });
  }

  function handleReset() {
    setCount(1);
  }

  function MalaSVG({ activeBead, size }: { activeBead: number; size: number }) {
    const cx = size / 2,
      cy = size / 2;
    const BEAD_RADIUS_LOCAL = size / 2 - 22;
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10 pointer-events-none select-none max-w-full h-auto"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={BEAD_RADIUS_LOCAL + 14}
          fill="none"
          stroke="url(#auraGradient)"
          strokeWidth={size / 13}
          filter="url(#auraGlow)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={BEAD_RADIUS_LOCAL - 8}
          fill="none"
          stroke="#ab8968aa"
          strokeWidth={size / 110 < 3 ? 2 : 2.5}
          strokeDasharray="4 3"
        />
        {[...Array(MALA_BEAD_COUNT)].map((_, idx) => {
          const angle = (2 * Math.PI * idx) / MALA_BEAD_COUNT - Math.PI / 2;
          const r = BEAD_RADIUS_LOCAL;
          const beadCx = cx + r * Math.cos(angle);
          const beadCy = cy + r * Math.sin(angle);
          const highlight = idx === activeBead - 1;
          const isGuru = idx === 0;
          return (
            <circle
              key={idx}
              cx={beadCx}
              cy={beadCy}
              r={isGuru ? size / 26.7 : size / 38}
              fill={
                highlight
                  ? "url(#beadActive)"
                  : isGuru
                  ? "url(#guruBead)"
                  : "url(#beadBrown)"
              }
              stroke={isGuru ? "#f4c96a" : "#6b4000bb"}
              strokeWidth={highlight ? size / 90 : isGuru ? size / 72 : size / 120}
              filter={
                highlight
                  ? "url(#activeGlow)"
                  : isGuru
                  ? "url(#guruGlow)"
                  : "none"
              }
              style={{ transition: "fill 100ms" }}
              opacity={highlight || isGuru ? 1 : 0.97}
            />
          );
        })}
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
          <filter id="auraGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={size / 20} result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="activeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={size / 45} result="colored" />
            <feMerge>
              <feMergeNode in="colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="guruGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={size / 32} result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse
          cx={cx}
          cy={cy - BEAD_RADIUS_LOCAL - size / 10.9}
          rx={size / 30}
          ry={size / 63}
          fill="#ffd281"
          opacity="0.5"
        />
      </svg>
    );
  }

  function VedicAura() {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.9 }}
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
          `,
        }}
      />
    );
  }

  function JaapBeadButton({ onClick, children }: any) {
    return (
      <motion.button
        ref={jaapBtnRef}
        onClick={onClick}
        whileTap={{ scale: 0.93, rotate: -6 }}
        whileHover={{ scale: 1.01 }}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400/70
          px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full shadow-2xl border border-yellow-900/20
          bg-gradient-to-b from-yellow-50 via-yellow-300/80 to-amber-400
          font-dhyana font-semibold text-base sm:text-lg md:text-xl text-yellow-900 tracking-wider
          hover:from-amber-200 hover:to-yellow-400 transition-all ring-yellow-200/40 ring-1"
        style={{
          fontFamily: "Dhyana, Noto Sans Devanagari, serif",
        }}
      >
        {children}
      </motion.button>
    );
  }

  const devnagariFont = {
    fontFamily: `'Noto Sans Devanagari', 'Dhyana', 'Poppins', serif`,
  };

  return (
    <Card
      className="naamjaap-counter-card relative overflow-hidden border border-yellow-900/40 bg-gradient-to-b from-[#ede3c7] via-[#f9efd7_50%] to-[#efc87d] shadow-xl 
      backdrop-blur-[1px] w-full max-w-md mx-auto
      px-1 sm:px-2"
      style={{
        maxWidth: "99vw",
        minHeight: "min(510px,92vh)",
        borderRadius: 18,
        position: 'relative',
      }}
    >
      <VedicAura />
      {/* Only ONE cross/close at top-right, INSIDE the Card container */}
      {typeof onCloseModal === "function" && (
        <button
          onClick={onCloseModal}
          aria-label="Close"
          className="absolute z-[99] top-2 right-2 sm:top-4 sm:right-4 bg-white/80 hover:bg-white/90 border border-yellow-300 rounded-full p-1 flex items-center justify-center shadow-lg transition-all"
          style={{
            backdropFilter: "blur(3px)",
            lineHeight: 0,
            boxShadow: "0 3px 16px #e5dc97a3",
          }}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-900" />
        </button>
      )}

      <CardContent className="relative z-10 p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-full">
        <div className="flex flex-col gap-1.5 sm:gap-2 items-center text-center w-full">
          <span
            className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-amber-900"
            style={{ letterSpacing: "1.5px" }}
          >
            नाम जप माला
          </span>
          <div
            className="text-xs sm:text-sm text-yellow-800"
            style={devnagariFont}
          >
            Experience virtual chanting with divine energy.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm items-center">
          <Select
            value={selectedMantra}
            onValueChange={(v) => {
              setSelectedMantra(v);
              setCustomMantra("");
            }}
          >
            <SelectTrigger
              className="min-w-0 w-full sm:w-auto border-2 border-yellow-900/20 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 text-yellow-900 font-medium shadow-sm text-base"
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
            placeholder="अपना मंत्र लिखें"
            className="w-full border-yellow-700/20 bg-yellow-50 text-yellow-900 placeholder:text-yellow-600/60 text-base"
            style={{ ...devnagariFont, fontSize: 16 }}
          />
        </div>

        <div
          className="relative flex items-center justify-center w-full"
          style={{
            minHeight: Math.min(malaSize, 270),
            maxWidth: malaSize,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            className="w-full"
            style={{
              maxWidth: malaSize,
              maxHeight: malaSize,
              margin: "0 auto",
              width: "100%",
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MalaSVG activeBead={progressWithinCycle} size={malaSize} />
          </div>
          <motion.div
            key={count}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center select-none"
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              minWidth: 48,
            }}
          >
            <div
              className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-amber-900 drop-shadow-[0_0_7px_#ffef92a7]"
              style={devnagariFont}
            >
              {count}
            </div>
            <div
              className="text-[13px] xs:text-sm sm:text-base text-yellow-700/70 font-semibold"
              style={devnagariFont}
            >
              {progressWithinCycle}/१०८
            </div>
          </motion.div>
        </div>

        <div className="text-center max-w-[97vw] sm:max-w-[350px] mx-auto break-words">
          <div
            className="text-base sm:text-lg md:text-xl text-yellow-900 font-semibold border-b border-dashed border-yellow-700/40 pb-0.5"
            style={devnagariFont}
          >
            {selectedMantraToUse}
          </div>
          <div className="text-xs text-yellow-800/70 pt-1">
            Repeat with devotion on each bead
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 pt-2.5 w-full">
          <JaapBeadButton onClick={handleJaap}>जप !</JaapBeadButton>
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-2 border-yellow-400/80 text-yellow-900 font-bold bg-gradient-to-r from-yellow-200 to-amber-200 hover:bg-amber-400/30 flex items-center px-4 py-2 rounded-full text-sm sm:text-base"
          >
            <Repeat2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Reset
          </Button>
        </div>

        <AnimatePresence>
          {justCompleted && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-200/80 via-yellow-100 to-amber-200/80 backdrop-blur-md z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                minHeight: malaSize,
                minWidth: malaSize,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Only one modal close button INSIDE modal div */}
              <button
                aria-label="Close"
                className="absolute right-2 top-2 sm:right-4 sm:top-4 z-[1002] bg-white/90 hover:bg-white border border-yellow-300 rounded-full p-1 flex items-center justify-center shadow"
                style={{
                  display: "block",
                  backdropFilter: "blur(3px)",
                  lineHeight: 0,
                }}
                onClick={onCloseModal}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-900" />
              </button>
              <motion.div
                className="px-4 py-3 sm:px-5 sm:py-4 bg-gradient-to-tr from-yellow-100 to-amber-100 border border-yellow-700/30 rounded-2xl shadow-lg text-amber-800 text-center max-w-[94vw]"
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="text-base sm:text-lg md:text-xl font-bold mb-1">
                  🌸 जप पूर्ण हुआ! 🌸
                </div>
                <div
                  className="text-xs xs:text-sm sm:text-base text-yellow-700/90"
                  style={devnagariFont}
                >
                  May your <b>devotion</b> deepen with each mala.
                  <br />
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
