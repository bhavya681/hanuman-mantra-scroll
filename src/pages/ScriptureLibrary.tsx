"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scripturesData, categories } from "@/data/scripturesData";
import { 
  gotraData, 
  nakshatraData, 
  lagnaData, 
  aartiData, 
  gitaData, 
  rishiVarnaData, 
  vedicTimeData,
} from "@/data/dharmaData";
import { DharmaCard } from "@/components/DharmaCard";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NaamJaapCounter from "@/components/NaamJaapCounter";
import { Sparkles } from "lucide-react";

// --- Card Component ---
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
}: any) => {
  return (
    <div
      className={`group relative flex flex-col bg-background/80 border border-accent/10 rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${
        isActive ? "z-30 scale-105 border-accent/40" : "z-10"
      }`}
      style={{
        minHeight: 300,
        boxShadow: isActive
          ? "0 8px 32px 0 rgba(234,179,8,0.10)"
          : "0 2px 8px 0 rgba(0,0,0,0.08)",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Cover */}
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-3 sm:p-4">
        <div>
          <h3 className="font-vedic text-base sm:text-lg font-bold text-foreground truncate group-hover:text-primary">
            {title}
          </h3>
          <p className="font-sanskrit text-sm text-primary/80 truncate">
            {titleSanskrit}
          </p>
        </div>

        {/* Description (shown on hover / active) */}
        <div
          className={`mt-2 text-xs sm:text-sm text-muted-foreground transition-all duration-300 ${
            isActive
              ? "max-h-28 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <p>{description}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">
            {totalVerses} Verses
          </span>
          <div className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const ScriptureLibrary = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rowScrollStates, setRowScrollStates] = useState<{
    [key: string]: { left: boolean; right: boolean };
  }>({});
  // For smooth fade of chevrons on both mouse hover and scroll state
  const [rowHoverStates, setRowHoverStates] = useState<{ [key: string]: boolean }>({});

  // Filtered + grouped data
  const filteredScriptures = useMemo(() => {
    let filtered = scripturesData;
    if (activeCategory !== "All")
      filtered = filtered.filter((s) => s.category === activeCategory);
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

  const groupedByCategory = useMemo(() => {
    const map: { [cat: string]: typeof scripturesData } = {};
    categories.forEach((cat) => {
      map[cat] = filteredScriptures.filter((s) => s.category === cat);
    });
    return map;
  }, [filteredScriptures]);

  // Scroll chevron handler
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

  useEffect(() => {
    (activeCategory === "All" ? categories : [activeCategory]).forEach(
      (category) => {
        const row = document.getElementById(`row-${category}`);
        if (row) {
          // Wrap to avoid multiple listeners
          const scrollHandler = () => handleRowScroll(category);
          row.addEventListener("scroll", scrollHandler);
          handleRowScroll(category);

          return () => {
            row.removeEventListener("scroll", scrollHandler);
          };
        }
      }
    );
  }, [activeCategory, filteredScriptures]);

  const scrollRow = (category: string, dir: "left" | "right") => {
    const row = document.getElementById(`row-${category}`);
    if (!row) return;
    const scrollAmt = row.offsetWidth * 0.7;
    const newScroll =
      dir === "left" ? row.scrollLeft - scrollAmt : row.scrollLeft + scrollAmt;
    row.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  // CSS for smooth, hidden scrollbar
  const customHorizontalScrollbar =
    "scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-accent/20 scrollbar-track-transparent hide-native-scrollbar";

  // Global style for hiding native scrollbar but keeping scroll smoothness
  // Could also use a style tag injection for sticky support
  const HideNativeScrollbar = () => (
    <style>
      {`
        .hide-native-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(234,179,8,0.18) transparent;
        }
        .hide-native-scrollbar::-webkit-scrollbar {
          height: 8px;
          background: transparent;
          transition: opacity .3s;
          opacity: 0;
        }
        .hide-native-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(234,179,8,0.18);
          border-radius: 6px;
          transition: background .2s;
        }
        .hide-native-scrollbar:hover::-webkit-scrollbar,
        .hide-native-scrollbar:focus::-webkit-scrollbar {
          opacity: .65;
        }
      `}
    </style>
  );

  // Add fade-in/fade-out animation to arrow buttons using framer-motion
  // Also show the chevrons if user hovers over the row, even if not needed (but keep opacity 0 if not able to scroll)

  return (
    <div className="min-h-screen relative bg-background font-vedic overflow-hidden">
      <HideNativeScrollbar />
      {/* Backgrounds */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${parchmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
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
      <div className="fixed inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 z-0" />

      {/* HEADER */}
      <header
        className="
          sticky top-0 z-40
          bg-[#191a1c]/95
          md:bg-[#141415]/95
          backdrop-blur-lg
          border-b border-yellow-400/20 shadow-md
          transition-colors
        "
        style={{
          background: "rgba(25,26,28,0.95)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={"/logonav.png"}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-yellow-400/30"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-yellow-100 tracking-tight">
              धर्म ग्रन्थ संग्रहः
            </h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-2 w-full max-w-md ml-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-yellow-300/70" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="शोधयतु... (Search)"
                className="w-full pl-9 pr-3 py-2 bg-[#232526]/70 border border-yellow-400/30 rounded-full text-sm text-yellow-100 focus:ring-2 focus:ring-yellow-400/40"
              />
            </div>
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="
                  appearance-none
                  bg-[#18181c] 
                  border border-yellow-500/40 
                  text-yellow-100 
                  font-medium
                  text-sm
                  rounded-lg
                  px-5 py-2
                  shadow-md
                  focus:ring-2 focus:ring-yellow-400/50
                  transition-colors
                  hover:border-yellow-400/70 
                  outline-none
                  pr-10
                "
                style={{
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.11), 0 0.5px 1.5px 0 rgba(255,200,10,0.08)'
                }}
              >
                <option value="All" className="bg-[#26262e] text-yellow-100">All</option>
                {categories.map((c) => (
                  <option key={c} className="bg-[#26262e] text-yellow-100">{c}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-yellow-300 text-base">
                <svg width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-yellow-200"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>

        {/* Responsive mobile search/filter below nav, sticky */}
        {/* Removed search/filter bar for mobile, since this will come up in drawer instead */}
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full z-50 border-l border-yellow-400/20 shadow-2xl flex flex-col p-5"
              style={{
                // Distinct visible bg for better visibility
                background:
                  "linear-gradient(135deg, #fdf9ee 80%, #fbe9a9 100%)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-vedic text-lg text-black">
                  Search & Filter
                </h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-yellow-800/70" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search scriptures..."
                  className="w-full pl-9 pr-3 py-2 bg-white border border-yellow-400/30 rounded-full text-sm text-black focus:ring-2 focus:ring-yellow-400/40"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-semibold">
                  Category
                </label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="bg-white border border-yellow-400/30 text-black text-sm rounded-full px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.98)" }}
                >
                  <option value="All">All</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CONTENT */}
      <main className="container mx-auto px-3 sm:px-6 py-8 sm:py-10 relative z-10">
        {/* Naam Jaap Counter Section */}
        <section className="mb-10">
          <Card className="bg-gradient-to-br from-[#3a2416] via-[#2b1d14] to-[#1c1410] border-yellow-500/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <CardTitle className="text-yellow-100 font-vedic text-xl">🕉 Naam Jaap Counter</CardTitle>
              </div>
              <CardDescription className="text-yellow-200/80">
                Chant with devotion — choose your mantra and start your Naam Jaap journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-yellow-600 to-amber-500 text-black hover:from-yellow-500 hover:to-amber-400">
                    Start Jaap
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl border-yellow-500/30">
                  <NaamJaapCounter />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>
        {filteredScriptures.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <img src={lotusMandala} alt="" className="w-14 opacity-50 mb-3" />
            <p className="text-yellow-200 font-vedic">
              No scriptures found. Try a different search.
            </p>
          </div>
        ) : (
          (activeCategory === "All" ? categories : [activeCategory]).map(
            (category) => {
              const categoryScriptures = groupedByCategory[category] || [];
              if (!categoryScriptures.length) return null;
              const rowState =
                rowScrollStates[category] || { left: false, right: false };
              const rowHovered = rowHoverStates[category] || false;

              return (
                <section key={category} className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>

                  <div
                    className="relative"
                    onMouseEnter={() =>
                      setRowHoverStates((prev) => ({ ...prev, [category]: true }))
                    }
                    onMouseLeave={() =>
                      setRowHoverStates((prev) => ({ ...prev, [category]: false }))
                    }
                  >
                    {/* Chevron Left */}
                    <AnimatePresence>
                      {rowState.left && (
                        <motion.button
                          className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full hover:bg-background/70 transition-colors"
                          style={{
                            pointerEvents: rowState.left ? "auto" : "none",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: rowHovered ? 1 : 0.5,
                            scale: 1,
                            transition: { duration: 0.14 }
                          }}
                          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.17 } }}
                          onClick={() => scrollRow(category, "left")}
                        >
                          <ChevronLeft className="text-accent" />
                        </motion.button>
                      )}
                    </AnimatePresence>

                    <div
                      id={`row-${category}`}
                      className={`flex overflow-x-auto gap-4 py-2 transition-all duration-300 ${customHorizontalScrollbar}`}
                      tabIndex={0}
                      style={{
                        scrollBehavior: "smooth",
                        WebkitOverflowScrolling: "touch",
                        transition: "box-shadow 0.35s",
                        boxShadow: rowHovered
                          ? "0 2px 10px 0 rgba(234,179,8,.09)"
                          : "none",
                      }}
                    >
                      {categoryScriptures.map((s) => (
                        <div
                          key={s.id}
                          className="flex-shrink-0 snap-start"
                          style={{
                            width: "75vw",
                            maxWidth: 240,
                            minWidth: 160,
                          }}
                        >
                          <ScriptureCard
                            {...s}
                            isActive={hoveredCard === s.id}
                            onHover={() => setHoveredCard(s.id)}
                            onLeave={() => setHoveredCard(null)}
                            onClick={() => navigate(`/scripture/${s.id}`)}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Chevron Right */}
                    <AnimatePresence>
                      {rowState.right && (
                        <motion.button
                          className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-background/80 p-2 rounded-full hover:bg-background/70 transition-colors"
                          style={{
                            pointerEvents: rowState.right ? "auto" : "none",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: rowHovered ? 1 : 0.5,
                            scale: 1,
                            transition: { duration: 0.14 }
                          }}
                          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.17 } }}
                          onClick={() => scrollRow(category, "right")}
                        >
                          <ChevronRight className="text-accent" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </section>
              );
            }
          )
        )}

        {/* Gotra Knowledge Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              What is Gotra? | गोत्र क्या है?
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            Understanding the ancient lineage system that traces ancestry through the paternal line to the great Rishis.
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {gotraData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Janma Nakshatra Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Janma Nakshatra | जन्म नक्षत्र – Discover your birth star
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            Understand your Janma Nakshatra — how it influences personality, destiny, and emotional pattern.
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {nakshatraData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Lagna Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Lagna (Ascendant) | लग्न – The rising sign in Vedic astrology
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            Explore the meaning of Lagna and how it shapes personality and life path.
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {lagnaData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Artis for Devas Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Artis for Devas
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            देवों की आरती - Sacred hymns and prayers
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {aartiData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Bhagavad Gita Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Bhagavad Gita Shlokas
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            भगवद गीता श्लोक - Sacred verses from Krishna
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {gitaData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Rishis & Varnas Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Sapta Rishis & Varnas
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            ऋषि और वर्ण - Seven sages and social system
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {rishiVarnaData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Vedic Time Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-vedic text-lg sm:text-xl font-bold text-foreground">
              Vedic Time Calculation
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
          <p className="font-sanskrit text-sm text-primary/80 mb-4 text-center">
            वैदिक समय गणना - Tithi, Nakshatra & planetary transits
          </p>
          <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
            {vedicTimeData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: "75vw", maxWidth: 240, minWidth: 160 }}
              >
                <DharmaCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScriptureLibrary;
