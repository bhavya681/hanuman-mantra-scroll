import { Card } from "./ui/card";
import parchmentBg from "@/assets/parchment-bg.jpg"; // Use a parchment/vedic bg for effect

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
    <Card className="relative overflow-hidden border-2 border-accent/30 bg-card/95 backdrop-blur-sm shadow-2xl animate-verse-reveal">
      {/* Sacred Glow Effect */}
      <div className="absolute inset-0 bg-gradient-sacred opacity-40 pointer-events-none animate-sacred-glow" />

      <div className="relative p-8 md:p-12">
        {/* Verse Number with Ornament */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <div className="px-4 py-2 bg-gradient-divine rounded-full">
              <span className="font-vedic text-primary-foreground font-bold text-sm">
                 {number===0 ? 'Doha' :   `Verse ${number}`}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Sanskrit Verse with Vedic Scripture Background */}
        <div
          className="mb-8 text-center flex justify-center"
          style={{
            position: "relative",
          }}
        >
          <div
            className="relative inline-block px-6 py-6 rounded-2xl shadow-lg border-2 border-accent/30"
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
            <p className="font-sanskrit text-3xl md:text-4xl leading-relaxed text-foreground drop-shadow-lg" style={{
              textShadow: "0 2px 8px #eab30855, 0 1px 0 #fff8, 0 0px 1px #0004",
              letterSpacing: "0.01em",
            }}>
              {sanskrit}
            </p>
            {/* Subtle ancient border effect */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-accent/20" style={{
              boxShadow: "0 0 0 2px #eab30822 inset, 0 2px 12px #eab30811 inset",
            }} />
          </div>
        </div>

        {/* Image Section with Ancient Vedic Focused Effect */}
        {imageUrl && (
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-4 border-accent/60 shadow-2xl max-w-md bg-[#f5ecd6]">
              {/* Ancient Vedic look: faded, yellowed, textured, with hand-drawn border */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: "radial-gradient(ellipse at 60% 40%, #fffbe6cc 60%, #e2c98a99 100%)",
                  mixBlendMode: "multiply",
                  opacity: 0.85,
                }}
              />
              <img
                src={imageUrl}
                alt={`Illustration for verse ${number}`}
                className="w-full h-auto object-cover"
                style={{
                  filter:
                    "sepia(0.45) contrast(0.92) brightness(0.93) grayscale(0.18) blur(0.2px) drop-shadow(0 4px 24px #eab30833)",
                  borderRadius: "1rem",
                  boxShadow:
                    "0 0 0 8px #eab30822 inset, 0 8px 32px #eab30822",
                  opacity: 0.96,
                }}
              />
              {/* Parchment texture overlay */}
              <div className="absolute inset-0 pointer-events-none z-20"
                style={{
                  backgroundImage: "url('/parchment-texture.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  mixBlendMode: "multiply",
                  opacity: 0.22,
                }}
              />
              {/* Subtle hand-drawn border effect */}
              <div className="absolute inset-0 pointer-events-none z-30"
                style={{
                  backgroundImage: "url('/ancient-border.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.32,
                  filter: "sepia(0.5) contrast(1.1)",
                }}
              />
              {/* Warm vignette for focus */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-40" style={{
                boxShadow: "0 0 64px 16px #eab30855 inset, 0 0 0 2px #a97c0b44 inset",
              }} />
              {/* Subtle cracks/age marks overlay */}
              <div className="absolute inset-0 pointer-events-none z-50"
                style={{
                  backgroundImage: "url('/ancient-cracks.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.10,
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>
        )}

        {/* Transliteration */}
        <div className="mb-6 p-4 bg-muted/40 rounded-lg border border-border/50">
          <p className="font-ancient text-lg md:text-xl italic text-center text-muted-foreground leading-relaxed">
            {transliteration}
          </p>
        </div>

        {/* Meaning */}
        <div className="p-6 bg-secondary/10 rounded-lg border-l-4 border-accent">
          <h3 className="font-vedic text-sm uppercase tracking-wide text-accent mb-3" style={{ color: "#a97c0b" }}>
            Meaning
          </h3>
          <p className="font-ancient text-base md:text-lg leading-relaxed text-foreground">
            {meaning}
          </p>
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>
      </div>
    </Card>
  );
};
