import { fundoClaro, conteudoClaro, textoFundoClaro } from "./variaveis"
import { fundoEscuro, conteudoEscuro, textoFundoEscuro } from "./variaveis"

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: '',
};

// Propriedade filter para alterar as cores do sgv, inverte-lás
export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
};