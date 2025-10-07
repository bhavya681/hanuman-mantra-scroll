import { useState, useMemo, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { scripturesData, categories } from "@/data/scripturesData";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";
import { ChevronLeft, ChevronRight, Search, Filter, BookOpen } from "lucide-react";

// --- Netflix-style Card Component (inline for custom hover logic) ---
interface ScriptureCardProps {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  coverImage: string;
  totalVerses: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: (e: MouseEvent) => void;
}
const ScriptureCard = ({
  id,
  title,
  titleSanskrit,
  description,
  coverImage,
  totalVerses,
  isActive,
  onHover,
  onLeave,
  onClick,
}: ScriptureCardProps) => {
  const navigate = useNavigate();

  // Default card for other scriptures
  return (
    <div
      className={`group relative flex flex-col bg-background/80 border border-accent/10 rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${
        isActive ? "z-30 scale-105 border-accent/40" : "z-10"
      }`}
      style={{
        minHeight: 320,
        boxShadow: isActive
          ? "0 8px 32px 0 rgba(234,179,8,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)"
          : "0 2px 8px 0 rgba(0,0,0,0.08)",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
      role="button"
      aria-label={`Open details for ${title}`}
    >
      {/* Cover Image */}
      <div className="relative h-44 sm:h-48 md:h-56 w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        {/* Overlay for hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-60"
          }`}
        />
        {/* Glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none transition-opacity duration-300 ${
            isActive ? "opacity-30" : "opacity-0"
          }`}
        />
      </div>
      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Title */}
        <div>
          <h3 className="font-vedic text-lg font-bold text-foreground truncate group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="font-sanskrit text-sm text-primary/80 truncate">
            {titleSanskrit}
          </p>
        </div>
        {/* Description - Only show on hover/active */}
        <div
          className={`mt-2 text-sm font-ancient text-muted-foreground leading-relaxed transition-all duration-300 ${
            isActive
              ? "max-h-32 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <p>{description}</p>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <span className="font-ancient text-xs text-muted-foreground">
            {totalVerses} Verses
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
        </div>
      </div>
    </div>
  );
};

const ScriptureLibrary = () => {
  // For horizontal scroll (Netflix style) per category
  const [scrollPositions, setScrollPositions] = useState<{ [key: string]: number }>({});
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");
  // Track which card is hovered (by id)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const navigate = useNavigate();

  // Helper to determine if scroll buttons are needed
  const isScrollButtonVisible = (category: string, direction: "left" | "right") => {
    const row = document.getElementById(`row-${category}`);
    if (!row) return false;
    if (direction === "left") {
      return row.scrollLeft > 10;
    } else {
      return row.scrollLeft + row.offsetWidth < row.scrollWidth - 10;
    }
  };

  const scrollRow = (category: string, direction: "left" | "right") => {
    const row = document.getElementById(`row-${category}`);
    if (row) {
      const scrollAmount = row.offsetWidth * 0.7;
      const newScroll =
        direction === "left"
          ? row.scrollLeft - scrollAmount
          : row.scrollLeft + scrollAmount;
      row.scrollTo({ left: newScroll, behavior: "smooth" });
      setScrollPositions((prev) => ({ ...prev, [category]: newScroll }));
    }
  };

  // Filtered and searched scriptures
  const filteredScriptures = useMemo(() => {
    let filtered = scripturesData;
    if (activeCategory !== "All") {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.titleSanskrit.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [search, activeCategory]);

  // Group by category for Netflix rows
  const groupedByCategory = useMemo(() => {
    const map: { [cat: string]: typeof scripturesData } = {};
    categories.forEach((cat) => {
      map[cat] = filteredScriptures.filter((s) => s.category === cat);
    });
    return map;
  }, [filteredScriptures]);

  // Track scroll for showing/hiding chevrons
  const [rowScrollStates, setRowScrollStates] = useState<{ [key: string]: { left: boolean; right: boolean } }>({});

  // Handler to update scroll state for chevrons
  const handleRowScroll = (category: string) => {
    const row = document.getElementById(`row-${category}`);
    if (!row) return;
    setRowScrollStates((prev) => ({
      ...prev,
      [category]: {
        left: row.scrollLeft > 10,
        right: row.scrollLeft + row.offsetWidth < row.scrollWidth - 10,
      },
    }));
  };

  // Attach scroll event listeners after render
  // (This is a simple approach for this context; for more robust, use refs and useEffect)
  setTimeout(() => {
    (activeCategory === "All" ? categories : [activeCategory]).forEach((category) => {
      const row = document.getElementById(`row-${category}`);
      // Instead of using a custom property, use a WeakSet to track attached listeners
      if (row) {
        // Use a global WeakSet to track which rows have listeners
        if (!(window as any).__rowScrollListeners) {
          (window as any).__rowScrollListeners = new WeakSet();
        }
        const rowListeners: WeakSet<Element> = (window as any).__rowScrollListeners;
        if (!rowListeners.has(row)) {
          row.addEventListener("scroll", () => handleRowScroll(category));
          rowListeners.add(row);
          // Initial state
          handleRowScroll(category);
        }
      }
    });
  }, 100);

  return (
    <div className="min-h-screen relative overflow-hidden font-vedic bg-background">
      {/* Parchment Background */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${parchmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Sacred Overlay Pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${lotusMandala})`,
            backgroundSize: "350px 350px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Compact, Modern Header */}
        <header className="sticky top-0 z-30 bg-gradient-to-b from-[#18181b] via-[#232526] to-[#18181b] border-b border-yellow-400/30 shadow-2xl backdrop-blur-xl">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 min-h-[48px]">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center bg-gradient-to-br from-yellow-400/40 via-yellow-300/20 to-transparent rounded-full p-1.5 shadow-inner border border-yellow-400/30">
                <img
                  src={'/logonav.png'}
                  alt="Dharma Grantha Logo"
                  className="w-8 h-8 md:w-10 md:h-10 opacity-100 drop-shadow-xl"
                  draggable={false}
                  style={{ background: "rgba(255,255,255,0.08)", borderRadius: "50%" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-vedic text-xl md:text-2xl font-extrabold text-yellow-100 tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(234,179,8,0.15)]">
                  धर्म ग्रन्थ संग्रहः
                </h1>
                <span className="font-sanskrit text-xs md:text-base text-yellow-300 font-semibold tracking-wider mt-0.5 md:mt-0.5 drop-shadow-[0_1px_2px_rgba(234,179,8,0.10)]">
                  Dharma Grantha Sangraha
                </span>
              </div>
            </div>
            {/* Search & Filters */}
            <div className="flex items-center gap-2 w-full max-w-md ml-auto">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="शोधयतु... (Search scriptures)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full bg-background/80 border border-yellow-400/30 px-3 py-2 pl-9 text-sm font-sanskrit text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition placeholder:text-yellow-300/60 shadow-lg backdrop-blur-md"
                  aria-label="Search scriptures"
                  style={{ letterSpacing: "0.03em", background: "rgba(35,37,38,0.85)" }}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-300/80 pointer-events-none" />
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-background/500 border border-yellow-400/30 text-xs font-sanskrit text-yellow-100 hover:bg-yellow-400/10 transition shadow-lg font-semibold backdrop-blur-md"
                  aria-label="Filter by category"
                >
                  <Filter className="w-5 h-5 mr-1 text-yellow-300/80" />
                  <span className="hidden sm:inline font-semibold tracking-wide">वर्गः</span>
                </button>
                {/* Category Filter Dropdown */}
                <select
                
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  aria-label="Select category"
                >
                  <option value="All">सर्वे वर्गाः (All Categories)</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Netflix-style Scripture Rows */}
        <main className="container mx-auto px-2 md:px-6 py-6 md:py-10">
          {/* If no results */}
          {filteredScriptures.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24">
              <img src={lotusMandala} alt="No results" className="w-16 h-16 opacity-40 mb-4" />
              <p className="font-vedic text-lg text-muted-foreground mb-2">No scriptures found</p>
              <p className="font-ancient text-sm text-muted-foreground/70">Try a different search or filter.</p>
            </div>
          )}

          {/* Show all categories if no filter, else only filtered category */}
          {(activeCategory === "All" ? categories : [activeCategory]).map((category) => {
            const categoryScriptures = groupedByCategory[category] || [];
            if (categoryScriptures.length === 0) return null;

            // Determine if chevrons should be visible
            const rowState = rowScrollStates[category] || { left: false, right: false };
            // If there are more cards than fit, show chevrons
            const showChevrons = categoryScriptures.length > 2;

            return (
              <section key={category} className="mb-14 md:mb-20">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3 px-2 md:px-0">
                  <h2 className="font-vedic text-xl md:text-2xl font-bold text-foreground tracking-wide">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                </div>
                {/* Netflix-style horizontal scroll row */}
                <div className="relative group">
                  {/* Left Scroll Button */}
                  {showChevrons && rowState.left && (
                    <button
                      aria-label="Scroll Left"
                      className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-background/90 via-background/60 to-transparent rounded-full shadow-lg p-2 hover:bg-accent/30 transition-all"
                      style={{ boxShadow: "0 0 24px 0 #eab30833" }}
                      onClick={() => scrollRow(category, "left")}
                    >
                      <ChevronLeft className="w-7 h-7 text-accent" />
                    </button>
                  )}
                  {/* Scripture Cards Row */}
                  <div
                    id={`row-${category}`}
                    className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 md:gap-6 py-2 px-1 md:px-0 transition-all"
                    style={{
                      scrollBehavior: "smooth",
                    }}
                  >
                    {categoryScriptures.map((scripture) => (
                      <div
                        key={scripture.id}
                        className="snap-start flex-shrink-0"
                        style={{
                          width: "70vw",
                          maxWidth: 260,
                          minWidth: 180,
                        }}
                      >
                        <ScriptureCard
                          id={scripture.id}
                          title={scripture.title}
                          titleSanskrit={scripture.titleSanskrit}
                          description={scripture.description}
                          coverImage={scripture.coverImage}
                          totalVerses={scripture.totalVerses}
                          isActive={hoveredCard === scripture.id}
                          onHover={() => setHoveredCard(scripture.id)}
                          onLeave={() => setHoveredCard(null)}
                          onClick={() => navigate(`/scripture/${scripture.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Right Scroll Button */}
                  {showChevrons && rowState.right && (
                    <button
                      aria-label="Scroll Right"
                      className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-background/90 via-background/60 to-transparent rounded-full shadow-lg p-2 hover:bg-accent/30 transition-all"
                      style={{ boxShadow: "0 0 24px 0 #eab30833" }}
                      onClick={() => scrollRow(category, "right")}
                    >
                      <ChevronRight className="w-7 h-7 text-accent" />
                    </button>
                  )}
                </div>
              </section>
            );
          })}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-accent/20 bg-card/70 backdrop-blur-lg mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
                <img src={lotusMandala} alt="Sacred Lotus" className="w-8 h-8 opacity-70" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
              </div>
              <p className="font-ancient text-base text-muted-foreground">
                May the sacred wisdom illuminate your path
              </p>
              <p className="font-sanskrit text-sm text-muted-foreground/60 mt-2">
                ॐ शान्तिः शान्तिः शान्तिः
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* Custom Scrollbar for horizontal rows */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 640px) {
          .snap-start {
            min-width: 70vw !important;
            max-width: 90vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ScriptureLibrary;
