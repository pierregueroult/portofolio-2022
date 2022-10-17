import React from "react";
import { useState } from "react";

export default function ProjectsCarousel({ project_list }) {
  const [index, setIndex] = useState(1);
  const [isOnSwap, setIsOnSwap] = useState(false);

  function triggerSwap() {
    setIsOnSwap(true);
    setTimeout(() => setIsOnSwap(false), 500);
  }

  function addIndex() {
    console.log(project_list.length);
    if (!isOnSwap) {
      if (index !== project_list.length) {
        setIndex((current) => current + 1);
      } else {
        setIndex(1);
      }
      triggerSwap();
    }
  }

  function reduceIndex() {
    if (!isOnSwap) {
      if (index !== 1) {
        setIndex((current) => current - 1);
      } else {
        setIndex(project_list.length);
      }
      triggerSwap();
    }
  }

  return (
    <article className="projects__important">
      <div className="projects__important__counter">
        <span>N°</span>
        <div className="numbers">
          <span>0</span>
          <div>
            {project_list.map((props, i) => (
              <span
                className={`projects__important__counter__item projects__important__counter__item_${
                  i + 1
                } ${i + 1 === index ? "number-current" : ""} ${
                  i + 1 > index ? "number-after" : ""
                } ${i + 1 < index ? "number-before" : ""}`}
                key={i + 1}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
        <span>/0{project_list.length}</span>
      </div>
      <div className="projects__important__button projects__important__button-left">
        <i className="fa-solid fa-chevron-left" onClick={reduceIndex}></i>
      </div>
      <div className="projects__important__button projects__important__button-right">
        <i className="fa-solid fa-chevron-right" onClick={addIndex}></i>
      </div>
      <ul className="projects__important__container">
        {project_list.map(
          ({ name, date, type, image, valid, theme, link }, i) => (
            <li
              key={i + 1}
              className={`${
                valid ? "found" : "notfound"
              } ${theme} projects__important__${i + 1} ${
                i + 1 === index
                  ? "current"
                  : i + 1 < index
                  ? "before"
                  : i + 1 > index
                  ? "next"
                  : ""
              } `}
            >
              {valid ? (
                <>
                  <img alt="background" src={image} />
                  <a href={link} className={`${theme}`}>
                    <p>{name}</p>
                  </a>
                  <p>
                    {type} - {date}
                  </p>
                </>
              ) : (
                <>
                  <h3>Aucun Projet trouvé</h3>
                  <p>
                    Embauchez moi pour me permettre de nouvelles expériences
                  </p>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </article>
  );
}
