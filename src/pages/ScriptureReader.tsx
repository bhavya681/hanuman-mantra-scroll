import { useParams, useNavigate } from "react-router-dom";
import { scripturesData } from "@/data/scripturesData";
import { VerseCard } from "@/components/VerseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useState } from "react";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";

const ScriptureReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentVerse, setCurrentVerse] = useState(0);

  const scripture = scripturesData.find((s) => s.id === id);

  if (!scripture) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-vedic text-3xl text-foreground mb-4">Scripture Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Return to Library
          </Button>
        </div>
      </div>
    );
  }

  if (scripture.verses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="font-vedic text-2xl text-foreground mb-4">{scripture.title}</h1>
          <p className="font-sanskrit text-xl text-primary mb-4">{scripture.titleSanskrit}</p>
          <p className="font-ancient text-muted-foreground mb-6">
            This scripture is being prepared. Please check back soon.
          </p>
          <Button onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Return to Library
          </Button>
        </div>
      </div>
    );
  }

  const nextVerse = () => {
    if (currentVerse < scripture.verses.length - 1) {
      setCurrentVerse(currentVerse + 1);
    }
  };

  const prevVerse = () => {
    if (currentVerse > 0) {
      setCurrentVerse(currentVerse - 1);
    }
  };

  const verse = scripture.verses[currentVerse];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Parchment Background */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${parchmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Sacred Overlay Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${lotusMandala})`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b-2 border-accent/20 bg-card/40 backdrop-blur-md shadow-lg sticky top-0 z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="hover:bg-accent/20"
              >
                <Home className="w-4 h-4 mr-2" />
                Library
              </Button>
              
              <div className="text-center">
                <h1 className="font-vedic text-xl md:text-2xl font-bold text-foreground">
                  {scripture.title}
                </h1>
                <p className="font-sanskrit text-sm md:text-base text-primary">
                  {scripture.titleSanskrit}
                </p>
              </div>

              <div className="w-24" /> {/* Spacer for alignment */}
            </div>
          </div>
        </header>

        {/* Scripture Content */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Verse Card */}
            <div className="animate-page-turn">
              <VerseCard
                number={verse.number}
                sanskrit={verse.sanskrit}
                transliteration={verse.transliteration}
                meaning={verse.meaning}
                imageUrl={verse.imageUrl}
              />
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <Button
                onClick={prevVerse}
                disabled={currentVerse === 0}
                className="bg-gradient-divine hover:opacity-90 disabled:opacity-40"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </Button>

              <div className="text-center">
                <p className="font-vedic text-sm text-muted-foreground mb-2">
                  Verse {currentVerse + 1} of {scripture.verses.length}
                </p>
                
                {/* Dot Indicator */}
                <div className="flex gap-1.5 justify-center">
                  {scripture.verses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVerse(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentVerse
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to verse ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <Button
                onClick={nextVerse}
                disabled={currentVerse === scripture.verses.length - 1}
                className="bg-gradient-divine hover:opacity-90 disabled:opacity-40"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScriptureReader;
