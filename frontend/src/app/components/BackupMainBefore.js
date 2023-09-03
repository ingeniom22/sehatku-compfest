"use client";

import React from "react";
import { useState } from "react";
import Button from "./Button";

function BakcupMainBefore({ onAsk }) {
  const [data, setData] = useState("");

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAsk(data);
  };

  return (
    <div className="w-full md:w-[80%] h-screen flex flex-col gap-10 justify-center items-center bg-[#171719] relative">
      <h1 className="font-semibold text-center md:mt-0 mt-24 text-4xl">What do you want to ask?</h1>
      <div className="w-[90%] md:mt-0 mt-18 md:w-[60%]">
        <form onSubmit={handleSubmit} className="flex gap-4 md:gap-3 w-full md:flex-row flex-col justify-center items-center">
          <input type="text" value={data} onChange={handleInputChange} placeholder="Type here..." className="input input-bordered input-info w-full" />
          <button type="submit" className="btn btn-active md:text-sm text-xl md:w-fit w-[60%] btn-accent">
            Ask
          </button>
        </form>
        {/* <Button/> */}
      </div>

      {/* ----------------- FAQ --------- */}
      <h1 className="text-start">Frequently Asked :</h1>
      <div className="wrapper-faq flex gap-5 flex-wrap w-[80%] justify-center">
        <div className="card md:w-64 md:h-24 flex justify-center p-3 items-center bg-base-100 shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
          <p className="text-sm ">If a dog chews shoes whose shoes does he choose?</p>
        </div>

        <div className="card md:w-64 md:h-24 flex justify-center p-3 items-center bg-base-100 shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
          <p className="text-sm ">If a dog chews shoes whose shoes does he choose?</p>
        </div>

        <div className="card md:w-64 md:h-24 flex justify-center p-3 items-center bg-base-100 shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
          <p className="text-sm ">If a dog chews shoes whose shoes does he choose?</p>
        </div>

        <div className="card md:w-64 md:h-24 flex justify-center p-3 items-center bg-base-100 shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
          <p className="text-sm ">If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}

export default BackupMainBefore;
