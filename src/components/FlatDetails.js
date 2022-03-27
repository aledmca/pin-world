import styled from "styled-components";
import { Button, Header, StyledHeader } from "./_styled";

const Root = styled.div`
  margin: auto;
`
const Price = styled.div`
  font-size: 1.5em;
`

export default function FlatDetails({flat, onBackClick}) {
  const {name, price, priceCurrency} = flat;
   
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
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