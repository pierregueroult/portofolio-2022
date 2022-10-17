import Contact from "../components/section/Contact";
import Faq from "../components/section/Faq";
import Landing from "../components/section/Landing";
import Projects from "../components/section/Projects";
import Roadmap from "../components/section/Roadmap";
import Skills from "../components/section/Skills";

const navigationAnchor = [
  {
    title: "Accueil",
    anchor: "landing",
    Component: Landing,
  },
  {
    title: "Projets",
    anchor: "projects",
    Component: Projects,
  },
  {
    title: "RoadMap",
    anchor: "roadmap",
    Component: Roadmap,
  },
  {
    title: "Compétences",
    anchor: "skills",
    Component: Skills,
  },
  {
    title: "FAQ",
    anchor: "faq",
    Component: Faq,
  },
  {
    title: "Contact",
    anchor: "contact",
    Component: Contact,
  },
];

export default navigationAnchor;
