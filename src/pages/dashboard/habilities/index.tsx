import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Habilities() {
  const { id } = useParams<string>();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function format(str: string) {
    return (
      <span key={str} className="text-lg capitalize">
        {str.replace("-", " ")}
      </span>
    );
  }

  return (
    <div className="text-slate-200 flex flex-col gap-2 w-full px-2">
      {pokemon?.abilities.map((hab: any) => format(hab?.ability?.name))}
    </div>
  );
}
