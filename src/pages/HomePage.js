import styled from "styled-components";
// import { Calendar } from "../components/Calendar";
import glb from "../img/glb.png";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
/* overflow: auto; */
`
const EarthGlobe = styled.img`
position: absolute;
top: 60%;
left: 50%;
width: 500px;
height: 500px;
margin-top: 0px;
margin-left: -250px;
`

export default function HomePage() {

  return (
    <Container>
      {/* <div>
        <Calendar></Calendar>
      </div> */}
      <EarthGlobe src={glb} />
    </Container>
  )
}