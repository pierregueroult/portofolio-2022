import React from "react";
import links from "../../data/links";
import InnerLink from "../atoms/InnerLink";
import { OuterLinkBlank } from "../atoms/OuterLink";

export default function Contact() {
  return (
    <footer className="section contact" id="contact">
      <div className="contact__content">
        <div className="contact__content__message">
          <h3>Envoyer un message </h3>
          <p>Laisser un mot ici, vous pouvez être sur qu'il sera lu !</p>
          <form action="https://formspree.io/f/xpzbpvlk" method="POST">
            <ul>
              <li>
                <label htmlFor="mail">E-mail</label>
                <input
                  type={"email"}
                  id="mail"
                  name="mail"
                  autoComplete="off"
                  required
                  placeholder="...@email.com"
                />
              </li>
              <li>
                <label htmlFor="mes">Message</label>
                <input
                  type={"text"}
                  id="mes"
                  name="mes"
                  autoComplete="off"
                  required
                  placeholder="Bonsoir..."
                />
              </li>
            </ul>
            <button type="submit">Envoyer le message</button>
          </form>
          <p>
            En cliquant sur envoyer, vous acceptez les conditions d'utilisation
            de{" "}
            <OuterLinkBlank url="https://formspree.io/">
              Formspree
            </OuterLinkBlank>
            .
          </p>
        </div>
        <div className="contact__content__links">
          <div className="contact__content__links__lists">
            <ul>
              <li className="contact__content__links__title">
                Pierre Guéroult
              </li>
              <li>
                Apprenti développeur web, grand utilisateur de javascript.
              </li>
              <li>Actuellement étudiant à l'IUT de Rouen en Seine-Maritime.</li>
            </ul>
            <ul>
              <li className="contact__content__links__title">Sommaire</li>
              <li>
                <InnerLink destination="skills">Compétences</InnerLink>
              </li>
              <li>
                <InnerLink destination="roadmap">RoadMap</InnerLink>
              </li>
              <li>
                <InnerLink destination="projects">Projects</InnerLink>
              </li>
              <li>
                <InnerLink destination="faq">FAQ</InnerLink>
              </li>
              <li>
                <InnerLink destination="contact">Contact</InnerLink>
              </li>
            </ul>
          </div>
          <ul className="contact__content__links__buttons">
            <OuterLinkBlank url={links.linktree}>
              <li>
                <i className="fa-solid fa-link"></i>
              </li>
            </OuterLinkBlank>
            <OuterLinkBlank url={links.linkedIn}>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
            </OuterLinkBlank>
            <OuterLinkBlank url={links.instagram}>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </OuterLinkBlank>
            <OuterLinkBlank url={links.paypal}>
              <li>
                <i className="fa-brands fa-paypal"></i>
              </li>
            </OuterLinkBlank>
            <OuterLinkBlank url={links.github}>
              <li>
                <i className="fa-brands fa-github"></i>
              </li>
            </OuterLinkBlank>
          </ul>
        </div>
      </div>
      <div className="contact__links">
        <p className="contact__links__text">
          <a href="/">Politique de confidentialité</a>
        </p>
        <p className="contact__links__text">
          <a href="/">Condition d'utilisation</a>
        </p>
        <div className="contact__links__top">
          <InnerLink destination={"landing"}>Retouner en haut</InnerLink>
        </div>
      </div>
      <div className="contact__left-social-container">
        <ul>
          <li>
            <OuterLinkBlank url={links.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </OuterLinkBlank>
          </li>
          <li>
            <OuterLinkBlank url={links.github}>
              <i className="fa-brands fa-github"></i>
            </OuterLinkBlank>
          </li>
          <li>
            <OuterLinkBlank url={links.linktree}>
              <i className="fa-solid fa-link"></i>
            </OuterLinkBlank>
          </li>
        </ul>
        <div className="contact__left-social-container__line"></div>
      </div>
      <div className="contact__right-social-container">
        <div className="contact__right-social-container__email__container">
          <p className="contact__right-social-container__email">
            <a href="mailto:pierre.gueroult@univ-rouen.fr">
              pierre.gueroult@univ-rouen.fr
            </a>
          </p>
        </div>
        <div className="contact__right-social-container__line"></div>
      </div>
    </footer>
  );
}
