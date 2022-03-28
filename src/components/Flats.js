import styled from "styled-components";

import Flat from "./Flat";
import Loading from "./Loading";

const FlatsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export default function Flats({ flats, isLoading  }) {
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
        <FlatsList>
          {flats.map(flat => (
            <Flat 
            key={flat.id} 
            flat={flat} />
          ))}
        </FlatsList>
    </div>
  )
}