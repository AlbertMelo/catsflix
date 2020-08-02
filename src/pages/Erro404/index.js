import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo404 from '../../assets/img/Logo404.jpg';
import './index.css';

function Erro404() {
  return (
    <PageDefault>
      <div>

        <img className="imagem404" src={Logo404} alt="Logo Erro 404" />

        <h1 className="titulo">
          Humano!!!
        </h1>
        <p className="conteudo_miau">
          Miau!
        </p>
        <p className="conteudo">
          Não existe a página que você está procurando!
        </p>
        <br />
        <br />
        <p className="conteudo">
          Aproveita e enche meu pode de ração!
        </p>

      </div>
    </PageDefault>
  );
}

export default Erro404;
