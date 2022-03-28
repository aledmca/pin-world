import { useState } from "react";
import styled from "styled-components";
import { CurrentFlatProvider } from "./context/CurrentFlatContext";
import ProductPage from "./pages/FlatsPage";
import { BookContext } from "./context/BookContext";
import HomePage from "./pages/HomePage";
const StyledApp = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
background-color: #a6b89a;
box-sizing: border-box;
min-height: 100vh;
`

function App() {
const [book, setBook] = useState([]);

  const bookContext = {
    book,
    makeReservation : (flat) => {
      const newReservation = [...book];

      newReservation.push(book);
      setBook(newReservation);
    }
  }

  return (
    <StyledApp>
      <div>
        {book.length}
      </div>
      <CurrentFlatProvider>
        <BookContext.Provider value={bookContext}>
          <ProductPage />
        </BookContext.Provider>
        </CurrentFlatProvider> 
      <HomePage></HomePage>
    </StyledApp>
  );
}

export default App;
