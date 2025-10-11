import { Card } from "./ui/card";
import parchmentBg from "@/assets/parchment-bg.jpg";
import { motion } from "framer-motion";
import manuscriptBg from "@/assets/parchment-bg.jpg";
interface VerseCardProps {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
}

export const VerseCard = ({
  number,
  sanskrit,
  transliteration,
  meaning,
  imageUrl,
}: VerseCardProps) => {
  return (
    <Card className="relative overflow-hidden border-2 border-accent/30 bg-card/95 backdrop-blur-sm shadow-2xl animate-verse-reveal max-w-full">
      {/* Sacred Glow */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-40 pointer-events-none animate-sacred-glow" />

      <div className="relative p-3 xs:p-3 sm:p-6 md:p-10">
        {/* Verse Header */}
        <div className="flex items-center justify-center mb-4 xs:mb-5 sm:mb-6">
          <div className="flex items-center gap-1 xs:gap-2 sm:gap-3">
            <div className="h-px w-6 xs:w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent" />
            <div className="px-2 xs:px-2.5 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gradient-divine rounded-full">
              <span className="font-vedic text-primary-foreground font-bold text-xs xs:text-sm sm:text-sm">
                {number === 0 ? "Doha" : `Verse ${number}`}
              </span>
            </div>
            <div className="h-px w-6 xs:w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Sanskrit Section */}
        <div className="mb-5 xs:mb-6 sm:mb-8 text-center flex justify-center">
          <div
            className="relative inline-block px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-6 rounded-2xl shadow-lg border-2 border-accent/30 w-full max-w-[99vw] xs:max-w-full"
            style={{
              backgroundImage: `url(${parchmentBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow:
                "0 4px 32px 0 rgba(234,179,8,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)",
              filter: "sepia(0.15) contrast(1.05)",
            }}
          >
            <p
              className="font-sanskrit text-lg xs:text-xl sm:text-3xl md:text-4xl leading-relaxed text-foreground drop-shadow-lg break-words"
              style={{
                textShadow:
                  "0 2px 8px #eab30855, 0 1px 0 #fff8, 0 0px 1px #0004",
                letterSpacing: "0.01em",
                wordBreak: "break-word",
              }}
            >
              {sanskrit}
            </p>
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-accent/20"
              style={{
                boxShadow:
                  "0 0 0 2px #eab30822 inset, 0 2px 12px #eab30811 inset",
              }}
            />
          </div>
        </div>
        {imageUrl && (
        <div className="mb-4 sm:mb-5 flex justify-center w-full  rounded-lg py-4" style={{
          backgroundImage: `url(${manuscriptBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

          <motion.div
      key={imageUrl}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        group relative
        rounded-xl overflow-hidden
        border-2 border-accent/60 shadow-xl
        w-full max-w-sm sm:max-w-md md:max-w-lg
        flex items-center justify-center
        bg-[#f8efd9]
        cursor-pointer
        aspect-[5/4]
      "
    >
      {/* ✨ Divine Aura Pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(255,230,150,0.35) 0%, transparent 75%)",
          filter: "blur(18px)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* 🌗 Subtle Black–Golden Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 35%, rgba(255,215,105,0.1) 100%)",
          mixBlendMode: "multiply",
          zIndex: 5,
        }}
      />

      {/* 🔶 Image */}
      <img
        src={imageUrl}
        alt={`Verse illustration ${number}`}
        className="
          w-full h-full object-cover rounded-xl
          transition-all duration-700
          group-hover:scale-[1.04]
          group-hover:saturate-125
          group-hover:brightness-[1.1]
          group-hover:drop-shadow-[0_8px_30px_#eab30899]
        "
        style={{
          filter:
            "sepia(0.15) contrast(1.05) brightness(0.97) drop-shadow(0 3px 18px #b9952433)",
          background: "#efe6cf",
        }}
      />
    </motion.div>
  </div>
)}

        {/* Transliteration */}
        <div className="mb-4 xs:mb-5 sm:mb-6 p-2 xs:p-3 sm:p-4 bg-muted/40 rounded-lg border border-border/50 max-w-full">
          <p className="font-ancient text-xs xs:text-sm sm:text-lg italic text-center text-muted-foreground leading-relaxed break-words">
            {transliteration}
          </p>
        </div>

        {/* Meaning */}
        <div className="p-3 xs:p-4 sm:p-6 bg-secondary/10 rounded-lg border-l-4 border-accent max-w-full">
          <h3 className="font-vedic text-xs sm:text-sm uppercase tracking-wide text-accent mb-2 xs:mb-2.5 sm:mb-3" style={{ color: "#a97c0b" }}>
            Meaning
          </h3>
          <p className="font-ancient text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-foreground break-words">
            {meaning}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="mt-5 xs:mt-6 sm:mt-8 flex justify-center">
          <div className="w-16 xs:w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>
      </div>
    </Card>
  );
};
