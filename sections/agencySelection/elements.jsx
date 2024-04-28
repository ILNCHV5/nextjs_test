import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const PageSubTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 1.3rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  row-gap: 1rem;
`;

export const VideoContainer = styled.div`
  width: 20rem;
  height: auto;
`;
