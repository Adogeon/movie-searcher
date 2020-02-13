import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneById } from "../util/API";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 1008px;
  height: -webkit-fill-available;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-rows: 40% auto auto auto;
  grid-gap: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
`;

const TitleGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledTitle = styled.h1`
  font-size: 72px;
`;

const SubtitleGrid = styled.div`
  color: gray;
  font-size: 14px;
  display: flex;
  justify-content: start;
`;

const SubtitleItem = styled.div`
  border-right: 2px gray solid;
  padding: 0 0.25rem;
  &:last-child {
    border-right: none;
  }
`;

const FitImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
`;

const DetailItem = styled.div`
  border-top: 2px gray solid;
  justify-content: center;
`;

const SubsectName = styled.h3`
  font-size: 20px;
  color: gray;
  font-weight: 1000;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const MoviePage = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageMovieId = async () => {
      setIsLoading(true);
      try {
        const result = await getOneById(id);
        setMovieData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPageMovieId();
  }, []);

  const {
    Title,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    BoxOffice,
    Production
  } = movieData;
  return isLoading ? (
    <div className="card">Loading ... </div>
  ) : (
    <MainWrapper>
      <TopGrid>
        <FitImage src={Poster} alt={Title} />
        <TitleGrid>
          <StyledTitle>{Title}</StyledTitle>
          <SubtitleGrid>
            <SubtitleItem>{Rated}</SubtitleItem>
            <SubtitleItem>{Runtime}</SubtitleItem>
            <SubtitleItem>{Released}</SubtitleItem>
            <SubtitleItem>{Genre}</SubtitleItem>
          </SubtitleGrid>
          <div>{Plot}</div>
        </TitleGrid>
      </TopGrid>
      <DetailItem>
        <SubsectName>Cast and Credit</SubsectName>
        <div>
          <strong>Director:</strong> {Director}
        </div>
        <div>
          <strong>Writer:</strong> {Writer}
        </div>
        <div>
          <strong>Actors:</strong> {Actors}
        </div>
      </DetailItem>
      <DetailItem>
        <SubsectName>Ratings</SubsectName>
        {Ratings &&
          Ratings.map(score => {
            return (
              <div>
                <strong>{score.Source}: </strong>
                {score.Value}
              </div>
            );
          })}
      </DetailItem>

      <DetailItem>
        <SubsectName>More Details</SubsectName>
        <div>
          <strong>Language:</strong> {Language}
        </div>
        <div>
          <strong>Country:</strong> {Country}
        </div>
        <div>
          <strong>Awards:</strong> {Awards}
        </div>
        <div>
          <strong>Box Office:</strong> {BoxOffice}
        </div>
        <div>
          <strong>Production:</strong> {Production}
        </div>
      </DetailItem>
    </MainWrapper>
  );
};

export default MoviePage;
