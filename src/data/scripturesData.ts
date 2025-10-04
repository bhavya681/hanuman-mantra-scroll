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
    coverImage: "/hanumanchalisa.png",
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
    coverImage: "/kalbhairavasktakam.png",
    totalVerses: 8,
    verses: []
  },
  {
    id: "garud-puran",
    title: "Garud Puran",
    titleSanskrit: "गरुड़ पुराण",
    description: "Ancient scripture revealing the mysteries of death, afterlife, and karma. A dialogue between Lord Vishnu and Garuda about the soul's journey.",
    category: "Vedic Wisdom",
    coverImage: "/garudpuran.png",
    totalVerses: 50,
    verses: []
  },
  {
    id: "shiv-tandav-stotram",
    title: "Shiv Tandav Stotram",
    titleSanskrit: "शिव ताण्डव स्तोत्रम्",
    description: "Powerful hymn describing Lord Shiva's cosmic dance of creation and destruction. Composed by Ravana, it radiates divine energy and spiritual power.",
    category: "Mantras & Stotrams",
    coverImage: "/shivtandav.png",
    totalVerses: 16,
    verses: []
  },
  {
    id: "vishnu-sahasranamam",
    title: "Vishnu Sahasranamam",
    titleSanskrit: "विष्णु सहस्रनामम्",
    description: "The thousand names of Lord Vishnu, each revealing a divine attribute. Chanting bestows peace, prosperity, and liberation.",
    category: "Bhakti Collection",
    coverImage: "/vishnushashartranam.png",
    totalVerses: 108,
    verses: []
  },
  {
    id: "durga-saptashati",
    title: "Durga Saptashati",
    titleSanskrit: "दुर्गा सप्तशती",
    description: "Seven hundred verses celebrating Goddess Durga's victory over evil. A powerful text for invoking divine feminine energy and protection.",
    category: "Popular Scriptures",
    coverImage: "/durgasaptashi.png",
    totalVerses: 700,
    verses: []
  },
  // --- Added Scriptures Below ---
  {
    id: "shiv-panchakshari-stotram",
    title: "Shiv Panchakshari Stotram",
    titleSanskrit: "शिव पञ्चाक्षरी स्तोत्रम्",
    description: "A revered hymn dedicated to Lord Shiva, extolling the power of the five-syllable mantra 'Namah Shivaya'. Recitation brings peace, devotion, and spiritual upliftment.",
    category: "Mantras & Stotrams",
    coverImage: "/shivpanchakaristotaram.png",
    totalVerses: 6,
    verses: []
  },
  {
    id: "shani-chalisa",
    title: "Shani Chalisa",
    titleSanskrit: "शनि चालीसा",
    description: "Forty verses in praise of Lord Shani, the deity of justice and discipline. Chanting this Chalisa is believed to reduce the malefic effects of Saturn and bring relief from obstacles.",
    category: "Bhakti Collection",
    coverImage: "/shanichalisa.png",
    totalVerses: 40,
    verses: []
  },
  {
    id: "rudrashtakam",
    title: "Rudrashtakam",
    titleSanskrit: "रुद्राष्टकम्",
    description: "A powerful eight-verse hymn composed by Tulsidas in praise of Lord Shiva. It invokes the blessings of Rudra and is known for its spiritual potency.",
    category: "Mantras & Stotrams",
    coverImage: "/rudraakshtam.png",
    totalVerses: 8,
    verses: []
  },
  {
    id: "vishnu-stotram",
    title: "Vishnu Stotram",
    titleSanskrit: "विष्णु स्तोत्रम्",
    description: "A devotional hymn dedicated to Lord Vishnu, the preserver of the universe. Reciting this stotram brings peace, prosperity, and divine grace.",
    category: "Bhakti Collection",
    coverImage: "/vishnusotram.png",
    totalVerses: 12,
    verses: []
  },
  {
    id: "ram-stotram",
    title: "Ram Stotram",
    titleSanskrit: "राम स्तोत्रम्",
    description: "A sacred hymn in praise of Lord Rama, symbolizing righteousness and virtue. Chanting this stotram invokes the blessings of Lord Rama and brings inner strength.",
    category: "Bhakti Collection",
    coverImage: "/ramshotram.png",
    totalVerses: 10,
    verses: []
  },
  {
    id: "hanuman-ashtakam",
    title: "Hanuman Ashtakam",
    titleSanskrit: "हनुमान अष्टकम्",
    description: "An eight-verse hymn extolling the virtues and powers of Lord Hanuman. Recitation is believed to grant courage, wisdom, and protection from harm.",
    category: "Bhakti Collection",
    coverImage: "/hanumanashtkam.png",
    totalVerses: 8,
    verses: []
  }
];

export const categories = [
  "Popular Scriptures",
  "Bhakti Collection",
  "Vedic Wisdom",
  "Mantras & Stotrams"
];
