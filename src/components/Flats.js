import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllFlats } from "../api/flatsApi";
import Flat from "./Flat";
import Loading from "./Loading";

const Header = styled.h1`
margin-top: 0;
`

export default function Flats() {
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

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Header>Flats</Header>
      {flats.map(flat => (
        <Flat key={flat.id} flat={flat} />
      ))}
    </div>
  )
}