import { useEffect, useRef, useState } from "react";
import { useAppState } from "../../App/App.StateProvider";
import InnerLink from "../atoms/InnerLink";
import { OuterLinkBlank } from "../atoms/OuterLink";

function CarouselProvider({ children, title }) {
  const [sectionHeight, setSectionHeight] = useState(0);
  const [translate, setTranslate] = useState(0);
  const scrollableContainer = useRef(null);
  const offset = 100;

  useEffect(() => {
    const listener = document
      .querySelector(".page__sectionContainer")
      .addEventListener("scroll", () => {
        setSectionHeight(scrollableContainer.current.scrollWidth + offset);
        setTranslate(scrollableContainer.current.offsetTop);
      });
    return () => {
      document
        .querySelector(".page__sectionContainer")
        .removeEventListener("scroll", listener);
    };
  }, []);

  const [state] = useAppState();
  return (
    <article
      id="carousel"
      style={{ height: `${sectionHeight}px`, position: "relative" }}
    >
      <h2 className="projects__title">{title}</h2>
      <div
        style={{
          height: `calc(100vh - ${state.navHeight}px`,
          transform: `translateX(-${translate - offset}px)`,
        }}
        ref={scrollableContainer}
        className="projects__carousel"
      >
        {children}
      </div>
      <div className="projects__skip">
        <InnerLink destination="roadmap">
          <p>Passer</p>
        </InnerLink>
        <OuterLinkBlank url={"https://github.com/pierregueroult/"}>
          <p>GitHub</p>
        </OuterLinkBlank>
      </div>
    </article>
  );
}

export default CarouselProvider;
