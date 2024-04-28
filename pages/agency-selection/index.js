import { AgencySelectionSection } from "../../sections/agencySelection/agencySelection";

const agencySelectionProps = {
  title: "Managed agency selection",
  subTitle: "Strengthen your onboarding process",
  video: {
    src: "../../resources/video.png",
    alt: "video sim",
    width: "10rem",
    height: "16rem",
  },
  cards: [
    {
      id: 1,
      title: "Brief",
      body: "Complete brief writing or simple guidance on what to include, we've got you covered",
      image: "../../resources/pen_paper_icon.svg",
    },
    {
      id: 2,
      title: "Search",
      body: "In depth agency search covering; criteria matching, door knocking and due-dilligence vetting",
      image: "../../resources/graphs_icon.svg",
    },
    {
      id: 3,
      title: "Pitch",
      body: "Comprehensive pitch management, including comms, diary management and pitch hosting",
      image: "../../resources/meeting_icon.svg",
    },
  ],
};

function AgencySelection() {
  return <AgencySelectionSection />;
}
export default AgencySelection;
