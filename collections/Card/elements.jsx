import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-height: 8rem;
  padding: 1.5rem;
  border: 3px solid transparent;
  transition: border-color 0.3s;
  overflow: auto;
  overflow-wrap: break-word;
  height: auto;
  max-height: 100%;

  &:hover {
    border-color: #67a5f7;
    cursor: pointer;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 90vw;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitleText = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  padding-bottom: 0.2rem;

  ${CardContainer}:hover & {
    color: #67a5f7;
    text-decoration: underline;
  }
`;

export const CardBodyText = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 0.9rem;
  margin: 0;
`;

export const StyledImageContainer = styled.div`
  max-width: 3rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 2rem;
`;
