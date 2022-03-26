import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFlats } from "../api/flatsApi";
import Flat from "./Flat";
import Loading from "./Loading";
import logo from "../Logo.svg/logo.png"

const Header = styled.h1`
margin-top: 0;
color: #516346;
`
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

export default function Flats({ onClick }) {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await getAllFlats();

      setLoading(false);
      setFlats(data);
    }

    getData();
  }, []);

  const handleFlatClick = (flat) => {
    if (onClick) {
      onClick(flat)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <StyledHeader>
      <StyledLogo src={logo} />
      <Header>Appartments</Header>
      </StyledHeader>
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