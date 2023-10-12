import '../component/movie-list';
import '../component/search-bar';
import '../component/search-list';
import DataSource from '../data/data-source';

const main = () => {
  const movieListElement = document.querySelector('movie-list');
  const searchListElement = document.querySelector('search-list');
  const searchInput = document.querySelector('search-bar');

  const renderResults = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResults = (message) => {
    movieListElement.renderError(message);
  };

  const renderSearchResult = (results) => {
    searchListElement.movies = results;
  };

  const fallbackSearchResults = (message) => {
    searchListElement.renderError(message);
  };

  // popular movies
  const getPopularMovies = async (urlPath) => {
    try {
      const result = await DataSource.moviesList(urlPath);
      renderResults(result);
    } catch (error) {
      fallbackResults(error);
    }
  };

  // search movies
  const onMovieSubmit = async () => {
    try {
      const results = await DataSource.searchMovie(searchInput.value);
      searchListElement.style.display = 'flex';
      renderSearchResult(results);
    } catch (message) {
      fallbackSearchResults(message);
    }
  };

  // popular movies pathURL
  getPopularMovies('movie/popular');

  // event from searchBar
  searchInput.clickEvent = onMovieSubmit;
};
export default main;
