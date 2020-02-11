const requestURL = `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

export const getOneById = async id => {
  try {
    const response = await fetch(`${requestURL}&i=${id}`);
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    } else {
      const {
        Title,
        Year,
        Rated,
        Genre,
        Director,
        Plot,
        Metascore,
        Poster,
        imdbID
      } = data;
      const result = {
        Title: Title,
        Year: Year,
        Rated: Rated,
        Genre: Genre,
        Director: Director,
        Plot: Plot,
        Metascore: Metascore,
        Poster: Poster,
        id: imdbID
      };
      return result;
    }
  } catch (error) {
    return { errors: error };
  }
};

export const searchAndCheckForPagination = async searchTerm => {
  try {
    const searchURL = `${requestURL}&s=${searchTerm}&type=movie`;
    const response = await fetch(searchURL);
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    } else {
      const { totalResults } = data;
      if (totalResults > 10) {
        return {
          pagination: true,
          totalResults: totalResults,
          numberOfPages:
            totalResults % 10 === 0 ? totalResults / 10 : totalResults / 10 + 1,
          searchURL: searchURL
        };
      } else {
        return {
          pagination: false,
          totalResults: totalResults,
          searchURL: searchURL
        };
      }
    }
  } catch (error) {
    return { errors: error };
  }
};

export const searchWithPagination = async (searchURL, pageNum = 1) => {
  try {
    const response = await fetch(`${searchURL}&page=${pageNum}`);
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    } else {
      const result = [];
      data.Search.map(movie => {
        return result.push(movie);
      });
      return result;
    }
  } catch (error) {
    return { errors: error };
  }
};
