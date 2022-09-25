import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

// Criando váriaveis para retonar o Icone se o tem é claro ou escuro
const claro = <Icone src={ThemeOn} alt="Tema Claro"/>
const escuro = <Icone src={ThemeOff} alt="Tema Escuro"/>

// Função default que recebe como prop o tema, verifica se o tema é true se for retorna o Icone de escuro se for false retorna o Icone de claro
export default ({ tema }) => (tema ? escuro : claro);