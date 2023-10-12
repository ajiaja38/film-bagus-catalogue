import './search-item';

class SearchList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const searchItem = document.createElement('search-item');
      searchItem.movie = movie;
      this.appendChild(searchItem);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += /* html */ `
      <h1>${message}</h1>
    `;
  }
}
customElements.define('search-list', SearchList);
