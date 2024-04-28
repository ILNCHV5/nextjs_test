import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 25rem;
  padding: 1rem;
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
`;

export const CardBodyText = styled.p`
  font-family: Helvetica Neue, sans-serif;
  font-size: 0.9rem;
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
