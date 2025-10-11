import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VerseCard } from "./VerseCard";
import { Button } from "./ui/button";
import hanumanHeroImg from "@/assets/hanuman-hero.jpg";
import hanumanRamaImg from "@/assets/hanuman-rama.jpg";
// import your verses from a proper module or define here
import { scripturesData } from "@/data/scripturesData";

type Verse = {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
};

const verses: Verse[] =
  (scripturesData.find &&
    (scripturesData.find((sc: any) => sc.id === "hanuman-chalisa")?.verses as Verse[])) ||
  []; // Make sure this resolves to your Hanuman Chalisa verses

export const HanumanChalisa = () => {
  const [currentVerse, setCurrentVerse] = useState<number>(0);

  const nextVerse = () => setCurrentVerse((prev) => (prev + 1) % verses.length);
  const prevVerse = () => setCurrentVerse((prev) => (prev - 1 + verses.length) % verses.length);

  if (!verses.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="font-vedic text-xl text-gray-700 dark:text-gray-200">Loading verses...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#faf6e5] via-[#fefbf2] to-[#fffdf8] dark:from-[#1b1b1b] dark:to-[#000]">
      {/* Main Container */}
      <div className="max-w-full mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-12 animate-verse-reveal px-2">
            <div className="inline-block px-4 py-3 sm:px-8 sm:py-6 bg-gradient-divine rounded-2xl shadow-2xl mb-3 w-full max-w-lg">
              <h1 className="font-vedic text-2xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
                Hanuman Chalisa
              </h1>
              <p className="font-sanskrit text-lg sm:text-2xl md:text-3xl text-primary-foreground/90 mt-1 overflow-x-auto">
                हनुमान चालीसा
              </p>
            </div>
            <p className="font-ancient text-xs sm:text-base md:text-lg text-muted-foreground italic max-w-sm sm:max-w-2xl mx-auto mt-3 sm:mt-4">
              Forty verses in praise of Lord Hanuman, composed by Goswami Tulsidas
            </p>
          </div>

          {/* Verse Display */}
          <div className="mb-4 sm:mb-8 animate-page-turn " key={currentVerse}>
            <VerseCard {...verses[currentVerse]} />
          </div>
{/* 
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 flex-wrap sm:flex-nowrap w-full mb-2">
            <Button
              onClick={prevVerse}
              variant="secondary"
              size="lg"
              className="group shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial min-w-[80px]"
              aria-label="Previous Verse"
              disabled={verses.length <= 1}
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-vedic hidden xs:inline">Previous</span>
            </Button>

            <div className="flex-shrink-0 px-4 py-2 bg-card border-2 border-accent/30 rounded-lg text-center min-w-[60px] select-none">
              <span className="font-vedic text-xs sm:text-base text-muted-foreground font-semibold">
                {currentVerse + 1} <span className="opacity-60">/</span> {verses.length}
              </span>
            </div>

            <Button
              onClick={nextVerse}
              variant="secondary"
              size="lg"
              className="group shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial min-w-[80px]"
              aria-label="Next Verse"
              disabled={verses.length <= 1}
            >
              <span className="font-vedic hidden xs:inline">Next</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mt-6 sm:mt-8 px-1">
            {verses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVerse(index)}
                className={`transition-all duration-300 rounded-full outline-none focus:ring-2 focus:ring-accent ${
                  index === currentVerse
                    ? "bg-primary w-5 sm:w-7 h-2.5 shadow-md"
                    : "bg-muted hover:bg-accent/60 w-2.5 h-2.5"
                }`}
                aria-label={`Go to verse ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
