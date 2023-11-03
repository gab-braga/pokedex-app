import { Link } from "react-router-dom";
import poke from "../../assets/poke.svg";

export default function NotFound() {
  return (
    <div className="w-screen bg-red-500 absolute flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white text-2xl md:text-4xl mt-4 font-bold">
          404 - Not Found
        </h1>
        <img src={poke} alt="Poke" className="rotate-animation w-24" />
        <Link
          to="/"
          className="px-2 py-1 bg-red-600 uppercase font-lg text-white rounded"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
