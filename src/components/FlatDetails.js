import { useContext } from "react";
import styled from "styled-components";
import { CurrentFlatContext, useCurrentFlat } from "../context/CurrentFlatContext";
import { Button, Header } from "./_styled";

const Root = styled.div`
  margin: auto;
`
const Price = styled.div`
  font-size: 1.5em;
`

export default function FlatDetails({ flat }) {
  const {name, price, priceCurrency} = flat;
   
  const { setFlat } = useCurrentFlat(); 

  const handleBackClick = () => {
    setFlat(null)
  }
  return (
    <Root>
      {/* <StyledHeader> */}
        <Button onClick={handleBackClick}>{'X'}</Button>
        <Header>{name}</Header>
      {/* </StyledHeader> */}
      <Price>Only {price}{priceCurrency}/night!<br/>
      Two others are interested in this apartment.</Price>
    </Root>
  )
}