import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 23rem;
  max-height: 5rem;
  padding: 1.5rem;
  border: 3px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-color: #67a5f7;
    cursor: pointer;
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
`;

export const CardBodyText = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 0.9rem;
  margin: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 3rem;
  max-height: 3rem;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 2rem;
`;
