import React from 'react';
import { FooterBase } from './styles';
import Github from '../../assests/img/github.svg';
import Linkdin from '../../assests/img/linkedin.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/Marzeu/marzaflix">
        <img className="redes" src={Github} alt="Logo Github" />
      </a>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <a href="https://www.linkedin.com/in/marzeu-selau-junior/">
        <img className="redes" src={Linkdin} alt="Logo Linkdin" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/marzeu-selau-junior/">
          Marzeu Selau Júnior
        </a>
      </p>
      <p>
        Conheça o
        {' '}
        <a href="https://github.com/Marzeu/marzaflix">
          código
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
