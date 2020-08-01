import React from 'react';
import { FooterBase } from './styles';
import LogoFoot from '../../assets/img/LogoFoot.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={LogoFoot} alt="Logo CatsFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
