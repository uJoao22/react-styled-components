import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

// Criando um styled-component que recebe uma prop para verificar qual estilo aplicar
const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.inside};

  background: ${(props) => props.primary ? ({ theme }) => theme.inside : corPrimaria};
  color: ${(props) => props.primary ? corPrimaria : ({ theme }) => theme.inside};
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank"/>
      <div>
        {/* Enviando a prop primary, definindo ela como um atributo da tag */}
        <BtnCabecalho primary href="https://google.com"> Ajuda </BtnCabecalho>
        <BtnCabecalho href="https://google.com"> Sair </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
