import {
  getOneById,
  searchAndCheckForPagination,
  searchWithPagination
} from "./API";

describe("[UNIT TEST: API.getOneById]", () => {
  it("should grab specific movie detail with id tt3896198", () => {
    const expected = {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      Rated: "PG-13",
      Genre: "Action, Adventure, Comedy, Sci-Fi",
      Director: "James Gunn",
      Plot:
        "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      Metascore: "67",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      id: "tt3896198"
    };

    return expect(getOneById("tt3896198")).resolves.toEqual(expected);
  });

  it("should return Error object when passing in id 0", () => {
    return expect(getOneById("0")).resolves.toEqual(
      expect.objectContaining({
        errors: expect.anything()
      })
    );
  });
});

describe("[UNIT TEST: API.searchAndCheckForPagination]", () => {
  it("should return true for search term 'cafe' ", () => {
    return expect(searchAndCheckForPagination("cafe")).resolves.toEqual(
      expect.objectContaining({
        pagination: true
      })
    );
  });

  it("should return false for search term 'Blade Runner 2049' ", () => {
    return expect(
      searchAndCheckForPagination("Blade Runner 2049")
    ).resolves.toEqual(
      expect.objectContaining({
        pagination: false
      })
    );
  });

  it("should return errors for search term 'a' ", () => {
    return expect(searchAndCheckForPagination("a")).resolves.toEqual(
      expect.objectContaining({
        errors: expect.anything()
      })
    );
  });

  it("should return correct number of pagination require", () => {
    expect.extend({
      async comparePageNumberRequire(paginationObject) {
        let pass = false;
        const { totalResults, numberOfPages } = paginationObject;
        if (totalResults % 10 === 0) {
          pass = totalResults / 10 === numberOfPages;
        } else {
          pass = totalResults / 10 + 1 === numberOfPages;
        }

        if (pass) {
          return {
            message: () =>
              `expected to have ${numberOfPages} pages for ${totalResults} search results`,
            pass: true
          };
        } else {
          return {
            message: () =>
              `expected ${numberOfPages} pages does not match with ${totalResults} search results`,
            pass: false
          };
        }
      }
    });

    return expect(
      searchAndCheckForPagination("cafe")
    ).resolves.comparePageNumberRequire();
  });
});

describe("[UNIT TEST: API.searchWithPagination]", () => {
  const testURL = `https://www.omdbapi.com/?s=cafe&apikey=${process.env.OMDB_API_KEY}`;
  it("should return an array of string", () => {
    return expect(searchWithPagination(testURL, 1)).resolves.toEqual(
      expect.arrayContaining([expect.any(String)])
    );
  });

  it("should return different array of string for different pages", () => {
    expect.extend({
      async compareFirstOfResultArray(func, num1, num2) {
        const resultArray1 = await func(testURL, num1);
        const resultArray2 = await func(testURL, num2);

        const pass = resultArray1[0] !== resultArray2[0];
        if (pass) {
          return {
            message: () => `expected to have different value`,
            pass: true
          };
        } else {
          return {
            message: () => `expected to don't have the same value`,
            pass: false
          };
        }
      }
    });

    return expect(searchWithPagination).compareFirstOfResultArray(1, 2);
  });
});
