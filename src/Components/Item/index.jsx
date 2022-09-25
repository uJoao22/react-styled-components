import React from "react";
import styled from "styled-components";

// Criando classes dentro do styled componentes para casos especificos
const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text{
    font-weight: bold;
  }
`

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">
        { type }
      </span>

      <span>
        { from }
      </span>

      <span>
        { value }
      </span>
    </Item>
  )
}