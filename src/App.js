import { useState } from "react";
import styled from "styled-components";
import { CurrentFlatContext } from "./context/CurrentFlatContext";
import ProductPage from "./pages/FlatsPage";

const StyledApp = styled.div`
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {
const [flat, setFlat] = useState(null)

  const context = {
    flat, 
    setFlat
  }

  return (
    <StyledApp>
      <CurrentFlatContext.Provider value={context}>
        { 
          <ProductPage />
        }
      </CurrentFlatContext.Provider>
    </StyledApp>
  );
}

export default App;
