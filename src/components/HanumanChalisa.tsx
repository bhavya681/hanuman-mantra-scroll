import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VerseCard } from "./VerseCard";
import { Button } from "./ui/button";
import hanumanHeroImg from "@/assets/hanuman-hero.jpg";
import hanumanRamaImg from "@/assets/hanuman-rama.jpg";

interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  imageUrl?: string;
}

const verses: Verse[] = [
  {
    number: 0,
    sanskrit: "॥दोहा॥\nश्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि। बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥",
    transliteration: "॥ Doha ॥\nShri Guru charan saroj raj, nij man mukur sudhari. Baranau Raghubar bimal jasu, jo dayak phal chari.",
    meaning: "With the dust of my Guru’s lotus feet, I cleanse the mirror of my mind and describe the pure glory of Sri Ram, which bestows the four fruits of life — Dharma, Artha, Kama, and Moksha.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 1,
    sanskrit: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
    transliteration: "Buddhiheen tanu janike, sumirau Pavan Kumar. Bal buddhi vidya dehu mohi, harahu kalesh vikar.",
    meaning: "Knowing myself to be weak in intellect, I remember you, O son of the Wind. Please grant me strength, wisdom, and knowledge, and remove my sorrows and impurities.",
    imageUrl: hanumanHeroImg,
  },
  {
    number: 2,
    sanskrit: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
    transliteration: "Jai Hanuman gyaan gun saagar. Jai Kapis tihun lok ujagar.",
    meaning: "Victory to Hanuman, ocean of knowledge and virtue! Victory to the Lord of the Vanaras, who shines throughout the three worlds.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 3,
    sanskrit: "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
    transliteration: "Ram doot atulit bal dhaama. Anjani-putra Pawan-sut naama.",
    meaning: "You are the messenger of Lord Ram, the abode of immense strength, and known as Anjani’s son and the Wind God’s child.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 4,
    sanskrit: "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
    transliteration: "Mahaveer Vikram Bajrangi. Kumati nivar sumati ke sangi.",
    meaning: "O Great Hero, mighty and strong as lightning, you remove evil thoughts and bring wisdom and goodness.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 5,
    sanskrit: "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
    transliteration: "Kanchan varan viraaj subesa. Kaanan kundal kunchit kesa.",
    meaning: "Your golden form shines beautifully, adorned with earrings and curly hair.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 6,
    sanskrit: "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
    transliteration: "Haath bajra au dhwaja birajai. Kandhe moonj janeu saajai.",
    meaning: "You carry the mace and banner in your hands, and wear the sacred thread across your shoulder.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 7,
    sanskrit: "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
    transliteration: "Shankar suvan Kesari nandan. Tej prataap maha jag bandan.",
    meaning: "You are the son of Lord Shiva and Kesari’s child. Your glory and power are praised by the whole world.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 8,
    sanskrit: "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
    transliteration: "Vidya vaan guni ati chatur. Ram kaaj karibe ko aatur.",
    meaning: "You are wise, virtuous, and very clever, ever eager to serve Lord Ram.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 9,
    sanskrit: "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
    transliteration: "Prabhu charitra sunibe ko rasiya. Ram Lakhan Sita man basiya.",
    meaning: "You delight in listening to Lord Ram’s deeds and always dwell in the hearts of Ram, Lakshman, and Sita.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 10,
    sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
    transliteration: "Sookshma roop dhari Siyahi dikhawa. Bikat roop dhari Lank jarawa.",
    meaning: "You appeared before Sita in a small form and burned Lanka with your fierce form.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 11,
    sanskrit: "भीम रूप धरि असुर संहारे। रामचन्द्र के काज सवारे॥",
    transliteration: "Bheem roop dhari asur sanhare. Ramchandra ke kaaj savare.",
    meaning: "Taking a mighty form, you destroyed demons and completed Lord Ram’s divine tasks.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 12,
    sanskrit: "लाय संजीवन लखन जियाए। श्रीरघुबीर हरषि उर लाए॥",
    transliteration: "Laay Sanjeevan Lakhan jiyaye. Shri Raghubeer harashi ur laye.",
    meaning: "You brought the Sanjeevani herb to revive Lakshman, and Sri Ram joyfully embraced you.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 13,
    sanskrit: "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥",
    transliteration: "Raghupati keenhi bahut badaai. Tum mam priy Bharat hi sam bhai.",
    meaning: "Lord Ram praised you greatly, saying, ‘You are as dear to me as my brother Bharat.’",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 14,
    sanskrit: "सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं॥",
    transliteration: "Sahas badan tumharo jas gaavain. As kahi Shripati kanth lagavain.",
    meaning: "A thousand tongues sing your glory, said Lord Vishnu, as he embraced you warmly.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 15,
    sanskrit: "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥",
    transliteration: "Sanakadik Brahmad muni sa. Narad Sarad sahit Aheesa.",
    meaning: "Sages like Sanaka, Brahma, Narad, Saraswati, and Sheshnaag all sing your praises.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 16,
    sanskrit: "जम कुबेर दिगपाल जहाँ ते। कवि कोबिद कहि सके कहाँ ते॥",
    transliteration: "Yam Kuber Digpaal jahan te. Kavi kobid kahi sake kahan te.",
    meaning: "Even Yamraj, Kuber, and the guardians of the directions fail to describe your greatness fully.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 17,
    sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥",
    transliteration: "Tum upkaar Sugreevahin keenha. Ram milay raj pad deenha.",
    meaning: "You helped Sugriva by uniting him with Lord Ram, who then restored his kingdom.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 18,
    sanskrit: "तुम्हरो मन्त्र विभीषण माना। लंकेश्वर भए सब जग जाना॥",
    transliteration: "Tumharo mantra Vibhishan maana. Lankeshwar bhaye sab jag jaana.",
    meaning: "Vibhishan followed your advice and became the king of Lanka — this is known to the whole world.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 19,
    sanskrit: "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥",
    transliteration: "Yug sahasra yojan par bhaanu. Leelyo taahi madhur phal jaanu.",
    meaning: "You flew across the sky to swallow the sun, mistaking it for a sweet fruit.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 20,
    sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥",
    transliteration: "Prabhu mudrika meli mukh maheen. Jaladhi langhi gaye acharaj naheen.",
    meaning: "Carrying Lord Ram’s ring in your mouth, you crossed the ocean effortlessly — a miracle indeed.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 21,
    sanskrit: "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥",
    transliteration: "Durgam kaaj jagat ke jete. Sugam anugrah tumhare tete.",
    meaning: "All difficult tasks in the world become easy through your grace.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 22,
    sanskrit: "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥",
    transliteration: "Ram duaare tum rakhvare. Hot na aajna binu paisare.",
    meaning: "You guard the door of Lord Ram’s abode; no one enters without your permission.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 23,
    sanskrit: "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥",
    transliteration: "Sab sukh lahe tumhari sarna. Tum rakshak kahu ko dar na.",
    meaning: "Those who seek refuge in you find all happiness; under your protection, they fear nothing.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 24,
    sanskrit: "आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥",
    transliteration: "Aapan tej samhaaro aapai. Teenon lok haank te kaapai.",
    meaning: "You alone control your vast power; your roar makes all three worlds tremble.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 25,
    sanskrit: "भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥",
    transliteration: "Bhoot pishaach nikat nahi aavai. Mahaveer jab naam sunavai.",
    meaning: "Ghosts and evil spirits flee when the mighty name of Mahaveer Hanuman is spoken.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 26,
    sanskrit: "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥",
    transliteration: "Naasai rog harai sab peera. Japat nirantar Hanumat beera.",
    meaning: "All diseases and sufferings vanish when one continuously chants your name.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 27,
    sanskrit: "संकट तें हनुमान छुड़ावै। मन क्रम वचन ध्यान जो लावै॥",
    transliteration: "Sankat te Hanuman chhudavai. Man, kram, vachan dhyan jo lavai.",
    meaning: "Hanuman frees those from troubles who remember him with heart, action, and words.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 28,
    sanskrit: "सब पर राम तपस्वी राजा। तिनके काज सकल तुम साजा॥",
    transliteration: "Sab par Ram tapasvi raja. Tinke kaaj sakal tum saaja.",
    meaning: "Lord Ram, the supreme ascetic king, depends on you to complete all his divine tasks.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 29,
    sanskrit: "और मनोरथ जो कोई गावै। सोई अमित जीवन फल पावै॥",
    transliteration: "Aur manorath jo koi gaavai. Soi amit jeevan phal paavai.",
    meaning: "Whoever sings your praises with devotion gains endless blessings and fulfillment.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 30,
    sanskrit: "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥",
    transliteration: "Charon yug prataap tumhara. Hai prasiddh jagat ujiyara.",
    meaning: "Your glory shines through all four ages, spreading divine light throughout the world.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 31,
    sanskrit: "साधु संत के तुम रखवारे। असुर निकंदन नाम तुम्हारे॥",
    transliteration: "Sadhu sant ke tum rakhvare. Asur nikandan naam tumhare.",
    meaning: "You are the protector of saints and sages; your very name destroys evil.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 32,
    sanskrit: "अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥",
    transliteration: "Asht siddhi nau nidhi ke daata. As bar deen Janaki mata.",
    meaning: "Mother Sita has blessed you with the power to grant eight siddhis and nine types of wealth.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 33,
    sanskrit: "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥",
    transliteration: "Ram rasayan tumhare paasa. Sada raho Raghupati ke daasa.",
    meaning: "You hold the elixir of devotion to Lord Ram and forever remain his humble servant.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 34,
    sanskrit: "तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥",
    transliteration: "Tumhare bhajan Ram ko paavai. Janam janam ke dukh bisraavai.",
    meaning: "By singing your praises, one attains Lord Ram and forgets sorrows of many lifetimes.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 35,
    sanskrit: "अंत काल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥",
    transliteration: "Ant kaal Raghubar pur jaai. Jahan janm Haribhakt kahai.",
    meaning: "At life’s end, devotees who worship you attain the abode of Lord Ram and are reborn as his devotees.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 36,
    sanskrit: "और मनोरथ जो कोई गावै। सोई अमित जीवन फल पावै॥",
    transliteration: "Aur manorath jo koi gaavai. Soi amit jeevan phal paavai.",
    meaning: "Whoever sings of you with devotion receives countless blessings in life.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 37,
    sanskrit: "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥",
    transliteration: "Jo sat baar paath kar koi. Chhoothahi bandi maha sukh hoi.",
    meaning: "Whoever recites this Chalisa a hundred times is freed from bondage and gains great joy.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 38,
    sanskrit: "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥",
    transliteration: "Jo yah padhe Hanuman Chalisa. Hoy siddhi saakhi Gaurisa.",
    meaning: "Whoever reads this Hanuman Chalisa gains success; Lord Shiva himself bears witness to this truth.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 39,
    sanskrit: "तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥",
    transliteration: "Tulsidas sada Hari chera. Keejai Naath hriday mein dera.",
    meaning: "Tulsidas, the eternal servant of Hari, prays — O Lord, reside forever in my heart.",
    imageUrl: hanumanRamaImg,
  },
  {
    number: 40,
    sanskrit: "॥दोहा॥\nपवन तनय संकट हरन, मंगल मूरति रूप। राम लखन सीता सहित, हृदय बसहु सुर भूप॥",
    transliteration: "॥ Doha ॥\nPavan tanay sankat haran, mangal moorat roop. Ram Lakhan Sita sahit, hriday basahu sur bhoop.",
    meaning: "O Son of the Wind, remover of sorrows and embodiment of auspiciousness — may you dwell in my heart, along with Lord Ram, Lakshman, and Sita.",
    imageUrl: hanumanRamaImg,
  }  
];

