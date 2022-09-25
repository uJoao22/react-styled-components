import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, IconeTema, Box, Botao, Detalhe, Saldo } from "../UI";

// NOTA: Sempre que for crair um style-component dentro de um component react, aplica-ló fora da function principal

// Aplicando Herança, criando um componente IconeMargin que herda todos atributos de Icone e adiciona outros
const IconeMargin = styled(IconeTema)`
  marginTop: "2px";
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
          <Saldo>
            <Detalhe>R$</Detalhe> {toggleState ? ("0,00") : ("---")}
          </Saldo>
      </div>

      <Botao onClick={toggleHandler}>
        <Icone
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
