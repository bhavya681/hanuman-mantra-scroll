import React, { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { scripturesData } from "@/data/scripturesData";
import { VerseCard } from "@/components/VerseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Download, Minimize2, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { AnimatePresence, motion } from "framer-motion";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";
import jsPDF from "jspdf";

const PAGE_TURN_DURATION = 0.73;


const pageFlipVariants = {
  initial: (direction: number) => ({
    x: 0,
    opacity: 1,
    rotateY: 0,
    originX: direction > 0 ? 1 : 0,
    boxShadow: "0 4px 24px 0 rgba(66,49,28,0.10)",
    zIndex: 2,
    scale: 1,
    filter: "brightness(.94)",
  }),
  animate: () => ({
    x: 0,
    rotateY: 0,
    opacity: 1,
    originX: 0.5,
    boxShadow: "0 8px 32px 0 rgba(66,49,28,0.18)",
    zIndex: 2,
    scale: 1,
    filter: "brightness(1)",
  }),
  exit: (direction: number) => ({
    x: 0,
    rotateY: direction > 0 ? -100 : 100,
    opacity: 0.72,
    originX: direction > 0 ? 1 : 0,
    zIndex: 1,
    boxShadow: "0 2px 8px 1px rgba(110,89,62,0.10)",
    scale: 0.98,
    filter: "blur(0.6px) brightness(.95)",
  }),
};

const customShowMoreScrollbar = `
  .show-more-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #e0c194 #f9f6ef;
    transition: background 0.3s;
  }
  .show-more-scrollbar::-webkit-scrollbar {
    width: 11px;
    background: transparent;
  }
  .show-more-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(120deg, #bea86b 30%, #e7d6a0 100%);
    border-radius: 14px;
    min-height: 30px;
    border: 2.5px solid #f9f6ef;
    box-shadow: 0 1px 4px #d7c29966, 0 1px 2px #bead7b;
    transition: background 0.3s;
  }
  .show-more-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(110deg, #e7d6a0 20%, #bea86b 90%);
  }
  .show-more-scrollbar::-webkit-scrollbar-track {
    background: #f9f6ef;
    border-radius: 16px;
  }
`;

const HEADER_HEIGHT_PX = 66; // Controls manual height

// Hanuman Chalisa Lyrics - plain text for PDF download
const HANUMAN_CHALISA_LYRICS = `
श्रीगुरु चरन सरोज रज, निज मनु मुकुर सुधारि।
बरनऊँ रघुबर बिमल जसु, जो दायकु फल चारि।।

बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि विद्या देहु मोहिं, हरहु कलेस विकार॥

जय हनुमान ज्ञान गुन सागर।
जय कपीस तिहुँ लोक उजागर॥

राम दूत अतुलित बल धामा।
अंजनि-पुत्र पवनसुत नामा।।

महाबीर बिक्रम बजरंगी।
कुमति निवार सुमति के संगी॥

कंचन बरन बिराज सुबेसा।
कानन कुंडल कुंचित केसा॥

हाथ बज्र और ध्वजा बिराजै।
काँधे मूँज जनेऊ साजै॥

शंकर सुवन केसरी नंदन।
तेज प्रताप महा जग वंदन॥

विद्यावान गुनी अति चातुर।
राम काज करिबे को आतुर॥

प्रभु चरित्र सुनिबे को रसिया।
राम लखन सीता मन बसिया॥

सूक्ष्म रूप धरि सियहिं दिखावा।
बिकट रूप धरि लंक जरावा॥

भीम रूप धरि असुर सँहारे।
रामचंद्र के काज सवाँरे॥

लाय सजीवन लखन जियाये।
श्रीरघुबीर हरषि उर लाये॥

रघुपति कीन्ही बहुत बड़ाई।
तुम मम प्रिय भरत-हि सम भाई॥

सहस बदन तुम्हारो जस गावैं।
अस कहि श्रीपति कंठ लगावैं॥

सनकादिक ब्रह्मादि मुनीसा।
नारद सारद सहित अहीसा॥

जम कुबेर दिगपाल जहाँ ते।
कबि कोबिद कहि सके कहाँ ते॥

तुम उपकार सुग्रीवहिं कीन्हा।
राम मिलाय राजपद दीन्हा॥

तुम्हरो मन्त्र बिभीषन माना।
लंकेश्वर भए सब जग जाना॥

जुग सहस्र जोजन पर भानू।
लील्यो ताहि मधुर फल जानू॥

प्रभु मुद्रिका मेलि मुख माहीं।
जलधि लाँघि गये अचरज नाहीं॥

 दुर्गम काज जगत के जेते।
सुगम अनुग्रह तुम्हरे तेते॥

राम दुआरे तुम रखवारे।
होत न आज्ञा बिनु पैसारे॥

सब सुख लहै तुम्हारी सरना।
तुम रक्षक काहू को डर ना॥

आपन तेज सम्हारो आपै।
तीनों लोक हांक तें कांपे॥

भूत पिशाच निकट नहिं आवै।
महाबीर जब नाम सुनावै॥

नासै रोग हरै सब पीरा।
जपत निरंतर हनुमत बीरा॥

संकट तें हनुमान छुड़ावै।
मन क्रम बचन ध्यान जो लावै॥

सब पर राम तपस्वी राजा।
तिन के काज सकल तुम साजा॥

और मनोरथ जो कोई लावै।
सोइ अमित जीवन फल पावै॥

चारों जुग परताप तुम्हारा।
है परसिद्ध जगत उजियारा॥

साधु-संत के तुम रखवारे।
असुर निकंदन राम दुलारे॥

अष्ट सिद्धि नौ निधि के दाता।
अस बर दीन जानकी माता॥

राम रसायन तुम्हरे पासा।
सदा रहो रघुपति के दासा॥

तुम्हरी भक्ति राम को पावै।
जनम जनम के दुख बिसरावै॥

अंत काल रघुबर पुर जाई।
जहाँ जन्म हरि-भक्त कहाई॥

और देवता चित्त न धरई।
हनुमत सेइ सर्ब सुख करई॥

संकट कटै मिटै सब पीरा।
जो सुमिरै हनुमत बलबीरा॥

जय जय जय हनुमान गोसाईं।
कृपा करहु गुरुदेव की नाईं॥

जो सत बार पाठ कर कोई।
छूटहि बंदि महा सुख होई॥

जो यह पढ़ै हनुमान चालीसा।
होय सिद्धि साखी गौरीसा॥

तुलसीदास सदा हरि चेरा।
कीजै नाथ हृदय महँ डेरा॥

पवनतनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥
`;

const ScriptureReader: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [currentVerse, setCurrentVerse] = useState<number>(0);
  const [pageDirection, setPageDirection] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [verseMeaningExpanded, setVerseMeaningExpanded] = useState<boolean>(false); // 👈 NEW
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const scripture = scripturesData.find((s) => String(s.id) === String(id));
  const { language, setLanguage, t } = useLanguage();

  // 🕉 Missing/empty checks
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

  if (!scripture.verses || scripture.verses.length === 0) {
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

  useEffect(() => {
    if (isFullscreen && showMore) setShowMore(false);
    // eslint-disable-next-line
  }, [isFullscreen, showMore]);

  // --- Professional custom scrollbar on showMore ---
  useEffect(() => {
    let styleTag: HTMLStyleElement | null = null;
    if (showMore) {
      styleTag = document.createElement("style");
      styleTag.id = "show-more-scrollbar-style";
      styleTag.innerHTML = customShowMoreScrollbar;
      document.head.appendChild(styleTag);
    }
    return () => {
      if (styleTag && styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, [showMore]);

  const goToNext = () => {
    if (showMore) return;
    if (currentVerse < scripture.verses.length - 1) {
      setPageDirection(1);
      setCurrentVerse((v) => v + 1);
    }
  };

  const goToPrev = () => {
    if (showMore) return;
    if (currentVerse > 0) {
      setPageDirection(-1);
      setCurrentVerse((v) => v - 1);
    }
  };

  const handleDotClick = (index: number) => {
    if (showMore) return;
    if (index === currentVerse) return;
    setPageDirection(index > currentVerse ? 1 : -1);
    setCurrentVerse(index);
  };

  // Touch/swipe navigation for pages
  const handleTouchStart = (e: React.TouchEvent) => {
    if (showMore) return;
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showMore) return;
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 60) goToNext();
      if (diff < -60) goToPrev();
    }
  };

  // --- FULLSCREEN FUNCTIONALITY ---
  const handleToggleFullscreen = useCallback(() => {
    const elem = mainRef.current?.parentElement?.parentElement || document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  if (typeof window !== "undefined") {
    document.onfullscreenchange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
  }

  // --- PDF DOWNLOAD: Hanuman Chalisa lyrics only, text only ---
  const handleDownloadPDF = () => {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4"
    });

    pdf.setFont("Helvetica", "normal");
    pdf.setFontSize(15);

    const margin = 50;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const lines = pdf.splitTextToSize(HANUMAN_CHALISA_LYRICS.trim(), pageWidth - 2 * margin);
    let y = margin;

    lines.forEach(line => {
      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
      pdf.text(line, margin, y, { baseline: "top" });
      y += 23;
    });

    pdf.setFontSize(12);
    pdf.setTextColor("#a68115");
    pdf.text("हनुमान चालीसा", pageWidth / 2, pageHeight - 25, { align: "center" });

    pdf.save("Hanuman_Chalisa_Lyrics.pdf");
  };

  const verse = scripture.verses[currentVerse];

  // Desktop detection
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  // Sticky header solution, always fixed and always visible (never scrolled away),
  // manage content padding to avoid overlap.
  return (
    <div className={`min-h-screen relative overflow-hidden bg-background font-sans`}>
      {/* 📜 Background */}
      {!isFullscreen && (
        <>
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
          <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/75 to-background/95 pointer-events-none" />
        </>
      )}

      {/* 🕉 Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Fixed */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: `${HEADER_HEIGHT_PX}px`,
            zIndex: 100,
            transition: "all 0.3s cubic-bezier(.34,1.56,.64,1)",
            pointerEvents: isFullscreen ? "none" : "initial",
            opacity: isFullscreen ? 0 : 1,
            background: "linear-gradient(to bottom, rgba(245,233,200,0.95) 60%,rgba(245,233,200,0.63) 100%)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 2.5px 7.5px 0 #e6dcc2, 0 1px 0px #dbc6953a",
            borderBottom: "1.5px solid #eddec4bb",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2 sm:gap-6 h-full"
            style={{ height: "100%" }}
          >
            {/* Left: Back Button */}
            <div className="flex-0 flex items-center gap-2 min-w-[56px]">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="rounded-full flex items-center gap-2 text-sm sm:text-base transition-colors focus:ring-2 focus:ring-accent/60 hover:bg-accent/30"
                aria-label="Back to Library"
                tabIndex={isFullscreen ? -1 : 0}
                style={{ pointerEvents: isFullscreen ? "none" : "auto" }}
              >
                <span className="flex items-center justify-center rounded-full p-1">
                  <Home className="w-4 h-4 text-black" />
                </span>
                <span className="hidden sm:inline text-foreground">{t("library", "Library")}</span>
                <span className="sm:hidden text-foreground">{t("back", "Back")}</span>
              </Button>
            </div>
            {/* Center: Title */}
            <div className="flex-1 min-w-0 text-center px-1 sm:px-3">
              <h1 className="font-vedic text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-foreground truncate">
                {scripture.title}
              </h1>
              <p className="font-sanskrit text-xs sm:text-sm md:text-base text-primary truncate">
                {scripture.titleSanskrit}
              </p>
            </div>
            {/* Actions: Right */}
            <div className="flex flex-0 items-center gap-2 min-w-[80px] justify-end">
              {/* Language selector */}
              {!isFullscreen && (
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-white/80 text-black border border-accent/40 rounded-full px-3 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-accent/40"
                  aria-label={t("languageLabel", "Language")}
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                  <option value="mr">मराठी</option>
                </select>
              )}
              {/* Fullscreen button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleFullscreen}
                aria-label={isFullscreen ? "Exit Read Mode" : "Enter Read Mode"}
                className="rounded-full transition-all hover:scale-105 active:scale-95 focus:ring-2 focus:ring-accent/50 hover:bg-accent/30"
                title={isFullscreen ? "Exit Read Mode" : "Enter Read Mode"}
                tabIndex={isFullscreen ? -1 : 0}
                style={{ pointerEvents: isFullscreen ? "none" : "auto" }}
              >
                <span className="flex items-center justify-center rounded-full p-1">
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5 text-black" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-black" />
                  )}
                </span>
                <span className="sr-only">{isFullscreen ? "Exit Read Mode" : "Enter Read Mode"}</span>
              </Button>
              {/* Download button - visible */}
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={handleDownloadPDF}
                aria-label="Download Hanuman Chalisa Lyrics (PDF)"
                className="rounded-full transition-all hover:scale-110 focus:ring-2 focus:ring-accent/50 hover:bg-accent/30"
                title="Download Hanuman Chalisa Lyrics (PDF)"
                tabIndex={0}
              >
                <span className="flex items-center justify-center rounded-full p-1">
                  <Download className="w-5 h-5 text-black" />
                </span>
                <span className="sr-only">Download Hanuman Chalisa Lyrics</span>
              </Button> */}
              {/* Show More button, only when not in fullscreen */}
              {!isFullscreen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMore(sm => !sm)}
                  className={`rounded-full ml-1 px-4 py-2 bg-black hover:bg-black focus:ring-2 focus:ring-accent/30`}
                  aria-label={showMore ? "Hide All Verses" : "Show All Verses"}
                  title={showMore ? "Hide All Verses" : "Show All Verses"}
                >
                  <span className="font-vedic text-[13px] sm:text-[15px] text-white">
                    {showMore ? "Show Less" : "Show More"}
                  </span>
                </Button>
              )}
            </div>
          </div>
        </header>
        {/* Main - add top padding to prevent content being hidden behind fixed header */}
        <main
          ref={mainRef}
          className={`
            flex-grow w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-6 sm:py-10 flex flex-col items-center
            ${isFullscreen ? "bg-white dark:bg-background transition-all duration-300 min-h-screen" : ""}
          `}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            paddingTop: isFullscreen
              ? "clamp(0rem, 3vh, 4rem)"
              : `calc(${HEADER_HEIGHT_PX}px + 1.5rem)`, // add extra padding below header
          }}
        >
          <section className="w-full max-w-3xl xl:max-w-4xl flex flex-col items-center">
            {/* Only show book flip or all as list depending on showMore */}
            {!showMore ? (
              <div className="w-full relative perspective-1000" style={{ perspective: 1000, minHeight: 270 }}>
                {/* 👇 NEW: Floating Navigation Buttons for Desktop Fullscreen */}
                {isFullscreen && isDesktop && (
                  <>
                    {/* Previous Button - Left Side */}
                    <Button
                      tabIndex={0}
                      onClick={goToPrev}
                      disabled={currentVerse === 0}
                      size="icon"
                      className={`
                        absolute left-[-70px] top-1/2 -translate-y-1/2 z-10
                        bg-[#ff9800] hover:bg-[#ffa726] hover:scale-110 
                        shadow-2xl rounded-full transition-all
                        ${currentVerse === 0 ? "opacity-40 cursor-not-allowed" : "opacity-90 hover:opacity-100"}
                        flex items-center justify-center w-14 h-14
                      `}
                      aria-label="Previous verse"
                    >
                      <ChevronLeft className="w-7 h-7 text-white" />
                    </Button>

                    {/* Next Button - Right Side */}
                    <Button
                      tabIndex={0}
                      onClick={goToNext}
                      disabled={currentVerse === scripture.verses.length - 1}
                      size="icon"
                      className={`
                        absolute right-[-70px] top-1/2 -translate-y-1/2 z-10
                        bg-[#ff9800] hover:bg-[#ffa726] hover:scale-110 
                        shadow-2xl rounded-full transition-all
                        ${currentVerse === scripture.verses.length - 1 ? "opacity-40 cursor-not-allowed" : "opacity-90 hover:opacity-100"}
                        flex items-center justify-center w-14 h-14
                      `}
                      aria-label="Next verse"
                    >
                      <ChevronRight className="w-7 h-7 text-white" />
                    </Button>
                  </>
                )}
                
                <AnimatePresence custom={pageDirection} mode="wait" initial={false}>
                  <motion.div
                    key={currentVerse}
                    custom={pageDirection}
                    variants={pageFlipVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: PAGE_TURN_DURATION, ease: "easeOut" }}
                    className="w-full absolute left-0 top-0"
                    style={{
                      willChange: "transform, opacity",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                 <div className="verse-pdf-card">
                      <VerseCard
                        {...verse}
                        showMore={verseMeaningExpanded}
                        onToggleMore={() => setVerseMeaningExpanded(v => !v)}
                        isFullscreen={isFullscreen}
                        scriptureId={scripture.id}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="invisible" aria-hidden>
                  <div className="verse-pdf-card">
                    <VerseCard
                      {...verse}
                      showMore={verseMeaningExpanded}
                      onToggleMore={() => setVerseMeaningExpanded(v => !v)}
                      isFullscreen={isFullscreen}
                      scriptureId={scripture.id}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="w-full pt-2 pb-6 flex flex-col gap-7 overflow-y-auto show-more-scrollbar"
                style={{
                  maxHeight: `calc(80vh - ${HEADER_HEIGHT_PX}px)`,
                  minHeight: 320,
                  overscrollBehavior: "contain",
                  WebkitOverflowScrolling: "touch",
                  scrollBehavior: "smooth",
                  background: "rgba(255,255,255,0.98)",
                  borderRadius: "1.2rem",
                  boxShadow: "0 2px 14px 0 #eddec4bb",
                  border: "1.5px solid #efdeba",
                  paddingRight: "6px",
                }}
                tabIndex={0}
              >
                <style>{showMore ? customShowMoreScrollbar : ""}</style>
                {scripture.verses.map((v, idx) => (
                  <div key={idx} className="mb-2 verse-pdf-card">
                    <VerseCard {...v} scriptureId={scripture.id} />
                  </div>
                ))}
              </div>
            )}

            {/* Pagination/Navigation - show only on non-desktop in fullscreen, or if not in fullscreen, and not when showMore is on */}
            {/* For fullscreen desktop ("Read Mode Expand") arrows are shown (changed from previous code) */}
            {!showMore &&
              ((isFullscreen && isDesktop) ? (
                <nav className="mt-8 w-full flex flex-col gap-6 items-center">
                  <div className="w-full flex items-center justify-center gap-2 px-1">
                    {/* Only Pager - arrows are now floating on sides */}
                    <div className="flex flex-col items-center px-2 max-w-xs min-w-0">
                      {/* 👇 CHANGED: Only show when meaning is NOT expanded */}
                      {!verseMeaningExpanded && (
                        <div
                          className="bg-gradient-to-r from-[#f5eddc]/80 via-white/60 to-[#f5eddc]/80 shadow-lg border border-accent/30 rounded-full px-4 py-2 flex items-center justify-center"
                          style={{
                            backdropFilter: "blur(2px)",
                            minWidth: "min(70vw, 215px)",
                            borderBottomWidth: 3,
                            borderTopWidth: 3,
                          }}
                        >
                          <span className="font-vedic text-base sm:text-lg text-primary font-semibold tracking-wide select-none">
                            <span
                              style={{
                                color: "#d6be7c",
                                fontWeight: "bold",
                                textShadow: "0 1px 3px #a88b37cc, 0 1px #fff7",
                                letterSpacing: "0.03em",
                              }}
                            >
                              {scripture.verses[currentVerse]?.number !== undefined
                                ? (scripture.verses[currentVerse]?.number === 0
                                  ? t("doha", "Doha")
                                  : `${t("verse", "Verse")} ${scripture.verses[currentVerse]?.number}`)
                                : `Page ${currentVerse + 1}`
                              }
                            </span>
                            <span className="mx-2 text-muted-foreground/70 font-normal">|</span>
                            <span className="font-vedic text-base text-muted-foreground">
                              {currentVerse + 1}
                            </span>
                            <span className="mx-1 text-muted-foreground/60 font-normal">/</span>
                            <span className="font-vedic text-base text-foreground">
                              {scripture.verses.length}
                            </span>
                          </span>
                          </div>
                      )}
                    </div>
                  </div>
                </nav>
              ) : ((!isDesktop || !isFullscreen) && (
                <nav className="mt-8 w-full flex flex-col gap-6 items-center">
                  <div className="w-full flex items-center justify-between gap-2 px-1">
                    {(!(isDesktop && isFullscreen)) && (
                      <>
                        <Button
                          tabIndex={0}
                          onClick={goToPrev}
                          disabled={currentVerse === 0}
                          size="icon"
                          className={`bg-[#ff9800] hover:bg-[#ffa726] hover:scale-105 shadow-md rounded-full transition ${currentVerse === 0 ? "opacity-40 cursor-not-allowed" : ""
                            } flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14`}
                          aria-label="Previous verse"
                        >
                          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </Button>
                      </>
                    )}
                    {/* Pager and dots, only if not fullscreen or not desktop */}
                    {!isFullscreen && (
                      <div className="flex flex-col items-center flex-1 px-2 max-w-xs min-w-0">
                        {/* 👇 CHANGED: Only show when meaning is NOT expanded */}
                        {!verseMeaningExpanded && (
                          <div
                            className="bg-gradient-to-r from-[#f5eddc]/80 via-white/60 to-[#f5eddc]/80 shadow-lg border border-accent/30 rounded-full px-4 py-2 flex items-center justify-center"
                            style={{
                              backdropFilter: "blur(2px)",
                              minWidth: "min(70vw, 215px)",
                              borderBottomWidth: 3,
                              borderTopWidth: 3,
                            }}
                          >
                            <span className="font-vedic text-base sm:text-lg text-primary font-semibold tracking-wide select-none">
                            <span
                                style={{
                                  color: "#d6be7c",
                                  fontWeight: "bold",
                                  textShadow: "0 1px 3px #a88b37cc, 0 1px #fff7",
                                  letterSpacing: "0.03em",
                                }}
                              >
                              {scripture.verses[currentVerse]?.number !== undefined
                                ? (scripture.verses[currentVerse]?.number === 0
                                  ? t("doha", "Doha")
                                  : `${t("verse", "Verse")} ${scripture.verses[currentVerse]?.number}`)
                                : `Page ${currentVerse + 1}`
                              }
                              </span>
                              <span className="mx-2 text-muted-foreground/70 font-normal">|</span>
                              <span className="font-vedic text-base text-muted-foreground">
                                {currentVerse + 1}
                              </span>
                              <span className="mx-1 text-muted-foreground/60 font-normal">/</span>
                              <span className="font-vedic text-base text-foreground">
                                {scripture.verses.length}
                              </span>
                            </span>
                          </div>
                        )}
                        <div
                          className="mt-3 flex flex-row gap-[2.5px] justify-center w-full overflow-x-auto px-1 py-1"
                          style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "#eab308 #f4e5bc",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <style>
                            {`
                              .scripture-dot-scrollbar::-webkit-scrollbar {
                                height: 7px;
                                border-radius: 10px;
                                background: #f5eddc;
                              }
                              .scripture-dot-scrollbar::-webkit-scrollbar-thumb {
                                background: #eab308;
                                border-radius: 9px;
                                min-width: 40px;
                              }
                              .scripture-dot-scrollbar::-webkit-scrollbar-track {
                                background: #f8f2d2;
                              }
                            `}
                          </style>
                          <div className="flex flex-row gap-[2.5px] w-full scripture-dot-scrollbar" style={{ width: "100%", overflowX: "auto" }}>
                            {scripture.verses.length <= 16 ? (
                              scripture.verses.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => handleDotClick(i)}
                                  tabIndex={0}
                                  className={`rounded-full border-2 transition-all
                                    ${i === currentVerse
                                      ? "bg-primary border-accent shadow-md w-7 h-3"
                                      : "bg-muted-foreground/20 border-accent/30 hover:bg-accent/80 w-2.5 h-2.5"
                                    }
                                    focus:ring-2 focus:ring-accent/50 focus:outline-none
                                  `}
                                  aria-label={`Go to ${scripture.verses[i]?.number === 0 ? "Doha" : `verse ${scripture.verses[i]?.number || i + 1}`}`}
                                  style={{
                                    minWidth: i === currentVerse ? "1.2rem" : "0.7rem",
                                    minHeight: "0.7rem",
                                  }}
                                />
                              ))
                            ) : (
                              <div className="flex items-center gap-2 w-full">
                                <button
                                  className="w-6 h-6 rounded-full flex items-center justify-center bg-card border border-accent/20 hover:bg-accent/40 transition"
                                  onClick={() => handleDotClick(Math.max(0, currentVerse - 5))}
                                  disabled={currentVerse <= 2}
                                  aria-label={"Back 5"}
                                  tabIndex={0}
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </button>
                                {(() => {
                                  const total = scripture.verses.length;
                                  let start = Math.max(0, currentVerse - 2);
                                  let end = Math.min(total, currentVerse + 3);
                                  if (currentVerse < 3) {
                                    start = 0;
                                    end = Math.min(6, total);
                                  }
                                  if (currentVerse > total - 4) {
                                    end = total;
                                    start = Math.max(0, total - 6);
                                  }
                                  const items = [];
                                  if (start > 0) {
                                    items.push(
                                      <button
                                        key={0}
                                        onClick={() => handleDotClick(0)}
                                        tabIndex={0}
                                        className={`w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-accent/30 hover:bg-accent/70`}
                                        aria-label="Go to first"
                                      />
                                    );
                                    if (start > 1) {
                                      items.push(
                                        <span key="start-ellipsis" className="mx-1 text-xs text-accent/70 pb-0.5">…</span>
                                      );
                                    }
                                  }
                                  for (let i = start; i < end; i++) {
                                    items.push(
                                      <button
                                        key={i}
                                        onClick={() => handleDotClick(i)}
                                        tabIndex={0}
                                        className={`rounded-full transition-all
                                          ${i === currentVerse
                                            ? "bg-primary border-accent shadow-md w-7 h-3"
                                            : "bg-muted-foreground/20 border-accent/30 hover:bg-accent/80 w-2.5 h-2.5"
                                          }
                                          focus:ring-2 focus:ring-accent/50 focus:outline-none
                                        `}
                                        aria-label={`Go to ${scripture.verses[i]?.number === 0 ? "Doha" : `verse ${scripture.verses[i]?.number || i + 1}`}`}
                                        style={{
                                          minWidth: i === currentVerse ? "1.2rem" : "0.7rem",
                                          minHeight: "0.7rem",
                                        }}
                                      />
                                    );
                                  }
                                  if (end < total) {
                                    if (end < total - 1) {
                                      items.push(
                                        <span key="end-ellipsis" className="mx-1 text-xs text-accent/70 pb-0.5">…</span>
                                      );
                                    }
                                    items.push(
                                      <button
                                        key={total - 1}
                                        onClick={() => handleDotClick(total - 1)}
                                        tabIndex={0}
                                        className={`w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-accent/30 hover:bg-accent/70`}
                                        aria-label="Go to last"
                                      />
                                    );
                                  }
                                  return items;
                                })()}
                                <button
                                  className="w-6 h-6 rounded-full flex items-center justify-center bg-card border border-accent/20 hover:bg-accent/40 transition"
                                  onClick={() => handleDotClick(Math.min(scripture.verses.length - 1, currentVerse + 5))}
                                  disabled={currentVerse >= scripture.verses.length - 3}
                                  aria-label={"Forward 5"}
                                  tabIndex={0}
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {(!(isDesktop && isFullscreen)) && (
                      <Button
                        tabIndex={0}
                        onClick={goToNext}
                        disabled={currentVerse === scripture.verses.length - 1}
                        size="icon"
                        className={`bg-[#ff9800] hover:bg-[#ffa726] hover:scale-105 shadow-md rounded-full transition ${currentVerse === scripture.verses.length - 1 ? "opacity-40 cursor-not-allowed" : ""
                          } flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14`}
                        aria-label="Next verse"
                      >
                        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </Button>
                    )}
                  </div>
                  {/* If mobile, hint for swipe gesture */}
                  {!isDesktop && (
                    <div className="block sm:hidden mt-3 text-xs font-medium text-accent/70 text-center animate-fadeInSlow">
                      <span className="inline-flex items-center gap-2">
                        <svg width="21" height="21" fill="none" className="inline" viewBox="0 0 21 21"><path d="M13.5 7.5L17.5 10.5L13.5 13.5" stroke="#d6be7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7.5 13.5L3.5 10.5L7.5 7.5" stroke="#d6be7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Swipe left/right to turn pages
                      </span>
                    </div>
                  )}
                </nav>
              )))}
            {/* ShowMore - navigation: Only one button at the bottom to exit this mode */}
            {showMore && (
              <div className="w-full flex justify-center mt-4">
                <Button
                  className="rounded-full px-6 py-2 text-base bg-accent/80 font-semibold"
                  onClick={() => setShowMore(false)}
                  aria-label="Hide All Verses"
                  autoFocus
                >
                  Show Less
                </Button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScriptureReader;
