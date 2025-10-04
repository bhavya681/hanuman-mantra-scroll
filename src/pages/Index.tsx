import { ScriptureNavigation } from "@/components/ScriptureNavigation";
import { HanumanChalisa } from "@/components/HanumanChalisa";
import parchmentBg from "@/assets/parchment-bg.jpg";
import lotusMandala from "@/assets/lotus-mandala.png";

const Index = () => {
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
        <header className="border-b-2 border-accent/20 bg-card/40 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center">
              <h1 className="font-vedic text-3xl md:text-4xl font-bold text-foreground mb-2">
                Sanskrit Scripture Encyclopedia
              </h1>
              <p className="font-sanskrit text-xl md:text-2xl text-primary">
                संस्कृत शास्त्र विश्वकोश
              </p>
              <p className="font-ancient text-sm text-muted-foreground mt-2 italic">
                Sacred Vedic Texts in Digital Manuscript Form
              </p>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <ScriptureNavigation />

        {/* Main Scripture Content */}
        <main>
          <HanumanChalisa />
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

export default Index;
