import { useState } from "react";
import styled from "styled-components";
import FlatDetails from "./components/FlatDetails";
import Flats from "./components/Flats";

const StyledApp = styled.div`
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {
const [flat, setFlat] = useState(null)

  const handleFlatClick = (flat) => {
    setFlat(flat);
  }

  return (
    <StyledApp>
      <div></div>
      { flat ? 
        <FlatDetails flat={flat} onBackClick={() => setFlat(null)}/> :
        <Flats onClick={ handleFlatClick }/>
      }
    </StyledApp>
  );
}

export default App;
