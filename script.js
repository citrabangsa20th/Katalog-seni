/*
  KATALOG SENI OPEN HOUSE SMA CITRA BANGSA 2026
  Cara menambahkan karya:
  - Gambar anyaman: images/anyaman/anyaman-01.jpg, dst.
  - Gambar wayang: images/wayang/wayang-01.jpg, dst.
  - Komik satu halaman: satu file gambar di pages.
  - Komik beberapa halaman: masukkan beberapa file gambar dalam array pages, urut sesuai halaman.
  - Ganti title dan artist sesuai data karya siswa.
*/
const catalogData = {
  anyaman: [
    { id: 'a01', title: 'Anyaman 01', artist: 'Jesslyn', image: 'images/anyaman/anyaman-01.jpg' },
    { id: 'a02', title: 'Anyaman 02', artist: 'Joaquin', image: 'images/anyaman/anyaman-02.jpg' },
    { id: 'a03', title: 'Anyaman 03', artist: 'Princessa', image: 'images/anyaman/anyaman-03.jpg' },
    { id: 'a04', title: 'Anyaman 04', artist: 'Gerald', image: 'images/anyaman/anyaman-04.jpg' },
    { id: 'a05', title: 'Anyaman 05', artist: 'Vrgil', image: 'images/anyaman/anyaman-05.jpg' },
    { id: 'a06', title: 'Anyaman 06', artist: 'Vley', image: 'images/anyaman/anyaman-06.jpg' },
    { id: 'a07', title: 'Anyaman 07', artist: 'Jonathan', image: 'images/anyaman/anyaman-07.jpg' },
    { id: 'a08', title: 'Anyaman 08', artist: 'Jesse', image: 'images/anyaman/anyaman-08.jpg' },
    { id: 'a09', title: 'Anyaman 09', artist: 'David', image: 'images/anyaman/anyaman-09.jpg' },
    { id: 'a10', title: 'Anyaman 10', artist: 'Jessie', image: 'images/anyaman/anyaman-10.jpg' },
  ],
  wayang: [
    { id: 'w01', title: 'Wayang 01', artist: 'Josephine, Lionel, Clara, Deysi & Jennifer', image: 'images/wayang/wayang-01.jpg' },
    { id: 'w02', title: 'Wayang 02', artist: 'Hadid, Fivian, Manova, Jasmine & Cheryl Tan', image: 'images/wayang/wayang-02.jpg' },
    { id: 'w03', title: 'Wayang 03', artist: 'Nikita, Verren, Jeslyn, Jessie & Shane', image: 'images/wayang/wayang-03.jpg' },
    { id: 'w04', title: 'Wayang 04', artist: 'Cheryl A, Ong Felisha, Sisi & Nada', image: 'images/wayang/wayang-04.jpg' },
    { id: 'w05', title: 'Wayang 05', artist: 'Derick, Luna, Valerie, Khansa & Alexia', image: 'images/wayang/wayang-05.jpg' },
    { id: 'w06', title: 'Wayang 06', artist: 'Javellyn, Fahrini, Monica, Lilo & Evelyn', image: 'images/wayang/wayang-06.jpg' },
  ],
  comic: [
    //Contoh komik satu halaman:
    { id: 'c01', title: 'Sleep Call', artist: 'Lionel, Derick & Alexia', pages: ['images/komik/komik-01-halaman-1.jpg'] },
    { id: 'c02', title: 'Jangan Menutup Mata', artist: 'Veren & Ong Felisha', pages: ['images/komik/komik-02-halaman-1.jpg', 'images/komik/komik-02-halaman-2.jpg'] },
    {
      id: 'c03',
      title: 'Kas yang Tak Pernah Sampai',
      artist: 'Monica & Evelyn',
      pages: [
        'images/komik/komik-03-halaman-1.jpg',
        'images/komik/komik-03-halaman-2.jpg',
        'images/komik/komik-03-halaman-3.jpg',
        'images/komik/komik-03-halaman-4.jpg',
        'images/komik/komik-03-halaman-5.jpg',
        'images/komik/komik-03-halaman-6.jpg',
        'images/komik/komik-03-halaman-7.jpg',
        'images/komik/komik-03-halaman-8.jpg',
        'images/komik/komik-03-halaman-9.jpg',
        'images/komik/komik-03-halaman-10.jpg',
      ],
    },
    { id: 'c04', title: 'Kebakaran', artist: 'Deysi, Manova & Hadid', pages: ['images/komik/komik-04-halaman-1.jpg'] },
    { id: 'c05', title: 'Gengsi Dulu, Bantuan Kemudian', artist: 'Fivian, Khansa & Josephine', pages: ['images/komik/komik-05-halaman-1.jpg', 'images/komik/komik-05-halaman-2.jpg'] },
    { id: 'c06', title: 'Teman Online', artist: 'Nada & Lilo', pages: ['images/komik/komik-06-halaman-1.jpg'] },
    { id: 'c07', title: 'Habis Terbakar', artist: 'Nikita & Jessie', pages: ['images/komik/komik-07-halaman-1.jpg'] },
    { id: 'c08', title: 'Janji Manis', artist: 'Jesslyn & Cheryl', pages: ['images/komik/komik-08-halaman-1.jpg'] },
    { id: 'c09', title: 'Terlambat', artist: 'Javellyn Zhang', pages: ['images/komik/komik-09-halaman-1.jpg', 'images/komik/komik-09-halaman-2.jpg'] },
    { id: 'c10', title: 'Tugas Kelompok', artist: 'Sisi & Javellyn', pages: ['images/komik/komik-10-halaman-1.jpg', 'images/komik/komik-10-halaman-2.jpg'] },
    { id: 'c11', title: 'Peduli Katanya', artist: 'Luna, Jasmine & Valerie', pages: ['images/komik/komik-11-halaman-1.jpg'] },
    { id: 'c12', title: 'Viral Celaka', artist: 'Clara, Jennifer & Cheryl Tan', pages: ['images/komik/komik-12-halaman-1.jpg'] },
    { id: 'c13', title: 'Ekspektasi VS Realita MBG', artist: 'Fahrini & Shane', pages: ['images/komik/komik-13-halaman-1.jpg'] },
  ],
};

