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
        </div>
      </div>
    </div>
  );
};
