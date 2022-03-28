import React, { useContext } from "react";
import { useState } from "react";

const BookContext = React.createContext();

export const BookProvider = ({ children }) => { 

  const [book, setBook] = useState([]);

  const value = {
    book,
    makeReservation : (flat) => {
      const newReservation = [...book];

      newReservation.push(book);
      setBook(newReservation);
    }
  }

  return (
    <BookContext.Provider value={value}>
      { children }
    </BookContext.Provider>
  )
}

export const useBook = () => {
  const context = useContext(BookContext);

  if(!context) {
    throw new Error('useBook must be used within a BookProvider!')
  }

  return context; 
}

