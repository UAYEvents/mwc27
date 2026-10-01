(() => {
  const body = document.body;
  const toggle = document.querySelector('.nav__toggle');
  const dropdown = document.querySelector('.nav__dropdown');
  const dropdownToggle = document.querySelector('.nav__submenu-toggle');

  toggle?.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = open ? '×' : '☰';
  });

  dropdownToggle?.addEventListener('click', (event) => {
    if (window.innerWidth <= 980) {
      event.preventDefault();
      const open = dropdown.classList.toggle('is-open');
      dropdownToggle.setAttribute('aria-expanded', String(open));
    }
  });

  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => body.classList.remove('menu-open'));
  });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

  const markMedia = (media) => {
    const wrapper = media.closest('.media, .venue-card');
    if (!wrapper) return;
    if (media.tagName === 'VIDEO') {
      media.addEventListener('loadeddata', () => wrapper.classList.add('has-media'), { once:true });
      media.addEventListener('error', () => wrapper.classList.remove('has-media'));
    } else {
      if (media.complete && media.naturalWidth > 0) wrapper.classList.add('has-media');
      media.addEventListener('load', () => wrapper.classList.add('has-media'), { once:true });
      media.addEventListener('error', () => wrapper.classList.remove('has-media'));
    }
  };
  document.querySelectorAll('.media img,.media video,.venue-card__image').forEach(markMedia);
})();
