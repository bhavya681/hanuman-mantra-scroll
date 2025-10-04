import { Card } from "./ui/card";

interface VerseCardProps {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
}

export const VerseCard = ({ number, sanskrit, transliteration, meaning, imageUrl }: VerseCardProps) => {
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
                Verse {number}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Sanskrit Verse */}
        <div className="mb-8 text-center">
          <p className="font-sanskrit text-3xl md:text-4xl leading-relaxed text-foreground drop-shadow-lg">
            {sanskrit}
          </p>
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-xl overflow-hidden border-2 border-accent/40 shadow-xl max-w-md">
              <img
                src={imageUrl}
                alt={`Illustration for verse ${number}`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
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
          <h3 className="font-vedic text-sm uppercase tracking-wide text-accent mb-3">
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
