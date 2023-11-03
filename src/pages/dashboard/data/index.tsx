import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Data() {
  const { id } = useParams<string>();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    })();
  }, [id]);

  return (
    <div className="text-slate-200 flex flex-col px-2">
      <h1> Weight: {pokemon?.weight} </h1>
      <h1> Height: {pokemon?.height} </h1>
      <h1> Experience: {pokemon?.base_experience} </h1>
    </div>
  );
}
