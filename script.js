const INTERSECTION_THRESHOLD = 0.12;
const ACTIVE_LINK_SCROLL_OFFSET = 120;

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

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
  [...navAnchors]
    .map((anchor) => {
      const href = anchor.getAttribute('href');
      return href ? [href.slice(1), anchor] : null;
    })
    .filter(Boolean)
);

const updateActiveLink = () => {
  const y = window.scrollY + ACTIVE_LINK_SCROLL_OFFSET;
  let current = 'home';

  sections.forEach((section) => {
    if (y >= section.offsetTop) {
      current = section.id;
    }
  });

  navAnchors.forEach((a) => a.classList.remove('active'));
  const active = navMap.get(current);
  if (active) active.classList.add('active');
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
