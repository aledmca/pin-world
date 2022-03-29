import styled from "styled-components";
import { Calendar } from "../components/Calendar";
import glb from "../img/glb.png";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const EarthGlobe = styled.img`
width: 400px;
`

export default function HomePage() {

  return (
    <Container>
      <div>
        <Calendar></Calendar>
      </div>
      <EarthGlobe src={glb} />
    </Container>
  )
}