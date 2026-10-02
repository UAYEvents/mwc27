(() => {
  const root = document.body.dataset.root || '.';
  const path = window.location.pathname.toLowerCase();
  const isVenue = path.includes('/propuestas/');
  const active = (fragment) => path.endsWith(fragment.toLowerCase()) ? ' is-active' : '';
  const proposalActive = isVenue ? ' is-active' : '';
  const logo = `${root}/assets/images/Logo-UAY-black.svg`;

  const headerTarget = document.querySelector('[data-site-header]');
  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <nav class="nav" aria-label="Navegación principal">
          <a class="brand" href="${root}/home.html" aria-label="UAY Events — Home">
            <img src="${logo}" alt="UAY Events" onerror="this.src='${root}/assets/images/brand/uay-fallback.svg'">
          </a>

          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">☰</button>

          <div class="nav__links" id="main-nav">
            <a class="nav__link${active('/home.html')}" href="${root}/home.html">Home</a>
            <a class="nav__link${active('/the-hub.html')}" href="${root}/the-hub.html">The Method</a>

            <div class="nav__dropdown${proposalActive}">
              <button class="nav__submenu-toggle${proposalActive}" type="button" aria-expanded="false">Propuesta</button>
              <div class="nav__submenu">
                <a class="${active('/castell-montjuic.html')}" href="${root}/propuestas/castell-montjuic.html">Castell de Montjuïc</a>
                <a class="${active('/fundacio-miro.html')}" href="${root}/propuestas/fundacio-miro.html">Fundació Joan Miró</a>
                <a class="${active('/terminal-d.html')}" href="${root}/propuestas/terminal-d.html">Terminal D</a>
              </div>
            </div>

            <a class="nav__link${active('/about.html')}" href="${root}/about.html">About UAY</a>
          </div>
        </nav>
      </header>`;
  }

  const footerTarget = document.querySelector('[data-site-footer]');
  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="footer__inner">
          <div>
            <p class="eyebrow">UAY Events × NTT DATA · MWC27</p>
          </div>
        </div>
      </footer>`;
  }
})();
