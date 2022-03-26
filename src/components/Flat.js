import styled from "styled-components";
import Flex from "./Flex";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 120px;
height:200px;
background-color: #6f8263;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 20px;
`
const Img = styled.img`
max-width: 115px;
max-height: 190;
object-fit: contain;
`

 export default function Flat({flat}) {

  return (
    <Container>
      <Img src={flat.imageUrl} alt={flat.name}/>
    </Container>
  )
 }