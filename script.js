const INTERSECTION_THRESHOLD = 0.12;
const ACTIVE_LINK_SCROLL_OFFSET = 120;
const LIGHTBOX_IMAGE_SELECTOR = [
  '.hero-logo',
  '.gallery-item img',
  '.page-visual img',
  '.detail-gallery-item img'
].join(', ');

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionNavAnchors = [...navAnchors].filter((anchor) => {
  const href = anchor.getAttribute('href');
  return href && href.startsWith('#');
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: INTERSECTION_THRESHOLD }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

const sections = document.querySelectorAll('main section[id]');
const navMap = new Map(
  sectionNavAnchors
    .map((anchor) => {
      const href = anchor.getAttribute('href');
      return href ? [href.slice(1), anchor] : null;
    })
    .filter(Boolean)
);

const updateActiveLink = () => {
  if (!sections.length || !sectionNavAnchors.length) return;

  const y = window.scrollY + ACTIVE_LINK_SCROLL_OFFSET;
  let current = 'home';

  sections.forEach((section) => {
    if (y >= section.offsetTop) {
      current = section.id;
    }
  });

  sectionNavAnchors.forEach((a) => a.classList.remove('active'));
  const active = navMap.get(current);
  if (active) active.classList.add('active');
};

if (sections.length && sectionNavAnchors.length) {
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

const createLightbox = () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');

  lightbox.innerHTML = `
    <div class="image-lightbox-backdrop" data-lightbox-close="true"></div>
    <button class="image-lightbox-close" type="button" aria-label="Loka stækkaðri mynd">Loka</button>
    <figure class="image-lightbox-figure">
      <img class="image-lightbox-image" src="" alt="" />
      <figcaption class="image-lightbox-caption" hidden></figcaption>
    </figure>
  `;

  document.body.append(lightbox);
  return lightbox;
};

const lightbox = createLightbox();
const lightboxImage = lightbox.querySelector('.image-lightbox-image');
const lightboxCaption = lightbox.querySelector('.image-lightbox-caption');
const lightboxClose = lightbox.querySelector('.image-lightbox-close');

const isLightboxImage = (element) =>
  element instanceof HTMLImageElement &&
  element.matches(LIGHTBOX_IMAGE_SELECTOR) &&
  !element.closest('.footer-location-icons, .footer-channel-link');

const getLightboxCaption = (image) => {
  const figureCaption = image.closest('figure')?.querySelector('figcaption');

  if (figureCaption?.textContent?.trim()) {
    return figureCaption.textContent.trim();
  }

  const cardTitle = image
    .closest('.card, .kristjan-air-panel')
    ?.querySelector('h3, h2');

  if (cardTitle?.textContent?.trim()) {
    return cardTitle.textContent.trim();
  }

  return image.getAttribute('alt')?.trim() || '';
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.removeAttribute('alt');
  lightboxCaption.textContent = '';
  lightboxCaption.hidden = true;
};

const openLightbox = (image) => {
  const source = image.currentSrc || image.src;
  const caption = getLightboxCaption(image);
  const alt = image.getAttribute('alt') || caption || 'Stækkuð Icebrothes mynd';

  if (!source) return;

  lightboxImage.src = source;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = caption;
  lightboxCaption.hidden = !caption;
  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
};

document.addEventListener('click', (event) => {
  const image = event.target.closest('img');

  if (image && isLightboxImage(image)) {
    event.preventDefault();
    event.stopPropagation();
    openLightbox(image);
    return;
  }

  if (event.target instanceof Element && event.target.closest('[data-lightbox-close="true"], .image-lightbox-close')) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});

lightboxClose.addEventListener('click', closeLightbox);
