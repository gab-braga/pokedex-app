import { useState } from "react";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import Search from "../../assets/search.svg";
import Pokemon from "../../interfaces/pokemon";
import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function searchPokemon() {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(({ data: { id } }) => {
        navigate(`/dash/${id}/data`);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  const sugest: Pokemon[] = [
    {
      id: 25,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      name: "Pikachu",
      type: "electric",
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      name: "Charmander",
      type: "fire",
    },
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "Bulbasaur",
      type: "grass",
    },
    {
      id: 7,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      name: "Squirtle",
      type: "water",
    },
    {
      id: 19,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      name: "Rattata",
      type: "normal",
    },
    {
      id: 109,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
      name: "Koffing",
      type: "poison",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10 text-slate-100 min-h-screen bg-red-500">
      <header className="w-full flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-4xl mt-4 font-bold">Pokedex</h1>
        <p className="">O seu catálogo de pokemons.</p>
        <div className="flex w-3/4 sm:w-3/5 md:w-2/4 lg:w-1/3 mt-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="bg-slate-50 text-slate-800 w-full py-2 px-4 rounded-s-full focus:outline-none"
            placeholder="Pesquise aqui"
          ></input>
          <button
            onClick={searchPokemon}
            className="text-slate-200 rounded-e-full bg-slate-50 py-2 px-4"
          >
            <img src={Search} alt="Buscar" />
          </button>
        </div>
      </header>
      <main className="bg-slate-50 max-w-4xl w-full sm:w-8/12 rounded-t-3xl flex-1 sm:flex-initial sm:rounded-3xl p-6">
        <h2 className="text-slate-400 px-2 pb-4 uppercase"> Sugestões </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sugest.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </div>
      </main>
    </div>
  );
}
