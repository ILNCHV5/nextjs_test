import image from "next/image";
import {
  CardContainer,
  TextContainer,
  CardTitleText,
  CardBodyText,
  ImageContainer,
} from "./elements";

export const Card = ({ image }) => {
  return (
    <CardContainer>
      <ImageContainer></ImageContainer>
      <TextContainer>
        <CardTitleText>Title</CardTitleText>
        <CardBodyText>Lorem ipsum dolor sit amet</CardBodyText>
      </TextContainer>
    </CardContainer>
  );
};
