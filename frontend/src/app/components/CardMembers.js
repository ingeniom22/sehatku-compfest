import React from "react";
import Image from "next/image";
import ilham from "/public/teams/ilham.jpeg"
import james from "/public/teams/james.jpeg"
import danu from "/public/teams/danu.jpeg"

function CardMembers(props) {
  return (
    <div className="card w-80 pt-5 glass hover:-translate-y-5 transition ease-in delay-100">
      <figure>
        <Image src={props.photo} height={300} className="rounded-xl"/>
      </figure>
      <div className="card-body flex flex-col justify-center">
        <h2 className="font-bold text-white text-xl">{props.nama}</h2>
        <p className="text-slate-300">{props.bagian}</p>
      </div>
    </div>
  );
}

export default CardMembers;