export const HanumanChalisa = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + verses.length) % verses.length);
  };

  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-verse-reveal">
            <div className="inline-block p-6 bg-gradient-divine rounded-2xl shadow-2xl mb-4">
              <h1 className="font-vedic text-4xl md:text-5xl font-bold text-primary-foreground">
                Hanuman Chalisa
              </h1>
              <p className="font-sanskrit text-2xl md:text-3xl text-primary-foreground/90 mt-2">
                हनुमान चालीसा
              </p>
            </div>
            <p className="font-ancient text-lg text-muted-foreground italic max-w-2xl mx-auto mt-4">
              Forty verses in praise of Lord Hanuman, composed by Goswami Tulsidas
            </p>
          </div>

          {/* Verse Display */}
          <div className="mb-8 animate-page-turn" key={currentVerse}>
            <VerseCard {...verses[currentVerse]} />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <Button
              onClick={prevVerse}
              variant="secondary"
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-vedic">Previous</span>
            </Button>

            <div className="px-6 py-3 bg-card border-2 border-accent/30 rounded-lg">
              <span className="font-vedic text-sm text-muted-foreground">
                {currentVerse + 1} / {verses.length}
              </span>
            </div>

            <Button
              onClick={nextVerse}
              variant="secondary"
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <span className="font-vedic">Next</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Verse Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {verses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVerse(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${
                    index === currentVerse
                      ? "bg-primary w-8 shadow-lg"
                      : "bg-muted hover:bg-accent"
                  }
                `}
                aria-label={`Go to verse ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
