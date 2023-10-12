/* eslint-disable no-return-assign */
const API_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=b5e52d55287b6f516c247b109ab351c9';

class DataSource {
  static moviesList(path) {
    return fetch(`${API_URL}${path}?${KEY}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(new Error(`${path} is not found`));
      });
  }

  static searchMovie(keyword) {
    const searchListElement = document.querySelector('search-list');
    return fetch(`${API_URL}search/movie?${KEY}&query=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.errors) {
          return Promise.reject(
            new Error((searchListElement.style.display = 'none'))
          );
        }
        if (responseJson.results.length >= 1) {
          return Promise.resolve(responseJson.results);
        }
        return Promise.reject(new Error(`${keyword} is not found`));
      });
  }
}

export default DataSource;
