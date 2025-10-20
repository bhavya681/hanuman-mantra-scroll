// Dharma Knowledge Data - Gotra, Nakshatra, Lagna, Artis, etc.

export interface DharmaCard {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  coverImage: string;
  category: string;
}

export const gotraData: DharmaCard[] = [
  {
    id: "gotra-basics",
    title: "What is Gotra?",
    titleSanskrit: "गोत्र क्या है?",
    description: "Understanding the ancient lineage system that traces ancestry through the paternal line to the great Rishis.",
    coverImage: "/logo.png",
    category: "gotra"
  },
  {
    id: "gotra-significance",
    title: "Significance of Gotra",
    titleSanskrit: "गोत्र का महत्व",
    description: "Learn why Gotra plays an important role in Vedic rituals, marriages, and maintaining genetic diversity.",
    coverImage: "/logo.png",
    category: "gotra"
  }
];

export const nakshatraData: DharmaCard[] = [
  {
    id: "nakshatra-intro",
    title: "Understanding Janma Nakshatra",
    titleSanskrit: "जन्म नक्षत्र",
    description: "Discover the 27 lunar mansions and how your birth star influences personality, destiny, and life path.",
    coverImage: "/logo.png",
    category: "nakshatra"
  },
  {
    id: "nakshatra-traits",
    title: "Nakshatra Characteristics",
    titleSanskrit: "नक्षत्र गुण",
    description: "Explore the unique traits, ruling deities, and planetary influences of each Nakshatra.",
    coverImage: "/logo.png",
    category: "nakshatra"
  }
];

export const lagnaData: DharmaCard[] = [
  {
    id: "lagna-basics",
    title: "What is Lagna?",
    titleSanskrit: "लग्न क्या है?",
    description: "Understanding the Ascendant sign and its crucial role in Vedic astrology and life predictions.",
    coverImage: "/logo.png",
    category: "lagna"
  },
  {
    id: "lagna-types",
    title: "12 Lagna Types",
    titleSanskrit: "बारह लग्न",
    description: "Learn about the twelve Ascendant signs and how they shape your personality and life journey.",
    coverImage: "/logo.png",
    category: "lagna"
  }
];

export const aartiData: DharmaCard[] = [
  {
    id: "ganesha-aarti",
    title: "Ganesh Aarti",
    titleSanskrit: "गणेश आरती",
    description: "Om Jai Ganesha Deva - The sacred prayer to Lord Ganesha, remover of obstacles.",
    coverImage: "/logo.png",
    category: "aarti"
  },
  {
    id: "shiva-aarti",
    title: "Shiv Aarti",
    titleSanskrit: "शिव आरती",
    description: "Om Jai Shiv Omkara - Divine hymn to Lord Shiva, the supreme consciousness.",
    coverImage: "/logo.png",
    category: "aarti"
  },
  {
    id: "durga-aarti",
    title: "Durga Aarti",
    titleSanskrit: "दुर्गा आरती",
    description: "Jai Ambe Gauri - Sacred offering to Goddess Durga, the divine mother.",
    coverImage: "/logo.png",
    category: "aarti"
  },
  {
    id: "hanuman-aarti",
    title: "Hanuman Aarti",
    titleSanskrit: "हनुमान आरती",
    description: "Aarti Kije Hanuman Lala Ki - Devotional hymn to Lord Hanuman.",
    coverImage: "/logo.png",
    category: "aarti"
  }
];

export const gitaData: DharmaCard[] = [
  {
    id: "gita-ch2-v47",
    title: "Karma Yoga - Chapter 2:47",
    titleSanskrit: "कर्मण्येवाधिकारस्ते",
    description: "You have the right to perform your duty, but not to the fruits of action.",
    coverImage: "/logo.png",
    category: "gita"
  },
  {
    id: "gita-ch3-v21",
    title: "Leadership - Chapter 3:21",
    titleSanskrit: "यद्यदाचरति श्रेष्ठः",
    description: "Whatever a great person does, common people follow in their footsteps.",
    coverImage: "/logo.png",
    category: "gita"
  }
];

export const rishiVarnaData: DharmaCard[] = [
  {
    id: "sapta-rishis",
    title: "The Seven Great Rishis",
    titleSanskrit: "सप्त ऋषि",
    description: "Learn about the Saptarishis - the seven cosmic sages who guide humanity.",
    coverImage: "/logo.png",
    category: "rishi"
  },
  {
    id: "varna-system",
    title: "Understanding the Four Varnas",
    titleSanskrit: "चार वर्ण",
    description: "Explore the concept of Brahmana, Kshatriya, Vaishya, and Shudra based on qualities.",
    coverImage: "/logo.png",
    category: "varna"
  }
];

export const vedicTimeData: DharmaCard[] = [
  {
    id: "tithi-system",
    title: "Understanding Tithi",
    titleSanskrit: "तिथि क्या है?",
    description: "Learn about the lunar day system and how it differs from solar calendar.",
    coverImage: "/logo.png",
    category: "vedic-time"
  },
  {
    id: "rashi-gochar",
    title: "Rashi Gochar - Planetary Transit",
    titleSanskrit: "राशि गोचर",
    description: "Understanding planetary movements and their impact on time and rituals.",
    coverImage: "/logo.png",
    category: "vedic-time"
  }
];

export const dharmaCategories = [
  { id: "gotra", name: "Gotra Knowledge", nameSanskrit: "गोत्र ज्ञान" },
  { id: "nakshatra", name: "Janma Nakshatra", nameSanskrit: "जन्म नक्षत्र" },
  { id: "lagna", name: "Lagna (Ascendant)", nameSanskrit: "लग्न" },
  { id: "aarti", name: "Artis for Devas", nameSanskrit: "देवों की आरती" },
  { id: "gita", name: "Bhagavad Gita Shlokas", nameSanskrit: "भगवद गीता श्लोक" },
  { id: "rishi-varna", name: "Rishis & Varnas", nameSanskrit: "ऋषि और वर्ण" },
  { id: "vedic-time", name: "Vedic Time Calculation", nameSanskrit: "वैदिक समय गणना" }
];
