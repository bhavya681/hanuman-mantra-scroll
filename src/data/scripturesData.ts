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
        number: 0,
        sanskrit: "॥दोहा॥\nश्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि। बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥",
        transliteration: "॥ Doha ॥\nShri Guru charan saroj raj, nij man mukur sudhari. Baranau Raghubar bimal jasu, jo dayak phal chari.",
        meaning: "With the dust of my Guru’s lotus feet, I cleanse the mirror of my mind and describe the pure glory of Sri Ram, which bestows the four fruits of life — Dharma, Artha, Kama, and Moksha.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 1,
        sanskrit: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
        transliteration: "Buddhiheen tanu janike, sumirau Pavan Kumar. Bal buddhi vidya dehu mohi, harahu kalesh vikar.",
        meaning: "Knowing myself to be weak in intellect, I remember you, O son of the Wind. Please grant me strength, wisdom, and knowledge, and remove my sorrows and impurities.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 2,
        sanskrit: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
        transliteration: "Jai Hanuman gyaan gun saagar. Jai Kapis tihun lok ujagar.",
        meaning: "Victory to Hanuman, ocean of knowledge and virtue! Victory to the Lord of the Vanaras, who shines throughout the three worlds.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 3,
        sanskrit: "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
        transliteration: "Ram doot atulit bal dhaama. Anjani-putra Pawan-sut naama.",
        meaning: "You are the messenger of Lord Ram, the abode of immense strength, and known as Anjani’s son and the Wind God’s child.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 4,
        sanskrit: "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
        transliteration: "Mahaveer Vikram Bajrangi. Kumati nivar sumati ke sangi.",
        meaning: "O Great Hero, mighty and strong as lightning, you remove evil thoughts and bring wisdom and goodness.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 5,
        sanskrit: "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
        transliteration: "Kanchan varan viraaj subesa. Kaanan kundal kunchit kesa.",
        meaning: "Your golden form shines beautifully, adorned with earrings and curly hair.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 6,
        sanskrit: "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
        transliteration: "Haath bajra au dhwaja birajai. Kandhe moonj janeu saajai.",
        meaning: "You carry the mace and banner in your hands, and wear the sacred thread across your shoulder.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 7,
        sanskrit: "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
        transliteration: "Shankar suvan Kesari nandan. Tej prataap maha jag bandan.",
        meaning: "You are the son of Lord Shiva and Kesari’s child. Your glory and power are praised by the whole world.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 8,
        sanskrit: "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
        transliteration: "Vidya vaan guni ati chatur. Ram kaaj karibe ko aatur.",
        meaning: "You are wise, virtuous, and very clever, ever eager to serve Lord Ram.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 9,
        sanskrit: "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
        transliteration: "Prabhu charitra sunibe ko rasiya. Ram Lakhan Sita man basiya.",
        meaning: "You delight in listening to Lord Ram’s deeds and always dwell in the hearts of Ram, Lakshman, and Sita.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 10,
        sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
        transliteration: "Sookshma roop dhari Siyahi dikhawa. Bikat roop dhari Lank jarawa.",
        meaning: "You appeared before Sita in a small form and burned Lanka with your fierce form.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 11,
        sanskrit: "भीम रूप धरि असुर संहारे। रामचन्द्र के काज सवारे॥",
        transliteration: "Bheem roop dhari asur sanhare. Ramchandra ke kaaj savare.",
        meaning: "Taking a mighty form, you destroyed demons and completed Lord Ram’s divine tasks.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 12,
        sanskrit: "लाय संजीवन लखन जियाए। श्रीरघुबीर हरषि उर लाए॥",
        transliteration: "Laay Sanjeevan Lakhan jiyaye. Shri Raghubeer harashi ur laye.",
        meaning: "You brought the Sanjeevani herb to revive Lakshman, and Sri Ram joyfully embraced you.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 13,
        sanskrit: "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥",
        transliteration: "Raghupati keenhi bahut badaai. Tum mam priy Bharat hi sam bhai.",
        meaning: "Lord Ram praised you greatly, saying, ‘You are as dear to me as my brother Bharat.’",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 14,
        sanskrit: "सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं॥",
        transliteration: "Sahas badan tumharo jas gaavain. As kahi Shripati kanth lagavain.",
        meaning: "A thousand tongues sing your glory, said Lord Vishnu, as he embraced you warmly.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 15,
        sanskrit: "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥",
        transliteration: "Sanakadik Brahmad muni sa. Narad Sarad sahit Aheesa.",
        meaning: "Sages like Sanaka, Brahma, Narad, Saraswati, and Sheshnaag all sing your praises.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 16,
        sanskrit: "जम कुबेर दिगपाल जहाँ ते। कवि कोबिद कहि सके कहाँ ते॥",
        transliteration: "Yam Kuber Digpaal jahan te. Kavi kobid kahi sake kahan te.",
        meaning: "Even Yamraj, Kuber, and the guardians of the directions fail to describe your greatness fully.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 17,
        sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥",
        transliteration: "Tum upkaar Sugreevahin keenha. Ram milay raj pad deenha.",
        meaning: "You helped Sugriva by uniting him with Lord Ram, who then restored his kingdom.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 18,
        sanskrit: "तुम्हरो मन्त्र विभीषण माना। लंकेश्वर भए सब जग जाना॥",
        transliteration: "Tumharo mantra Vibhishan maana. Lankeshwar bhaye sab jag jaana.",
        meaning: "Vibhishan followed your advice and became the king of Lanka — this is known to the whole world.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 19,
        sanskrit: "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥",
        transliteration: "Yug sahasra yojan par bhaanu. Leelyo taahi madhur phal jaanu.",
        meaning: "You flew across the sky to swallow the sun, mistaking it for a sweet fruit.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 20,
        sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥",
        transliteration: "Prabhu mudrika meli mukh maheen. Jaladhi langhi gaye acharaj naheen.",
        meaning: "Carrying Lord Ram’s ring in your mouth, you crossed the ocean effortlessly — a miracle indeed.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 21,
        sanskrit: "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥",
        transliteration: "Durgam kaaj jagat ke jete. Sugam anugrah tumhare tete.",
        meaning: "All difficult tasks in the world become easy through your grace.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 22,
        sanskrit: "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥",
        transliteration: "Ram duaare tum rakhvare. Hot na aajna binu paisare.",
        meaning: "You guard the door of Lord Ram’s abode; no one enters without your permission.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 23,
        sanskrit: "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥",
        transliteration: "Sab sukh lahe tumhari sarna. Tum rakshak kahu ko dar na.",
        meaning: "Those who seek refuge in you find all happiness; under your protection, they fear nothing.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 24,
        sanskrit: "आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥",
        transliteration: "Aapan tej samhaaro aapai. Teenon lok haank te kaapai.",
        meaning: "You alone control your vast power; your roar makes all three worlds tremble.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 25,
        sanskrit: "भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥",
        transliteration: "Bhoot pishaach nikat nahi aavai. Mahaveer jab naam sunavai.",
        meaning: "Ghosts and evil spirits flee when the mighty name of Mahaveer Hanuman is spoken.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 26,
        sanskrit: "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥",
        transliteration: "Naasai rog harai sab peera. Japat nirantar Hanumat beera.",
        meaning: "All diseases and sufferings vanish when one continuously chants your name.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 27,
        sanskrit: "संकट तें हनुमान छुड़ावै। मन क्रम वचन ध्यान जो लावै॥",
        transliteration: "Sankat te Hanuman chhudavai. Man, kram, vachan dhyan jo lavai.",
        meaning: "Hanuman frees those from troubles who remember him with heart, action, and words.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 28,
        sanskrit: "सब पर राम तपस्वी राजा। तिनके काज सकल तुम साजा॥",
        transliteration: "Sab par Ram tapasvi raja. Tinke kaaj sakal tum saaja.",
        meaning: "Lord Ram, the supreme ascetic king, depends on you to complete all his divine tasks.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 29,
        sanskrit: "और मनोरथ जो कोई गावै। सोई अमित जीवन फल पावै॥",
        transliteration: "Aur manorath jo koi gaavai. Soi amit jeevan phal paavai.",
        meaning: "Whoever sings your praises with devotion gains endless blessings and fulfillment.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 30,
        sanskrit: "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥",
        transliteration: "Charon yug prataap tumhara. Hai prasiddh jagat ujiyara.",
        meaning: "Your glory shines through all four ages, spreading divine light throughout the world.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 31,
        sanskrit: "साधु संत के तुम रखवारे। असुर निकंदन नाम तुम्हारे॥",
        transliteration: "Sadhu sant ke tum rakhvare. Asur nikandan naam tumhare.",
        meaning: "You are the protector of saints and sages; your very name destroys evil.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 32,
        sanskrit: "अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥",
        transliteration: "Asht siddhi nau nidhi ke daata. As bar deen Janaki mata.",
        meaning: "Mother Sita has blessed you with the power to grant eight siddhis and nine types of wealth.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 33,
        sanskrit: "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥",
        transliteration: "Ram rasayan tumhare paasa. Sada raho Raghupati ke daasa.",
        meaning: "You hold the elixir of devotion to Lord Ram and forever remain his humble servant.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 34,
        sanskrit: "तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥",
        transliteration: "Tumhare bhajan Ram ko paavai. Janam janam ke dukh bisraavai.",
        meaning: "By singing your praises, one attains Lord Ram and forgets sorrows of many lifetimes.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 35,
        sanskrit: "अंत काल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥",
        transliteration: "Ant kaal Raghubar pur jaai. Jahan janm Haribhakt kahai.",
        meaning: "At life’s end, devotees who worship you attain the abode of Lord Ram and are reborn as his devotees.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 36,
        sanskrit: "और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥",
        transliteration: "Aur devta chitt na dharai. Hanumat sei sarb sukh karai.",
        meaning: "No other deity dwells in the devotee’s heart — all joy and peace come from serving Hanuman alone.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 37,
        sanskrit: "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥",
        transliteration: "Sankat katai mitai sab peera. Jo sumirai Hanumat Balbeera.",
        meaning: "All troubles vanish and pain is removed for those who remember the mighty and valiant Hanuman.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 38,
        sanskrit: "जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥",
        transliteration: "Jai Jai Jai Hanuman Gosai. Kripa karahu Gurudev ki naai.",
        meaning: "Glory, glory, glory to you, O Lord Hanuman! Shower your grace upon me as a true Guru does upon his disciple.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 39,
        sanskrit: "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥",
        transliteration: "Jo sat baar paath kar koi. Chhoothahi bandi maha sukh hoi.",
        meaning: "Whoever recites this Chalisa a hundred times is freed from bondage and attains supreme joy.",
        imageUrl: "/hanumanchalisa.png",
      },
      {
        number: 40,
        sanskrit: "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥\nतुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥\n॥दोहा॥\nपवन तनय संकट हरन, मंगल मूरति रूप। राम लखन सीता सहित, हृदय बसहु सुर भूप॥",
        transliteration: "Jo yah padhe Hanuman Chalisa, hoy siddhi saakhi Gaurisa. Tulsidas sada Hari chera, keejai Nath hriday mein dera. ॥ Doha ॥ Pavan tanay sankat haran, mangal moorat roop. Ram Lakhan Sita sahit, hriday basahu Sur Bhoop.",
        meaning: "Whoever reads this Hanuman Chalisa achieves success — Lord Shiva himself attests to this truth. Tulsidas, the humble devotee of Hari, prays — O Lord, dwell forever in my heart. O son of the Wind, remover of sorrows, embodiment of auspiciousness — abide in my heart with Ram, Lakshman, and Sita.",
        imageUrl: "/hanumanchalisa.png",
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
