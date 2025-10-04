export interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
}

export interface Scripture {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  category: string;
  coverImage: string;
  verses: Verse[];
  totalVerses: number;
}

export const scripturesData: Scripture[] = [
  {
    id: "hanuman-chalisa",
    title: "Hanuman Chalisa",
    titleSanskrit: "हनुमान चालीसा",
    description: "Sacred 40 verses in praise of Lord Hanuman, composed by Tulsidas. A powerful devotional hymn that invokes strength, courage, and divine protection.",
    category: "Bhakti Collection",
    coverImage: "/src/assets/hanuman-hero.jpg",
    totalVerses: 43,
    verses: [
      {
        number: 1,
        sanskrit: "श्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि।\nबरनउं रघुबर बिमल जसु, जो दायक फल चारि।।",
        transliteration: "Śrī guru carana saroja raja, nija mana mukura sudhāri.\nBaranauṁ raghubara bimala jasu, jo dāyaka phala cāri.",
        meaning: "Cleansing the mirror of my mind with the dust of my Guru's lotus feet, I narrate the pure glory of Lord Rama, who bestows the four fruits of life: dharma, artha, kama, and moksha.",
        imageUrl: "/src/assets/hanuman-hero.jpg"
      },
      {
        number: 2,
        sanskrit: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।\nबल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार।।",
        transliteration: "Buddhihīna tanu jānike, sumirauṁ pavana-kumāra.\nBala buddhi bidyā dehu mohiṁ, harahu kalesa bikāra.",
        meaning: "Knowing my body to be devoid of intelligence, I remember you, son of the Wind God. Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.",
        imageUrl: "/src/assets/hanuman-rama.jpg"
      },
      {
        number: 3,
        sanskrit: "जय हनुमान ज्ञान गुन सागर।\nजय कपीस तिहुं लोक उजागर।।",
        transliteration: "Jaya hanumāna gyāna guna sāgara.\nJaya kapīsa tihuṁ loka ujāgara.",
        meaning: "Victory to Hanuman, the ocean of wisdom and virtues. Victory to the monkey lord, who illuminates the three worlds.",
        imageUrl: "/src/assets/hanuman-hero.jpg"
      },
      {
        number: 4,
        sanskrit: "राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा।।",
        transliteration: "Rāma dūta atulita bala dhāmā.\nAñjani-putra pavanasuta nāmā.",
        meaning: "You are Ram's messenger and the abode of incomparable strength. You are known as Anjani's son and the son of the Wind God.",
        imageUrl: "/src/assets/hanuman-rama.jpg"
      }
    ]
  },
  {
    id: "kalbhairav-ashtakam",
    title: "Kal Bhairav Ashtakam",
    titleSanskrit: "कालभैरवाष्टकम्",
    description: "Eight sacred verses dedicated to Lord Kaal Bhairav, the fierce manifestation of Shiva. Grants protection, removes fear, and bestows spiritual wisdom.",
    category: "Vedic Wisdom",
    coverImage: "/src/assets/lotus-mandala.png",
    totalVerses: 8,
    verses: []
  },
  {
    id: "garud-puran",
    title: "Garud Puran",
    titleSanskrit: "गरुड़ पुराण",
    description: "Ancient scripture revealing the mysteries of death, afterlife, and karma. A dialogue between Lord Vishnu and Garuda about the soul's journey.",
    category: "Vedic Wisdom",
    coverImage: "/src/assets/parchment-bg.jpg",
    totalVerses: 50,
    verses: []
  },
  {
    id: "shiv-tandav-stotram",
    title: "Shiv Tandav Stotram",
    titleSanskrit: "शिव ताण्डव स्तोत्रम्",
    description: "Powerful hymn describing Lord Shiva's cosmic dance of creation and destruction. Composed by Ravana, it radiates divine energy and spiritual power.",
    category: "Mantras & Stotrams",
    coverImage: "/src/assets/lotus-mandala.png",
    totalVerses: 16,
    verses: []
  },
  {
    id: "vishnu-sahasranamam",
    title: "Vishnu Sahasranamam",
    titleSanskrit: "विष्णु सहस्रनामम्",
    description: "The thousand names of Lord Vishnu, each revealing a divine attribute. Chanting bestows peace, prosperity, and liberation.",
    category: "Bhakti Collection",
    coverImage: "/src/assets/parchment-bg.jpg",
    totalVerses: 108,
    verses: []
  },
  {
    id: "durga-saptashati",
    title: "Durga Saptashati",
    titleSanskrit: "दुर्गा सप्तशती",
    description: "Seven hundred verses celebrating Goddess Durga's victory over evil. A powerful text for invoking divine feminine energy and protection.",
    category: "Popular Scriptures",
    coverImage: "/src/assets/lotus-mandala.png",
    totalVerses: 700,
    verses: []
  }
];

export const categories = [
  "Popular Scriptures",
  "Bhakti Collection",
  "Vedic Wisdom",
  "Mantras & Stotrams"
];
