import React,{Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoNoticias from './componentes/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  useEffect(()=>{
    const consultarAPI = async()=>{
      if(categoria === '')return;
      const url =  `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de7d998d65b04cb6acd3df3ee9e312d8`;
      const resultado = await fetch(url);
      const noticias = await resultado.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} /> 
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
