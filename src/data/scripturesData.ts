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
        imageUrl: "/sarojraj.png",
      },
      {
        number: 1,
        sanskrit: "बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥",
        transliteration: "Buddhiheen tanu janike, sumirau Pavan Kumar. Bal buddhi vidya dehu mohi, harahu kalesh vikar.",
        meaning: "Knowing myself to be weak in intellect, I remember you, O son of the Wind. Please grant me strength, wisdom, and knowledge, and remove my sorrows and impurities.",
        imageUrl: "/verse1.png",
      },
      {
        number: 2,
        sanskrit: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥",
        transliteration: "Jai Hanuman gyaan gun saagar. Jai Kapis tihun lok ujagar.",
        meaning: "Victory to Hanuman, ocean of knowledge and virtue! Victory to the Lord of the Vanaras, who shines throughout the three worlds.",
        imageUrl: "/verse2.png",
      },
      {
        number: 3,
        sanskrit: "राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥",
        transliteration: "Ram doot atulit bal dhaama. Anjani-putra Pawan-sut naama.",
        meaning: "You are the messenger of Lord Ram, the abode of immense strength, and known as Anjani’s son and the Wind God’s child.",
        imageUrl: "/verse3.png",
      },
      {
        number: 4,
        sanskrit: "महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥",
        transliteration: "Mahaveer Vikram Bajrangi. Kumati nivar sumati ke sangi.",
        meaning: "O Great Hero, mighty and strong as lightning, you remove evil thoughts and bring wisdom and goodness.",
        imageUrl: "/verse4.png",
      },
      {
        number: 5,
        sanskrit: "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥",
        transliteration: "Kanchan varan viraaj subesa. Kaanan kundal kunchit kesa.",
        meaning: "Your golden form shines beautifully, adorned with earrings and curly hair.",
        imageUrl: "/verse5.png",
      },
      {
        number: 6,
        sanskrit: "हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥",
        transliteration: "Haath bajra au dhwaja birajai. Kandhe moonj janeu saajai.",
        meaning: "You carry the mace and banner in your hands, and wear the sacred thread across your shoulder.",
        imageUrl: "/verse6.png",
      },
      {
        number: 7,
        sanskrit: "संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥",
        transliteration: "Shankar suvan Kesari nandan. Tej prataap maha jag bandan.",
        meaning: "You are the son of Lord Shiva and Kesari’s child. Your glory and power are praised by the whole world.",
        imageUrl: "/verse7.png",
      },
      {
        number: 8,
        sanskrit: "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥",
        transliteration: "Vidya vaan guni ati chatur. Ram kaaj karibe ko aatur.",
        meaning: "You are wise, virtuous, and very clever, ever eager to serve Lord Ram.",
        imageUrl: "/verse8.png",
      },
      {
        number: 9,
        sanskrit: "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥",
        transliteration: "Prabhu charitra sunibe ko rasiya. Ram Lakhan Sita man basiya.",
        meaning: "You delight in listening to Lord Ram’s deeds and always dwell in the hearts of Ram, Lakshman, and Sita.",
        imageUrl: "/verse9.png",
      },
      {
        number: 10,
        sanskrit: "सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥",
        transliteration: "Sookshma roop dhari Siyahi dikhawa. Bikat roop dhari Lank jarawa.",
        meaning: "You appeared before Sita in a small form and burned Lanka with your fierce form.",
        imageUrl: "/verse10.png",
      },
      {
        number: 11,
        sanskrit: "भीम रूप धरि असुर संहारे। रामचन्द्र के काज सवारे॥",
        transliteration: "Bheem roop dhari asur sanhare. Ramchandra ke kaaj savare.",
        meaning: "Taking a mighty form, you destroyed demons and completed Lord Ram’s divine tasks.",
        imageUrl: "/bhimroopasursahareramchandrakaaj.png",
      },
      {
        number: 12,
        sanskrit: "लाय संजीवन लखन जियाए। श्रीरघुबीर हरषि उर लाए॥",
        transliteration: "Laay Sanjeevan Lakhan jiyaye. Shri Raghubeer harashi ur laye.",
        meaning: "You brought the Sanjeevani herb to revive Lakshman, and Sri Ram joyfully embraced you.",
        imageUrl: "/sajeevanparavat.png",
      },
      {
        number: 13,
        sanskrit: "रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥",
        transliteration: "Raghupati keenhi bahut badaai. Tum mam priy Bharat hi sam bhai.",
        meaning: "Lord Ram praised you greatly, saying, ‘You are as dear to me as my brother Bharat.’",
        imageUrl: "/verse14.png",
      },
      {
        number: 14,
        sanskrit: "सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं॥",
        transliteration: "Sahas badan tumharo jas gaavain. As kahi Shripati kanth lagavain.",
        meaning: "A thousand tongues sing your glory, said Lord Vishnu, as he embraced you warmly.",
        imageUrl: "/kathlagaye.png",
      },
      {
        number: 15,
        sanskrit: "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥",
        transliteration: "Sanakadik Brahmad muni sa. Narad Sarad sahit Aheesa.",
        meaning: "Sages like Sanaka, Brahma, Narad, Saraswati, and Sheshnaag all sing your praises.",
        imageUrl: "/verse15.png",
      },
      {
        number: 16,
        sanskrit: "जम कुबेर दिगपाल जहाँ ते। कवि कोबिद कहि सके कहाँ ते॥",
        transliteration: "Yam Kuber Digpaal jahan te. Kavi kobid kahi sake kahan te.",
        meaning: "Even Yamraj, Kuber, and the guardians of the directions fail to describe your greatness fully.",
        imageUrl: "/jamkuber.png",
      },
      {
        number: 17,
        sanskrit: "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥",
        transliteration: "Tum upkaar Sugreevahin keenha. Ram milay raj pad deenha.",
        meaning: "You helped Sugriva by uniting him with Lord Ram, who then restored his kingdom.",
        imageUrl: "/verse17.png",
      },
      {
        number: 18,
        sanskrit: "तुम्हरो मन्त्र विभीषण माना। लंकेश्वर भए सब जग जाना॥",
        transliteration: "Tumharo mantra Vibhishan maana. Lankeshwar bhaye sab jag jaana.",
        meaning: "Vibhishan followed your advice and became the king of Lanka — this is known to the whole world.",
        imageUrl: "/verse18.png",
      },
      {
        number: 19,
        sanskrit: "जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥",
        transliteration: "Yug sahasra yojan par bhaanu. Leelyo taahi madhur phal jaanu.",
        meaning: "You flew across the sky to swallow the sun, mistaking it for a sweet fruit.",
        imageUrl: "/verse19.png",
      },
      {
        number: 20,
        sanskrit: "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥",
        transliteration: "Prabhu mudrika meli mukh maheen. Jaladhi langhi gaye acharaj naheen.",
        meaning: "Carrying Lord Ram’s ring in your mouth, you crossed the ocean effortlessly — a miracle indeed.",
        imageUrl: "/verse20.png",
      },
      {
        number: 21,
        sanskrit: "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥",
        transliteration: "Durgam kaaj jagat ke jete. Sugam anugrah tumhare tete.",
        meaning: "All difficult tasks in the world become easy through your grace.",
        imageUrl: "/verse21.png",
      },
      {
        number: 22,
        sanskrit: "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥",
        transliteration: "Ram duaare tum rakhvare. Hot na aajna binu paisare.",
        meaning: "You guard the door of Lord Ram’s abode; no one enters without your permission.",
        imageUrl: "/verse22.png",
      },
      {
        number: 23,
        sanskrit: "सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥",
        transliteration: "Sab sukh lahe tumhari sarna. Tum rakshak kahu ko dar na.",
        meaning: "Those who seek refuge in you find all happiness; under your protection, they fear nothing.",
        imageUrl: "/verse23.png",
      },
      {
        number: 24,
        sanskrit: "आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥",
        transliteration: "Aapan tej samhaaro aapai. Teenon lok haank te kaapai.",
        meaning: "You alone control your vast power; your roar makes all three worlds tremble.",
        imageUrl: "/verse24.png",
      },
      {
        number: 25,
        sanskrit: "भूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥",
        transliteration: "Bhoot pishaach nikat nahi aavai. Mahaveer jab naam sunavai.",
        meaning: "Ghosts and evil spirits flee when the mighty name of Mahaveer Hanuman is spoken.",
        imageUrl: "/mahvirnamsunave.png",
      },
      {
        number: 26,
        sanskrit: "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥",
        transliteration: "Naasai rog harai sab peera. Japat nirantar Hanumat beera.",
        meaning: "All diseases and sufferings vanish when one continuously chants your name.",
        imageUrl: "/verse26.png",
      },
      {
        number: 27,
        sanskrit: "संकट तें हनुमान छुड़ावै। मन क्रम वचन ध्यान जो लावै॥",
        transliteration: "Sankat te Hanuman chhudavai. Man, kram, vachan dhyan jo lavai.",
        meaning: "Hanuman frees those from troubles who remember him with heart, action, and words.",
        imageUrl: "/verse27.png",
      },
      {
        number: 28,
        sanskrit: "सब पर राम तपस्वी राजा। तिनके काज सकल तुम साजा॥",
        transliteration: "Sab par Ram tapasvi raja. Tinke kaaj sakal tum saaja.",
        meaning: "Lord Ram, the supreme ascetic king, depends on you to complete all his divine tasks.",
        imageUrl: "/verse28.png",
      },
      {
        number: 29,
        sanskrit: "और मनोरथ जो कोई गावै। सोई अमित जीवन फल पावै॥",
        transliteration: "Aur manorath jo koi gaavai. Soi amit jeevan phal paavai.",
        meaning: "Whoever sings your praises with devotion gains endless blessings and fulfillment.",
        imageUrl: "/verse29.png",
      },
      {
        number: 30,
        sanskrit: "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥",
        transliteration: "Charon yug prataap tumhara. Hai prasiddh jagat ujiyara.",
        meaning: "Your glory shines through all four ages, spreading divine light throughout the world.",
        imageUrl: "/verse30.png",
      },
      {
        number: 31,
        sanskrit: "साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥",
        transliteration: "Sadhu sant ke tum rakhvare. Asur nikandan naam tumhare.",
        meaning: "You are the protector of saints and sages; your very name destroys evil.",
        imageUrl: "/verse31.png",
      },
      {
        number: 32,
        sanskrit: "अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥",
        transliteration: "Asht siddhi nau nidhi ke daata. As bar deen Janaki mata.",
        meaning: "Mother Sita has blessed you with the power to grant eight siddhis and nine types of wealth.",
        imageUrl: "/8shidis.png",
      },
      {
        number: 33,
        sanskrit: "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥",
        transliteration: "Ram rasayan tumhare paasa. Sada raho Raghupati ke daasa.",
        meaning: "You hold the elixir of devotion to Lord Ram and forever remain his humble servant.",
        imageUrl: "/verse33.png",
      },
      {
        number: 34,
        sanskrit: "तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥",
        transliteration: "Tumhare bhajan Ram ko paavai. Janam janam ke dukh bisraavai.",
        meaning: "By singing your praises, one attains Lord Ram and forgets sorrows of many lifetimes.",
        imageUrl: "/verse34.png",
      },
      {
        number: 35,
        sanskrit: "अंत काल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥",
        transliteration: "Ant kaal Raghubar pur jaai. Jahan janm Haribhakt kahai.",
        meaning: "At life’s end, devotees who worship you attain the abode of Lord Ram and are reborn as his devotees.",
        imageUrl: "/verse35.png",
      },
      {
        number: 36,
        sanskrit: "और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥",
        transliteration: "Aur devta chitt na dharai. Hanumat sei sarb sukh karai.",
        meaning: "No other deity dwells in the devotee’s heart — all joy and peace come from serving Hanuman alone.",
        imageUrl: "/verse36.png",
      },
      {
        number: 37,
        sanskrit: "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥",
        transliteration: "Sankat katai mitai sab peera. Jo sumirai Hanumat Balbeera.",
        meaning: "All troubles vanish and pain is removed for those who remember the mighty and valiant Hanuman.",
        imageUrl: "/sankatkatai.png",
      },
      {
        number: 38,
        sanskrit: "जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥",
        transliteration: "Jai Jai Jai Hanuman Gosai. Kripa karahu Gurudev ki naai.",
        meaning: "Glory, glory, glory to you, O Lord Hanuman! Shower your grace upon me as a true Guru does upon his disciple.",
        imageUrl: "/jaijaihanumangosai.png",
      },
      {
        number: 39,
        sanskrit: "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥",
        transliteration: "Jo sat baar paath kar koi. Chhoothahi bandi maha sukh hoi.",
        meaning: "Whoever recites this Chalisa a hundred times is freed from bondage and attains supreme joy.",
        imageUrl: "/100hanumanchalisa.png",
      },
      {
        number: 40,
        sanskrit: "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥\nतुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥",
        transliteration: "Jo yah padhe Hanuman Chalisa, hoy siddhi saakhi Gaurisa. Tulsidas sada Hari chera, keejai Nath hriday mein dera. ॥ Doha ॥ Pavan tanay sankat haran, mangal moorat roop. Ram Lakhan Sita sahit, hriday basahu Sur Bhoop.",
        meaning: "Whoever reads this Hanuman Chalisa achieves success — Lord Shiva himself attests to this truth.",
        imageUrl: "/tulsidassada.png",
      }     ,
      {
        number: 0,
        sanskrit: "॥दोहा॥\nपवन तनय संकट हरन, मंगल मूरति रूप। राम लखन सीता सहित, हृदय बसहु सुर भूप॥",
        transliteration: "॥ Doha ॥ Pavan tanay sankat haran, mangal moorat roop. Ram Lakhan Sita sahit, hriday basahu Sur Bhoop.",
        meaning: " Tulsidas, the humble devotee of Hari, prays — O Lord, dwell forever in my heart. O son of the Wind, remover of sorrows, embodiment of auspiciousness — abide in my heart with Ram, Lakshman, and Sita.",
        imageUrl: "/ramlakhan.png",
      }
    ]
  },
  {
    id: "bajrang-baan",
    title: "Bajrang Baan",
    titleSanskrit: "बजरंग बाण",
    description:
      "The Bajrang Baan is a powerful hymn dedicated to Lord Hanuman, invoking his divine strength and protection. Chanting it with faith destroys negativity, fear, and evil influences, bringing courage, peace, and success in all endeavors.",
    category: "Bhakti Collection",
    coverImage: "/bajrangbaan.png",
    totalVerses: 24,
    verses: [
      {
        number: 1,
        sanskrit:
          "ॐ श्री हनुमते नमः।\nनिश्चय प्रेम प्रतीति ते बिनय करैं सनमान।\nतेहि के कारज सकल शुभ सिद्ध करैं हनुमान॥",
        transliteration:
          "Om Shri Hanumate Namah.\nNishchaya prema priti te binaya karai sanman.\nTehi ke karaja sakala shubha siddha karai Hanuman.",
        meaning:
          "Those who recite these verses with love and unwavering faith have all their beneficial desires fulfilled by Hanuman.",
        imageUrl: "/bajrangbaan1.jpeg"
      },
      {
        number: 2,
        sanskrit:
          "जय हनुमन्त सन्त हितकारी। सुन लीजै प्रभु अरज हमारी॥\nजन के काज बिलम्ब न कीजै। आतुर दाउरि महा सुख दीजै॥",
        transliteration:
          "Jaya Hanumanta santa hitakari, suni lijai Prabhu araja hamari.\nJana ke kaaja bilamba na kijai, atura dauri maha sukha dijai.",
        meaning:
          "Glory to Hanuman, the benefactor of saints. Please listen to our prayer. Do not delay in helping your devotees and grant them immense joy.",
        imageUrl: "/bajrangbaan2.jpeg"
      },
      {
        number: 3,
        sanskrit:
          "जैसे कूदि सिन्धु वहि पारा। सुरसा बदन पैठि विस्तार॥\nआगे जाइ लंकिनी रोका। मारेहु लात गई सुरलोक॥",
        transliteration:
          "Jaise koodi sindhu vahi para, Surasa badana paithi vistara.\nAage jai Lankini roka, marehu laat gai suroloka.",
        meaning:
          "You leapt across the ocean, overcame Surasa’s obstacle, and vanquished the demoness Lankini who tried to stop you in Lanka.",
        imageUrl: "/bajrangbaan3.jpeg"
      },
      {
        number: 4,
        sanskrit:
          "जाय विभीषण को सुख दीन्हा। सीता निरखि परम पद लीन्हा॥\nबाग उजारि सिन्धु महँ बोरा। अति आतुर यम कारज तोरा॥",
        transliteration:
          "Jaya Vibhishana ko sukha dinha, Sita nirakhi parama pada linha.\nBaaga ujari sindhu mahan bora, ati atura Yama karaja tora.",
        meaning:
          "You gave joy to Vibhishan, received Sita’s blessings, destroyed the Ashoka grove, and symbolically broke the hold of Death itself.",
        imageUrl: "/bajrangbaan4.jpeg"
      },
      {
        number: 5,
        sanskrit:
          "अक्षय कुमार को मारी संहारा। लूमा लपेटि लंका को जारा॥\nलाह समान लंका जरी गई। जय जय धुनि सुरपुर मन भई॥",
        transliteration:
          "Akshay Kumar ko maari sanhara, Luma lapeti Lanka ko jara.\nLaaha samana Lanka jari gayi, jaya jaya dhuni surapura man bhayi.",
        meaning:
          "You destroyed Akshay Kumar and burned Lanka. The heavens echoed with praises of your valor.",
        imageUrl: "/bajrangbaan5.jpeg"
      },
      {
        number: 6,
        sanskrit:
          "अब बिलम्ब केहि कारण स्वामी। कृपा करहु उर अंतर्यामी॥\nजय जय लखन प्राण के दाता। आतुर होइ दुख करहु निपाता॥",
        transliteration:
          "Ab bilamba kehi karana Swami, kripa karahu ura antaryami.\nJaya jaya Lakhan prana ke data, atura hoi dukha karahu nipata.",
        meaning:
          "Why delay now, O Lord who knows all hearts? Bestower of Lakshman’s life, swiftly destroy my sorrows.",
        imageUrl: "/bajrangbaan6.jpeg"
      },
      {
        number: 7,
        sanskrit:
          "जय गिरिधर जय जय सुख सागर। सुर समूह समरथ भट नागर॥\nॐ हनु हनु हनु हनुमंत हतीले। बैरिहिं मारु वज्र के कीले॥",
        transliteration:
          "Jaya Giridhara jaya jaya sukha sagara, Sura samooha samartha bhata nagara.\nOm Hanu Hanu Hanu Hanumanta hatile, bairihin maru vajra ke kile.",
        meaning:
          "Hail Hanuman, lifter of mountains, ocean of happiness, and master of strength. Strike down enemies as if struck by thunderbolts.",
        imageUrl: "/bajrangbaan7.jpeg"
      },
      {
        number: 8,
        sanskrit:
          "गदा वज्र लै बैरिहिं मारो। महाराज प्रभु दास उबारो॥\nॐकार हुंकार महावीर धावौ। वज्र गदा हनु विलम्ब न लावो॥",
        transliteration:
          "Gada vajra lai bairihin maro, Maharaja Prabhu das ubaro.\nOmkara hunkara Mahavir dhavo, vajra gada hanu vilamba na lavo.",
        meaning:
          "Take your thunderous mace and destroy enemies, O Lord. With the sound of OM, rush and protect your devotee immediately.",
        imageUrl: "/bajrangbaan8.jpeg"
      },
      {
        number: 9,
        sanskrit:
          "ॐ ह्रीं ह्रीं ह्रीं हनुमंत कपिसा। ॐ हुं हुं हुं हनु अरि उर शीशा॥",
        transliteration:
          "Om Hreem Hreem Hreem Hanumanta Kapisa, Om Hoom Hoom Hoom Hanu Ari Ura Sheesha.",
        meaning:
          "I invoke you with the sacred mantras — strike the enemies on the chest and head, O mighty Lord of the Vanaras.",
        imageUrl: "/bajrangbaan9.jpeg"
      },
      {
        number: 10,
        sanskrit:
          "जय जय जय हनुमंत अगाधा। दुख पावत जन केहि अपराधा॥\nपूजा जप तप नेम अचारा। नहि जानत हौं दास तुम्हारा॥",
        transliteration:
          "Jaya jaya jaya Hanumanta agadha, dukha pavat jana kehi aparadha.\nPooja japa tapa nema achara, nahi janata haun das tumhara.",
        meaning:
          "Glory to you, O boundless Hanuman! This servant knows not rituals or penance, yet calls upon your mercy.",
        imageUrl: "/bajrangbaan10.jpeg"
      },
      {
        number: 11,
        sanskrit:
          "वन उपवन मग गिरि गृह माहीं। तुम्हरे बल हम डरपत नाहीं॥\nपानि परौं कर जोरि मनावौं। यही अवसर अब केहि गोहरावौं॥",
        transliteration:
          "Bana upavana maga giri griha mahi, tumhare bala ham darapata nahi.\nPani parau kara jori manavau, yahi avasara ab kehi goharavau.",
        meaning:
          "In forests, paths, mountains, or homes, I fear nothing by your strength. At your feet I bow — whom else shall I call for help?",
        imageUrl: "/bajrangbaan11.jpeg"
      },
      {
        number: 12,
        sanskrit:
          "जय अंजनि कुमार बलवंता। शंकर सुवन वीर हनुमंता॥\nबदन कराल काल कुल घालक। राम सहाय सदा प्रतिपालक॥",
        transliteration:
          "Jaya Anjani Kumara Balavanta, Shankara Suvana Veera Hanumanta.\nBadana karala kala kula ghalaka, Rama sahaya sada pratipalaka.",
        meaning:
          "Glory to the mighty son of Anjani and Shiva! Fierce destroyer of evil, protector of those devoted to Rama.",
        imageUrl: "/bajrangbaan12.jpeg"
      },
      {
        number: 13,
        sanskrit:
          "भूत प्रेत पिशाच निशाचर। अग्नि बैताल काल मारि मर॥\nइन्हें मारु तोहि शपथ राम की। राखु नाथ मर्यादा नाम की॥",
        transliteration:
          "Bhuta preta pishacha nishachara, Agni baitala kala mari mara.\nInhen maru tohi shapatha Rama ki, rakhu natha maryada nama ki.",
        meaning:
          "Slay all ghosts, spirits, demons, and calamities in the name of Lord Rama, maintaining the sanctity of his divine name.",
        imageUrl: "/bajrangbaan13.jpeg"
      },
      {
        number: 14,
        sanskrit:
          "जनक सुताहि हरि दास कहावो। ताकी शपथ बिलम्ब न लावो॥",
        transliteration:
          "Janaka sutahi Hari das kahavo, taki shapatha bilamba na lavo.",
        meaning:
          "You are the servant of Lord Rama and Sita — by their name, delay not in coming to aid.",
        imageUrl: "/bajrangbaan14.jpeg"
      },
      {
        number: 15,
        sanskrit:
          "जय जय जय धुनि होत आकाशा। सुमिरत होत दुषह दुःख नाशा॥",
        transliteration:
          "Jaya jaya jaya dhuni hota akasha, sumirata hota dushaha dukha nasha.",
        meaning:
          "The skies resound with your glory, and by remembering you, unbearable sorrows vanish instantly.",
        imageUrl: "/bajrangbaan15.jpeg"
      },
      {
        number: 16,
        sanskrit:
          "ॐ छां छां छां छां चपल चलंता। ॐ हनु हनु हनु हनु हनुमंता॥",
        transliteration:
          "Om Cham Cham Cham Cham Chapala Chalanta, Om Hanu Hanu Hanu Hanu Hanumanta.",
        meaning:
          "I invoke you, O swift and powerful Hanuman! Strike swiftly and dispel negativity with divine speed.",
        imageUrl: "/bajrangbaan16.jpeg"
      },
      {
        number: 17,
        sanskrit:
          "ॐ हं हं हांका देता कपि चंचल। ॐ सं सं सहमी पराने खलदल॥",
        transliteration:
          "Om Ham Ham Hanka deta kapi chanchala, Om Sam Sam sahami parane khaladala.",
        meaning:
          "When your thundering roar echoes, the hosts of evildoers tremble and flee in fear.",
        imageUrl: "/bajrangbaan17.jpeg"
      },
      {
        number: 18,
        sanskrit:
          "अपने जन को तुरत उबारो। सुमिरत होय आनंद हमारो॥",
        transliteration:
          "Apne jana ko turata ubaro, sumirata hoya ananda hamaro.",
        meaning:
          "Immediately rescue your devotee, and bless him with joy by the mere remembrance of your name.",
        imageUrl: "/bajrangbaan18.jpeg"
      },
      {
        number: 19,
        sanskrit:
          "यहि बजरंग बाण जेहि मारे। ताहि कहो फिर कौन उबारे॥",
        transliteration:
          "Yahi Bajrang Baan jehi mare, tahi kaho phir kauna ubare.",
        meaning:
          "Who can save those struck by the thunderous arrow of Hanuman — the Bajrang Baan?",
        imageUrl: "/bajrangbaan19.jpeg"
      },
      {
        number: 20,
        sanskrit:
          "पाठ करै बजरंग बाण की। हनुमत रक्षा करै प्रान की॥",
        transliteration:
          "Path karai Bajrang Baan ki, Hanumat raksha karai pran ki.",
        meaning:
          "Those who recite the Bajrang Baan are protected for life by Lord Hanuman himself.",
        imageUrl: "/bajrangbaan20.jpeg"
      },
      {
        number: 21,
        sanskrit:
          "यह बजरंग बाण जो जापै। तेहि ते भूत प्रेत सब कांपै॥",
        transliteration:
          "Yaha Bajrang Baan jo japai, tehi te bhuta preta saba kanpai.",
        meaning:
          "Even spirits and negative forces tremble before those who chant the Bajrang Baan.",
        imageUrl: "/bajrangbaan21.jpeg"
      },
      {
        number: 22,
        sanskrit:
          "धूप देय अरु जापै हमेसा। ताके तन नहिं रहै कलेसा॥",
        transliteration:
          "Dhoop dey aru japai hamesha, take tana nahi rahai kalesha.",
        meaning:
          "Those who offer incense and recite this hymn are always free from pain and misfortune.",
        imageUrl: "/bajrangbaan22.jpeg"
      },
      {
        number: 23,
        sanskrit:
          "प्रेम प्रतीति कपी भजै। सदा धरै उर ध्यान॥",
        transliteration:
          "Prema priti kapi bhajai, sada dharai ura dhyana.",
        meaning:
          "Those who worship Hanuman with love and keep his form in their heart are blessed with success.",
        imageUrl: "/bajrangbaan23.jpeg"
      },
      {
        number: 24,
        sanskrit:
          "तेहि के कारज सकल शुभ सिद्ध करैं हनुमान॥",
        transliteration:
          "Tehi ke karaja sakala shubha siddha karai Hanuman.",
        meaning:
          "For such devotees, Hanuman fulfills all auspicious desires and grants peace and protection.",
        imageUrl: "/bajrangbaan24.jpeg"
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
    verses: [
      {
        number: 1,
        sanskrit: "देवराजसेव्यमानपावनांघ्रिपङ्कजं\nव्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।\nनारदादियोगिवृन्दवन्दितं दिगंबरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥१॥",
        transliteration:
          "Deva-Raaja-Sevyamaana-Paavana-Angghri-Pangkajam\nVyaala-Yajnya-Suutram-Indu-Shekharam Krpaakaram |\nNaarada-[A]adi-Yogi-Vrnda-Vanditam Digambaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||1||",
        meaning:
          "I bow to Sri Kalabhairava, whose lotus feet are served by Indra, who wears a snake as his sacred thread, moon on his head, and who is full of compassion. Praised by Narada and the yogis, clothed in the sky, the Lord of Kashi.",
        imageUrl: "/kalbhairav2.jpeg",
      },
      {
        number: 2,
        sanskrit: "भानुकोटिभास्वरं भवाब्धितारकं परं\nनीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।\nकालकालमंबुजाक्षमक्षशूलमक्षरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥२॥",
        transliteration:
          "Bhaanu-Kotti-Bhaasvaram Bhavaabdhi-Taarakam Param\nNiila-Kannttham-Iipsita-Artha-Daayakam Trilocanam |\nKaala-Kaalam-Ambuja-Akssam-Akssa-Shuulam-Akssaram\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||2||",
        meaning:
          "I bow to Sri Kalabhairava, radiant as a million suns, who rescues us from the ocean of worldly life, blue-throated and three-eyed, destroyer of time, lotus-eyed, holding the trident, the imperishable Lord of Kashi.",
        imageUrl: "/kalbhairav1.jpeg",
      },
      {
        number: 3,
        sanskrit: "शूलटङ्कपाशदण्डपाणिमादिकारणं\nश्यामकायमादिदेवमक्षरं निरामयम् ।\nभीमविक्रमं प्रभुं विचित्रताण्डवप्रियं\nकाशिकापुराधिनाथकालभैरवं भजे ॥३॥",
        transliteration:
          "Shuula-Ttangka-Paasha-Danndda-Paannim-Aadi-Kaarannam\nShyaama-Kaayam-Aadi-Devam-Akssaram Nir-Aamayam |\nBhiima-Vikramam Prabhum Vicitra-Taannddava-Priyam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||3||",
        meaning:
          "I bow to Sri Kalabhairava, who holds trident, hatchet, noose, and club; the primal cause of creation; dark-bodied, eternal, disease-free, and mighty; who delights in the cosmic Tandava dance.",
        imageUrl: "/kalbhairav3.jpeg",
      },
      {
        number: 4,
        sanskrit: "भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं\nभक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।\nविनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं\nकाशिकापुराधिनाथकालभैरवं भजे ॥४॥",
        transliteration:
          "Bhukti-Mukti-Daayakam Prashasta-Caaru-Vigraham\nBhakta-Vatsalam Sthitam Samasta-Loka-Vigraham |\nVi-Nikvannan-Manojnya-Hema-Kingkinnii-Lasat-Kattim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||4||",
        meaning:
          "I bow to Sri Kalabhairava, the giver of both worldly prosperity and liberation; beautiful in form, loving to devotees, the essence of all worlds, adorned with golden tinkling bells around His waist.",
        imageUrl: "/kalbhairav4.jpeg",
      },
      {
        number: 5,
        sanskrit: "धर्मसेतुपालकं त्वधर्ममार्गनाशकं\nकर्मपाशमोचकं सुशर्मदायकं विभुम् ।\nस्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं\nकाशिकापुराधिनाथकालभैरवं भजे ॥५॥",
        transliteration:
          "Dharma-Setu-Paalakam Tu-Adharma-Maarga-Naashakam\nKarma-Paasha-Mocakam Su-Sharma-Daayakam Vibhum |\nSvarnna-Varnna-Shessa-Paasha-Shobhitaangga-Mannddalam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||5||",
        meaning:
          "I bow to Sri Kalabhairava, protector of righteousness, destroyer of the path of adharma, liberator from karmic bondage, the giver of true bliss, adorned with golden serpents shining around His body.",
        imageUrl: "/kalbhairav5.jpeg",
      },
      {
        number: 6,
        sanskrit: "रत्नपादुकाप्रभाभिरामपादयुग्मकं\nनित्यमद्वितीयमिष्टदैवतं निरंजनम् ।\nमृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं\nकाशिकापुराधिनाथकालभैरवं भजे ॥६॥",
        transliteration:
          "Ratna-Paadukaa-Prabhaabhi-Raama-Paada-Yugmakam\nNityam-Advitiiyam-Isstta-Daivatam Niramjanam |\nMrtyu-Darpa-Naashanam Karaala-Damssttra-Mokssannam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||6||",
        meaning:
          "I bow to Sri Kalabhairava, whose gem-studded sandals shine, the eternal, non-dual, and stainless deity, destroyer of the pride of death, whose terrible fangs liberate souls from fear.",
        imageUrl: "/kalbhairav6.jpeg",
      },
      {
        number: 7,
        sanskrit: "अट्टहासभिन्नपद्मजाण्डकोशसंततिं\nदृष्टिपातनष्टपापजालमुग्रशासनम् ।\nअष्टसिद्धिदायकं कपालमालिकाधरं\nकाशिकापुराधिनाथकालभैरवं भजे ॥७॥",
        transliteration:
          "Atta-Haasa-Bhinna-Padmaja-Anndda-Kosha-Samtatim\nDrsstti-Paata-Nasstta-Paapa-Jaalam-Ugra-Shaasanam |\nAsstta-Siddhi-Daayakam Kapaala-Maalikaa-Dharam\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||7||",
        meaning:
          "I bow to Sri Kalabhairava, whose loud laughter shatters creation’s shell, whose glance destroys sins, who is the fierce ruler granting the eight siddhis, and who wears a garland of skulls.",
        imageUrl: "/kalbhairav7.jpeg",
      },
      {
        number: 8,
        sanskrit: "भूतसंघनायकं विशालकीर्तिदायकं\nकाशिवासलोकपुण्यपापशोधकं विभुम् ।\nनीतिमार्गकोविदं पुरातनं जगत्पतिं\nकाशिकापुराधिनाथकालभैरवं भजे ॥८॥",
        transliteration:
          "Bhuuta-Samgha-Naayakam Vishaala-Kiirti-Daayakam\nKaashi-Vaasa-Loka-Punnya-Paapa-Shodhakam Vibhum |\nNiiti-Maarga-Kovidam Puraatanam Jagatpatim\nKaashikaa-Pura-Adhinaatha-Kaalabhairavam Bhaje ||8||",
        meaning:
          "I bow to Sri Kalabhairava, ruler of ghosts and celestial beings, who bestows immense glory, purges both the merits and sins of those residing in Kashi, guides beings on the path of righteousness, and is the most ancient and eternal Lord of the universe.",
        imageUrl: "/kalbhairav8.jpeg",
      },
      {
        number: 9,
        sanskrit: "कालभैरवाष्टकं पठंति ये मनोहरं\nज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।\nशोकमोहदैन्यलोभकोपतापनाशनं\nप्रयान्ति कालभैरवांघ्रिसन्निधिं नरा ध्रुवम् ॥९॥",
        transliteration:
        "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
      meaning:
        "You have helped even the greatest of gods. O mighty Lord Hanuman, what trouble can’t you remove for your humble devotees? Remove my sorrows quickly, O Sankat Mochan!",
       imageUrl: "/kalbhairavlast.jpeg",
      },
      
    ],
    
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
    verses: [
      {
        number: 1,
        sanskrit:
          "बाल समय रवि भक्ष लियो तब, तीनहुं लोक भयो अंधियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो।\nदेवन आनि करी बिनती तब, छाड़ी दियो रवि कष्ट निवारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Baala samay ravi bhaksha liyo tab, teenahu loka bhayo andhiyaaro.\nTaahi so traas bhayo jag ko, yah sankat kaahu so jaat na taaro.\nDevan aani kari binati tab, chhaadi diyo ravi kasht nivaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "As a child, you swallowed the Sun, plunging the three worlds into darkness. When the gods prayed, you released it, relieving their distress. O Hanuman! The whole world knows you as the remover of all troubles.",
        imageUrl: "/hanumanasthak1.jpeg",
      },
      {
        number: 2,
        sanskrit:
          "बालि की त्रास कपीस बसैं गिरि, जात महाप्रभु पंथ निहारो।\nचौंकि महामुनि साप दियो तब, चाहिए कौन बिचार बिचारो।\nकैद्विज रूप लिवाय महाप्रभु, सो तुम दास के सोक निवारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Baali ki traas kapees basai giri, jaat mahaaprabhu panth nihaaro.\nChaunki mahaamuni saap diyo tab, chaahiye kaun bichaar bichaaro.\nKai-dwij roop liyaay mahaaprabhu, so tum daas ke sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When Sugriva was terrified of Bali, you guided him faithfully. You even took a Brahmin’s form to help and relieve your devotee’s sorrow. Truly, O Hanuman, you are the remover of all distress.",
        imageUrl: "/hanumanasthak2.jpeg",
      },
      {
        number: 3,
        sanskrit:
          "अंगद के संग लेन गए सिय, खोज कपीस यह बैन उचारो।\nजीवत ना बचिहौ हम सो जु, बिना सुधि लाये इहां पगु धारो।\nहेरी थके तट सिन्धु सबे तब, लाए सिया-सुधि प्राण उबारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Angad ke sang len gaye siya, khoj kapees yah bain uchaaro.\nJeevat na bachiho hum so ju, bina sudhi laaye ihaan pagu dhaaro.\nHeri thake tat sindhu sabe tab, laaye siya sudhi praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When none could find Sita, you crossed the mighty ocean and brought her news back to Sri Ram, saving the mission and uplifting all. You are truly the life-saver and remover of distress.",
        imageUrl: "/hanumanasthak3.jpeg",
      },
      {
        number: 4,
        sanskrit:
          "रावण त्रास दई सिय को सब, राक्षसी सों कही सोक निवारो।\nताहि समय हनुमान महाप्रभु, जाए महा रजनीचर मारो।\nचाहत सीय असोक सों आगि सु, दै प्रभु मुद्रिका सोक निवारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Raavan traas daee siya ko sab, raakshasi son kahi sok nivaaaro.\nTaahi samay hanumaan mahaaprabhu, jaaye mahaa rajaneechara maaro.\nChaahat siya asok son aagi su, dai prabhu mudrika sok nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When Sita was tormented by Ravana, you brought her Lord’s ring and gave her hope. You destroyed the demons in Lanka and became the remover of her sorrow.",
        imageUrl: "/hanumanasthak6.jpeg",
      },
      {
        number: 5,
        sanskrit:
          "बान लाग्यो उर लछिमन के तब, प्राण तजे सूत रावन मारो।\nलै गृह बैद्य सुषेन समेत, तबै गिरि द्रोण सु बीर उपारो।\nआनि सजीवन हाथ दिए तब, लछिमन के तुम प्रान उबारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Baan laagyo ur lachhiman ke tab, praan taje soot raavan maaro.\nLai grih baidh sushein samet, tabai giri dron su beer upaaro.\nAani sajivan haath diye tab, lachhiman ke tum praan ubaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When Lakshman was struck by Ravana’s son and lay lifeless, you brought the Sanjeevani mountain itself and revived him. O Hanuman, you truly save life itself.",
        imageUrl: "/hanumanasthak7.jpeg",
      },
      {
        number: 6,
        sanskrit:
          "रावन युद्ध अजान कियो तब, नाग कि फांस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल, मोह भयो यह संकट भारो।\nआनि खगेस तबै हनुमान जु, बंधन काटि सुत्रास निवारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Raavan yudh ajaan kiyo tab, naag ki faans sabai sir daaro.\nShri raghunaath samet sabai dal, moh bhayo yah sankat bhaaro.\nAani khages tabai hanuman ju, bandhan kaati sutraas nivaaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When Ravana used the serpent weapon, binding Sri Ram and all warriors, you brought Garuda, freeing them and removing the great crisis. Who does not know you, O Hanuman, remover of troubles?",
        imageUrl: "/hanumanasthak4.jpeg",
      },
      {
        number: 7,
        sanskrit:
          "बंधू समेत जबै अहिरावन, लै रघुनाथ पताल सिधारो।\nदेबिन्हीं पूजि भलि विधि सों बलि, देउ सबै मिलि मंत्र विचारो।\nजाये सहाए भयो तब ही, अहिरावन सैन्य समेत संहारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Bandhu samet jabai ahiraavan, lai raghunaath pataal sidhaaro.\nDebinhi pooji bhali vidhi son bali, deu sabai mili mantra vichaaro.\nJaaye sahaaye bhayo tab hi, ahiraavan sainya samet sanhaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "When Ahiravana took Lord Ram and Lakshman to the underworld, you went there, destroyed the demon army, and rescued them. Thus, you removed their crisis too.",
        imageUrl: "/hanumanasthak8.jpeg",
      },
      {
        number: 8,
        sanskrit:
          "काज किए बड़ देवन के तुम, बीर महाप्रभु देखि बिचारो।\nकौन सो संकट मोर गरीब को, जो तुमसे नहिं जात है टारो।\nबेगि हरो हनुमान महाप्रभु, जो कछु संकट होए हमारो।\nको नहीं जानत है जग में कपि, संकटमोचन नाम तिहारो॥",
        transliteration:
          "Kaaj kiye bad devan ke tum, beer mahaaprabhu dekhi bichaaro.\nKaun so sankat mor gareeb ko, jo tumse nahin jaat hai taaro.\nBeg haro hanumaan mahaaprabhu, jo kachu sankat hoye hamaaro.\nKo nahin jaanat hai jag mein kapi, sankat mochan naam tihaaro.",
        meaning:
          "You have helped even the greatest of gods. O mighty Lord Hanuman, what trouble can’t you remove for your humble devotees? Remove my sorrows quickly, O Sankat Mochan!",
        imageUrl: "/hanumanasthak5.jpeg",
      },
    ],
  }
];

export const categories = [
  "Popular Scriptures",
  "Bhakti Collection",
  "Vedic Wisdom",
  "Mantras & Stotrams"
];
