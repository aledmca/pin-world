import { useEffect, useState } from "react";
import { getAllFlats } from "../api/flatsApi";
import Flat from "./Flat";

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
    return <div>Loading...</div>
  }

  return (
    <div>
      {flats.map(flat => (
        <Flat key={flat.id} flat={flat} />
      ))}
    </div>
  )
}