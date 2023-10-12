import detailMovies from '../view/detailMovie';

class SearchItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <div class="flex p-2 mb-3 md:p-3 bg-[#334756] rounded-md">
            <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="h-24 w-16 md:h-44 md:w-32 object-cover object-center rounded-md">
            <div class="ml-2 md:ml-4 mt-2">
                <h1 class="font-bold text-[10px] md:text-xl">${this._movie.title}</h1>
                <h3 class="text-[8px] font-serif md:text-sm"><i class="fa-solid fa-chart-simple"> ${this._movie.vote_average} / ${this._movie.vote_count}</i></h3>
                <h3 class="text-[7px] md:text-sm bg-red-600 w-3 md:w-6 flex justify-center items-center rounded-sm mt-1">${this._movie.original_language}</h3>
                <div class="max-h-[1rem] md:max-h-[2.9rem] overflow-hidden mt-1 md:mt-2">
                    <p class="text-[6px] md:text-[10px] text-justify">${this._movie.overview}</p>
                </div>
                <div id="read-more" class="flex justify-center bg-[#FF4C29] hover:bg-[#EEB76B] active:bg-[#FA7D09] ease-in-out duration-200 cursor-pointer text-[7px] md:text-[10px] py-[2px] md:py-[4px] rounded-sm mt-1 w-[45px] md:w-[67px]">Show Detail</div>
            </div>
        </div>
    `;

    const detailMovie = this.querySelector('#read-more');
    detailMovie.addEventListener('click', () => {
      detailMovies(this._movie);
    });
  }
}
customElements.define('search-item', SearchItem);
