import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  padding-bottom: 3rem;
`;

export const PageTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 2.2rem;
  margin: 0;
`;

export const PageSubTitle = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 1.2rem;
  margin: 0;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 4rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  row-gap: 2rem;
`;

export const VideoContainer = styled.div`
  width: 18rem;
  height: auto;
`;
