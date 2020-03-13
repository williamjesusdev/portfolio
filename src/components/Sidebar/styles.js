import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #181818;
  width: 60px;
  z-index: 1;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

export const Header = styled.div`
  background: #070707;
  display: block;
  padding: 8px 0;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 8px auto;
  width: 80%;

  &:first-child + img {
    margin-top: 12px;
    margin-bottom: -5px;
    width: 90%;
  }
`;

export const LinkBlank = styled.a``;

export const Nav = styled.nav`
  top: 35%;
  width: 100%;
  display: block;
  position: absolute;
  text-align: center;
`;

export const NavLink = styled(Link)`
  padding: 8px 17px;
  color: ${props => props.theme.accent};
  display: block;
  position: relative;
  text-decoration: none;
  text-align: center;

  > svg {
    transition: all 0.3s ease-out;
  }

  &.active,
  &:hover {
    color: ${props => props.theme.primary};
  }

  &:hover svg {
    opacity: 0;
  }

  &:after {
    font-size: 9px;
    letter-spacing: 2px;
    position: absolute;
    bottom: 30%;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &[name]:after {
    text-transform: uppercase;
    content: attr(name);
  }

  &:hover:after {
    opacity: 1;
  }
`;

export const List = styled.ul`
  position: absolute;
  height: 60px;
  bottom: 12%;
  width: 100%;
  display: block;
  padding: 0;
  list-style: none;

  @media only screen and (max-height: 619px) {
    display: none;
  }
`;

export const ChildrenList = styled.li`
  > a {
    padding: 5px 0;
    display: block;
    width: 30%;
    margin: auto;
    color: ${props => props.theme.accent};

    &#github:hover {
      color: #283e4a;
    }
    &#facebook:hover {
      color: #4267b2;
    }
    &#linkedin:hover {
      color: #285aeb;
    }
    &#instagram:hover {
      color: #bc1888;
    }
  }
`;
