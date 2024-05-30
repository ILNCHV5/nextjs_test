import Image from "next/image";
import {
  CardContainer,
  TextContainer,
  CardTitleText,
  CardBodyText,
  StyledImageContainer,
} from "./elements";

export const Card = ({ image, title, body, width, backgroundColor }) => {
  return (
    <CardContainer style={{ backgroundColor: backgroundColor, width: width }}>
      <StyledImageContainer>
        <Image src={image.src} alt={image.alt} width={48} height={48} />
      </StyledImageContainer>
      <TextContainer>
        <CardTitleText>{title}</CardTitleText>
        <CardBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </TextContainer>
    </CardContainer>
  );
};
