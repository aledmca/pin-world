import Flats from "../components/Flats";
import FlatDetails from "../components/FlatDetails";
import { Header, StyledHeader, StyledLogo } from "../components/_styled";
import logo from "../Logo.svg/logo.png";
import {  useEffect, useState } from "react";
import { getAllFlats } from "../api/flatsApi";
import {  useCurrentFlat } from "../context/CurrentFlatContext";


export default function ProductPage() {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(false);

  const { flat } = useCurrentFlat();

  useEffect(() => {
    ( async () => {
    setLoading(true);

    const data = await getAllFlats();

    setLoading(false);
    setFlats(data);
    })();
  }, []);


  return (
    <>

    <StyledHeader>
    <StyledLogo src={logo} />
    <Header>Apartments</Header>
    </StyledHeader>
    {
      flat ?
      <FlatDetails flat={flat}/> :
      <Flats isLoading={loading} flats={flats}/>
    }
  </>
  )
}