const detailMovies = (movie) => {
  const detailMovieCard = document.querySelector('#detailMovieCard');
  detailMovieCard.style.display = 'flex';

  const card = document.getElementById('movieCard');

  card.innerHTML = /* html */ `
        <img src="https://image.tmdb.org/t/p/original/${
          movie.backdrop_path
        }" class="rounded-lg object-cover object-center">
        <div class="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-dark/70 flex">

            <div id="closeCard" class="hover:bg-red-600 px-2 py-3 h-4 absolute right-1 rounded-sm m-2 flex justify-center items-center box-border ease-in-out duration-200 cursor-pointer"><i class="fa-solid fa-xmark"></i></div>

            <div class = "absolute mx-4 md:mx-9 top-10 md:top-9 flex">
                <img src="https://image.tmdb.org/t/p/w500${
                  movie.poster_path
                }" class="h-44 w-28 md:h-64 md:w-44 rounded-lg shadow-md object-cover object-center">
                <div class="mx-2 md:mx-5 flex flex-col justify-start mt-3 md:mt-6">
                    <h1 class="text-sm md:text-3xl font-bold">${movie.title.toUpperCase()} (${movie.release_date.substr(
    0,
    4
  )})</h1>
                    <h3 class="text-[11px] md:text-xl">Popularity: ${
                      movie.popularity
                    }</h3>
                    <h3 class="text-[8px] font-serif md:text-[11px]"><i class="fa-solid fa-chart-simple"> ${
                      movie.vote_average
                    } / ${movie.vote_count}</i></h3>
                    <h3 class="text-[15px] md:text-lg bg-red-600 w-5 md:w-8 flex justify-center items-center mt-2 rounded-sm mr-2">${
                      movie.original_language
                    }</h3>
                </div>
            </div>
            <div class="relative top-[14.5rem] md:top-[22rem] mx-4 md:mx-10 h-[40%]">
                <p class="text-[11px] md:text-lg text-justify">"${
                  movie.overview.substr(0, 388)
                }"</p>
            </div>
        </div>
      `;

  document.querySelector('#closeCard').addEventListener('click', () => {
    detailMovieCard.style.display = 'none';
  });
};

export default detailMovies;
