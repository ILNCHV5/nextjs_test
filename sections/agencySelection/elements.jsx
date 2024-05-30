import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;
  background-image: url("/background.png");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-size: 100%;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem;
`;

export const PageTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 2.2rem;
  text-align: center;
  margin: 0;
`;

export const PageSubTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  row-gap: 2rem;
  width: 27rem;

  @media (max-width: 1024px) {
    max-width: 30rem;
    width: 90%;
    height: auto;
  }
`;

export const VideoContainer = styled.div`
  width: 18rem;
  height: auto;
`;
