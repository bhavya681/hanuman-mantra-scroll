import { Book, Scroll, Flame, Bird } from "lucide-react";

interface Scripture {
  id: string;
  title: string;
  titleSanskrit: string;
  icon: React.ElementType;
  active: boolean;
}

const scriptures: Scripture[] = [
  {
    id: "hanuman-chalisa",
    title: "Hanuman Chalisa",
    titleSanskrit: "हनुमान चालीसा",
    icon: Flame,
    active: true,
  },
  {
    id: "kalbhairav-ashtakam",
    title: "Kal Bhairav Ashtakam",
    titleSanskrit: "कालभैरवाष्टकम्",
    icon: Scroll,
    active: false,
  },
  {
    id: "garud-puran",
    title: "Garud Puran",
    titleSanskrit: "गरुड़ पुराण",
    icon: Bird,
    active: false,
  },
  {
    id: "more",
    title: "More Scriptures",
    titleSanskrit: "अन्य ग्रन्थ",
    icon: Book,
    active: false,
  },
];

export const ScriptureNavigation = () => {
  return (
    <nav className="w-full border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-6 overflow-x-auto">
          {scriptures.map((scripture) => {
            const Icon = scripture.icon;
            return (
              <button
                key={scripture.id}
                className={`
                  group flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg
                  transition-all duration-300 min-w-fit
                  ${
                    scripture.active
                      ? "bg-gradient-divine text-primary-foreground shadow-lg"
                      : "hover:bg-muted/50 text-foreground"
                  }
                `}
              >
                <Icon
                  className={`w-5 h-5 ${
                    scripture.active ? "animate-divine-pulse" : "group-hover:scale-110 transition-transform"
                  }`}
                />
                <div className="text-center">
                  <div className="font-vedic text-xs font-semibold">
                    {scripture.title}
                  </div>
                  <div className="font-sanskrit text-[10px] opacity-80">
                    {scripture.titleSanskrit}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
