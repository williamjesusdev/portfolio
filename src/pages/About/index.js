import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function About() {
  document.title = "Sobre | William Jesus";
  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea />
      <TextArea title="Sobre Mim">
        <p>
          Graduado em Análise e Desenvolvimento de Sistemas pela Universidade
          Anhanguera em São Paulo desde 2015.
        </p>
        <p>
          Trabalho desde 2009 em uma empresa do ramo de 'Confecções' onde já fui
          alocado em diversas posições dentre os setores administrativo e
          financeiro, hoje atuando como Analista de Sistemas.
        </p>
        <p>
          Continuo estudando, porém hoje com um novo foco, o de me tornar
          Desenvolvedor Full-Stack, acompanhando as tendências do mercado estudo
          hoje para construir aplicações não somente funcionais mas de imenso
          valor agregado, seguindo os padrões da comunidade desde o back ao
          front-end, utilizando APIs, Bibliotecas e Frameworks.
        </p>
        <p>Vamos conversar!?</p>
      </TextArea>
    </React.Fragment>
  );
}
