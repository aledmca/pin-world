import React, { useContext } from "react";
import { useState } from "react";

const CurrentFlatContext = React.createContext();

export const CurrentFlatProvider = ({ children }) => {

  const [flat, setFlat] = useState(null);

  const context = {
    flat, 
    setFlat
  };

  return (
    <CurrentFlatContext.Provider value={context}>
      {children}
    </CurrentFlatContext.Provider>
  )
}

export const useCurrentFlat = () => {
  const context = useContext(CurrentFlatContext);

  if(!context) {
    throw new Error('useCurrentFlat must be used within a CurrentFlatProvider!')
  }
  return context;  
}