import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type AppLanguage = "en" | "hi" | "mr";

interface LanguageContextValue {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// Minimal translation overlay. Keys mirror UI strings and labels used in reader.
// Verse-specific translations for Hanuman Chalisa
const translations: Record<AppLanguage, Record<string, string>> = {
  en: {
    library: "Library",
    back: "Back",
    showMore: "Show More",
    showLess: "Show Less",
    meaning: "Meaning",
    transliteration: "Transliteration",
    verse: "Verse",
    doha: "Doha",
    languageLabel: "Language",
    // Hanuman Chalisa translations
    "hanuman-chalisa-0-meaning": "With the dust of my Guru's lotus feet, I cleanse the mirror of my mind and describe the pure glory of Sri Ram, which bestows the four fruits of life — Dharma, Artha, Kama, and Moksha.",
    "hanuman-chalisa-0-transliteration": "॥ Doha ॥\nShri Guru charan saroj raj, nij man mukur sudhari. Baranau Raghubar bimal jasu, jo dayak phal chari.",
    "hanuman-chalisa-1-meaning": "Knowing myself to be weak in intellect, I remember you, O son of the Wind. Please grant me strength, wisdom, and knowledge, and remove my sorrows and impurities.",
    "hanuman-chalisa-1-transliteration": "Buddhiheen tanu janike, sumirau Pavan Kumar. Bal buddhi vidya dehu mohi, harahu kalesh vikar.",
    "hanuman-chalisa-2-meaning": "Victory to Hanuman, ocean of knowledge and virtue! Victory to the Lord of the Vanaras, who shines throughout the three worlds.",
    "hanuman-chalisa-2-transliteration": "Jai Hanuman gyaan gun saagar. Jai Kapis tihun lok ujagar.",
    "hanuman-chalisa-3-meaning": "You are the messenger of Lord Ram, the abode of immense strength, and known as Anjani's son and the Wind God's child.",
    "hanuman-chalisa-3-transliteration": "Ram doot atulit bal dhaama. Anjani-putra Pawan-sut naama.",
    "hanuman-chalisa-4-meaning": "O Great Hero, mighty and strong as lightning, you remove evil thoughts and bring wisdom and goodness.",
    "hanuman-chalisa-4-transliteration": "Mahaveer Vikram Bajrangi. Kumati nivar sumati ke sangi.",
    "hanuman-chalisa-5-meaning": "Your golden form shines beautifully, adorned with earrings and curly hair.",
    "hanuman-chalisa-5-transliteration": "Kanchan varan viraaj subesa. Kaanan kundal kunchit kesa.",
    "hanuman-chalisa-6-meaning": "You carry the mace and banner in your hands, and wear the sacred thread across your shoulder.",
    "hanuman-chalisa-6-transliteration": "Haath bajra au dhwaja birajai. Kandhe moonj janeu saajai.",
    "hanuman-chalisa-7-meaning": "You are the son of Lord Shiva and Kesari's child. Your glory and power are praised by the whole world.",
    "hanuman-chalisa-7-transliteration": "Shankar suvan Kesari nandan. Tej prataap maha jag bandan.",
    "hanuman-chalisa-8-meaning": "You are wise, virtuous, and very clever, ever eager to serve Lord Ram.",
    "hanuman-chalisa-8-transliteration": "Vidya vaan guni ati chatur. Ram kaaj karibe ko aatur.",
    "hanuman-chalisa-9-meaning": "You delight in listening to Lord Ram's deeds and always dwell in the hearts of Ram, Lakshman, and Sita.",
    "hanuman-chalisa-9-transliteration": "Prabhu charitra sunibe ko rasiya. Ram Lakhan Sita man basiya.",
    "hanuman-chalisa-10-meaning": "You appeared before Sita in a small form and burned Lanka with your fierce form.",
    "hanuman-chalisa-10-transliteration": "Sookshma roop dhari Siyahi dikhawa. Bikat roop dhari Lank jarawa.",
    // Hanuman Ashtakam meanings
    "hanuman-ashtakam-1-meaning": "As a child, you swallowed the Sun, plunging the three worlds into darkness. When the gods prayed, you released it, relieving their distress. O Hanuman! The whole world knows you as the remover of all troubles.",
    "hanuman-ashtakam-1-transliteration": "Baala samay ravi bhaksha liyo tab, teenahu loka bhayo andhiyaaro.\nTaahi so traas bhayo jag ko, yah sankat kaahu so jaat na taaro.\nDevan aani kari binati tab, chhaadi diyo ravi kasht nivaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-2-meaning": "When Sugriva was terrified of Bali, you guided him faithfully. You even took a Brahmin’s form to help and relieve your devotee’s sorrow. Truly, O Hanuman, you are the remover of all distress.",
    "hanuman-ashtakam-2-transliteration": "Baali ki traas kapees basai giri, jaat mahaaprabhu panth nihaaro.\nChaunki mahaamuni saap diyo tab, chaahiye kaun bichaar bichaaro.\nKai-dwij roop liyaay mahaaprabhu, so tum daas ke sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-3-meaning": "When none could find Sita, you crossed the mighty ocean and brought her news back to Sri Ram, saving the mission and uplifting all. You are truly the life-saver and remover of distress.",
    "hanuman-ashtakam-3-transliteration": "Angad ke sang len gaye siya, khoj kapees yah bain uchaaro.\nJeevat na bachiho hum so ju, bina sudhi laaye ihaan pagu dhaaro.\nHeri thake tat sindhu sabe tab, laaye siya sudhi praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-4-meaning": "When Sita was tormented by Ravana, you brought her Lord’s ring and gave her hope. You destroyed the demons in Lanka and became the remover of her sorrow.",
    "hanuman-ashtakam-4-transliteration": "Raavan traas daee siya ko sab, raakshasi son kahi sok nivaaaro.\nTaahi samay hanumaan mahaaprabhu, jaaye mahaa rajaneechara maaro.\nChaahat siya asok son aagi su, dai prabhu mudrika sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-5-meaning": "When Lakshman was struck by Ravana’s son and lay lifeless, you brought the Sanjeevani mountain itself and revived him. O Hanuman, you truly save life itself.",
    "hanuman-ashtakam-5-transliteration": "Baan laagyo ur lachhiman ke tab, praan taje soot raavan maaro.\nLai grih baidh sushein samet, tabai giri dron su beer upaaro.\nAani sajivan haath diye tab, lachhiman ke tum praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-6-meaning": "When Ravana used the serpent weapon, binding Sri Ram and all warriors, you brought Garuda, freeing them and removing the great crisis. Who does not know you, O Hanuman, remover of troubles?",
    "hanuman-ashtakam-6-transliteration": "Raavan yudh ajaan kiyo tab, naag ki faans sabai sir daaro.\nShri raghunaath samet sabai dal, moh bhayo yah sankat bhaaro.\nAani khages tabai hanuman ju, bandhan kaati sutraas nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-7-meaning": "When Ahiravana took Lord Ram and Lakshman to the underworld, you went there, destroyed the demon army, and rescued them. Thus, you removed their crisis too.",
    "hanuman-ashtakam-7-transliteration": "Bandhu samet jabai ahiraavan, lai raghunaath pataal sidhaaro.\nDebinhi pooji bhali vidhi son bali, deu sabai mili mantra vichaaro.\nJaaye sahaaye bhayo tab hi, ahiraavan sainya samet sanhaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-8-meaning": "You have helped even the greatest of gods. O mighty Lord Hanuman, what trouble can’t you remove for your humble devotees? Remove my sorrows quickly, O Sankat Mochan!",
    "hanuman-ashtakam-8-transliteration": "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    // Kal Bhairav Ashtakam meanings
    "kalbhairav-ashtakam-1-meaning": "I bow to Sri Kalabhairava, whose lotus feet are served by Indra, who wears a snake as his sacred thread, moon on his head, and who is full of compassion. Praised by Narada and the yogis, clothed in the sky, the Lord of Kashi.",
    "kalbhairav-ashtakam-1-transliteration": "Deva-Raaja-Sevyamaana-Paavana-Angghri-Pangkajam\nVyaala-Yajnya-Suutram-Indu-Shekharam Krpaakaram |\nNaarada-[A]adi-Yogi-Vrnda-Vanditam Digambaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||1||",
    "kalbhairav-ashtakam-2-meaning": "I bow to Sri Kalabhairava, radiant as a million suns, who rescues us from the ocean of worldly life, blue-throated and three-eyed, destroyer of time, lotus-eyed, holding the trident, the imperishable Lord of Kashi.",
    "kalbhairav-ashtakam-2-transliteration": "Bhaanu-Kotti-Bhaasvaram Bhavaabdhi-Taarakam Param\nNiila-Kannttham-Iipsita-Artha-Daayakam Trilocanam |\nKaala-Kaalam-Ambuja-Akssam-Akssa-Shuulam-Akssaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||2||",
    "kalbhairav-ashtakam-3-meaning": "I bow to Sri Kalabhairava, who holds trident, hatchet, noose, and club; the primal cause of creation; dark-bodied, eternal, disease-free, and mighty; who delights in the cosmic Tandava dance.",
    "kalbhairav-ashtakam-3-transliteration": "Shuula-Ttangka-Paasha-Danndda-Paannim-Aadi-Kaarannam\nShyaama-Kaayam-Aadi-Devam-Akssaram Nir-Aamayam |\nBhiima-Vikramam Prabhum Vicitra-Taannddava-Priyam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||3||",
    "kalbhairav-ashtakam-4-meaning": "I bow to Sri Kalabhairava, the giver of both worldly prosperity and liberation; beautiful in form, loving to devotees, the essence of all worlds, adorned with golden tinkling bells around His waist.",
    "kalbhairav-ashtakam-4-transliteration": "Bhukti-Mukti-Daayakam Prashasta-Caaru-Vigraham\nBhakta-Vatsalam Sthitam Samasta-Loka-Vigraham |\nVi-Nikvannan-Manojnya-Hema-Kingkinnii-Lasat-Kattim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||4||",
    "kalbhairav-ashtakam-5-meaning": "I bow to Sri Kalabhairava, protector of righteousness, destroyer of the path of adharma, liberator from karmic bondage, the giver of true bliss, adorned with golden serpents shining around His body.",
    "kalbhairav-ashtakam-5-transliteration": "Dharma-Setu-Paalakam Tu-Adharma-Maarga-Naashakam\nKarma-Paasha-Mocakam Su-Sharma-Daayakam Vibhum |\nSvarnna-Varnna-Shessa-Paasha-Shobhitaangga-Mannddalam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||5||",
    "kalbhairav-ashtakam-6-meaning": "I bow to Sri Kalabhairava, whose gem-studded sandals shine, the eternal, non-dual, and stainless deity, destroyer of the pride of death, whose terrible fangs liberate souls from fear.",
    "kalbhairav-ashtakam-6-transliteration": "Ratna-Paadukaa-Prabhaabhi-Raama-Paada-Yugmakam\nNityam-Advitiiyam-Isstta-Daivatam Niramjanam |\nMrtyu-Darpa-Naashanam Karaala-Damssttra-Mokssannam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||6||",
    "kalbhairav-ashtakam-7-meaning": "I bow to Sri Kalabhairava, whose loud laughter shatters creation’s shell, whose glance destroys sins, who is the fierce ruler granting the eight siddhis, and who wears a garland of skulls.",
    "kalbhairav-ashtakam-7-transliteration": "Atta-Haasa-Bhinna-Padmaja-Anndda-Kosha-Samtatim\nDrsstti-Paata-Nasstta-Paapa-Jaalam-Ugra-Shaasanam |\nAsstta-Siddhi-Daayakam Kapaala-Maalikaa-Dharam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||7||",
    "kalbhairav-ashtakam-8-meaning": "I bow to Sri Kalabhairava, ruler of ghosts and celestial beings, who bestows immense glory, purges both the merits and sins of those residing in Kashi, guides beings on the path of righteousness, and is the most ancient and eternal Lord of the universe.",
    "kalbhairav-ashtakam-8-transliteration": "Bhuuta-Samgha-Naayakam Vishaala-Kiirti-Daayakam\nKaashi-Vaasa-Loka-Punnya-Paapa-Shodhakam Vibhum |\nNiiti-Maarga-Kovidam Puraatanam Jagatpatim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||8||",
    "kalbhairav-ashtakam-9-meaning": "Those who recite this beautiful Kalabhairava Ashtakam, which fosters knowledge and liberation and increases merit, destroying grief, delusion, poverty, greed, anger, and heat, surely attain the presence at Kalabhairava’s feet.",
    "kalbhairav-ashtakam-9-transliteration": "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
  },
  hi: {
    library: "पुस्तकालय",
    back: "वापस",
    showMore: "और देखें",
    showLess: "कम दिखाएँ",
    meaning: "अर्थ",
    transliteration: "उच्चारण",
    verse: "श्लोक",
    doha: "दोहा",
    languageLabel: "भाषा",
    // Hanuman Chalisa Hindi translations
    "hanuman-chalisa-0-meaning": "अपने गुरु के चरण कमलों की धूल से, मैं अपने मन के दर्पण को शुद्ध करता हूं और श्री राम की शुद्ध महिमा का वर्णन करता हूं, जो जीवन के चार फल प्रदान करती है — धर्म, अर्थ, काम और मोक्ष।",
    "hanuman-chalisa-0-transliteration": "॥ दोहा ॥\nश्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि। बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥",
    "hanuman-chalisa-1-meaning": "अपने को बुद्धि में कमजोर जानकर, मैं आपको याद करता हूं, हे वायु के पुत्र। कृपया मुझे बल, बुद्धि और विद्या प्रदान करें, और मेरे दुखों और अशुद्धियों को दूर करें।",
    "hanuman-chalisa-1-transliteration": "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
    "hanuman-chalisa-2-meaning": "हनुमान की जय, ज्ञान और गुणों के सागर! वानरों के स्वामी की जय, जो तीनों लोकों में प्रकाशित होते हैं।",
    "hanuman-chalisa-2-transliteration": "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
    "hanuman-chalisa-3-meaning": "आप भगवान राम के दूत हैं, अपार बल के धाम, और अंजनी के पुत्र और वायु देव के बालक के रूप में जाने जाते हैं।",
    "hanuman-chalisa-3-transliteration": "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
    "hanuman-chalisa-4-meaning": "हे महावीर, वज्र के समान पराक्रमी और बलवान, आप बुरे विचारों को दूर करते हैं और ज्ञान और भलाई लाते हैं।",
    "hanuman-chalisa-4-transliteration": "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
    "hanuman-chalisa-5-meaning": "आपका सुनहरा रूप सुंदरता से चमकता है, कानों में कुंडल और घुंघराले बालों से सुशोभित।",
    "hanuman-chalisa-5-transliteration": "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
    "hanuman-chalisa-6-meaning": "आप अपने हाथों में गदा और ध्वजा धारण करते हैं, और अपने कंधे पर पवित्र धागा पहनते हैं।",
    "hanuman-chalisa-6-transliteration": "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
    "hanuman-chalisa-7-meaning": "आप भगवान शिव के पुत्र और केसरी के बालक हैं। आपकी महिमा और शक्ति की पूरी दुनिया में प्रशंसा होती है।",
    "hanuman-chalisa-7-transliteration": "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
    "hanuman-chalisa-8-meaning": "आप बुद्धिमान, सद्गुणी और बहुत चतुर हैं, हमेशा भगवान राम की सेवा के लिए उत्सुक।",
    "hanuman-chalisa-8-transliteration": "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
    "hanuman-chalisa-9-meaning": "आप भगवान राम के कार्यों को सुनने में आनंद लेते हैं और हमेशा राम, लक्ष्मण और सीता के हृदय में निवास करते हैं।",
    "hanuman-chalisa-9-transliteration": "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
    "hanuman-chalisa-10-meaning": "आप सीता के सामने छोटे रूप में प्रकट हुए और अपने भयानक रूप से लंका को जलाया।",
    "hanuman-chalisa-10-transliteration": "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
    // Hanuman Ashtakam meanings (Hindi)
    "hanuman-ashtakam-1-meaning": "बाल्यावस्था में आपने सूर्य को निगल लिया, जिससे तीनों लोकों में अंधकार छा गया। देवताओं की प्रार्थना पर आपने उसे छोड़ दिया और उनका कष्ट दूर किया। हे हनुमान! संसार आपको संकटमोचन के रूप में जानता है।",
    "hanuman-ashtakam-1-transliteration": "Baala samay ravi bhaksha liyo tab, teenahu loka bhayo andhiyaaro.\nTaahi so traas bhayo jag ko, yah sankat kaahu so jaat na taaro.\nDevan aani kari binati tab, chhaadi diyo ravi kasht nivaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-2-meaning": "जब सुग्रीव बालि के भय से त्रस्त था, तब आपने उसका मार्गदर्शन किया। भक्त के शोक को हरने हेतु आपने ब्राह्मण का रूप भी धारण किया। हे हनुमान, आप सच में संकटों का नाश करने वाले हैं।",
    "hanuman-ashtakam-2-transliteration": "Baali ki traas kapees basai giri, jaat mahaaprabhu panth nihaaro.\nChaunki mahaamuni saap diyo tab, chaahiye kaun bichaar bichaaro.\nKai-dwij roop liyaay mahaaprabhu, so tum daas ke sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-3-meaning": "जब कोई सीता को नहीं ढूंढ़ सका, तब आपने महा-सागर लांघकर उनकी खबर श्रीराम तक पहुंचाई और सबका उद्धार किया। आप सच में प्राणरक्षक और संकटमोचन हैं।",
    "hanuman-ashtakam-3-transliteration": "Angad ke sang len gaye siya, khoj kapees yah bain uchaaro.\nJeevat na bachiho hum so ju, bina sudhi laaye ihaan pagu dhaaro.\nHeri thake tat sindhu sabe tab, laaye siya sudhi praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-4-meaning": "जब रावण ने सीता को त्रस्त किया, तब आपने प्रभु की मुद्रिका देकर उन्हें आश्वस्त किया और लंका के राक्षसों का संहार किया। आपने उनका शोक हर लिया।",
    "hanuman-ashtakam-4-transliteration": "Raavan traas daee siya ko sab, raakshasi son kahi sok nivaaaro.\nTaahi samay hanumaan mahaaprabhu, jaaye mahaa rajaneechara maaro.\nChaahat siya asok son aagi su, dai prabhu mudrika sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-5-meaning": "जब रावण-पुत्र के बाण से लक्ष्मण अचेत पड़े, तब आप संजीवनी पर्वत ही उठा लाए और उन्हें जीवित किया। हे हनुमान, आप वास्तव में प्राणों के रक्षक हैं।",
    "hanuman-ashtakam-5-transliteration": "Baan laagyo ur lachhiman ke tab, praan taje soot raavan maaro.\nLai grih baidh sushein samet, tabai giri dron su beer upaaro.\nAani sajivan haath diye tab, lachhiman ke tum praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-6-meaning": "जब रावण ने नाग-पाश का प्रयोग कर श्रीराम और सैन्य को बाँध दिया, तब आप गरुड़ को लाए और सबको मुक्त कराया। कौन आपको संकटमोचन के रूप में नहीं जानता?",
    "hanuman-ashtakam-6-transliteration": "Raavan yudh ajaan kiyo tab, naag ki faans sabai sir daaro.\nShri raghunaath samet sabai dal, moh bhayo yah sankat bhaaro.\nAani khages tabai hanuman ju, bandhan kaati sutraas nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-7-meaning": "जब अहिरावण श्रीराम और लक्ष्मण को पाताल ले गया, तब आप वहाँ पहुँचे, राक्षसों का संहार किया और उन्हें छुड़ाया। आपने उनका संकट भी दूर किया।",
    "hanuman-ashtakam-7-transliteration": "Bandhu samet jabai ahiraavan, lai raghunaath pataal sidhaaro.\nDebinhi pooji bhali vidhi son bali, deu sabai mili mantra vichaaro.\nJaaye sahaaye bhayo tab hi, ahiraavan sainya samet sanhaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    "hanuman-ashtakam-8-meaning": "आपने देवताओं के भी महान कार्य किए हैं। हे महाप्रभु हनुमान, आपके लिए कौन सा संकट असाध्य है? मेरे दुःख शीघ्र हरिए, हे संकटमोचन!",
    "hanuman-ashtakam-8-transliteration": "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
    // Kal Bhairav Ashtakam meanings (Hindi)
    "kalbhairav-ashtakam-1-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जिनके चरण-कमल इन्द्र द्वारा सेवित हैं, जो सर्प को यज्ञोपवीत के रूप में धारण करते हैं, शिर पर चंद्रमा शोभित है, और जो करुणामय हैं; नारद और योगियों द्वारा वंदित, दिगंबर, काशी के अधिपति।",
    "kalbhairav-ashtakam-1-transliteration": "Deva-Raaja-Sevyamaana-Paavana-Angghri-Pangkajam\nVyaala-Yajnya-Suutram-Indu-Shekharam Krpaakaram |\nNaarada-[A]adi-Yogi-Vrnda-Vanditam Digambaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||1||",
    "kalbhairav-ashtakam-2-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जो करोड़ सूर्यों के समान तेजस्वी हैं, संसार-सागर से तारने वाले, नीलकंठ, त्रिनेत्रधारी, काल के काल, कमल-नेत्र, त्रिशूलधारी, काशी के अविनाशी नाथ।",
    "kalbhairav-ashtakam-2-transliteration": "Bhaanu-Kotti-Bhaasvaram Bhavaabdhi-Taarakam Param\nNiila-Kannttham-Iipsita-Artha-Daayakam Trilocanam |\nKaala-Kaalam-Ambuja-Akssam-Akssa-Shuulam-Akssaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||2||",
    "kalbhairav-ashtakam-3-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जिनके हाथों में त्रिशूल, कर्तिका, पाश और दंड हैं; सृष्टि के मूल कारण, श्याम-काय, अक्षर, रोग-रहित, भीम-पराक्रमी, विचित्र ताण्डव के प्रिय।",
    "kalbhairav-ashtakam-3-transliteration": "Shuula-Ttangka-Paasha-Danndda-Paannim-Aadi-Kaarannam\nShyaama-Kaayam-Aadi-Devam-Akssaram Nir-Aamayam |\nBhiima-Vikramam Prabhum Vicitra-Taannddava-Priyam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||3||",
    "kalbhairav-ashtakam-4-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जो भुक्ति और मुक्ति देने वाले, सुन्दर विग्रह वाले, भक्तवत्सल, समस्त लोकों के अधिष्ठान, करधनी में झनझनाती स्वर्ण घंटिकाओं से सुशोभित।",
    "kalbhairav-ashtakam-4-transliteration": "Bhukti-Mukti-Daayakam Prashasta-Caaru-Vigraham\nBhakta-Vatsalam Sthitam Samasta-Loka-Vigraham |\nVi-Nikvannan-Manojnya-Hema-Kingkinnii-Lasat-Kattim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||4||",
    "kalbhairav-ashtakam-5-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जो धर्म-सेतु के पालक, अधर्म-मार्ग के नाशक, कर्म-पाश के मोचक, शुभ-शर्म देने वाले, स्वर्णवर्ण सर्प-पाश से शोभित।",
    "kalbhairav-ashtakam-5-transliteration": "Dharma-Setu-Paalakam Tu-Adharma-Maarga-Naashakam\nKarma-Paasha-Mocakam Su-Sharma-Daayakam Vibhum |\nSvarnna-Varnna-Shessa-Paasha-Shobhitaangga-Mannddalam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||5||",
    "kalbhairav-ashtakam-6-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जिनकी रत्न-जटित पादुकाओं की प्रभा मनोहर है; नित्य, अद्वितीय, निष्कलंक, मृत्यु के गर्व का नाश करने वाले, भीषण दंष्ट्राओं से भय का मोक्षण करने वाले।",
    "kalbhairav-ashtakam-6-transliteration": "Ratna-Paadukaa-Prabhaabhi-Raama-Paada-Yugmakam\nNityam-Advitiiyam-Isstta-Daivatam Niramjanam |\nMrtyu-Darpa-Naashanam Karaala-Damssttra-Mokssannam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||6||",
    "kalbhairav-ashtakam-7-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जिनकी अट्टहास से ब्रह्माण्ड-कोश कंपित हो उठता है, जिनकी दृष्टि पाप-बंधन नष्ट करती है, जो उग्र शासनकर्ता हैं और अष्ट-सिद्धियाँ प्रदान करते हैं, कपाल-मालाधारी।",
    "kalbhairav-ashtakam-7-transliteration": "Atta-Haasa-Bhinna-Padmaja-Anndda-Kosha-Samtatim\nDrsstti-Paata-Nasstta-Paapa-Jaalam-Ugra-Shaasanam |\nAsstta-Siddhi-Daayakam Kapaala-Maalikaa-Dharam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||7||",
    "kalbhairav-ashtakam-8-meaning": "मैं कालभैरव को प्रणाम करता हूँ, जो भूत-गणों के नायक, विशाल कीर्ति देने वाले, काशी-वासी जनों के पुण्य-पाप का शोधन करने वाले, नीति-मार्ग के कोविद, पुरातन जगत्पति हैं।",
    "kalbhairav-ashtakam-8-transliteration": "Bhuuta-Samgha-Naayakam Vishaala-Kiirti-Daayakam\nKaashi-Vaasa-Loka-Punnya-Paapa-Shodhakam Vibhum |\nNiiti-Maarga-Kovidam Puraatanam Jagatpatim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||8||",
    "kalbhairav-ashtakam-9-meaning": "जो भक्त सुन्दर कालभैरवाष्टक का पाठ करते हैं — जो ज्ञान और मोक्ष का साधन है, विविध पुण्य बढ़ाता है, शोक, मोह, दैन्य, लोभ, क्रोध और ताप का नाश करता है — वे निश्चय ही कालभैरव के पाद-सन्निधि को प्राप्त होते हैं।",
    "kalbhairav-ashtakam-9-transliteration": "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
  },
  mr: {
    library: "ग्रंथालय",
    back: "मागे",
    showMore: "अधिक दाखवा",
    showLess: "कमी दाखवा",
    meaning: "अर्थ",
    transliteration: "उच्चार",
    verse: "श्लोक",
    doha: "दोहा",
    languageLabel: "भाषा",
    // Hanuman Chalisa Marathi translations
    "hanuman-chalisa-0-meaning": "माझ्या गुरूंच्या कमळपायांच्या धुळीने, मी माझ्या मनाच्या आरशाला शुद्ध करतो आणि श्री रामाच्या शुद्ध महिमेचे वर्णन करतो, जे जीवनाचे चार फळे देतात — धर्म, अर्थ, काम आणि मोक्ष।",
    "hanuman-chalisa-0-transliteration": "॥ दोहा ॥\nश्रीगुरु चरन सरोज रज, निजमन मुकुर सुधारि। बरनउँ रघुबर बिमल जसु, जो दायक फल चारि॥",
    "hanuman-chalisa-1-meaning": "स्वतःला बुद्धीत कमकुवत जाणून, मी तुम्हाला आठवतो, हे वायूच्या पुत्रा। कृपया मला बल, बुद्धी आणि विद्या द्या, आणि माझ्या दु:खांना आणि अशुद्धतांना दूर करा।",
    "hanuman-chalisa-1-transliteration": "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
    "hanuman-chalisa-2-meaning": "हनुमानाच्या जय, ज्ञान आणि गुणांच्या समुद्रा! वानरांच्या स्वामीच्या जय, जो तीनही लोकांत प्रकाशित होतात।",
    "hanuman-chalisa-2-transliteration": "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
    "hanuman-chalisa-3-meaning": "तुम्ही भगवान रामाचे दूत आहात, अपार बलाचे धाम, आणि अंजनीच्या पुत्र आणि वायू देवाच्या बालक म्हणून ओळखले जातात।",
    "hanuman-chalisa-3-transliteration": "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
    "hanuman-chalisa-4-meaning": "हे महावीर, वज्रासारखे पराक्रमी आणि बलवान, तुम्ही वाईट विचारांना दूर करता आणि ज्ञान आणि भलाई आणता।",
    "hanuman-chalisa-4-transliteration": "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
    "hanuman-chalisa-5-meaning": "तुमचे सोनेरी रूप सुंदरतेने चमकते, कानांत कुंडल आणि घुंगराले केसांनी सुशोभित।",
    "hanuman-chalisa-5-transliteration": "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
    "hanuman-chalisa-6-meaning": "तुम्ही तुमच्या हातांत गदा आणि ध्वजा धारण करता, आणि तुमच्या खांद्यावर पवित्र धागा घालता।",
    "hanuman-chalisa-6-transliteration": "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
    "hanuman-chalisa-7-meaning": "तुम्ही भगवान शिवाचे पुत्र आणि केसरीचे बालक आहात। तुमच्या महिमा आणि शक्तीची संपूर्ण जगात प्रशंसा होते।",
    "hanuman-chalisa-7-transliteration": "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
    "hanuman-chalisa-8-meaning": "तुम्ही बुद्धिमान, सद्गुणी आणि खूप चतुर आहात, नेहमी भगवान रामाच्या सेवेसाठी उत्सुक।",
    "hanuman-chalisa-8-transliteration": "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
    "hanuman-chalisa-9-meaning": "तुम्ही भगवान रामाच्या कार्यांना ऐकण्यात आनंद घेता आणि नेहमी राम, लक्ष्मण आणि सीतेच्या हृदयात निवास करता।",
    "hanuman-chalisa-9-transliteration": "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
    "hanuman-chalisa-10-meaning": "तुम्ही सीतेसमोर लहान रूपात प्रकट झालात आणि तुमच्या भयानक रूपाने लंकेला जाळले।",
    "hanuman-chalisa-10-transliteration": "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
    // Hanuman Ashtakam meanings (Marathi)
    "hanuman-ashtakam-1-meaning": "बालपणी तुम्ही सूर्य गिळला, त्यामुळे तिन्ही लोकांत अंधार पसरला. देवांच्या विनवणीनंतर तुम्ही सूर्याला मुक्त केले आणि त्यांचे दुःख दूर केले. हे हनुमान! जग तुम्हाला संकटमोचक म्हणून ओळखते.",
    "hanuman-ashtakam-2-meaning": "सुग्रीव बालिच्या भीतीने व्याकुळ असताना तुम्ही त्याला मार्गदर्शन केले. भक्ताचा शोक घालवण्यासाठी तुम्ही ब्राह्मणाचेही रूप धारण केले. हे हनुमान, तुम्ही खरेच संकट दूर करणारे आहात.",
    "hanuman-ashtakam-3-meaning": "सीता सापडत नसताना तुम्ही महा-सागर ओलांडून तिची वार्ता श्रीरामांपर्यंत आणली आणि सर्वांचे उद्धार केले. तुम्ही खरेच प्राणरक्षक आणि संकटमोचक आहात.",
    "hanuman-ashtakam-4-meaning": "रावणाने सीतेला पीडित केले तेव्हा तुम्ही प्रभूची मुद्रिका देऊन तिला धीर दिला आणि लंकेतील राक्षसांचा संहार केला. तुम्ही तिचा शोक हरलात.",
    "hanuman-ashtakam-5-meaning": "रावणपुत्राच्या बाणाने लक्ष्मण अचेत पडले असता तुम्ही संजीवनी पर्वतच आणला आणि त्यांचे प्राण वाचवले. हे हनुमान, तुम्ही खरेच प्राणांचे रक्षण करता.",
    "hanuman-ashtakam-6-meaning": "रावणाने नागपाशाने श्रीराम आणि सैन्याला बांधले असता तुम्ही गरुडाला आणून सर्वांना मुक्त केले आणि मोठा संकट दूर केला. कोण तुम्हाला संकटमोचक म्हणून ओळखत नाही?",
    "hanuman-ashtakam-7-meaning": "अहिरावणाने श्रीराम आणि लक्ष्मण यांना पाताळात नेले तेव्हा तुम्ही तेथे जाऊन राक्षसांचा संहार केला आणि त्यांची सुटका केली. तुम्ही त्यांचे संकटही दूर केले.",
    "hanuman-ashtakam-8-meaning": "तुम्ही देवतांचेही महान कार्य केले आहेत. हे महाप्रभु हनुमान, तुमच्यासाठी कोणते संकट कठीण आहे? माझे दुःख लवकर हरवा, हे संकटमोचक!",
    // Kal Bhairav Ashtakam meanings (Marathi)
    "kalbhairav-ashtakam-1-meaning": "मी कालभैरवांना वंदन करतो — ज्यांच्या चरणकमळांची सेवा इंद्र करतो, ज्यांनी सर्प यज्ञोपवीत धारण केले, शिरावर चंद्र सुशोभित आहे, करुणामय; नारद व योगी ज्यांना वंदित करतात, दिगंबर, काशीचे अधिपती.",
    "kalbhairav-ashtakam-2-meaning": "मी कालभैरवांना वंदन करतो — कोट्यवधी सूर्यासारखे तेजस्वी, संसारसागरातून तरून नेणारे, नीलकंठ, त्रिनेत्र, काळाचेही काल, कमलनयन, त्रिशूलधारी, काशीचे अविनाशी नाथ.",
    "kalbhairav-ashtakam-3-meaning": "मी कालभैरवांना वंदन करतो — त्रिशूल, परशु, पाश आणि दंड धारण करणारे; सृष्टिचे मूल कारण; श्यामकाय, अक्षय, निरामय, भीमपराक्रमी; तांडवप्रिय.",
    "kalbhairav-ashtakam-4-meaning": "मी कालभैरवांना वंदन करतो — भुक्ति-मुक्ति देणारे, सुंदर विग्रह, भक्तवत्सल, समस्त लोकांचे आधार, कटीवर झणझणणाऱ्या सुवर्ण किण्किणींनी शोभिवंत.",
    "kalbhairav-ashtakam-5-meaning": "मी कालभैरवांना वंदन करतो — धर्मसेतूचे पालनकर्ते, अधर्ममार्गाचे नाशक, कर्मपाशातून मुक्त करणारे, खरे सुख देणारे, सुवर्णवर्ण सर्पपाशांनी अलंकृत.",
    "kalbhairav-ashtakam-6-meaning": "मी कालभैरवांना वंदन करतो — रत्नजडित पादुका ज्यांच्या तेजाने रम्य; नित्य, अद्वितीय, निर्मल; मृत्यूच्या गर्वाचा नाश करणारे; भयंकर दंष्ट्रांनी भयमोचन करणारे.",
    "kalbhairav-ashtakam-7-meaning": "मी कालभैरवांना वंदन करतो — ज्यांच्या अट्टहासाने सृष्टिकोष फाटतो; दृष्टिपाताने पापजाळ नष्ट होते; उग्र शासनकर्ता; अष्टसिद्धी देणारे; कपालमाला धारण करणारे.",
    "kalbhairav-ashtakam-8-meaning": "मी कालभैरवांना वंदन करतो — भूतगणांचे नायक, महान कीर्ती देणारे, काशीवासियांच्या पुण्य-पापांचे शोधन करणारे, नीति-मार्गज्ञ, पुरातन जगत्पती.",
    "kalbhairav-ashtakam-9-meaning": "जो सुंदर कालभैरवाष्टकाचा पाठ करतात — जे ज्ञान व मोक्षाचे साधन आहे, विविध पुण्य वाढवते, शोक, मोह, दारिद्र्य, लोभ, क्रोध व ताप नाश करते — ते नक्कीच कालभैरवांच्या चरण-सन्निधीला पोचतात.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<AppLanguage>("en");

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key: string, fallback?: string) => translations[language][key] ?? fallback ?? key,
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};


