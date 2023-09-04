import React from "react";
import Image from "next/image";

function Techs(props) {
  const { imageSrc, title, description } = props;
  return (
    <>
      <a
        href="#"
        className="max-w-md group sm:w-auto  hover:bg-green-500 glass focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-full md:rounded-lg inline-flex items-center justify-center px-4 py-4 md:py-2.5 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex flex-col gap-4 items-center">
          <Image alt={title} src={imageSrc} width={100} height={100} className="cover w-20" />
          <div className="md:flex flex-col gap-4 hidden md:static items-center">
            <h1 className="font-bold hidden md:flex text-xl">{title}</h1>
            <p className="font-regular hidden md:flex text-sm">{description}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Techs;
