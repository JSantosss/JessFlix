import React from 'react';
import Menu from './components/Menu'
//fazendo a importação do component Menu, o "./" é a pasta onde ele se encontra
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
//gimport Footer from './components/Footer'

function App() {
  return (
    <div style={{background: "#414141"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O tão esperado comeback das K/DA está marcado para o dia 28 de agosto de 2020. Ansiosos?"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />
    </div>
  );
}

export default App;
