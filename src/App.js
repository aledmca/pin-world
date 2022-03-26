import styled from "styled-components";
import Flats from "./components/Flats";

const StyledApp = styled.div`
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <Flats />
    </StyledApp>
  );
}

export default App;
