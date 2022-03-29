import styled from "styled-components";
import { CurrentFlatProvider } from "./context/CurrentFlatContext";
import { BookProvider } from "./context/BookContext";
import HomePage from "./pages/HomePage";
import BookStatus from "./components/BookStatus";
import FlatsPage from "./pages/FlatsPage";
import { Route, Routes } from "react-router-dom";


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
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
      <CurrentFlatProvider>
        <BookProvider>
          <BookStatus />
          {/* <Routes>
            <Route path="flats" element={<FlatsPage />}></Route>
          </Routes> */}
          <FlatsPage />
        </BookProvider>
        </CurrentFlatProvider> 
      <HomePage></HomePage>
    </StyledApp>
  );
}

export default App;
