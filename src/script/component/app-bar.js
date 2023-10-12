import './search-bar';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <nav class="bg-dark/40 backdrop-blur-md fixed top-0 left-0 w-full flex justify-center items-center z-10 text-white">
          <div class="container flex justify-between box-border px-4">
              <header class="pt-5 md:pt-7">
                  <a href="../../index.html" class="text-gray-200 font-bold text-lg md:text-2xl hover:text-white ease-in-out duration-200">FilmBagus.com</a>
              </header>
              <search-bar></search-bar>
          </div>
      </nav>
    `;
  }
}
customElements.define('app-bar', AppBar);
