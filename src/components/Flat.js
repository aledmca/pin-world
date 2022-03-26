import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 210px;
height:190px;
background-color: #a6b89a;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 20px;
cursor: pointer;
transition: background-color .5s;

&:hover {
  background-color: #6f8263;
}
`
const Img = styled.img`
max-width: 180px;
max-height: 140px;
object-fit: contain;
`

 export default function Flat({flat, onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick(flat);
    }
  }

  return (
    <Container onClick={handleClick}>
      <Img src={flat.imageUrl} alt={flat.name}/>
    </Container>
  )
 }