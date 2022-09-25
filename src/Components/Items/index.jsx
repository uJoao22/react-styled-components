import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImageFilter from "../ImageFilter";

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding 10px;
  font-size: 12px;
`

export default (props) => {
  return (
    <Items>

      {/* Chamando a função ImageFilter passando o tipo por parametro para retornar o componente Icone corretamente */}
      { ImageFilter(props.type) }

      {/* Passando todas as props que esse componente recebe para o cmponente Item através do spreed Operator */}
      <Item { ...props } />

      {/* Exibindo a data */}
      <span>
        { props.date }
      </span>

    </Items>
  )
}