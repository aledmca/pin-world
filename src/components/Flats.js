import { useContext } from "react";
import styled from "styled-components";
import { CurrentFlatContext } from "../context/CurrentFlatContext";
import Flat from "./Flat";
import Loading from "./Loading";

const FlatsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export default function Flats({ flats, isLoading  }) {
  const { setFlat } = useContext(CurrentFlatContext);

  const handleFlatClick = (flat) => {
    setFlat(flat)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
        <FlatsList>
          {flats.map(flat => (
            <Flat 
            key={flat.id} 
            flat={flat} 
            onClick={handleFlatClick}/>
          ))}
        </FlatsList>
    </div>
  )
}