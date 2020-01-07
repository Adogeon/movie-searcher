const requestURL = `omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

const isExistandNotEmpty = str => {
  if (typeof str === `undefined`) {
    return false;
  } else {
    return !str.trim() === "";
  }
};

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
        Title: isExistandNotEmpty(Title) ? Title : "No info",
        Year: isExistandNotEmpty(Year) ? Year : "No info",
        Rated: isExistandNotEmpty(Rated) ? Rated : "Not rated",
        Genre: isExistandNotEmpty(Genre) ? Genre : "No info",
        Director: isExistandNotEmpty(Director) ? Director : "No info",
        Plot: isExistandNotEmpty(Plot) ? Plot : "No info",
        Metascore: isExistandNotEmpty(Metascore) ? Metascore : "No metascore",
        Poster: isExistandNotEmpty(Poster) ? Poster : "No poster available",
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
    const searchURL = `${requestURL}&s=${searchTerm}&type=movie`
    const response = await fetch(searchURL);
    const data = await response.json();
    if(data.Response === "False") {
      throw new Error(data.Error);
    } else {
      const {totalResults} = data;
      if(totalResults > 10) {
        return {
          pagination: true,
          totalResults: totalResults,
          numberOfPages: (totalResults % 10 === 0) ? (totalResults / 10) : ((totalResults / 10) + 1),
          searchURL: searchURL
        }
      } else {
        return {
          pagination: false,
          totalResults: totalResults,
          searchURL: searchURL
        }
      }
    }
  } catch(error) {
    return {errors: error};
  }
}

export const searchWithPagination = async (searchURL, pageNum = 1) => {
  try {
    const response = await fetch(`${searchURL}&page=${pageNum}`);
    const data = await response.json();
    if(data.Response === "False") {
      throw new Error(data.Error);
    } else {
      const result = [];
      data.Search.map( movie => {
        return result.push(movie.imdbID);
      })
      return result;
    }
  } catch(error) {
    return {errors: error}
  }
}