import { AgencySelectionSection } from "../../sections/AgencySelection/AgencySelection";

const agencySelectionProps = {
  title: "Managed agency selection",
  subTitle: "Strengthen your onboarding process",
  video: {
    src: "/video.png",
    alt: "video sim",
    width: 288,
    height: 464,
  },
  cards: [
    {
      id: 1,
      title: "Brief",
      body: "Complete <strong>brief writing or simple guidance</strong> on what to include, we've got you covered",
      image: { src: "/pen_paper_icon.svg", alt: "icon" },
      width: "90%",
      backgroundColor: "#f9f9f9",
    },
    {
      id: 2,
      title: "Search",
      body: "In depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting",
      image: { src: "/graphs_icon.svg", alt: "icon" },
      width: "95%",
      backgroundColor: "#f4f4f4",
    },
    {
      id: 3,
      title: "Pitch",
      body: "Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting",
      image: { src: "/meeting_icon.svg", alt: "icon" },
      width: "100%",
      backgroundColor: "#f1f1f1",
    },
  ],
};

function AgencySelection() {
  return <AgencySelectionSection {...agencySelectionProps} />;
}
export default AgencySelection;
