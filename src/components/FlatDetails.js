import styled from "styled-components";
import { Button, Header } from "./_styled";

const Root = styled.div`
  margin: auto;
`
const Price = styled.div`
  font-size: 1.5em;
`

export default function FlatDetails({ flat }) {
  const { name, price, priceCurrency } = flat;

  return (
    <Root>
      <Button>{'X'}</Button>
      <Header>{name}</Header>

      <Price>Only {price}{priceCurrency}/night!<br />
        Two others are interested in this apartment.</Price>
    </Root>
  )
}