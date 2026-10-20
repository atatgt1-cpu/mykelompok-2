const teamMembers = [
  {
    name: 'Ahmad Rizky Pratama',
    role: 'Creative Lead & Director',
    specialty: 'Storytelling & Project Direction',
    avatar: 'src/assets/images/member_lead_avatar_1792402871481.jpg',
    bio: 'Bertanggung jawab memimpin visi konseptual proyek, mengorkestrasi alur kerja tim, serta memastikan setiap narasi teks dan penyajian visual selaras dengan tujuan pembelajaran.',
    achievement: 'Juara 1 Lomba Cipta Narasi Kreatif',
    score: 95
  },
  {
    name: 'Siti Sarah Maulida',
    role: 'Research & Content Strategist',
    specialty: 'Linguistics & Recount Analysis',
    avatar: 'src/assets/images/member_research_avatar_1792402872429.jpg',
    bio: 'Fokus dalam riset mendalam tata bahasa Inggris, kurasi kosakata tematik, serta analisis komprehensif materi recount text.',
    achievement: 'Skor TOEFL Prediksi Tertinggi',
    score: 94
  },
  {
    name: 'Naufal Valentiano',
    role: 'Lead Full-Stack Developer',
    specialty: 'Interactive Architecture & UI Systems',
    avatar: 'src/assets/images/member_dev_avatar_1792402872834.jpg',
    bio: 'Mengembangkan arsitektur digital interaktif, sistem animasi micro-interactions, dan navigasi responsif multi-device.',
    achievement: 'Finalis Web Development Competition',
    score: 96
  },
  {
    name: 'Amanda Putri Clarissa',
    role: 'Visual & UI/UX Designer',
    specialty: 'Design Systems & Spatial Aesthetics',
    avatar: 'src/assets/images/member_designer_avatar_1792402872373.jpg',
    bio: 'Merancang tata letak visual futuristik, palet warna kosmik, infografis mind map, serta elemen tipografi yang elegan.',
    achievement: 'Desainer Terbaik UI/UX Hackathon',
    score: 95
  }
];

