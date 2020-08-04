import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({ ...values, [chave]: valor });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    setValue(infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value);
  }

  // useEffect eh um efeito colateral que queremos que aconteça quando acontecer algo
  // possue dois parametros, o priemiro é o que queremos que aconteça
  // o 2nd parametro é quando que queremos que aconteça  (eh um array - quais coisas atualizarem)
  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://catsflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handlerOnSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          {/* Carregando categorias */}
          Carregando...
        </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
