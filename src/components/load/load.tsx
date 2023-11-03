import poke from "../../assets/poke.svg";
import "./style.css";

export default function Load() {
  return (
    <div className="w-screen bg-red-500 absolute flex flex-col justify-center items-center h-screen">
      <div className="opacity-100">
        <img src={poke} alt="Poke" className="rotate-animation w-24" />
      </div>
    </div>
  );
}
