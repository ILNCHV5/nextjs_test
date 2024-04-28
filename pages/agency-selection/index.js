import { AgencySelectionSection } from "../../sections/agencySelection/agencySelection";

const agencySelectionProps = {
  title: "Managed agency selection",
  subTitle: "Strengthen your onboarding process",
  video: {
    src: "/video.png",
    alt: "video sim",
    width: "12rem",
    height: "20rem",
  },
  cards: [
    {
      id: 1,
      title: "Brief",
      body: "Complete brief writing or simple guidance on what to include, we've got you covered",
      image: { src: "/pen_paper_icon.svg", alt: "icon" },
    },
    {
      id: 2,
      title: "Search",
      body: "In depth agency search covering; criteria matching, door knocking and due-dilligence vetting",
      image: { src: "/graphs_icon.svg", alt: "icon" },
    },
    {
      id: 3,
      title: "Pitch",
      body: "Comprehensive pitch management, including comms, diary management and pitch hosting",
      image: { src: "/meeting_icon.svg", alt: "icon" },
    },
  ],
};

function AgencySelection() {
  return <AgencySelectionSection {...agencySelectionProps} />;
}
export default AgencySelection;
