import { useState } from "react";
import Image from "next/image";
import {
  CardContainer,
  TextContainer,
  CardTitleText,
  CardBodyText,
  StyledImageContainer,
} from "./elements";

export const Card = ({ image, title, body, width, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CardContainer
      style={{ backgroundColor: backgroundColor, width: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledImageContainer>
        <Image src={image.src} alt={image.alt} width={48} height={48} />
      </StyledImageContainer>
      <TextContainer>
        <CardTitleText className={isHovered ? "hovered" : ""}>
          {title}
        </CardTitleText>
        <CardBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </TextContainer>
    </CardContainer>
  );
};
