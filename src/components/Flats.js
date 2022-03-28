import styled from "styled-components";

import Flat from "./Flat";
import Loading from "./Loading";
import logo from "../Logo.svg/logo.png"

const FlatsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`
const StyledLogo = styled.img`
margin-top: 0;
margin-bottom: 20px;
max-height: 50px;
max-width: 50px;
cursor: pointer;
transition: max-width max-height .5s;

&:active {
  max-width: 60px;
  max-height: 60px;
}
`
const StyledHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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