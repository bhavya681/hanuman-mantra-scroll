import { ScriptureCard } from "@/components/ScriptureCard";
import { scripturesData, categories } from "@/data/scripturesData";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";

const ScriptureLibrary = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <header className="border-b-2 border-accent/20 bg-card/40 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent" />
                <img src={lotusMandala} alt="Sacred Lotus" className="w-12 h-12 opacity-70 animate-divine-pulse" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent" />
              </div>
              
              <h1 className="font-vedic text-4xl md:text-6xl font-bold text-foreground mb-3">
                Divya Grantha Library
              </h1>
              <p className="font-sanskrit text-2xl md:text-3xl text-primary mb-4">
                दिव्य ग्रन्थ पुस्तकालय
              </p>
              <p className="font-ancient text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto">
                A sacred digital sanctuary of Vedic wisdom, where ancient scriptures come alive through immersive storytelling and divine artistry.
              </p>
            </div>
          </div>
        </header>

        {/* Scripture Collections */}
        <main className="container mx-auto px-4 py-12">
          {categories.map((category) => {
            const categoryScriptures = scripturesData.filter(
              (scripture) => scripture.category === category
            );

            if (categoryScriptures.length === 0) return null;

            return (
              <section key={category} className="mb-16">
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="font-vedic text-2xl md:text-3xl font-bold text-foreground">
                      {category}
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>
                  <p className="font-ancient text-sm text-muted-foreground italic">
                    Explore the sacred texts of this divine collection
                  </p>
                </div>

                {/* Scripture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryScriptures.map((scripture) => (
                    <ScriptureCard
                      key={scripture.id}
                      id={scripture.id}
                      title={scripture.title}
                      titleSanskrit={scripture.titleSanskrit}
                      description={scripture.description}
                      coverImage={scripture.coverImage}
                      totalVerses={scripture.totalVerses}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t-2 border-accent/20 bg-card/40 backdrop-blur-md mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
                <img src={lotusMandala} alt="Sacred Lotus" className="w-8 h-8 opacity-60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
              </div>
              <p className="font-ancient text-sm text-muted-foreground">
                May the sacred wisdom illuminate your path
              </p>
              <p className="font-sanskrit text-xs text-muted-foreground/60 mt-2">
                ॐ शान्तिः शान्तिः शान्तिः
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ScriptureLibrary;
