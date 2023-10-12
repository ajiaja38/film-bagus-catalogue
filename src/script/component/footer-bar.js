class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="py-6 px-4 bg-dark md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">© 2022 <a href="../../index.html">FilmBagus™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="https://web.facebook.com/aji.perdana.526" class="text-gray-400 hover:text-gray-100">
            <i class="fa-brands fa-facebook"></i>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="https://www.instagram.com/tromolsupraa/?hl=id" class="text-gray-400 hover:text-gray-100">
            <i class="fa-brands fa-square-instagram"></i>
            <span class="sr-only">Instagram page</span>
          </a>
          <a href="https://twitter.com/suratSebelah38_" class="text-gray-400 hover:text-gray-100">
            <i class="fa-brands fa-twitter"></i>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="https://github.com/AjiPerdana38" class="text-gray-400 hover:text-gray-100">
            <i class="fa-brands fa-github"></i>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="https://www.linkedin.com/in/m-aji-perdana-3807071bb/" class="text-gray-400 hover:text-gray-100">
            <i class="fa-brands fa-linkedin"></i>
            <span class="sr-only">linkedin account</span>
          </a>
        </div>
      </div>
    `;
  }
}
customElements.define('footer-bar', FooterBar);
