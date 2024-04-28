import { Card } from "../../collections/Card/Card";
import Image from "next/image";
import {
  SectionContainer,
  HeadingContainer,
  ContentsContainer,
  CardsContainer,
  VideoContainer,
  PageTitle,
  PageSubTitle,
} from "./elements";

export const AgencySelectionSection = ({ title, subTitle, video, cards }) => {
  return (
    <SectionContainer>
      <HeadingContainer>
        <PageTitle>{title}</PageTitle>
        <PageSubTitle>{subTitle}</PageSubTitle>
      </HeadingContainer>
      <ContentsContainer>
        <VideoContainer>
          <Image
            layout="responsive"
            src={video.src}
            alt={video.alt}
            width={video.width}
            height={video.height}
          />
        </VideoContainer>
        <CardsContainer>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              body={card.body}
            />
          ))}
        </CardsContainer>
      </ContentsContainer>
    </SectionContainer>
  );
};
