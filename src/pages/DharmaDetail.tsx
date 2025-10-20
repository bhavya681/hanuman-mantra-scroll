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

      {item.category === "gotra" ? (
        <div className="max-w-5xl mx-auto space-y-14">
          {/* 🪶 Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-[360px] object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="font-vedic text-4xl font-bold mb-1">{item.title}</h1>
              <p className="font-sanskrit text-primary/90 mb-3 text-lg">{item.titleSansgkrit}</p>
              <p className="text-sm max-w-3xl leading-relaxed opacity-90">{item.description}</p>
            </div>
          </motion.div>

          {/* 🌿 3-Part “What is Gotra” Section */}
          {item.id === "gotra-basics" && (
            <div className="space-y-16">
              {[
                {
                  title: "What is Gotra?",
                  img: "/gotra_scroll.png",
                  desc: `In Sanatana Dharma, Gotra represents one’s sacred spiritual lineage — a direct
                  ancestral connection tracing back to an enlightened Rishi. It symbolizes your
                  soul’s heritage, carrying divine wisdom through generations.`,
                },
                {
                  title: "How Gotra is Determined",
                  img: "/gotra_lineage.png",
                  desc: `Gotra is inherited paternally — passed from father to children. This lineage ensures
                  purity and continuity of Dharma. In Vedic rituals, Gotra identifies your ancient seer
                  and connects you to that cosmic ancestry.`,
                },
                {
                  title: "Gotra in Modern Life",
                  img: "/gotra_rituals.png",
                  desc: `Even today, Gotra defines our ritual identity during pujas and marriages.
                  By reciting one’s Gotra, individuals honor their origin and express gratitude
                  to their Rishi ancestors who preserved divine knowledge.`,
                },
              ].map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="rounded-xl overflow-hidden shadow-md border border-accent/20">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground font-vedic">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* ✨ Gotra Significance */}
          {item.id === "gotra-significance" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="text-center">
                <h2 className="text-3xl font-vedic font-bold mb-4 text-primary">The Deeper Significance of Gotra</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Gotra is not just a name — it’s a bridge connecting the modern soul to timeless
                  cosmic wisdom. Every Gotra preserves the vibration of its founding Rishi, guiding
                  descendants toward dharmic living and spiritual harmony.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <img
                  src="/7rishis.png"
                  className="rounded-xl object-cover shadow-lg"
                  alt="Gotra Tree"
                />
                <img
                  src="/gotra_ritual.png"
                  className="rounded-xl object-cover shadow-lg"
                  alt="Gotra Ritual"
                />
              </div>
            </motion.div>
          )}

          {/* 🔱 Gotra Origin – Sapta Rishi + Manu + Chart */}
          {item.id === "gotra-origin" && (
            <div className="space-y-12">
              <section className="text-center">
                <h2 className="text-3xl font-vedic font-bold mb-2">Origin of the Gotra System</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  The sacred Gotra system began with the <strong>Saptarishis</strong> — Seven eternal sages chosen
                  by Brahma to guide humanity. Every family lineage traces its ancestry to one of these seers.
                </p>
              </section>

              {/* 🪷 Sapta Rishi Chart */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-accent/20 shadow-lg max-w-md w-full">
                  <img
                    src="/last7.png"
                    alt="Saptarishi Chart"
                    className="w-full h-164 object-cover"
                  />
                </div>
              </div>

              {/* 🕉️ Rishi Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                {[
                  "Atri", "Bhrigu", "Kashyapa",
                  "Vashishta", "Vishwamitra", "Agastya", "Angirasa",
                ].map((rishi) => (
                  <div
                    key={rishi}
                    className="rounded-xl overflow-hidden border border-accent/20 bg-card/70 hover:shadow-xl transition-all"
                  >
                    <img
                      src={`/${rishi.toLowerCase()}.png`}
                      alt={rishi}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3 font-vedic text-lg">{rishi} Rishi</div>
                  </div>
                ))}
              </div>

              {/* ☀️ Manu & Surya Story */}
              <section className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-vedic font-bold mb-4 text-primary">
                    Manu & Surya — The First Lineage
                  </h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    From the brilliance of <strong>Surya</strong> emerged <strong>Vaivasvata Manu</strong>, the father
                    of mankind and founder of human civilization. Together, they established the first divine lineage.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden border border-accent/20 shadow-md">
                    <img src="/manu.png" alt="Manu" className="w-full h-64 object-cover" />
                    <div className="p-4 text-center">
                      <h3 className="font-vedic text-xl font-semibold mb-2">Vaivasvata Manu</h3>
                      <p className="text-muted-foreground text-sm">
                        The progenitor of mankind, born of Surya, restorer of Dharma after the flood.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-accent/20 shadow-md">
                    <img src="/surya.png" alt="Surya" className="w-full h-64 object-cover" />
                    <div className="p-4 text-center">
                      <h3 className="font-vedic text-xl font-semibold mb-2">Surya Deva</h3>
                      <p className="text-muted-foreground text-sm">
                        The solar deity, source of all vitality and consciousness, father of Vaivasvata Manu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/80 border border-accent/20 rounded-xl p-6 shadow-lg">
                  <p className="text-muted-foreground leading-relaxed text-center">
                    From <strong>Surya’s brilliance</strong> came the spark of creation, from
                    <strong> Manu’s wisdom</strong> came the moral law, and from the <strong>Saptarishis</strong> came
                    the divine guidance that still sustains humanity. <br />
                    Every <strong>Gotra</strong> is a luminous thread in this cosmic tapestry.
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>
      )  : item.category === "nakshatra" ? (
        <div className="max-w-5xl mx-auto space-y-16">
          {/* 🌠 Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20"
          >
            <img
              src={item.coverImage}
              alt={item.title}
              className="w-full h-[360px] object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white">
              <h1 className="font-vedic text-4xl font-bold mb-1">{item.title}</h1>
              <p className="font-sanskrit text-primary/90 mb-3 text-lg">
                {item.titleSanskrit}
              </p>
              <p className="text-sm max-w-3xl leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          </motion.div>

          {/* 🌕 1. What is Janma Nakshatra */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <img
              src="/images/nakshatra_moon.png"
              alt="Janma Nakshatra Moon"
              className="rounded-xl shadow-md border border-accent/20 object-cover"
            />
            <div>
              <h2 className="text-3xl font-vedic font-bold mb-4">
                What is Janma Nakshatra?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Janma Nakshatra</strong> (Birth Star) is the constellation
                in which the Moon was positioned at the time of your birth. It
                reveals your emotional nature, instincts, and destiny path.
                There are <strong>27 Nakshatras</strong>, each carrying its own
                energy, deity, and symbolism.
              </p>
            </div>
          </motion.section>

          {/* 🌌 2. How Nakshatra is Calculated */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-vedic font-bold mb-4">
                How Nakshatra is Calculated
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The zodiac (360°) is divided into 27 equal parts of 13°20′ each.
                The Moon’s placement within these divisions determines your
                <strong> Janma Nakshatra</strong>. It forms the base of your{" "}
                <strong>Dasha cycle</strong> and influences your mind, health,
                and relationships.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                The Nakshatras are grouped under the deities who rule them —
                such as Agni, Indra, Varuna, and Vishnu — representing cosmic
                principles of nature and consciousness.
              </p>
            </div>
            <img
              src="/images/nakshatra_chart.png"
              alt="Nakshatra Chart"
              className="rounded-xl shadow-md border border-accent/20 object-cover"
            />
          </motion.section>

          {/* 🌟 3. Nakshatra Characteristics */}
          <section className="space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-vedic font-bold text-primary mb-3">
                Characteristics of Nakshatras
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each Nakshatra reflects a unique vibration of cosmic energy that
                shapes your personality and purpose. Below are glimpses of their
                symbolic meanings.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Ashwini", img: "/images/nakshatras/ashwini.png", trait: "Swift, Healing, Adventurous" },
                { name: "Bharani", img: "/images/nakshatras/bharani.png", trait: "Creative, Intense, Passionate" },
                { name: "Krittika", img: "/images/nakshatras/krittika.png", trait: "Fiery, Protective, Leader" },
                { name: "Rohini", img: "/images/nakshatras/rohini.png", trait: "Attractive, Artistic, Fertile" },
                { name: "Mrigashira", img: "/images/nakshatras/mrigashira.png", trait: "Curious, Romantic, Seeker" },
                { name: "Punarvasu", img: "/images/nakshatras/punarvasu.png", trait: "Optimistic, Nurturing, Resilient" },
              ].map((n, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl overflow-hidden border border-accent/20 bg-card/70 shadow-md"
                >
                  <img
                    src={n.img}
                    alt={n.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-vedic text-lg font-semibold mb-1">
                      {n.name} Nakshatra
                    </h3>
                    <p className="text-muted-foreground text-sm">{n.trait}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 🪔 4. Vedic Stories and Symbolism */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-vedic font-bold text-center">
              Nakshatras in Vedic Mythology
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src="/images/nakshatra_story.png"
                alt="Nakshatra Mythology"
                className="rounded-xl shadow-md border border-accent/20"
              />
              <p className="text-muted-foreground leading-relaxed">
                According to the Vedas, Nakshatras are the <strong>divine wives
                of Chandra (the Moon)</strong>, each representing a unique mood,
                emotion, and energy of creation.  
                The Moon’s journey through these stars symbolizes the evolution
                of human consciousness.  
                These Nakshatras guide our karmic lessons, shaping the rhythm of
                destiny and life cycles.
              </p>
            </div>
          </motion.section>

          {/* 🌕 Summary */}
          <div className="bg-card/80 border border-accent/20 rounded-xl p-6 shadow-lg text-center">
            <p className="text-muted-foreground leading-relaxed">
              Your <strong>Janma Nakshatra</strong> is the cosmic fingerprint of
              your soul — the constellation that sings your birth vibration into
              the universe. Understanding it helps align your actions with your
              higher dharmic path.
            </p>
          </div>
        </div>
      ) : (
        // 🔹 Default Dharma Card for others
        <div className="max-w-3xl mx-auto bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow">
          <img src={item.coverImage} alt={item.title} className="w-full h-56 object-cover" />
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
