import Image from "next/image";
import {
  CardContainer,
  TextContainer,
  CardTitleText,
  CardBodyText,
  StyledImageContainer,
} from "./elements";

export const Card = ({ image, title, body }) => {
  return (
    <CardContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={48}
          height={48}
        />
      </StyledImageContainer>
      <TextContainer>
        <CardTitleText>{title}</CardTitleText>
        <CardBodyText>{body}</CardBodyText>
      </TextContainer>
    </CardContainer>
  );
};
