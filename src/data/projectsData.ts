export interface VocabItem {
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningId: string;
  example: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SlideItem {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
  notes: string;
  iconName: string;
}

export interface StoryPage {
  pageNumber: number;
  chapterTitle: string;
  image: string;
  englishText: string;
  indonesianText: string;
  keyWords: { word: string; meaning: string }[];
}

export interface InfographicSection {
  title: string;
  description: string;
  items: { label: string; value: string; extra?: string }[];
}

export interface ProjectItem {
  id: string;
  category: "Recount Text" | "Kuis Interaktif" | "Story Book" | "Presentasi" | "Mind Map" | "Infografis";
  title: string;
  subtitle: string;
  shortDesc: string;
  readTime: string;
  featured?: boolean;
  date: string;
  likesCount: number;
  tags: string[];
  imageCover?: string;
  content: {
    englishText?: string;
    indonesianText?: string;
    structureBreakdown?: {
      orientation: string;
      events: string[];
      reorientation: string;
    };
    vocabulary?: VocabItem[];
    quiz?: QuizQuestion[];
    slides?: SlideItem[];
    storyPages?: StoryPage[];
    mindmapNodes?: {
      title: string;
      desc: string;
      subpoints: string[];
    }[];
    infographicSections?: InfographicSection[];
  };
}

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. RECOUNT TEXT: INDEPENDENCE DAY
  {
    id: "independence-day",
    category: "Recount Text",
    title: "The Euphoria of Independence Day",
    subtitle: "A Heartfelt Recount of Freedom, Camaraderie, and Joy",
    shortDesc: "Cerita pengalaman perayaan Hari Kemerdekaan 17 Agustus dengan struktur generik lengkap: Orientation, Events, dan Re-orientation serta bank kosakata.",
    readTime: "4 min baca",
    featured: true,
    date: "Agustus 2025",
    likesCount: 138,
    tags: ["Recount Text", "Independence Day", "Generic Structure", "Vocabulary"],
    imageCover: "/src/assets/images/story_independence_day_1792404826523.jpg",
    content: {
      englishText: `Last August, our school and neighborhood held an exhilarating celebration to commemorate Indonesia's 80th Independence Day. The atmosphere was electrifying as red-and-white flags fluttered proudly against the crisp morning breeze.

Early in the morning, all students and local residents congregated on the field for the solemn flag-raising ceremony. We stood in unified rows, saluting the Sang Saka Merah Putih as our national anthem, Indonesia Raya, echoed resoundingly through the morning air.

Following the formal ceremony, the festive games commenced with boundless enthusiasm. Our group actively participated in several traditional competitions, including the iconic sack race, cracker-eating contest, and the challenging 'panjat pinang'. During the sack race, one of our teammates stumbled comically near the finish line, yet immediately sprang back up with laughter, cheered on by an ecstatic crowd. Later in the afternoon, we joined forces to conquer the tug-of-war competition. Through coordinated grit and cadence, our class emerged triumphant, claiming the first-place trophy amidst roaring applause.

As dusk settled, the festival culminated in an inspiring musical gathering and traditional culinary feast. We sat together around lantern-lit stalls enjoying nasi tumpeng and kerupuk, sharing stories and recounting the hilarious moments of the day.

Reflecting on that unforgettable day, we realized that Independence Day is not merely about winning contests. It is a profound reminder of unity, mutual support, and the enduring spirit of Gotong Royong that connects every Indonesian heart.`,
      indonesianText: `Agustus lalu, sekolah dan lingkungan tempat tinggal kami menyelenggarakan perayaan yang meriah untuk memperingati Hari Kemerdekaan Republik Indonesia ke-80. Suasana terasa penuh semangat saat bendera merah-putih berkibar megah di hembusan angin pagi.

Pagi-pagi sekali, seluruh siswa dan warga berkumpul di lapangan untuk mengikuti upacara pengibaran bendera yang khidmat. Kami berdiri dalam barisan yang rapi, memberi hormat kepada Sang Saka Merah Putih saat lagu kebangsaan Indonesia Raya berkumandang membahana di udara pagi.

Usai upacara resmi, perlombaan yang penuh kegembiraan pun dimulai dengan antusiasme tanpa batas. Kelompok kami berpartisipasi aktif dalam beberapa lomba tradisional, termasuk balap karung, lomba makan kerupuk, dan panjat pinang yang menantang. Pada saat balap karung, salah satu rekan kami tersandung lucu di dekat garis finis, namun langsung bangkit kembali sambil tertawa diiringi sorak-sorai penonton. Sore harinya, kami menyatukan kekuatan pada lomba tarik tambang. Berkat kekompakan dan ketahanan bersama, kelas kami berhasil keluar sebagai juara pertama diiringi riuh tepuk tangan.

Menjelang senja, perayaan mencapai puncaknya dengan panggung musik inspiratif dan pesta kuliner tradisional. Kami duduk bersama di sekitar lampu lampion menikmati nasi tumpeng dan kerupuk, saling bercerita dan mengenang momen-momen jenaka sepanjang hari.

Merenungkan hari yang tak terlupakan itu, kami menyadari bahwa Hari Kemerdekaan bukan hanya tentang memenangkan perlombaan. Ini adalah pengingat mendalam tentang persatuan, kepedulian bersama, dan semangat abadi Gotong Royong yang mengikat hati setiap anak bangsa.`,
      structureBreakdown: {
        orientation: "Paragraph 1: Introduces who participated (students and residents), when it took place (last August), and where the event occurred (school and neighborhood field).",
        events: [
          "Event 1: The solemn flag-raising ceremony and national anthem recitation in unified rows.",
          "Event 2: Traditional competitions (sack race, cracker eating contest, and comical fall).",
          "Event 3: The intense tug-of-war competition where our class secured first-place victory.",
          "Event 4: Twilight gathering, musical performance, and shared nasi tumpeng dinner."
        ],
        reorientation: "Paragraph 5: Personal reflection and emotional conclusion emphasizing unity, camaraderie, and the timeless essence of Gotong Royong."
      },
      vocabulary: [
        {
          word: "Commemorate",
          phonetic: "/kəˈmem.ə.reɪt/",
          partOfSpeech: "verb (V1) · Commemorated (V2)",
          meaningId: "Memperingati / mengenang peristiwa penting",
          example: "We gathered together to commemorate the nation's independence."
        },
        {
          word: "Electrifying",
          phonetic: "/iˈlek.trə.faɪ.ɪŋ/",
          partOfSpeech: "adjective",
          meaningId: "Sangat menggugah semangat / mendebarkan",
          example: "The stadium was filled with an electrifying energy."
        },
        {
          word: "Resoundingly",
          phonetic: "/rɪˈzaʊn.dɪŋ.li/",
          partOfSpeech: "adverb of manner",
          meaningId: "Secara membahana dan berkumandang jelas",
          example: "The national anthem echoed resoundingly across the open field."
        },
        {
          word: "Cadence",
          phonetic: "/ˈkeɪ.dəns/",
          partOfSpeech: "noun",
          meaningId: "Irama ritmis dalam gerakan atau tarikan tambang",
          example: "With perfect cadence, the team pulled the heavy rope to victory."
        },
        {
          word: "Culminated",
          phonetic: "/ˈkʌl.mɪ.neɪ.tɪd/",
          partOfSpeech: "verb (V2)",
          meaningId: "Mencapai puncak acara atau akhir yang memuaskan",
          example: "The festival culminated in an inspiring musical gathering."
        }
      ],
      quiz: [
        {
          question: "What is the primary function of the first paragraph in this Recount Text?",
          options: [
            "Orientation (introducing participants, setting, and time)",
            "Complication (introducing a major conflict or problem)",
            "Resolution (solving the main crisis)",
            "Re-orientation (giving concluding personal feelings)"
          ],
          correctAnswer: 0,
          explanation: "The first paragraph provides the Orientation by introducing who (students and neighbors), when (last August), and where (school field)."
        },
        {
          question: "Which tense is predominantly utilized throughout this recount text?",
          options: [
            "Simple Present Tense (habits and facts)",
            "Simple Past Tense (completed historical actions)",
            "Future Continuous Tense (ongoing future events)",
            "Present Perfect Continuous Tense"
          ],
          correctAnswer: 1,
          explanation: "Recount texts narrate past chronological events, so Simple Past Tense ('held', 'congregated', 'participated', 'echoed') is dominant."
        },
        {
          question: "What moral value did the author express in the reorientation?",
          options: [
            "That winning prize money is the most important part of August competitions",
            "That it serves as a profound reminder of unity and Gotong Royong",
            "That sack races should be replaced with digital video games",
            "That ceremonies should always be kept under five minutes"
          ],
          correctAnswer: 1,
          explanation: "The conclusion clearly states that Independence Day is a reminder of unity, mutual support, and Gotong Royong."
        },
        {
          question: "Which comical event occurred during the traditional competitions in the afternoon?",
          options: [
            "A teammate slipped and fell into the mud with a clownfish",
            "A teammate stumbled comically near the finish line in the sack race, then stood back up laughing",
            "The flag rope snapped and the flagpole fell down",
            "The fireworks exploded prematurely before noon"
          ],
          correctAnswer: 1,
          explanation: "In paragraph 3, a teammate stumbled comically near the finish line during the sack race, yet immediately sprang back up with laughter."
        },
        {
          question: "Which of the following action verbs from the Independence Day text describes team physical effort?",
          options: [
            "'Pulled' and 'gripped' during the tug-of-war competition",
            "'Slept' and 'snored' under the tree shade",
            "'Postponed' and 'delayed' until tomorrow",
            "'Ignored' and 'forgot' the national anthem"
          ],
          correctAnswer: 0,
          explanation: "Action verbs like 'pulled', 'gripped', and 'cheered' vividly convey physical dynamic actions characteristic of recount texts."
        }
      ]
    }
  },

  // 2. RECOUNT TEXT: MY TRAVELING TO KARIMUN JAWA
  {
    id: "karimun-jawa",
    category: "Recount Text",
    title: "My Traveling to Karimun Jawa",
    subtitle: "A Maritime Recount of Marine Conservation & Discovery",
    shortDesc: "Ekspedisi bahari ke kepulauan Karimun Jawa: perjalanan feri dari Jepara, snorkeling terumbu karang Menjangan Kecil, konservasi tukik, dan panorama senja.",
    readTime: "5 min baca",
    featured: true,
    date: "September 2025",
    likesCount: 156,
    tags: ["Recount Text", "Travel Recount", "Karimun Jawa", "Grammar Guide"],
    imageCover: "/src/assets/images/story_karimun_jawa_1792404826025.jpg",
    content: {
      englishText: `During the mid-semester recess, our team embarked on an unforgettable expedition to Karimun Jawa, an archipelago of pristine islands situated off the northern coast of Central Java. The anticipation had been mounting for weeks, and we were eager to witness its renowned turquoise waters firsthand.

Our journey commenced at sunrise from Kartini Port in Jepara. A sleek ferry whisked us across the calm Java Sea for approximately two hours until the lush outlines of Karimun Jawa emerged against the horizon. Upon disembarking, the tropical salty breeze and the warm hospitality of the locals instantly greeted us.

On the following morning, we boarded a traditional wooden boat to explore the outlying coral reefs of Menjangan Kecil. Donning our snorkeling gear, we plunged into the crystal-clear water. Beneath the surface lay a breathtaking underwater wonderland: vibrant staghorn corals swayed gently with the current, while schools of clownfish and iridescent parrotfish darted playfully around us. Later in the afternoon, we navigated toward a dedicated sea turtle sanctuary on Pulau Menjangan Besar, where conservation rangers educated us on turtle hatchling preservation and permitted us to release baby hatchlings safely into the open sea.

Our journey concluded at Tanjung Gelam beach just as the sun began its descent. The sky transformed into an awe-inspiring canvas of amber, violet, and molten gold, reflecting seamlessly across the tranquil shoreline.

This maritime expedition taught us not only about the sheer beauty of Indonesia's marine ecosystems, but also about our shared responsibility to protect our fragile oceans from plastic pollution and climate degradation.`,
      indonesianText: `Saat liburan tengah semester, tim kami memulai ekspedisi yang tak terlupakan ke Karimun Jawa, sebuah kepulauan dengan pulau-pulau alami yang terletak di lepas pantai utara Jawa Tengah. Rasa antusias telah tumbuh selama berminggu-minggu, dan kami sangat ingin menyaksikan langsung perairan toska yang termasyhur itu.

Perjalanan kami dimulai saat fajar dari Pelabuhan Kartini di Jepara. Kapal feri cepat membawa kami melintasi Laut Jawa yang tenang selama kurang lebih dua jam hingga gugusan bukit hijau Karimun Jawa tampak di cakrawala. Saat menginjakkan kaki di dermaga, semilir angin laut tropis dan keramahan hangat penduduk setempat langsung menyambut kami.

Keesokan paginya, kami menaiki perahu kayu tradisional untuk menjelajahi terumbu karang di sekitar Menjangan Kecil. Mengenakan perlengkapan snorkel, kami menyelam ke dalam air yang jernih. Di bawah permukaan tersaji pemandangan bawah laut yang memukau: karang-karang tanduk rusa bergoyang lembut mengikuti arus, sementara kawanan ikan badut dan ikan kakatua yang berkilauan berenang lincah di sekitar kami. Menjelang sore, kami bertolak menuju pusat konservasi penyu di Pulau Menjangan Besar, di mana para jagawana memberi edukasi tentang pelestarian tukik serta mengizinkan kami melepas anak penyu ke laut lepas dengan aman.

Perjalanan kami berakhir di Pantai Tanjung Gelam tepat saat matahari mulai terbenam. Langit bertransformasi menjadi kanvas megah bernuansa jingga, lembayung, dan emas cair yang terpantul sempurna di sepanjang garis pantai yang tenang.

Ekspedisi bahari ini tidak hanya mengajarkan kami tentang keindahan luar biasa ekosistem laut Indonesia, tetapi juga tentang tanggung jawab bersama untuk menjaga kelestarian samudra dari polusi plastik dan degradasi lingkungan.`,
      structureBreakdown: {
        orientation: "Paragraph 1 & 2: Sets the background during mid-semester break, introducing the destination (Karimun Jawa), participants (our team), and initial transit from Jepara Port.",
        events: [
          "Event 1: Fast ferry transit across the calm Java Sea and arrival at the main island harbor.",
          "Event 2: Traditional wooden boat snorkeling adventure at Menjangan Kecil coral reef.",
          "Event 3: Visiting the sea turtle sanctuary at Pulau Menjangan Besar and releasing hatchlings into the wild.",
          "Event 4: Watching the golden sunset over Tanjung Gelam beach."
        ],
        reorientation: "Paragraph 5: Meaningful closure conveying ecological awareness and ecological stewardship towards Indonesia's marine treasures."
      },
      vocabulary: [
        {
          word: "Archipelago",
          phonetic: "/ˌɑː.kɪˈpel.ə.ɡəʊ/",
          partOfSpeech: "noun",
          meaningId: "Gugusan kepulauan / kumpulan banyak pulau",
          example: "Karimun Jawa is an archipelago of pristine tropical islands."
        },
        {
          word: "Pristine",
          phonetic: "/ˈprɪs.tiːn/",
          partOfSpeech: "adjective",
          meaningId: "Murni, alami, dan belum terjamah polusi",
          example: "The island boasts pristine white sand and azure water."
        },
        {
          word: "Disembark",
          phonetic: "/ˌdɪs.ɪmˈbɑːk/",
          partOfSpeech: "verb (V1) · Disembarked (V2)",
          meaningId: "Turun dari kapal atau moda transportasi laut",
          example: "Upon disembarking, we were greeted by the friendly locals."
        },
        {
          word: "Iridescent",
          phonetic: "/ˌɪr.ɪˈdes.ənt/",
          partOfSpeech: "adjective",
          meaningId: "Berkilau memancarkan aneka warna pelangi saat terkena cahaya",
          example: "The scales of the parrotfish were brightly iridescent."
        },
        {
          word: "Sanctuary",
          phonetic: "/ˈsæŋk.tʃu.ə.ri/",
          partOfSpeech: "noun",
          meaningId: "Tempat perlindungan satwa / suaka pelestarian",
          example: "The turtle sanctuary protects hatchlings before releasing them into the sea."
        }
      ],
      quiz: [
        {
          question: "Where did the expedition start before reaching Karimun Jawa?",
          options: [
            "Tanjung Priok Harbor, Jakarta",
            "Kartini Port in Jepara",
            "Ketapang Port in Banyuwangi",
            "Merak Port in Banten"
          ],
          correctAnswer: 1,
          explanation: "The text explicitly states: 'Our journey commenced at sunrise from Kartini Port in Jepara.'"
        },
        {
          question: "What specific conservation effort took place at Pulau Menjangan Besar?",
          options: [
            "Building high-rise coastal hotels",
            "Preserving sea turtle hatchlings and releasing them into the ocean",
            "Operating large-scale commercial fishing trawlers",
            "Collecting wild coral to sell as souvenirs"
          ],
          correctAnswer: 1,
          explanation: "Rangers educated the team on sea turtle hatchling preservation and permitted releasing baby turtles into the sea."
        },
        {
          question: "Which of the following is a time connective used in the story?",
          options: [
            "'During', 'On the following morning', 'Later in the afternoon'",
            "'Because', 'Since', 'Although', 'Even though'",
            "'Either', 'Neither', 'Nor', 'Whether'",
            "'Beautifully', 'Quickly', 'Silently', 'Slowly'"
          ],
          correctAnswer: 0,
          explanation: "Recount texts rely on chronological time connectives such as 'During', 'On the following morning', and 'Later in the afternoon'."
        },
        {
          question: "What marine life did the team observe beneath the water at Menjangan Kecil?",
          options: [
            "Staghorn corals, schools of clownfish, and iridescent parrotfish",
            "Polar bears and arctic seals on icebergs",
            "Commercial oil rigs and industrial dredging pipelines",
            "Extinct freshwater river dolphins"
          ],
          correctAnswer: 0,
          explanation: "Paragraph 3 notes: 'vibrant staghorn corals swayed gently with the current, while schools of clownfish and iridescent parrotfish darted playfully around us.'"
        },
        {
          question: "How did the writer describe the sunset at Tanjung Gelam beach?",
          options: [
            "A dark stormy sky filled with thunder and hail",
            "An awe-inspiring canvas of amber, violet, and molten gold reflecting across the tranquil shoreline",
            "An uninteresting grey fog with zero visibility",
            "A blinding neon billboard overlooking a highway"
          ],
          correctAnswer: 1,
          explanation: "The text paints the sky as transforming into 'an awe-inspiring canvas of amber, violet, and molten gold, reflecting seamlessly across the tranquil shoreline.'"
        }
      ]
    }
  },

  // 3. STORY BOOK: BUKU CERITA BERGAMBAR INTERAKTIF
  {
    id: "storybook-interactive",
    category: "Story Book",
    title: "Illustrated Recount Storybook",
    subtitle: "Visual Dual-Story Anthology: Independence Day & Karimun Jawa",
    shortDesc: "Buku cerita digital bergambar interaktif: memuat dua bab cerita penuh ilustrasi, alur cerita per halaman, kosakata interaktif, dan pesan moral.",
    readTime: "Buku Interaktif Multi-Bab",
    featured: true,
    date: "Oktober 2025",
    likesCount: 164,
    tags: ["Story Book", "Illustrated Story", "Bilingual Reader", "Interactive Audio"],
    imageCover: "/src/assets/images/story_independence_day_1792404826523.jpg",
    content: {
      storyPages: [
        {
          pageNumber: 1,
          chapterTitle: "Chapter 1: The Red & White Euphoria",
          image: "/src/assets/images/story_independence_day_1792404826523.jpg",
          englishText: `The sun rose over our schoolyard on the seventeenth of August. Vibrant red and white flags fluttered under a radiant azure sky. Hundreds of students stood side by side in neat rows, singing Indonesia Raya with resounding pride. After the formal ceremony, the field turned into a carnival of joyful laughter as traditional sack races and cracker-eating contests commenced.`,
          indonesianText: `Matahari terbit di atas lapangan sekolah kami pada tanggal 17 Agustus. Bendera merah putih berkibar anggun di bawah langit biru cerah. Ratusan siswa berdiri berdampingan dalam barisan rapi, menyanyikan Indonesia Raya dengan penuh kebanggaan. Usai upacara resmi, lapangan berubah menjadi karnaval penuh tawa saat balap karung dan lomba makan kerupuk dimulai.`,
          keyWords: [
            { word: "Fluttered", meaning: "Berkibar ditiup angin sepoi-sepoi" },
            { word: "Resounding", meaning: "Bergema membahana penuh wibawa" },
            { word: "Commenced", meaning: "Dimulai secara resmi" }
          ]
        },
        {
          pageNumber: 2,
          chapterTitle: "Chapter 1: Triumph in Tug-of-War",
          image: "/src/assets/images/story_independence_day_1792404826523.jpg",
          englishText: `The highlight of the festival was the fierce tug-of-war competition. Our class faced the reigning champions. With dirty sneakers dug firmly into the turf and hands gripping the rough hemp rope, our team pulled in unison. On the count of three, a final surge of power won us the golden trophy! That afternoon, we realized that teamwork and Gotong Royong are the true essence of freedom.`,
          indonesianText: `Puncak festival adalah pertandingan tarik tambang yang sengit. Kelas kami berhadapan dengan juara bertahan. Dengan sepatu yang menancap kuat di tanah dan tangan menggenggam tali rami yang kasar, tim kami menarik serentak. Pada hitungan ketiga, hentakan kekuatan terakhir membawa piala emas untuk kami! Sore itu, kami menyadari bahwa kerja sama dan Gotong Royong adalah makna kemerdekaan sejati.`,
          keyWords: [
            { word: "Fierce", meaning: "Sengit dan penuh determinasi" },
            { word: "Unison", meaning: "Serempak dan seirama" },
            { word: "Surge", meaning: "Lonjakan kekuatan mendadak" }
          ]
        },
        {
          pageNumber: 3,
          chapterTitle: "Chapter 2: Voyage to the Tropical Jewel",
          image: "/src/assets/images/story_karimun_jawa_1792404826025.jpg",
          englishText: `Leaving the busy harbor of Kartini Jepara at daybreak, our fast ferry cut through the mirror-like Java Sea. Soon, the emerald outlines of Karimun Jawa emerged in the morning mist. Stepping onto the island, the gentle aroma of salt and frangipani blossoms welcomed us to a peaceful sanctuary untouched by city noise.`,
          indonesianText: `Meninggalkan pelabuhan Kartini Jepara saat fajar, feri cepat kami melaju membelah Laut Jawa yang tenang bagai cermin. Tak lama kemudian, siluet hijau zamrud Karimun Jawa tampak di balik kabut pagi. Melangkah ke daratan pulau, aroma semilir garam laut dan bunga kamboja menyambut kami di surga damai yang terbebas dari kebisingan kota.`,
          keyWords: [
            { word: "Daybreak", meaning: "Fajar menyingsing" },
            { word: "Emerald", meaning: "Hijau zamrud alami" },
            { word: "Sanctuary", meaning: "Suaka alam yang tenang" }
          ]
        },
        {
          pageNumber: 4,
          chapterTitle: "Chapter 2: Corals & Sea Turtle Guardians",
          image: "/src/assets/images/story_karimun_jawa_1792404826025.jpg",
          englishText: `At Menjangan Kecil, we plunged into crystalline waters where iridescent fish darted amidst dancing staghorn coral reefs. Later at Menjangan Besar, we held fragile baby sea turtles in our cupped hands and gently released them toward the rolling surf. As the sun melted into molten gold at Tanjung Gelam, we vowed to protect our fragile marine heritage forever.`,
          indonesianText: `Di Menjangan Kecil, kami menyelam ke air yang jernih di mana ikan-ikan berkilauan melintas di antara terumbu karang tanduk rusa. Kemudian di Menjangan Besar, kami menangkup anak-anak penyu kecil di telapak tangan kami dan melepaskannya perlahan menuju gulungan ombak laut. Saat matahari meleleh menjadi keemasan di Pantai Tanjung Gelam, kami berjanji untuk senantiasa menjaga kelestarian laut pusaka kita.`,
          keyWords: [
            { word: "Crystalline", meaning: "Sangat jernih bagai kristal" },
            { word: "Fragile", meaning: "Rentan dan butuh perlindungan" },
            { word: "Heritage", meaning: "Warisan alam berharga" }
          ]
        }
      ]
    }
  },

  // 4. PPT: PRESENTASI DIGITAL 8-SLIDE INTERAKTIF
  {
    id: "presentation-deck",
    category: "Presentasi",
    title: "Mastering Recount Text: Complete Deck",
    subtitle: "8 Comprehensive Slides with Pedagogical Notes",
    shortDesc: "Slide presentasi digital interaktif Kelompok 2: mengupas tuntas definisi, generic structure, kaidah kebahasaan past tense, serta studi komparatif dua teks recount.",
    readTime: "8 slides interaktif",
    featured: false,
    date: "Oktober 2025",
    likesCount: 122,
    tags: ["Presentasi", "Slide Deck", "English Pedagogy", "Grammar Rules"],
    content: {
      slides: [
        {
          number: 1,
          title: "1. Definition & Social Purpose",
          subtitle: "What is Recount Text and why do we write it?",
          points: [
            "Definisi: Teks yang menceritakan kembali peristiwa masa lampau secara berurutan dan kronologis.",
            "Tujuan Sosial: Memberikan informasi (to inform) atau menghibur pembaca (to entertain).",
            "Jenis Recount: Personal Recount (pengalaman pribadi), Factual Recount (laporan ilmiah/sejarah), dan Imaginative Recount.",
            "Distingsi Kritis: Berbeda dari Narrative Text yang berfokus pada konflik fiksi dan resolusi masalah klimaks."
          ],
          notes: "Ingatkan audiens bahwa recount text berfokus pada fakta atau riwayat nyata ('what happened'), bukan plot imajiner dengan tokoh antagonis.",
          iconName: "Compass"
        },
        {
          number: 2,
          title: "2. Generic Structure Anatomy",
          subtitle: "The Three Indispensable Pillars of Every Recount",
          points: [
            "Pilar 1 - Orientation: Memberikan informasi latar belakang (Who, Where, When, and Context).",
            "Pilar 2 - Sequence of Events: Rangkaian peristiwa berurutan dipandu penanda waktu (time connectives).",
            "Pilar 3 - Re-orientation: Paragraf penutup opsional berisi evaluasi, refleksi moral, atau kesan penulis.",
            "Pentingnya Transisi: Setiap paragraf 'Events' harus saling terikat dengan alur yang logis dan runtut."
          ],
          notes: "Tekankan bahwa Orientation yang lemah akan membuat pembaca bingung mengenai konteks waktu dan latar cerita.",
          iconName: "Layers"
        },
        {
          number: 3,
          title: "3. Linguistic Features & Grammar",
          subtitle: "The Syntactic Engine that Drives the Narrative",
          points: [
            "Simple Past Tense: Menggunakan kata kerja bentuk lampau (V2) baik reguler (-ed) maupun ireguler.",
            "Action Verbs: Kata kerja yang mendeskripsikan aktivitas fisik konkret (e.g., plunged, celebrated, cheered).",
            "Temporal Connectives: Konjungsi kronologis (First, Next, Later, Following that, Finally).",
            "Adverbs of Time & Place: Keterangan waktu dan tempat spesifik untuk memperjelas suasana peristiwa."
          ],
          notes: "Tunjukkan bahwa kalimat dalam recount text wajib konsisten dalam past tense dan tidak boleh bercampur present tense secara acak.",
          iconName: "BookOpen"
        },
        {
          number: 4,
          title: "4. Case Study 1: Independence Day",
          subtitle: "Patriotic Narrative Deconstructed",
          points: [
            "Orientation: Upacara bendera khidmat di lapangan sekolah pada bulan Agustus ke-80.",
            "Events: Lomba balap karung, momen tawa saat rekan terjatuh, dan kemenangan dramatis tarik tambang.",
            "Re-orientation: Refleksi bahwa nilai kemerdekaan terletak pada Gotong Royong dan persatuan.",
            "Daya Tarik Kosakata: Pemilihan kata sensoris (electrifying, fluttered, resoundingly)."
          ],
          notes: "Ajak audiens memperhatikan bagaimana emosi dan tawa dibangun dalam paragraf Events untuk menarik empati pembaca.",
          iconName: "Flag"
        },
        {
          number: 5,
          title: "5. Case Study 2: Karimun Jawa",
          subtitle: "Connecting Environmental Awareness to Recount Writing",
          points: [
            "Orientation: Perjalanan feri cepat dari Pelabuhan Kartini Jepara menuju gugusan pulau Karimun Jawa.",
            "Events: Menyelam di Menjangan Kecil dan melepaskan anak penyu di Pulau Menjangan Besar.",
            "Re-orientation: Komitmen menjaga kelestarian ekosistem laut Indonesia dari sampah dan pemanasan global.",
            "Daya Tarik Kosakata: Kosakata maritim (pristine, archipelago, iridescent, disembark)."
          ],
          notes: "Jelaskan bagaimana recount text dapat memiliki bobot edukasi tinggi dengan mengangkat isu pelestarian satwa langka.",
          iconName: "Anchor"
        },
        {
          number: 6,
          title: "6. Regular vs Irregular Verbs",
          subtitle: "Essential Past Tense Transformations",
          points: [
            "Regular Verbs (+ed): celebrate → celebrated, participate → participated, plunge → plunged.",
            "Irregular Verbs (Perubahan Bentuk): hold → held, stand → stood, win → won, leave → left.",
            "Auxiliary Verbs: was (tunggal/I, he, she, it) vs were (jamak/we, they, you).",
            "Passive Voice in Past: was educated, were greeted, was whisked across the sea."
          ],
          notes: "Berikan contoh kekeliruan umum seperti menambahkan '-ed' pada kata kerja ireguler (misal: 'wined' yang seharusnya 'won').",
          iconName: "Layers"
        },
        {
          number: 7,
          title: "7. Common Pitfalls to Avoid",
          subtitle: "How to Ensure Your Recount Text Scores Maximum Marks",
          points: [
            "Kesalahan 1: Lupa memberikan Orientation sehingga pembaca tidak tahu kapan dan di mana peristiwa terjadi.",
            "Kesalahan 2: Urutan waktu berantakan (tidak menggunakan penanda urutan seperti 'First', 'Afterwards').",
            "Kesalahan 3: Terjebak dalam bentuk Present Tense di tengah-tengah cerita masa lampau.",
            "Kesalahan 4: Paragraf penutup hambar tanpa refleksi emosional atau pesan yang bermakna."
          ],
          notes: "Lakukan self-editing dengan membaca ulang naskah sebelum dikumpulkan untuk menyaring kesalahan tenses.",
          iconName: "BookOpen"
        },
        {
          number: 8,
          title: "8. Summary & Group Takeaways",
          subtitle: "Synthesizing What We Have Learned",
          points: [
            "Recount text adalah media yang kuat untuk mengabadikan memori dan membagikan inspirasi.",
            "Melalui studi kasus Independence Day dan Karimun Jawa, kita belajar memadukan tata bahasa dengan narasi hidup.",
            "Struktur yang disiplin (Orientation, Events, Re-orientation) menghasilkan teks yang teratur dan nyaman dibaca.",
            "Kelompok 2 siap menjawab pertanyaan audiens seputar materi recount text!"
          ],
          notes: "Buka sesi tanya jawab interaktif dengan audiens dan tawarkan kuis mini untuk menguji retensi pemahaman.",
          iconName: "Compass"
        }
      ]
    }
  },

  // 5. MIND MAP: PETA KONSEP STRUKTUR DAN LINGUISTIK RECOUNT TEXT
  {
    id: "mindmap-recount",
    category: "Mind Map",
    title: "Recount Text Conceptual Mind Map",
    subtitle: "Complete Hierarchical Taxonomy of Recount Writing",
    shortDesc: "Peta konsep visual dan hierarkis: menguraikan struktur 3 pilar, 4 fitur kebahasaan, 3 tipe recount, dan alur penulisan langkah demi langkah.",
    readTime: "Peta Konsep Interaktif",
    featured: false,
    date: "Oktober 2025",
    likesCount: 119,
    tags: ["Mind Map", "Visual Learning", "Cognitive Map", "Recount Schema"],
    content: {
      mindmapNodes: [
        {
          title: "1. Core Social Purpose (Tujuan Inti)",
          desc: "Fungsi komunikatif mendasar dalam komunikasi tertulis",
          subpoints: [
            "To Inform: Menyajikan laporan faktual urutan peristiwa masa lalu secara objektif",
            "To Entertain: Membagikan pengalaman pribadi yang menarik, emosional, atau jenaka",
            "To Document: Mengarsipkan memori bersejarah atau riwayat penelitian penting"
          ]
        },
        {
          title: "2. The Triad Structure (Tiga Pilar Utama)",
          desc: "Kerangka wajib penyusun naskah recount yang koheren",
          subpoints: [
            "Orientation: Menjawab Who (siapa), Where (di mana), When (kapan), dan What (konteks awal)",
            "Sequence of Events: Paragraf beruntun dengan penanda waktu eksplisit (chronological order)",
            "Re-orientation: Penutup opsional berisi refleksi moral, kesimpulan, atau evaluasi pribadi"
          ]
        },
        {
          title: "3. Grammatical Pillars (Kaidah Tata Bahasa)",
          desc: "Sintaksis baku bahasa Inggris yang harus dipatuhi secara konsisten",
          subpoints: [
            "Simple Past Tense: Dominan kata kerja V2 (regular -ed & irregular form)",
            "Action Verbs: Menggambarkan tindakan dinamis (e.g., pulled, navigated, dove)",
            "Temporal Connectives: Kata hubung kronologis (First, Following that, As dusk settled)",
            "Specific Participants: Fokus pada partisipan cerita (e.g., our team, we, the rangers)"
          ]
        },
        {
          title: "4. Types of Recount Text (Klasifikasi)",
          desc: "Tiga ragam teks recount dalam kurikulum bahasa Inggris",
          subpoints: [
            "Personal Recount: Menceritakan pengalaman yang dialami sendiri oleh penulis",
            "Factual Recount: Menceritakan laporan sains, kecelakaan, atau peristiwa sejarah",
            "Imaginative Recount: Mengambil peran imajiner (misal: log harian astronaut di Mars)"
          ]
        },
        {
          title: "5. Five-Step Writing Workflow (Alur Menulis)",
          desc: "Panduan praktis menyusun teks recount berstandar tinggi",
          subpoints: [
            "Langkah 1: Menentukan peristiwa utama dan mencatat poin-poin kronologis",
            "Langkah 2: Menulis paragraf Orientation yang padat informasi",
            "Langkah 3: Mengembangkan paragraf Events dengan kata kerja aksi yang kaya",
            "Langkah 4: Menutup dengan Re-orientation yang berbobot dan bermakna",
            "Langkah 5: Proofreading tenses konsistensi dan ejaan kosa kata"
          ]
        }
      ]
    }
  },

  // 6. INFOGRAFIS: CHEATSHEET & FORMULA TABEL
  {
    id: "infographic-cheatsheet",
    category: "Infografis",
    title: "Recount Text Infographic Cheatsheet",
    subtitle: "Grammar Tables, Formulas, and Writing Dos & Don'ts",
    shortDesc: "Infografis tabel komprehensif: tabel transformasi kata kerja ireguler, matriks kata hubung waktu, formula kalimat past tense, dan panduan dos & don'ts.",
    readTime: "Tabel Cheatsheet Lengkap",
    featured: false,
    date: "Oktober 2025",
    likesCount: 142,
    tags: ["Infografis", "Cheatsheet", "Grammar Table", "Quick Reference"],
    content: {
      infographicSections: [
        {
          title: "Tabel Transformasi Kata Kerja (Verbs Matrix)",
          description: "Perubahan kata kerja dasar (V1) menjadi bentuk lampau (V2) yang sering muncul dalam recount text.",
          items: [
            { label: "Go → Went", value: "Pergi (Irregular)", extra: "We went to Kartini Port in Jepara." },
            { label: "See → Saw", value: "Melihat (Irregular)", extra: "We saw vibrant clownfish and corals." },
            { label: "Hold → Held", value: "Menyelenggarakan (Irregular)", extra: "The school held an exhilarating contest." },
            { label: "Stand → Stood", value: "Berdiri (Irregular)", extra: "We stood in unified rows." },
            { label: "Win → Won", value: "Menang (Irregular)", extra: "Our class won the golden trophy." },
            { label: "Celebrate → Celebrated", value: "Merayakan (Regular)", extra: "We celebrated Independence Day." },
            { label: "Plunge → Plunged", value: "Menyelam (Regular)", extra: "We plunged into the azure water." },
            { label: "Emerge → Emerged", value: "Muncul (Regular)", extra: "Karimun Jawa emerged in the morning mist." }
          ]
        },
        {
          title: "Matriks Kata Hubung Waktu (Time Connectives Matrix)",
          description: "Koleksi konjungsi kronologis untuk memandu pembaca mengikuti urutan peristiwa secara alami.",
          items: [
            { label: "Beginning (Awal Cerita)", value: "Early in the morning, At daybreak, At first, Initially" },
            { label: "Middle Sequence (Kelanjutan)", value: "Following the ceremony, Afterwards, Later in the afternoon, Meanwhile" },
            { label: "Transition (Perpindahan)", value: "On the following morning, Soon after, Subsequently" },
            { label: "Ending (Penutup Peristiwa)", value: "As dusk settled, Finally, Eventually, At last" }
          ]
        },
        {
          title: "Formula Kalimat Simple Past Tense",
          description: "Rumus baku kalimat verbal dan nominal dalam bahasa Inggris untuk recount text.",
          items: [
            { label: "Verbal Positif (+)", value: "Subject + V2 (Past Form) + Object / Complement", extra: "Contoh: Our team embarked on an expedition." },
            { label: "Verbal Negatif (-)", value: "Subject + did not (didn't) + V1 (Base Form) + Object", extra: "Contoh: We didn't give up during the competition." },
            { label: "Verbal Tanya (?)", value: "Did + Subject + V1 (Base Form) + Object?", extra: "Contoh: Did you see the sunset at Tanjung Gelam?" },
            { label: "Nominal Past (+)", value: "Subject + was/were + Adjective/Noun/Adverb", extra: "Contoh: The atmosphere was electrifying." }
          ]
        },
        {
          title: "Panduan Dos & Don'ts Penulisan Recount Text",
          description: "Daftar hal yang dianjurkan dan hal yang harus dihindari agar karya recount text Anda sempurna.",
          items: [
            { label: "DO: Pastikan ada Orientation", value: "Jelaskan Who, Where, When di awal cerita." },
            { label: "DO: Gunakan Time Connectives", value: "Pautkan antar paragraf dengan penanda kronologis yang bervariasi." },
            { label: "DO: Berikan Re-orientation Bermakna", value: "Sertakan nilai moral atau kesan mendalam di akhir tulisan." },
            { label: "DON'T: Mencampur Tenses", value: "Hindari melompat ke Simple Present Tense saat menceritakan aksi masa lampau." },
            { label: "DON'T: Membuat Alur Loncat-Loncat", value: "Jangan menaruh akhir cerita sebelum awal peristiwa diceritakan." }
          ]
        }
      ]
    }
  },

  // 7. MASTER COMPREHENSIVE QUIZ: 5 SOAL INTEGRATIF INDEPENDENCE DAY & KARIMUN JAWA
  {
    id: "master-recount-quiz",
    category: "Kuis Interaktif",
    title: "Master Quiz: Independence Day & Karimun Jawa",
    subtitle: "5 Soal Komprehensif Langsung Uji Pemahaman",
    shortDesc: "Kuis interaktif terpadu 5 soal pilihan ganda: langsung uji penguasaan Orientation, Sequence of Events, Past Tense Verbs, Time Connectives, dan Re-orientation dari kedua materi.",
    readTime: "5 Soal Langsung",
    featured: true,
    date: "Oktober 2025",
    likesCount: 172,
    tags: ["Quiz", "Independence Day", "Karimun Jawa", "Grammar Test", "Mastery"],
    imageCover: "/src/assets/images/story_karimun_jawa_1792404826025.jpg",
    content: {
      quiz: [
        {
          question: "Soal 1 (Orientation): In the opening Orientation paragraphs of both stories, what contextual background elements are clearly introduced before the actions unfold?",
          options: [
            "Specific participants (students/neighbors & our team), settings (school field & Kartini Port Jepara), and timeframes (last August & mid-semester recess)",
            "A fictional villain planning an attack on a royal castle",
            "A dialogue discussing tomorrow's weather forecast without stating where the story begins",
            "A list of hotel prices and commercial flight discounts"
          ],
          correctAnswer: 0,
          explanation: "In both stories, the Orientation clearly establishes the Who (students/neighbors, our team), When (last August, mid-semester recess), and Where (school field, Kartini Port Jepara)."
        },
        {
          question: "Soal 2 (Events Comparison): Which option correctly compares the climax event in Independence Day with the conservation activity in Karimun Jawa?",
          options: [
            "Conquering the fierce tug-of-war competition for first place vs releasing baby sea turtle hatchlings at Pulau Menjangan Besar",
            "Cooking rendang for a festival vs building a high-rise resort hotel",
            "Climbing a mango tree in the rain vs catching dolphins for a circus",
            "Losing the sack race intentionally vs running an engine speedboat race"
          ],
          correctAnswer: 0,
          explanation: "In Independence Day, the thrilling climax was pulling in cadence to win the tug-of-war trophy; in Karimun Jawa, the key activity was participating in hatchling preservation at Menjangan Besar sanctuary."
        },
        {
          question: "Soal 3 (Past Tense Grammar): Which collection of verbs from BOTH texts consists EXCLUSIVELY of past tense verbs (V2) narrating past actions?",
          options: [
            "'congregated', 'stumbled', 'embarked', 'plunged', 'whisked'",
            "'congregates', 'stumbling', 'embark', 'plunges', 'whisk'",
            "'will congregate', 'has stumbled', 'is embarking', 'was plunging', 'whisks'",
            "'to congregate', 'to stumble', 'to embark', 'to plunge', 'to whisk'"
          ],
          correctAnswer: 0,
          explanation: "All words in option A ('congregated', 'stumbled', 'embarked', 'plunged', 'whisked') are valid Past Tense (V2) verbs essential to recount texts."
        },
        {
          question: "Soal 4 (Time Connectives): How do both authors sequence events chronologically across the paragraphs?",
          options: [
            "By using temporal connectives such as 'Early in the morning', 'Following the ceremony', 'On the following morning', and 'As dusk settled'",
            "By using conditional markers like 'If', 'Unless', 'Otherwise', and 'Provided that'",
            "By jumping backwards and forwards in time randomly without chronological order",
            "By using cause-and-effect clauses exclusively without any time markers"
          ],
          correctAnswer: 0,
          explanation: "Recount texts rely on chronological time connectives to guide the reader through the sequence of events from beginning to end."
        },
        {
          question: "Soal 5 (Re-orientation & Reflection): Comparing the Re-orientation paragraphs of both texts, what core values did the writers reflect upon?",
          options: [
            "Independence Day emphasizes unity and Gotong Royong, while Karimun Jawa emphasizes collective environmental responsibility to protect marine ecosystems",
            "That school competitions are only about winning money, while traveling is solely for taking photos",
            "That students should stop studying English grammar and focus on playing video games",
            "That ferry boats in Jepara should be replaced with jet airplanes"
          ],
          correctAnswer: 0,
          explanation: "The conclusion of Independence Day highlights camaraderie and Gotong Royong, while the Karimun Jawa conclusion calls for ocean stewardship and marine preservation."
        }
      ]
    }
  }
];
