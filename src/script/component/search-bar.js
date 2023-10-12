class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = /* html */ `
      <div id="search-form" class="py-4 md:py-5 relative">
        <input type="search" id="searchElement" placeholder="Search Movie" class="py-[.3rem] px-2 md:py-[.6rem] md:px-3 rounded-full w-48 lg:w-96 outline-none text-dark">
        <button id="searchButtonElement" type="submit" class="bg-[#FF4C29] ease-in-out duration-300 hover:bg-[#EEB76B] active:bg-[#FA7D09] px-[.4rem] py-[.1rem] md:px-2 md:py-1 rounded-full absolute right-[3px] md:right-[6px] top-[1.2rem] md:top-[1.6rem]"><i class="fa-solid fa-magnifying-glass text-sm md:text-lg"></i></button>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent
    );

    this.querySelector('#searchElement').addEventListener(
      'keyup',
      this._clickEvent
    );
  }
}
customElements.define('search-bar', SearchBar);