const categoryInfo = {
  anyaman: { number: 'KATEGORI 01', title: 'Anyaman', description: 'Pola, warna, dan ketelitian dalam setiap helai.' },
  wayang: { number: 'KATEGORI 02', title: 'Wayang', description: 'Karya yang membawa tradisi ke dalam kreativitas baru.' },
  comic: { number: 'KATEGORI 03', title: 'Komik', description: 'Cerita dan imajinasi siswa dalam panel-panel gambar.' },
};

const grid = document.getElementById('art-grid');
const emptyNote = document.getElementById('empty-note');
const tabs = [...document.querySelectorAll('.category-tab')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxArtist = document.getElementById('lightbox-artist');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDescription = document.getElementById('lightbox-description');
const comicControls = document.getElementById('comic-controls');
const pageIndicator = document.getElementById('page-indicator');
const pagePrev = document.getElementById('page-prev');
const pageNext = document.getElementById('page-next');
let currentCategory = 'anyaman';
let currentIndex = 0;
let currentPage = 0;
let lastFocusedElement = null;

const escapeHTML = (value = '') =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[char],
  );

function getImage(item) {
  return item.pages ? item.pages[0] : item.image;
}

function renderCategory(category) {
  currentCategory = category;
  const info = categoryInfo[category];
  const items = catalogData[category] || [];
  document.getElementById('category-kicker').textContent = info.number;
  document.getElementById('category-title').textContent = info.title;
  document.getElementById('category-description').textContent = info.description;
  tabs.forEach((tab) => {
    const active = tab.dataset.category === category;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  grid.innerHTML = items
    .map((item, index) => {
      const pages = item.pages || [item.image];
      const pageBadge = category === 'comic' && pages.length > 1 ? `<span class="art-badge">${pages.length} halaman · 1 komik</span>` : '';
      return `
      <article class="art-card-item" tabindex="0" role="button" aria-label="Lihat ${escapeHTML(item.title)}" data-index="${index}">
        <div class="art-thumb">
          <img src="${escapeHTML(getImage(item))}" alt="${escapeHTML(item.title)}" loading="lazy"
               onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%23e9e4d8%22/%3E%3Ctext x=%22200%22 y=%22235%22 text-anchor=%22middle%22 fill=%22%23173d35%22 font-family=%22Arial%22 font-size=%2220%22%3EGambar karya%3C/text%3E%3Ctext x=%22200%22 y=%22270%22 text-anchor=%22middle%22 fill=%22%23747a70%22 font-family=%22Arial%22 font-size=%2214%22%3Ebelum ditambahkan%3C/text%3E%3C/svg%3E'">
          <span class="art-index">${String(index + 1).padStart(2, '0')}</span>
          <span class="art-open" aria-hidden="true">↗</span>
        </div>
        <div class="art-meta">
          <h4>${escapeHTML(item.title)}</h4>
          <p>${escapeHTML(item.artist || 'Nama siswa')}</p>
          ${pageBadge}
        </div>
      </article>`;
    })
    .join('');

  emptyNote.hidden = items.length > 0;
  grid.hidden = items.length === 0;
}

function updateComicPage() {
  const item = (catalogData[currentCategory] || [])[currentIndex];
  if (!item) return;
  const pages = item.pages || [item.image];
  currentPage = Math.max(0, Math.min(currentPage, pages.length - 1));
  lightboxImage.src = pages[currentPage];
  lightboxImage.alt = `${item.title}, halaman ${currentPage + 1}`;
  pageIndicator.textContent = `Halaman ${currentPage + 1} dari ${pages.length}`;
  pagePrev.disabled = currentPage === 0;
  pageNext.disabled = currentPage === pages.length - 1;
  comicControls.hidden = pages.length <= 1;
}

function openArtwork(index) {
  const items = catalogData[currentCategory] || [];
  if (!items[index]) return;
  currentIndex = index;
  currentPage = 0;
  lastFocusedElement = document.activeElement;
  const item = items[index];
  lightboxCategory.textContent = `${categoryInfo[currentCategory].title.toUpperCase()} · KARYA SISWA`;
  lightboxTitle.textContent = item.title;
  lightboxArtist.textContent = item.artist || 'Nama siswa';
  lightboxDescription.textContent = item.description || '';
  updateComicPage();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}

function moveArtwork(direction) {
  const items = catalogData[currentCategory] || [];
  if (!items.length) return;
  currentIndex = (currentIndex + direction + items.length) % items.length;
  currentPage = 0;
  const item = items[currentIndex];
  lightboxTitle.textContent = item.title;
  lightboxArtist.textContent = item.artist || 'Nama siswa';
  lightboxDescription.textContent = item.description || '';
  updateComicPage();
}

tabs.forEach((tab) => tab.addEventListener('click', () => renderCategory(tab.dataset.category)));
grid.addEventListener('click', (event) => {
  const card = event.target.closest('.art-card-item');
  if (card) openArtwork(Number(card.dataset.index));
});
grid.addEventListener('keydown', (event) => {
  const card = event.target.closest('.art-card-item');
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openArtwork(Number(card.dataset.index));
  }
});
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => moveArtwork(-1));
document.getElementById('lightbox-next').addEventListener('click', () => moveArtwork(1));
pagePrev.addEventListener('click', () => {
  currentPage--;
  updateComicPage();
});
pageNext.addEventListener('click', () => {
  currentPage++;
  updateComicPage();
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') {
    const item = (catalogData[currentCategory] || [])[currentIndex];
    if (item && item.pages && item.pages.length > 1 && currentPage > 0) {
      currentPage--;
      updateComicPage();
    } else moveArtwork(-1);
  }
  if (event.key === 'ArrowRight') {
    const item = (catalogData[currentCategory] || [])[currentIndex];
    if (item && item.pages && item.pages.length > 1 && currentPage < item.pages.length - 1) {
      currentPage++;
      updateComicPage();
    } else moveArtwork(1);
  }
});

document.getElementById('comic-count').textContent = catalogData.comic.length;
renderCategory('anyaman');
