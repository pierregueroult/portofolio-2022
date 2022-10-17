import React from "react";
import InnerLink from "../atoms/InnerLink";
import roadmapItems from "../../data/roadmap";
import { Fragment } from "react";
import { useState } from "react";
import { OuterLinkBlank } from "../atoms/OuterLink";
import links from "../../data/links";

export default function Roadmap() {
  const [seeMore, setSeeMore] = useState(false);

  function seeMoreButtonHandler() {
    if (!seeMore) {
      setSeeMore((prev) => !prev);
    }
  }

  function Item({ date, title, text, image, id }) {
    return (
      <article className={`roadmap__item roadmap__item__${id}`}>
        <div className="roadmap__item__line"></div>
        <div className="roadmap__item__container">
          <h3>
            {date !== null ? <span className="highlight">{date}</span> : <></>}
            {date !== null ? " - " : ""}
            {title}
          </h3>
          {image !== null ? <img src={image} alt="background" /> : <Fragment />}
          <p>{text}</p>
        </div>
      </article>
    );
  }

  return (
    <section className="section roadmap" id="roadmap">
      <div className="roadmap__texts">
        <h2>Mon parcours</h2>
        <h4>
          Je suis un développeur Français, à la recherche de{" "}
          <span className="highlight">défis à résoudre</span> et de{" "}
          <span className="highlight">projets à mener</span> !
        </h4>
        <p>
          Je suis étudiant en BUT Multimédia et Internet en Normandie, dans
          l'objectif de devenir développeur diplomé. En effet, ces dernières
          années, la curiosité m'a poussé à apprendre HTML et CSS. Ensuite, j'ai
          continué avec plein d'autres languages et frameworks du web, comme par
          exemple ReactJS.
        </p>
        <p>
          J'aime créer des projets, communiquer, collaborer et travailler pour
          les faire abboutir. J'aime les défis, les idées insolites et les
          projets ambitieux.
        </p>
        <ul className="roadmap__texts__buttons">
          <li>
            <InnerLink destination="skills">
              Quelles sont mes compétences ?
            </InnerLink>
          </li>
          <li>
            <InnerLink destination="projects">
              Voir mes derniers projets !
            </InnerLink>
          </li>
        </ul>
      </div>
      <div className="roadmap__line">
        <img
          src="/images/portal1.svg"
          alt="portail"
          className="roadmap__line__image"
        />
        <div className="roadmap__line__container">
          <div className="roadmap__line__inner left">
            {roadmapItems.map((data, i) =>
              i % 2 === 0 && i < 2 ? (
                <Item {...data} key={i} id={i} />
              ) : (
                <Fragment key={i} />
              )
            )}
            {roadmapItems.map((data, i) =>
              i % 2 === 0 && i >= 2 && seeMore ? (
                <Item {...data} key={i} id={i} />
              ) : (
                <Fragment key={i} />
              )
            )}
          </div>
          <div className="roadmap__line__inner right">
            {roadmapItems.map((data, i) =>
              i % 2 !== 0 && i < 2 ? (
                <Item {...data} key={i} id={i} />
              ) : (
                <Fragment key={i} />
              )
            )}
            {roadmapItems.map((data, i) =>
              i % 2 !== 0 && i >= 2 && seeMore ? (
                <Item {...data} key={i} id={i} />
              ) : (
                <Fragment key={i} />
              )
            )}
          </div>
          <div className="roadmap__line__button__container">
            {!seeMore ? (
              <div
                className="roadmap__line__button"
                onClick={seeMoreButtonHandler}
              >
                <span className="highlight">Voir plus</span>
              </div>
            ) : (
              <>
                <OuterLinkBlank url={links.linkedIn}>
                  <div className="roadmap__line__button">
                    <span className="highlight">La suite sur LinkedIn</span>
                  </div>
                </OuterLinkBlank>
                <InnerLink destination={"roadmap"}>
                  <div className="roadmap__line__button">
                    <span className="highlight">Retourner en haut</span>
                  </div>
                </InnerLink>
              </>
            )}
          </div>
        </div>
        <img
          src="/images/portal1.svg"
          alt="portail"
          className="roadmap__line__image"
        />
      </div>
    </section>
  );
}
