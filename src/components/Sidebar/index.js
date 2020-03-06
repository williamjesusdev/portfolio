import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import title from "../../assets/title.svg";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Skills } from "../../assets/skills.svg";
import { ReactComponent as Works } from "../../assets/works.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

import { Container, Logo, Image, LinkBlank, Component } from "./styles";

export default function Sidebar() {
  const [url, setUrl] = useState("/");
  const path = window.location.hash.split("#/")[1];
  path !== url && setUrl(path);
  return (
    <React.Fragment>
      <Component />
      <Container>
        <Logo>
          <Link to="/" onClick={() => setUrl("")}>
            <Image
              src={logo}
              alt="Wordpress Developer, Web Developer, Front End Developer"
            />
            <Image
              top="20px"
              src={title}
              alt="Wordpress Developer, Web Developer , Front End Developer"
            />
          </Link>
        </Logo>
        <nav>
          <Link
            to="/"
            onClick={() => setUrl("")}
            className={url === "" ? "home active" : ""}
          >
            <Home />
          </Link>
          <Link
            to="about"
            onClick={() => setUrl("about")}
            className={url === "about" ? "about active" : ""}
          >
            <About />
          </Link>
          <Link
            to="skills"
            onClick={() => setUrl("skills")}
            className={url === "skills" ? "skills active" : ""}
          >
            <Skills />
          </Link>
          <Link
            to="works"
            onClick={() => setUrl("works")}
            className={url === "works" ? "works active" : ""}
          >
            <Works />
          </Link>
          <Link
            to="contact"
            onClick={() => setUrl("contact")}
            className={url === "contact" ? "contact active" : ""}
          >
            <Contact />
          </Link>
        </nav>
        <ul>
          <li>
            <LinkBlank
              id="github"
              basename="./ asas"
              href="https://github.com/williamjesusti"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </LinkBlank>
          </li>
          <li>
            <LinkBlank
              id="linkedin"
              href="https://linkedin.com/in/williamjesusti"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin />
            </LinkBlank>
          </li>
          <li>
            <LinkBlank
              id="facebook"
              href="https://www.facebook.com/WillZinhOZ"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </LinkBlank>
          </li>
          <li>
            <LinkBlank
              id="instagram"
              href="https://instagram.com/willzinhoz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </LinkBlank>
          </li>
        </ul>
      </Container>
    </React.Fragment>
  );
}
