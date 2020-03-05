import React from "react";

import logo from "../../assets/logo.svg";
import title from "../../assets/title.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Skills } from "../../assets/skills.svg";
import { ReactComponent as Work } from "../../assets/work.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

import * as S from "./styles";

export default function Sidebar() {
  const url = window.location.pathname;
  return (
    <React.Fragment>
      <S.Sidebar />
      <div className="sidebar">
        <a className="logo" rel="index" href="/">
          <img
            src={logo}
            alt="Wordpress Developer, Web Developer, Front End Developer Logo"
          />
          <img
            top="20px"
            src={title}
            alt="Wordpress Developer, Web Developer , Front End Developer"
          />
        </a>
        <nav>
          <a
            rel="index"
            href="/"
            className={"home-link " + (url === "/" ? "active" : "")}
          >
            <Home />
          </a>
          <a
            rel="about"
            href="./about/"
            className={"about-link " + (url === "/about/" ? "active" : "")}
          >
            <About />
          </a>
          <a
            rel="skills"
            href="./skills/"
            className={"skills-link " + (url === "/skills/" ? "active" : "")}
          >
            <Skills />
          </a>
          <a
            rel="gallery"
            href="./portfolio/"
            className={
              "gallery-link " + (url === "/portfolio/" ? "active" : "")
            }
          >
            <Work />
          </a>
          <a
            rel="contact"
            href="./contact/"
            className={"contact-link " + (url === "/contact/" ? "active" : "")}
          >
            <Contact />
          </a>
        </nav>
        <ul>
          <li>
            <a
              id="github"
              href="https://github.com/williamjesusti"
              rel="noopener noreferrer"
              target="_blank"
            >
              <S.IconGithub />
            </a>
          </li>
          <li>
            <a
              id="linkedin"
              href="https://linkedin.com/in/williamjesusti"
              rel="noopener noreferrer"
              target="_blank"
            >
              <S.IconLinkedin />
            </a>
          </li>
          <li>
            <a
              id="facebook"
              href="https://www.facebook.com/WillZinhOZ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <S.IconFacebook />
            </a>
          </li>
          <li>
            <a
              id="instagram"
              href="https://instagram.com/willzinhoz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <S.IconInstagram />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
