import './movie-item';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.append(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += /* html */ `
      <h1 class="font-bold -mt-3 mb-4 mx-5">${message}</h1>
    `;
  }
}
customElements.define('movie-list', MovieList);
