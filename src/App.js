import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [ tema, setTema ] = useState(true);

  // Função que inverte os valores de tema, de true para false e vice-versa
  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
    // Envolvendo toda a aplicação no Theme provider e passando a prop theme que poderá ser acessado em qualquer ponto dentro dos componentes que estão dentro dela, se a variavel tema for true fica claro, caso false, fica escuro
    <ThemeProvider theme={ tema ? temaClaro : temaEscuro }>

      {/* Para aplicar a alteração global do styled-componets é necessário a tag abaixo na raiz do projeto, o App.js */}
      <GlobalStyle />

      {/* Botão de alterar o tema, quando clicar é chamado a função toggleTema para alterar o valor de tema
       */}
      <BtnTema onClick={toggleTema}>
        {/* Função para definir qual tema será usado, enviando tema que é um boolean */}
        <SwitcherTema tema={tema}/>
      </BtnTema>

      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
