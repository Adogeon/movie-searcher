import {
  getOneById,
  searchAndCheckForPagination,
  searchWithPagination
} from "./API";

it("should grab specific movie detail with id tt3896198", () => {
  const expected = {
    Title: "Guardians of the Galaxy Vol. 2",
    Year: "2017",
    Rated: "PG-13",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    Director: "James Guun",
    Plot:
      "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Metascore: "67",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    id: "tt3896198"
  };

  expect(getOneById("tt3896198")).resolve.toEqual(expected);
});

it("should return Error object when passing in id 0", () => {
  expect(getOneById("0")).resolve.toEqual(
    expect.objectContaining({
      Error: expect.any("String")
    })
  );
});
