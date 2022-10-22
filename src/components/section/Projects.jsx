import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { githubReposUrl } from "../../data/apis";
import { OuterLinkBlank } from "../atoms/OuterLink";
import CarouselProvider from "../providers/Carousel.Provider";
import ProjectsCarousel from "../molecules/ProjectsCarousel";
import importantProjects from "../../data/importantProjects";

export default function Projects() {
  const [gitHubData, setGitHubData] = useState([]);
  const [numberOfProject, setNumberOfProject] = useState(3);

  useEffect(() => {
    axios.get(githubReposUrl).then((res) => setGitHubData(res.data));
  }, []);

  function ProjectsLanguagesFetcher({ url }) {
    const [languagesData, setLanguagesData] = useState({});

    useEffect(() => {
      axios.get(url).then((res) => setLanguagesData(res.data));
      // eslint-disable-next-line
    }, []);

    return (
      <div className="project__languages">
        {languagesData !== {} ? (
          Object.keys(languagesData).map((language, index) => (
            <OuterLinkBlank
              url={`https://github.com/topics/${language.toLowerCase()}`}
              key={index}
            >
              {language === "JavaScript" ? (
                <i className="fa-brands fa-js" language={language}></i>
              ) : language === "HTML" ? (
                <i className="fa-brands fa-html5" language={language}></i>
              ) : language === "SCSS" || language === "SASS" ? (
                <i className="fa-brands fa-sass" language={language}></i>
              ) : language === "PHP" ? (
                <i className="fa-brands fa-php" language={language}></i>
              ) : language === "CSS" ? (
                <i className="fa-brands fa-css3" language={language}></i>
              ) : language === "Python" ? (
                <i className="fa-brands fa-python" language={language}></i>
              ) : language === "TypeScript" ? (
                <img
                  src="/icons/typescript.svg"
                  alt="typescript icon"
                  language={language}
                />
              ) : (
                <i className="fa-brands fa-markdown" language={language}></i>
              )}
            </OuterLinkBlank>
          ))
        ) : (
          <Fragment />
        )}
      </div>
    );
  }

  function showMoreProjects() {
    setNumberOfProject((prevState) => prevState + 2);
  }

  return (
    <section className="projects section" id="projects">
      <ProjectsCarousel project_list={importantProjects} />

      <CarouselProvider title={"Projets sur GitHub"}>
        {gitHubData !== [] ? (
          gitHubData.map((project, index) =>
            index < numberOfProject ? (
              <li className="project" key={index}>
                <div className="project__head-bar">
                  <img
                    src={project.owner.avatar_url}
                    alt="dev url"
                    className="project__head-bar__image"
                    loading="lazy"
                  />
                  <p className="project__head-bar__text">
                    <span>
                      <OuterLinkBlank url={project.html_url}>
                        {project.name}
                      </OuterLinkBlank>
                    </span>
                    <span>par</span>
                    <span>
                      <OuterLinkBlank url={project.owner.html_url}>
                        {project.owner.login}
                      </OuterLinkBlank>
                    </span>
                  </p>
                </div>
                <ul className="project__topics">
                  {project.topics.map((topic, index) => (
                    <li key={index} className="project__topic">
                      <OuterLinkBlank
                        url={`https://github.com/topics/${topic}`}
                      >
                        #{topic}
                      </OuterLinkBlank>
                    </li>
                  ))}
                </ul>
                <div className="project__exit">
                  <OuterLinkBlank url={project.html_url}>
                    <i className="fa-brands fa-github"></i>
                  </OuterLinkBlank>
                </div>
                <div className="project__dates">
                  <p>
                    {project.created_at.substr(0, 4) ===
                    project.updated_at.substr(0, 4)
                      ? project.created_at.substr(0, 4)
                      : `${project.created_at.substr(
                          0,
                          4
                        )} - ${project.updated_at.substr(0, 4)}`}
                  </p>
                </div>
                <ProjectsLanguagesFetcher url={project.languages_url} />
              </li>
            ) : index === numberOfProject + 1 ? (
              <div
                key={index}
                className="project__seemore"
                onClick={showMoreProjects}
              >
                <p>en voir plus ?</p>
              </div>
            ) : (
              <Fragment key={index} />
            )
          )
        ) : (
          <Fragment />
        )}
      </CarouselProvider>
    </section>
  );
}
