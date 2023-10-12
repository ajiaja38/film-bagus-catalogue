import detailMovies from '../view/detailMovie';

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <img src=
      "https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="h-[120px] w-[80px] md:h-[300px] md:w-[200px] rounded-lg ease-in-out duration-200 shadow-md shadow-gray-600">
    <div class="absolute shadow-md text-black text-[6px] md:text-[10px] top-1 md:top-2 right-6 md:right-2 bg-yellow-300 px-[1px] py[1px] md:px-[6px] md:py-[5px] rounded-lg">
      <span><i class="fa-solid fa-star"></i> ${this._movie.vote_average}</span>
    </div>
    <div class="absolute shadow-md text-[6px] md:text-[13px] top-1 md:top-2 left-1 md:left-2 bg-red-600 px-[1px] py[1px] md:px-[6px] md:py-[2px] rounded-lg">
      <span>${this._movie.original_language}</span>
    </div>
    <div id="overlay-detail" class="absolute ease-in-out duration-300 bg-transparent hover:bg-dark/50 hover:backdrop-opacity-100 text-transparent hover:text-white text-[10px] md:text-lg h-[120px] w-[80px] md:h-[300px] md:w-[200px] rounded-lg flex justify-center pt-14 md:pt-36 cursor-pointer">
      <h1>See Detail</h1>
    </div>
    <div class="text-white p-2 w-[80px] md:w-[200px] box-border">
        <h1 id="titleMovie" class="text-xs truncate md:text-lg font-bold cursor-pointer hover:underline hover:underline-offset-2">${this._movie.title}</h1>
        <p class="font-light text-[9px] md:text-sm">${this._movie.release_date}</p>
    </div>
  `;

    const detailMovie = this.querySelector('#overlay-detail');
    detailMovie.addEventListener('click', () => {
      detailMovies(this._movie);
    });

    const titleMovie = this.querySelector('#titleMovie');
    titleMovie.addEventListener('click', () => {
      detailMovies(this._movie);
    });
  }
}
customElements.define('movie-item', MovieItem);
