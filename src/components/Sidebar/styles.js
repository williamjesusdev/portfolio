import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  top: 0;
  position: absolute;
  background: #262626;
  width: 60px;
  z-index: 1;
  min-height: 100vh;
  text-align: center;
`;

export const Logo = styled.div`
  background: #070707;
  display: block;
  padding: 8px 0;

  > a > img {
    display: block;
    margin: 8px auto;
    width: 80%;
  }

  > a > img:first-child + img {
    margin-top: 12px;
    margin-bottom: -5px;
    width: 90%;
  }
`;

export const Image = styled.img``;
export const LinkBlank = styled.a``;
export const Component = createGlobalStyle`
nav {
    top: 30%;
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
}

nav a {
    padding: 15px;
    color: ${props => props.theme.accent};
    display: block;
    position: relative;
    text-decoration: none;
    text-align: center;
}

nav a svg {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out
}

nav a:hover svg {
    opacity: 0
}

nav a.active,nav a:hover {
    color: ${props => props.theme.primary}
}

nav a:after {
    content: '';
    font-size: 9px;
    top: 40%;
    letter-spacing: 2px;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out
}

nav a:first-child:after {
    content: 'HOME'
}

nav a:first-child+a:after {
    content: 'ABOUT'
}

nav a:first-child+a+a:after {
    content: 'SKILLS'
}

nav a:first-child+a+a+a:after {
    content: 'MY WORK'
}

nav a:first-child+a+a+a+a:after {
    content: 'CONTACT'
}

nav a:hover:after {
    opacity: 1
}

ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
}

ul li a {
    padding: 5px 0;
    display: block;
    width: 30%;
    margin: auto;
    color: ${props => props.theme.accent}
}

a#github:hover {
    color: #283e4a
}
a#facebook:hover {
    color: #4267b2
}
a#linkedin:hover {
    color: #285AEB
}
a#instagram:hover {
    color: #bc1888
}

@media only screen and (max-height: 700px) {
    ul{
        display: none;
    }
 }
`;
