import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFlats } from "../api/flatsApi";
import Flat from "./Flat";
import Loading from "./Loading";
import logo from "../Logo.svg/logo.png";
import { Header, StyledLogo, StyledHeader  } from "./_styled";


const FlatsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
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
      {/* <Header>Special holidays for you!</Header> */}
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