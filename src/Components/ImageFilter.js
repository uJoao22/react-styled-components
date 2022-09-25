import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import utilidades from "../assets/images/utilidades.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import outros from "../assets/images/outros.svg";
import { IconeTema } from "../Components/UI";

// Criando um object literal, recebendo um parametro com o tipo de imagem e retornando o componente Icone de acordo com o tipo recebido
export default (type) => {
  // Cria objeto de retorno
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante"/>,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades"/>,
    Saude: <IconeTema src={saude} alt="Saude"/>,
    Transporte: <IconeTema src={transporte} alt="Transporte"/>,
    default: <IconeTema src={outros} alt="Outro"/>,
  };

  // Solicita retorno do objeto images na posição type, caso não exista a posição passada é retornado a posição default
  return Images[type] || Images.default;
}