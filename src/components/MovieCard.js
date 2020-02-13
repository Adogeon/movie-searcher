import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 2px;
  position: relative;
  display: grid;
  grid-template-rows: auto 10%;
  margin: 0.5rem 0;
  width: 275px;
  height: 475px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CardTitle = styled.h2`
  display: block;
  font-size: 24px;
  color: #000;
  margin: 0;
  padding: 0 10px;
  padding-bottom: 5px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardBody = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 3px;
  margin: 0;
  line-height: 1.6;
  color: #000;
  overflow: hidden;
`;

const CardLink = styled(Link)`
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: gray;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 0.25;
  }
`;

const MovieCard = props => {
  const { data } = props;
  const { Poster, Title, imdbID } = data;

  return (
    <StyledCard>
      <CardBody>
        <CardLink to={`/${imdbID}`}>
          <img
            src={Poster}
            alt={Title}
            style={{
              "max-width": "100%",
              "max-height": "100%",
              height: "auto"
            }}
          />
          <Overlay />
        </CardLink>
      </CardBody>
      <CardTitle>{Title}</CardTitle>
    </StyledCard>
  );
};

export default MovieCard;
