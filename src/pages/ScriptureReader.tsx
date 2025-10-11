import { useParams, useNavigate } from "react-router-dom";
import { scripturesData } from "@/data/scripturesData";
import { VerseCard } from "@/components/VerseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";

const ScriptureReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentVerse, setCurrentVerse] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const scripture = scripturesData.find((s) => s.id === id);

  // 🕉 Handle missing scripture
  if (!scripture) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="text-center w-full max-w-md bg-card/90 p-6 rounded-2xl shadow-lg">
          <h1 className="font-vedic text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Scripture Not Found
          </h1>
          <Button className="w-full mt-3" onClick={() => navigate("/")}>
            <Home className="w-5 h-5 mr-2" />
            Return to Library
          </Button>
        </div>
      </section>
    );
  }

  // 📖 Handle scripture in preparation
  if (scripture.verses.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="text-center w-full max-w-md bg-card/90 p-6 rounded-2xl shadow-lg">
          <h1 className="font-vedic text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {scripture.title}
          </h1>
          <p className="font-sanskrit text-lg sm:text-xl text-primary mb-2">
            {scripture.titleSanskrit}
          </p>
          <p className="font-ancient text-base text-muted-foreground mb-7">
            This scripture is being prepared.<br />Please check back soon.
          </p>
          <Button className="w-full" onClick={() => navigate("/")}>
            <Home className="w-5 h-5 mr-2" />
            Return to Library
          </Button>
        </div>
      </section>
    );
  }

  const goToNext = () => {
    if (currentVerse < scripture.verses.length - 1) setCurrentVerse((v) => v + 1);
  };
  const goToPrev = () => {
    if (currentVerse > 0) setCurrentVerse((v) => v - 1);
  };
  const handleDotClick = (index: number) => setCurrentVerse(index);

  // 📱 Swipe navigation for mobile users
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 60) goToNext();
      if (diff < -60) goToPrev();
    }
  };

  const verse = scripture.verses[currentVerse];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background font-sans">
      {/* 📜 Background */}
      <div
        className="fixed inset-0 z-0 opacity-30 sm:opacity-40"
        style={{
          backgroundImage: `url(${parchmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />
      {/* 🌸 Mandala Pattern Overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${lotusMandala})`,
            backgroundSize: "180px 180px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      {/* ✨ Subtle Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/75 to-background/95 pointer-events-none" />

      {/* 🕉 Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-card/70 backdrop-blur-md border-b border-accent/20 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="rounded-full hover:bg-accent/20 flex items-center gap-2 text-sm sm:text-base"
              aria-label="Back to Library"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Library</span>
              <span className="sm:hidden">Back</span>
            </Button>

            <div className="text-center flex-1 px-2 truncate">
              <h1 className="font-vedic text-lg sm:text-xl md:text-2xl font-semibold text-foreground truncate">
                {scripture.title}
              </h1>
              <p className="font-sanskrit text-sm sm:text-base text-primary truncate">
                {scripture.titleSanskrit}
              </p>
            </div>

            <div className="w-8 sm:w-16" />
          </div>
        </header>

        {/* Main Area */}
        <main
          className="flex-grow w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-6 sm:py-10 flex flex-col items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <section className="w-full max-w-3xl xl:max-w-4xl flex flex-col items-center">
            {/* Verse Card */}
            <div key={currentVerse} className="w-full animate-page-turn">
              <VerseCard {...verse} />
            </div>

            {/* Navigation */}
            <nav className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              {/* Prev Button */}
              <Button
                onClick={goToPrev}
                disabled={currentVerse === 0}
                size="lg"
                className="bg-gradient-divine hover:opacity-95 disabled:opacity-40 transition w-full sm:w-auto"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="hidden sm:inline">Previous</span>
              </Button>

              {/* Dots */}
              <div className="flex-1 flex flex-col items-center w-full sm:w-auto">
                <p className="font-vedic text-sm sm:text-base text-muted-foreground mb-2">
                  Verse <span className="font-semibold text-foreground">{currentVerse + 1}</span> /{" "}
                  {scripture.verses.length}
                </p>
                <div className="flex gap-1 justify-center flex-wrap max-w-[95%] sm:max-w-md overflow-hidden">
                  {scripture.verses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      className={`transition-all duration-200 rounded-full ${
                        i === currentVerse
                          ? "bg-primary w-6 sm:w-8 h-2.5"
                          : "bg-muted-foreground/40 hover:bg-accent/70 w-2.5 h-2.5"
                      }`}
                      aria-label={`Go to verse ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <Button
                onClick={goToNext}
                disabled={currentVerse === scripture.verses.length - 1}
                size="lg"
                className="bg-gradient-divine hover:opacity-95 disabled:opacity-40 transition w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </nav>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScriptureReader;
