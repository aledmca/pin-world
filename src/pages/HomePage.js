import styled from "styled-components";
import { Calendar } from "../components/Calendar";
import Search from "../components/Search";
import glb from "../img/glb.png";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const EarthGlobe = styled.img`
width: 400px;
`
const Title = styled.h1`
color: #38ff4c;
`

export default function HomePage() {

return (
  <div>
    <Title>Welcome to Pin World!</Title>
    <Container>
      <div>
        <Search></Search>
        <Calendar></Calendar>
      </div>
      <EarthGlobe src={glb} />
    </Container>
  </div>
)
}