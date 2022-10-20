import React from "react";
import Marquee from "react-fast-marquee";
import marqueeText from "../../data/marquee-text";

export default function Skills() {
  function SkillsSection({ title, image, icon, children, list }) {
    return (
      <div className="skills__part">
        <img src={image} alt="skill banner" />
        <div className="skills__part__container">
          {icon}
          <h1>{title}</h1>
          <p>{children}</p>
          <ul>
            {list !== undefined && list !== null
              ? list.map((content, i) => (
                  <li key={i}>
                    <span className={i === 0 ? "highlight" : ""}>
                      {content}
                    </span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <section className="section skills" id="skills">
      <Marquee
        className="skills__marquee"
        direction="right"
        speed={40}
        loop={0}
        gradient={false}
      >
        {marqueeText
          .slice(0, Math.ceil((marqueeText.length * 1) / 4))
          .map((content, index) => (
            <p key={index} className="skills__marquee__text">
              {content}
            </p>
          ))}
      </Marquee>
      <Marquee
        className="skills__marquee"
        direction="left"
        speed={40}
        loop={0}
        gradient={false}
      >
        {marqueeText
          .slice(
            Math.ceil((marqueeText.length * 1) / 4),
            Math.ceil((marqueeText.length * 2) / 4)
          )
          .map((content, index) => (
            <p key={index} className="skills__marquee__text">
              {content}
            </p>
          ))}
      </Marquee>
      <div className="skills__container">
        <article className="skills__article">
          <SkillsSection
            title="Etudes"
            image="/images/iut_frederic_bisson.avif"
            icon={<i className="fa-solid fa-graduation-cap"></i>}
            list={["Diplômes :", "Baccalauréat", "BUT MMI à venir"]}
          >
            Disposant d'un bagage de compétences d'un Bac
            Physique-Chimie/Informatique, je suis actuellement en train de
            spécialiser ces dernières en BUT Métiers du Multimédia et de
            l'Internet.
          </SkillsSection>
          <SkillsSection
            title="Langages"
            image="/images/code.avif"
            icon={<i className="fa-solid fa-code"></i>}
            list={[
              "Langages :",
              "JavaScript",
              "HTML",
              "CSS/SCSS",
              "Python",
              "etc.",
            ]}
          >
            J'ai eu la chance d'utiliser beaucoup de langages de programmations
            parmi lesquels Python, PHP, NodeJS etc. . Cependant, je me suis
            spécialisé dans le JavaScript et nottament ReactJS, avec lequel j'ai
            construit ce site !
          </SkillsSection>
          <SkillsSection
            title="Logiciel"
            image="/images/ezra.gif"
            icon={<i className="fa-solid fa-hashtag"></i>}
            list={[
              "Logiciels :",
              "Figma",
              "DaVinci Resolve",
              "Visual Studio Code",
              "etc.",
            ]}
          >
            J'ai nottament par curiosité découvert et utilisé beaucoup de
            logiciels comme Davinci Resolve ou Gimp et j'utilise Visual Studio
            Code au quotidien. Depuis maintenant plus d'un mois, j'apprends à
            utiliser la suite Abode (PhotoShop, Illustrator, Premiere Pro).
          </SkillsSection>
        </article>
      </div>
      <Marquee
        className="skills__marquee"
        direction="left"
        speed={40}
        loop={0}
        gradient={false}
      >
        {marqueeText
          .slice(
            Math.ceil((marqueeText.length * 2) / 4),
            Math.ceil((marqueeText.length * 3) / 4)
          )
          .map((content, index) => (
            <p key={index} className="skills__marquee__text">
              {content}
            </p>
          ))}
      </Marquee>
      <Marquee
        className="skills__marquee"
        direction="right"
        speed={40}
        loop={0}
        gradient={false}
      >
        {marqueeText
          .slice(Math.ceil((marqueeText.length * 3) / 4))
          .map((content, index) => (
            <p key={index} className="skills__marquee__text">
              {content}
            </p>
          ))}
      </Marquee>
    </section>
  );
}
