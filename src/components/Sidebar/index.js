import React from "react";
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
  List,
  ChildrenList
} from "./styles";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Link to="/">
            <Logo src={logo} alt="William Jesus Logo" />
            <Logo top="20px" src={title} alt="William Jesus sub" />
          </Link>
        </Header>
        <Nav>
          <NavLink exact to="/" name="home" activeClassName="active">
            <Home />
          </NavLink>
          <NavLink to="about" name="about" activeClassName="active">
            <About />
          </NavLink>
          <NavLink to="skills" name="skills" activeClassName="active">
            <Skills />
          </NavLink>
          <NavLink to="works" name="works" activeClassName="active">
            <Works />
          </NavLink>
          <NavLink to="contact" name="contact" activeClassName="active">
            <Contact />
          </NavLink>
        </Nav>
        <List>
          <ChildrenList>
            <LinkBlank
              id="github"
              href="https://github.com/WilliamJesusDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </LinkBlank>
          </ChildrenList>
          <ChildrenList>
            <LinkBlank
              id="linkedin"
              href="https://linkedin.com/in/WilliamJesusDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </LinkBlank>
          </ChildrenList>
          <ChildrenList>
            <LinkBlank
              id="facebook"
              href="https://www.facebook.com/WillZinhOZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </LinkBlank>
          </ChildrenList>
          <ChildrenList>
            <LinkBlank
              id="instagram"
              href="https://instagram.com/willzinhoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </LinkBlank>
          </ChildrenList>
        </List>
      </Container>
    </React.Fragment>
  );
}
