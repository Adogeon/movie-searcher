import React, { useEffect, useState } from "react";
import { getOneById } from "../util/API";
import Card from "react-bootstrap/Card";

const MovieCard = props => {
  const { data } = props;
  const { movieInfo, setMovieInfo } = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOneById(data);
      setMovieInfo(result);
    };
    console.log("get call");
    fetchData();
  });

  console.log(movieInfo);

  if (movieInfo.errors) {
    return <div>{movieInfo.errors}</div>;
  } else {
    const { Title, Year, Metascore, Plot } = movieInfo;

    return (
      <Card>
        <Card.Header>{Title}</Card.Header>
        <Card.Body>
          <div>{Plot}</div>
          <div>{Metascore}</div>
        </Card.Body>
        <Card.Footer>Released in {Year}</Card.Footer>
      </Card>
    );
  }
};

export default MovieCard;
