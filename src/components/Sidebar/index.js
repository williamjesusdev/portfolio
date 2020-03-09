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

import {
  Container,
  Header,
  Logo,
  Nav,
  NavLink,
  LinkBlank,
  List
} from "./styles";

export default function Sidebar() {
  const [url, setUrl] = useState("");
  const path = window.location.hash.split("#/")[1];
  path !== url && setUrl(path);

  function handleClick(e) {
    const url = e.target.name !== "home" ? e.target.name : "";
    setUrl(url);
  }

  return (
    <React.Fragment>
      <Container>
        <Header>
          <Link to="/" onClick={() => setUrl("")}>
            <Logo
              src={logo}
              alt="Wordpress Developer, Web Developer, Front End Developer"
            />
            <Logo
              top="20px"
              src={title}
              alt="Wordpress Developer, Web Developer , Front End Developer"
            />
          </Link>
        </Header>
        <Nav>
          <NavLink
            to="/"
            name="home"
            onClick={handleClick}
            className={url === "" && "home active"}
          >
            <Home />
          </NavLink>
          <NavLink
            to="about"
            name="about"
            onClick={handleClick}
            className={url === "about" && "about active"}
          >
            <About />
          </NavLink>
          <NavLink
            to="skills"
            name="skills"
            onClick={handleClick}
            className={url === "skills" && "skills active"}
          >
            <Skills />
          </NavLink>
          <NavLink
            to="works"
            name="works"
            onClick={handleClick}
            className={url === "works" && "works active"}
          >
            <Works />
          </NavLink>
          <NavLink
            to="contact"
            name="contact"
            onClick={handleClick}
            className={url === "contact" && "contact active"}
          >
            <Contact />
          </NavLink>
        </Nav>
        <List>
          <li>
            <LinkBlank
              id="github"
              basename="./ asas"
              href="https://github.com/WilliamJesusDev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
            </LinkBlank>
          </li>
          <li>
            <LinkBlank
              id="linkedin"
              href="https://linkedin.com/in/WilliamJesusDev"
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
        </List>
      </Container>
    </React.Fragment>
  );
}
