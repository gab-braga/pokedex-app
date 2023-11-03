import { Link } from "react-router-dom";

export default function Card({ image, name, id, type }: any) {
  return (
    <Link
      to={`/dash/${id}/data`}
      className={`flex flex-row text-slate-900 items-center justify-start gap-2 px-5 py-2 rounded-2xl ${type}`}
    >
      <img src={image} className="w-28 h-28 object-cover" alt={name}></img>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-lg font-medium capitalize"> {name} </h3>
        <p className="text-black opacity-30 text-sm"> # {id} </p>
        <p
          className={`text-sm bg-slate-50 rounded-full py-0.5 px-2 text-center uppercase ${type}`}
        >
          {type}
        </p>
      </div>
    </Link>
  );
}
