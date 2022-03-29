import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { getAllFlats } from "../api/flatsApi";
import Loading from "../components/Loading";
import Flat from "../components/Flat";

const FlatsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

export default function FlatsPage() {
  const [flats, setFlats] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    async function getFlats() {
      setLoading(true);
      let data = await getAllFlats();
      setLoading(false);

      if (searchValue) {
        data = data.filter(flat => flat.name.includes(searchValue))
      }

      setFlats(data);
    }

    getFlats()
  }, [searchValue]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      {searchValue && (
        <span>Found {flats.length} flats for "{searchValue}".</span>
      )}
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