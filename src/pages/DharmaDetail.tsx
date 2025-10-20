import { useParams, Link } from "react-router-dom";
import { 
  gotraData,
  nakshatraData,
  lagnaData,
  aartiData,
  gitaData,
  rishiVarnaData,
  vedicTimeData,
  DharmaCard as DharmaItem,
} from "@/data/dharmaData";
import { motion } from "framer-motion";

const allDharmaItems: DharmaItem[] = [
  ...gotraData,
  ...nakshatraData,
  ...lagnaData,
  ...aartiData,
  ...gitaData,
  ...rishiVarnaData,
  ...vedicTimeData,
];

const DharmaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = allDharmaItems.find((x) => x.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Not Found</h1>
          <p className="text-muted-foreground mb-4">No dharma entry for this id.</p>
          <Link to="/" className="text-primary underline">Back to Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 container mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-primary underline">← Back to Scriptures</Link>
      </div>

      {/* 🎴 Conditional Rendering for Gotra */}
      {item.category === "gotra" ? (
        <div className="max-w-4xl mx-auto space-y-10">

          {/* 🪶 Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={item.coverImage} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h1 className="font-vedic text-3xl font-bold mb-1">{item.title}</h1>
              <p className="font-sanskrit text-primary/80 mb-3">{item.titleSanskrit}</p>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>

          {/* 🧭 Content sections for each Gotra type */}
          {item.id === "gotra-basics" && (
            <>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">What is Gotra?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In <strong>Sanatana Dharma</strong>, <strong>Gotra</strong> represents one’s spiritual lineage — 
                  a sacred ancestral identity tracing back to a specific <strong>Rishi</strong> (seer).
                  It acts as the <em>spiritual DNA</em> of a family, carrying the wisdom and virtues 
                  inherited from that ancient sage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">How Gotra is Determined</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gotra is passed <strong>paternally</strong> — from father to son — maintaining a direct 
                  connection to the Rishi who founded that spiritual family. During rituals and marriages, 
                  reciting the Gotra identifies your spiritual ancestry and preserves purity by 
                  avoiding unions within the same lineage.
                </p>
              </section>
            </>
          )}

          {item.id === "gotra-significance" && (
            <>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Why Gotra Matters</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gotra is not just a name — it is a <strong>living connection</strong> to the sacred Rishis 
                  who first realized divine truth. It maintains the chain of Dharma, ensuring that 
                  families remember their origin and uphold Vedic ethics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Gotra in Rituals & Marriage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  During <em>Vivaha Samskara</em> (Vedic marriage), both individuals recite their Gotra and Pravara, 
                  acknowledging their ancestral seers. Marrying within the same Gotra is avoided to honor 
                  ancient biological and spiritual principles of diversity and sanctity.
                </p>
              </section>
            </>
          )}

          {item.id === "gotra-origin" && (
            <>
              {/* 🌿 Saptarishi Section */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Origin of the Gotra System</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Gotra system originated from the <strong>Saptarishis</strong> — the Seven Great Seers 
                  who were enlightened beings guiding early humanity. Each family lineage traces its origin 
                  to one of these eternal Rishis.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  {[
                    { name: "Atri", img: "/images/rishis/atri.jpg" },
                    { name: "Bhrigu", img: "/images/rishis/bhrigu.jpg" },
                    { name: "Kashyapa", img: "/images/rishis/kashyapa.jpg" },
                    { name: "Vashishta", img: "/images/rishis/vasishta.jpg" },
                    { name: "Vishwamitra", img: "/images/rishis/vishwamitra.jpg" },
                    { name: "Agastya", img: "/images/rishis/agastya.jpg" },
                    { name: "Angirasa", img: "/images/rishis/angirasa.jpg" },
                  ].map((rishi) => (
                    <div key={rishi.name} className="bg-card/70 rounded-lg border border-accent/20 overflow-hidden hover:shadow-md transition-all">
                      <img src={rishi.img} alt={rishi.name} className="w-full h-32 object-cover" />
                      <div className="p-2 font-vedic">{rishi.name}</div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  These seven are considered the <strong>founders of all Gotras</strong>, from whom humanity’s spiritual 
                  and biological lineages evolved.
                </p>
              </section>

              {/* ☀️ Storytelling Section — Manu & Surya */}
              <section>
                <h2 className="text-2xl font-bold mb-3 text-foreground">The Story of Manu & Surya — The First Lineage</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-8"
                >
                  {/* Scene 1 */}
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img src="/images/vedic/manu.jpg" alt="Manu" className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="font-vedic text-xl font-semibold mb-2">Scene 1 — Birth of Manu</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong>Vaivasvata Manu</strong>, son of <strong>Surya</strong> and <strong>Sanjna</strong>, 
                        was the first human progenitor — the father of mankind and the restorer of Dharma 
                        after the great cosmic flood. His wisdom shaped the moral law for all ages.
                      </p>
                    </div>
                  </motion.div>

                  {/* Scene 2 */}
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img src="/images/vedic/surya.jpg" alt="Surya" className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="font-vedic text-xl font-semibold mb-2">Scene 2 — Surya, The Eternal Ancestor</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong>Surya</strong>, the solar deity, is the divine source of energy and consciousness.  
                        Through Manu, he became the ancestor of the <strong>Suryavansha</strong> (Solar Dynasty), 
                        from which great kings like <strong>Ikshvaku</strong> and <strong>Rama</strong> descended.
                      </p>
                    </div>
                  </motion.div>

                  {/* Scene 3 */}
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="p-6">
                      <h3 className="font-vedic text-xl font-semibold mb-2">Scene 3 — The Cosmic Lineage</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        From Surya’s brilliance came the first light of life; from Manu’s wisdom, 
                        the first civilization. The <strong>Saptarishis</strong> carried that light forward, 
                        shaping humanity’s spiritual evolution.  
                        Your <strong>Gotra</strong> connects you to that unbroken cosmic chain.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </section>
            </>
          )}
        </div>
      ) : (
        /* 🪔 Default Dharma Detail */
        <div className="max-w-3xl mx-auto bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow">
          <div className="h-56 w-full overflow-hidden">
            <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-5">
            <h1 className="font-vedic text-2xl font-bold mb-1">{item.title}</h1>
            <p className="font-sanskrit text-primary/80 mb-3">{item.titleSanskrit}</p>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            <div className="text-xs text-muted-foreground">Category: {item.category}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DharmaDetail;
