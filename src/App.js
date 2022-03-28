import styled from "styled-components";
import { CurrentFlatProvider } from "./context/CurrentFlatContext";
import { BookProvider } from "./context/BookContext";
import HomePage from "./pages/HomePage";
import BookStatus from "./components/BookStatus";
import FlatsPage from "./pages/FlatsPage";
const StyledApp = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {

  return (
  
    <StyledApp>
      <CurrentFlatProvider>
        <BookProvider>
          <BookStatus />
          <FlatsPage />
        </BookProvider>
        </CurrentFlatProvider> 
      <HomePage></HomePage>
    </StyledApp>
  );
}

export default App;
