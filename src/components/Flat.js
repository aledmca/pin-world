import styled from "styled-components";
import { StyledBtn } from "./_styled";
import {  useCurrentFlat } from "../context/CurrentFlatContext";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 14px;
width: 210px;
height:220px;
background-color: #a6b89a;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 20px;
cursor: pointer;
transition: background-color .5s;

&:hover {
  background-color: #6f8263;
}
`
// const Name = styled.div`
//   font-size: 1em;
//   font-weight: bold;
//   white-space: nowrap;
// `

const Price = styled.div`
font-size: 0.8em;
`

const Img = styled.img`
max-width: 180px;
max-height: 140px;
object-fit: contain;
`

 export default function Flat({ flat }) {
  const { setFlat } = useCurrentFlat();
  const {makeReservation} =useContext(BookContext);

  const handleFlatClick = () => { 
    setFlat(flat);
  }

  const handleBookNow = (e) => {
    console.log('BOOKED');
    e.stopPropagation();

    makeReservation(flat);
  }

  return (
    <Container onClick={handleFlatClick}>
      {/* <Name>{flat.name}</Name> */}
      <Img src={flat.imageUrl} alt={flat.name}/>
      <Price>{flat.price}{flat.priceCurrency}/night</Price>
      <StyledBtn onClick={handleBookNow}>Book Now</StyledBtn>
    </Container>
  )
 }