const projects = [
  {
    id: 'independence-day',
    title: 'The Euphoria of Independence Day',
    category: 'Recount Text',
    readTime: '4 min baca',
    image: 'src/assets/images/story_independence_day_1792404826523.jpg',
    tags: ['Recount Text', 'Independence Day', 'Vocabulary'],
    shortDesc: 'Cerita pengalaman perayaan Hari Kemerdekaan dengan struktur generik lengkap dan hasil refleksi yang kuat.',
    description: 'Karya ini menampilkan perjalanan perayaan Hari Kemerdekaan dengan orientasi kuat, rangkaian peristiwa yang hidup, dan penutup yang menekankan nilai persatuan dan gotong royong.',
    bullets: [
      'Orientation jelas menjelaskan waktu, tempat, dan peserta kegiatan.',
      'Urutan peristiwa ditulis secara kronologis dan logis.',
      'Re-orientation menegaskan makna kemerdekaan sebagai nilai kebersamaan.',
      'Kosa kata seperti electrifying, resoundingly, dan culminated memperkaya narasi.'
    ]
  },
  {
    id: 'karimun-jawa',
    title: 'My Traveling to Karimun Jawa',
    category: 'Recount Text',
    readTime: '5 min baca',
    image: 'src/assets/images/story_karimun_jawa_1792404826025.jpg',
    tags: ['Travel Recount', 'Karimun Jawa', 'Grammar'],
    shortDesc: 'Ekspedisi bahari ke Karimun Jawa dengan fokus pada pengalaman, pelestarian laut, dan kronologi perjalanan.',
    description: 'Proyek ini membawa pembaca melalui perjalanan laut, aktivitas snorkeling, serta apresiasi terhadap ekosistem pesisir Indonesia.',
    bullets: [
      'Menguraikan momen awal perjalanan dari Pelabuhan Kartini.',
      'Mencakup ekspedisi snorkeling dan edukasi konservasi penyu.',
      'Menggunakan kata kerja lampau secara konsisten.',
      'Menyampaikan pesan lingkungan dalam penutup yang bermakna.'
    ]
  },
  {
    id: 'storybook-interactive',
    title: 'Illustrated Recount Storybook',
    category: 'Story Book',
    readTime: 'Multi chapter',
    image: 'src/assets/images/story_independence_day_1792404826523.jpg',
    tags: ['Story Book', 'Illustrated', 'Bilingual'],
    shortDesc: 'Buku cerita digital bergambar interaktif yang memadukan dua tema utama dalam satu alur visual.',
    description: 'Dengan pendekatan visual yang dinamis, buku ini menghadirkan cerita bergambar yang lebih mudah dipahami dan lebih menarik untuk dibaca.',
    bullets: [
      'Page-by-page storytelling untuk pengalaman baca yang lebih immersive.',
      'Visual yang memadukan dua tema: kemerdekaan dan pelestarian laut.',
      'Kata kunci dan arti disediakan untuk mendukung pemahaman kosakata.',
      'Desain yang rapi menjadikan materi lebih mudah dicerna.'
    ]
  },
  {
    id: 'presentation-deck',
    title: 'Mastering Recount Text: Complete Deck',
    category: 'Presentasi',
    readTime: '8 slides',
    image: 'src/assets/images/story_karimun_jawa_1792404826025.jpg',
    tags: ['Presentasi', 'English Pedagogy', 'Slides'],
    shortDesc: 'Deck digital interaktif berisi materi definisi, struktur, tata bahasa, dan studi kasus recount text.',
    description: 'Slide presentasi ini berfungsi sebagai panduan pembelajaran yang jelas, lengkap, dan mudah dipahami oleh audiens.',
    bullets: [
      'Menyusun konsep recount text secara sistematis.',
      'Menggambarkan penggunaan simple past tense dan temporal connectives.',
      'Memadukan teori dengan contoh nyata dari dua studi kasus.',
      'Memberikan penjelasan visual yang efektif untuk presentasi.'
    ]
  },
  {
    id: 'mindmap-recount',
    title: 'Recount Text Conceptual Mind Map',
    category: 'Mind Map',
    readTime: 'Peta konsep',
    image: 'src/assets/images/story_independence_day_1792404826523.jpg',
    tags: ['Mind Map', 'Cognitive Map', 'Structure'],
    shortDesc: 'Diagram visual yang menguraikan struktur, kaidah kebahasaan, dan alur menulis recount text.',
    description: 'Mind map ini membantu memahami hubungan antar konsep sekaligus mempercepat proses belajar siswa.',
    bullets: [
      'Mengelompokkan tujuan sosial, struktur, dan tata bahasa recount text.',
      'Menyusun informasi secara hierarkis dan mudah diingat.',
      'Membantu siswa menyusun teks dengan urutan yang logis.',
      'Didesain agar tampil jelas pada layar kecil dan besar.'
    ]
  },
  {
    id: 'infographic-cheatsheet',
    title: 'Recount Text Infographic Cheatsheet',
    category: 'Infografis',
    readTime: 'Cheatsheet',
    image: 'src/assets/images/story_karimun_jawa_1792404826025.jpg',
    tags: ['Infografis', 'Cheatsheet', 'Grammar'],
    shortDesc: 'Ringkasan cepat berupa tabel grammar, formula past tense, dan panduan menulis recount text.',
    description: 'Infografis ini berfungsi sebagai referensi cepat untuk memahami kaidah dan cara menulis recount teks dengan benar.',
    bullets: [
      'Menampilkan transformasi kata kerja dasar ke bentuk lampau.',
      'Menyediakan daftar time connectives yang umum dipakai.',
      'Membuat formula kalimat simple past tense lebih mudah dipahami.',
      'Memuat panduan dos & don’ts dalam penulisan.'
    ]
  }
];

const projectGrid = document.getElementById('projectGrid');
const memberGrid = document.getElementById('memberGrid');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');
const header = document.getElementById('header');
const scrollTopBtn = document.querySelector('.scroll-top');

