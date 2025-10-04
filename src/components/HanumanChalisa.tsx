import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VerseCard } from "./VerseCard";
import { Button } from "./ui/button";
import hanumanHeroImg from "@/assets/hanuman-hero.jpg";
import hanumanRamaImg from "@/assets/hanuman-rama.jpg";

interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
}

const verses: Verse[] = [
  {
    number: 1,
    sanskrit: "श्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि। बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥",
    transliteration: "Shri Guru charan saroj raj, nij man mukur sudhari. Baranau Raghubar bimal jasu, jo dayak phal chari.",
    meaning: "With the dust of Guru's lotus feet, I cleanse the mirror of my mind and narrate the sacred glory of Sri Ram, which bestows the four fruits of life.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 2,
    sanskrit: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
    transliteration: "Buddhiheen tanu janike, sumirow pawan kumar. Bal buddhi vidya dehu mohi, harahu kalesh vikar.",
    meaning: "Knowing my body to be devoid of intelligence, I remember you, son of Pawan. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
    imageUrl: hanumanHeroImg,
  },
  {
    number: 3,
    sanskrit: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
    transliteration: "Jai Hanuman gyan gun sagar. Jai Kapis tihun lok ujagar.",
    meaning: "Victory to Hanuman, the ocean of knowledge and virtue. Victory to the monkey lord who illuminates the three worlds.",
  },
  {
    number: 4,
    sanskrit: "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
    transliteration: "Ram doot atulit bal dhama. Anjani-putra Pawansut nama.",
    meaning: "You are Ram's messenger and the abode of incomparable strength. You are known as Anjani's son and Pawansut (son of wind).",
  },
];

export const HanumanChalisa = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + verses.length) % verses.length);
  };

  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-verse-reveal">
            <div className="inline-block p-6 bg-gradient-divine rounded-2xl shadow-2xl mb-4">
              <h1 className="font-vedic text-4xl md:text-5xl font-bold text-primary-foreground">
                Hanuman Chalisa
              </h1>
              <p className="font-sanskrit text-2xl md:text-3xl text-primary-foreground/90 mt-2">
                हनुमान चालीसा
              </p>
            </div>
            <p className="font-ancient text-lg text-muted-foreground italic max-w-2xl mx-auto mt-4">
              Forty verses in praise of Lord Hanuman, composed by Goswami Tulsidas
            </p>
          </div>

          {/* Verse Display */}
          <div className="mb-8 animate-page-turn" key={currentVerse}>
            <VerseCard {...verses[currentVerse]} />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <Button
              onClick={prevVerse}
              variant="secondary"
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-vedic">Previous</span>
            </Button>

            <div className="px-6 py-3 bg-card border-2 border-accent/30 rounded-lg">
              <span className="font-vedic text-sm text-muted-foreground">
                {currentVerse + 1} / {verses.length}
              </span>
            </div>

            <Button
              onClick={nextVerse}
              variant="secondary"
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-vedic">Next</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Verse Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {verses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVerse(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${
                    index === currentVerse
                      ? "bg-primary w-8 shadow-lg"
                      : "bg-muted hover:bg-accent"
                  }
                `}
                aria-label={`Go to verse ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
