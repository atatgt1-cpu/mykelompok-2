export interface Member {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatar: string;
  bio: string;
  achievement: string;
  quote: string;
  skills: { name: string; level: number }[];
  contributions: string[];
}

export const TEAM_MEMBERS: Member[] = [
  {
    id: "lead",
    name: "Ahmad Rizky Pratama",
    role: "Creative Lead & Director",
    specialty: "Storytelling & Project Direction",
    avatar: "/src/assets/images/member_lead_avatar_1792402871481.jpg",
    bio: "Bertanggung jawab memimpin visi konseptual proyek, mengorkestrasi alur kerja tim, serta memastikan setiap narasi teks dan penyajian visual selaras dengan tujuan pembelajaran.",
    achievement: "Juara 1 Lomba Cipta Narasi Kreatif & Koordinator Proyek Kolaboratif 2025",
    quote: "Mulai dari ide yang berani, satukan visi dengan tim, lalu wujudkan tanpa kompromi.",
    skills: [
      { name: "Creative Direction", level: 95 },
      { name: "Recount Storytelling", level: 90 },
      { name: "Public Speaking", level: 88 },
      { name: "Team Leadership", level: 92 }
    ],
    contributions: [
      "Mengonsep alur narasi Recount Text 'Independence Day'",
      "Menyusun storyboard dan struktur presentasi kelompok",
      "Mengarahkan sinkronisasi visual dan audio website"
    ]
  },
  {
    id: "research",
    name: "Siti Sarah Maulida",
    role: "Research & Content Strategist",
    specialty: "Linguistics & Recount Analysis",
    avatar: "/src/assets/images/member_research_avatar_1792402872429.jpg",
    bio: "Fokus dalam riset mendalam tata bahasa Inggris (generic structure & language features), kurasi kosakata tematik, serta analisis komprehensif materi recount text.",
    achievement: "Penerima Skor TOEFL Prediksi Tertinggi & Juara Storytelling Sekolah",
    quote: "Setiap data dan cerita punya jiwa yang layak disampaikan secara mendalam dan berbobot.",
    skills: [
      { name: "English Grammar & Lexicon", level: 94 },
      { name: "Content Architecture", level: 89 },
      { name: "Academic Research", level: 91 },
      { name: "Interactive Quiz Drafting", level: 87 }
    ],
    contributions: [
      "Menulis naskah autentik Recount Text 'Expedition to Karimun Jawa'",
      "Menyusun kamus kosakata (vocabulary bank) dan kuis pemahaman",
      "Memvalidasi struktur tata bahasa Orientation - Events - Reorientation"
    ]
  },
  {
    id: "dev",
    name: "Naufal Valentiano",
    role: "Lead Full-Stack Developer",
    specialty: "Interactive Architecture & UI Systems",
    avatar: "/src/assets/images/member_dev_avatar_1792402872834.jpg",
    bio: "Mengembangkan arsitektur digital interaktif, sistem animasi micro-interactions dengan 60fps, canvas starfield dinamis, serta navigasi responsif multi-device.",
    achievement: "Finalis Web Development Competition & Kontributor Komunitas Open Source",
    quote: "Bangun produk digital yang cepat, responsif, dan meninggalkan impresi tak terlupakan.",
    skills: [
      { name: "React & TypeScript", level: 96 },
      { name: "Canvas & WebGL Animations", level: 90 },
      { name: "Responsive UI/UX Math", level: 94 },
      { name: "Web Audio Synthesizer", level: 85 }
    ],
    contributions: [
      "Membangun mesin canvas luar angkasa dengan paralaks kursor",
      "Merancang sistem audio interaktif dan speech synthesis",
      "Mengoptimalkan performa loading dan kompatibilitas mobile"
    ]
  },
  {
    id: "designer",
    name: "Amanda Putri Clarissa",
    role: "Visual & UI/UX Designer",
    specialty: "Design Systems & Spatial Aesthetics",
    avatar: "/src/assets/images/member_designer_avatar_1792402872373.jpg",
    bio: "Merancang tata letak visual luar angkasa bernuansa futuristik, palet warna kosmik, infografis mind map terstruktur, dan komponen tipografi yang elegan.",
    achievement: "Desainer Terbaik UI/UX Hackathon Tingkat Pelajar & Kurator Visual Portofolio",
    quote: "Detail mikro adalah pembeda mutlak antara karya yang biasa dan karya yang luar biasa.",
    skills: [
      { name: "UI/UX & Design Systems", level: 95 },
      { name: "Mind Mapping & Infographics", level: 93 },
      { name: "Color Harmony & Glassmorphism", level: 91 },
      { name: "Micro-Interaction Motion", level: 88 }
    ],
    contributions: [
      "Menyusun palet warna kosmik (Deep Space Black & Stellar Cyan)",
      "Mendesain mind map interaktif dan kartu slide presentasi",
      "Memastikan konsistensi hierarki visual di seluruh halaman"
    ]
  }
];