function renderMembers() {
  memberGrid.innerHTML = teamMembers.map((member) => `
    <article class="member-card reveal" data-name="${member.name}">
      <div class="member-card__image">
        <img src="${member.avatar}" alt="${member.name}" loading="lazy" />
      </div>
      <div class="member-card__body">
        <div class="member-card__meta">
          <span class="member-card__role">${member.role}</span>
          <span class="member-card__score">${member.score}%</span>
        </div>
        <h3>${member.name}</h3>
        <p class="member-card__specialty">${member.specialty}</p>
        <button class="member-card__button" type="button">Lihat Profil</button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.member-card').forEach((card) => {
    card.addEventListener('click', () => {
      const member = teamMembers.find((item) => item.name === card.dataset.name);
      if (!member) return;

      const html = `
        <div class="modal__content">
          <img src="${member.avatar}" alt="${member.name}" />
          <div class="modal__header">
            <div>
              <p class="eyebrow">${member.role}</p>
              <h3 id="modalTitle">${member.name}</h3>
            </div>
            <span class="member-card__score">${member.score}% skill</span>
          </div>
          <div class="modal__meta">
            <span>${member.specialty}</span>
            <span>•</span>
            <span>${member.achievement}</span>
          </div>
          <p>${member.bio}</p>
        </div>
      `;

      modalContent.innerHTML = html;
      projectModal.classList.add('is-open');
      projectModal.setAttribute('aria-hidden', 'false');
    });
  });
}

function renderProjects(filter = 'all') {
  const visibleProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects.map((project) => `
    <article class="project-card reveal" data-id="${project.id}">
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-card__body">
        <div class="project-card__header">
          <span class="project-card__category">${project.category}</span>
          <span class="project-card__readtime">${project.readTime}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.shortDesc}</p>
        <div class="tag-list">
          ${project.tags.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  projectGrid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const item = projects.find((project) => project.id === card.dataset.id);
      if (!item) return;

      const html = `
        <div class="modal__content">
          <img src="${item.image}" alt="${item.title}" />
          <div class="modal__header">
            <div>
              <p class="eyebrow">${item.category}</p>
              <h3 id="modalTitle">${item.title}</h3>
            </div>
            <span class="project-card__readtime">${item.readTime}</span>
          </div>
          <div class="modal__meta">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join('<span>•</span>')}
          </div>
          <p>${item.description}</p>
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </div>
      `;

      modalContent.innerHTML = html;
      projectModal.classList.add('is-open');
      projectModal.setAttribute('aria-hidden', 'false');
    });
  });

  revealOnScroll();
}

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  items.forEach((item) => observer.observe(item));
}

function setupTypingEffect() {
  const phrases = [
    'Karya & Proyek Terpilih Kelompok 2',
    'Penguasaan Recount Text & Storytelling',
    'Kolaborasi Digital & Desain Antarmuka',
    'Eksplorasi Ide Tanpa Batas Ruang'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const typingNode = document.getElementById('typingText');

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex += 1;
      typingNode.textContent = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      typingNode.textContent = current.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = deleting ? 45 : 90;
    setTimeout(tick, speed);
  }

  tick();
}

function closeModal() {
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navPanel.classList.toggle('is-open');
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = event.target.closest('.nav-panel, .nav-toggle');
    if (!clickedInsideNav) {
      navPanel.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function handleScrollEffects() {
  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
}

function setupFilterButtons() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      renderProjects(button.dataset.filter || 'all');
    });
  });
}

function setupModal() {
  projectModal.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.dataset.close === 'true') {
      closeModal();
    }
  });

  const closeBtn = document.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

function setupScrollTop() {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

renderMembers();
renderProjects();
setupTypingEffect();
setupNavigation();
setupFilterButtons();
setupModal();
setupScrollTop();
handleScrollEffects();
setYear();

window.addEventListener('load', () => {
  revealOnScroll();
});
