"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";

function MainBefore({ onAsk }) {
  const [data, setData] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const fetchResponse = async (q) => {
    try {
      const res = await axios.post("https://backend-sn65gvhzfa-de.a.run.app/get_response/", {
        question: q,
      });
      return res.data; // Assuming the response data is an object with 'answer' and 'sources' properties
    } catch (error) {
      console.error("Error fetching data:", error);
      return { answer: "", sources: [] }; // Return empty data in case of an error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(typeof data);
    console.log(data);
    // setQuestion(data);
    console.log("Fetching data...");
    setIsLoading(true);

    const response = await fetchResponse(data);
    setAnswer(response.answer);
    setSources(response.sources);
    onAsk(data,response)
    setIsLoading(false);
    console.log(response);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   onAsk(data);
  // };

  const backgroundImageStyle = {
    backgroundImage: "url(/img/bg-landingpage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const Faq = (props) => {
    return (
      <div className="card text-center md:w-64 md:h-24 flex justify-center p-3 items-center bg-[#1D232A] shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
        <p className="text-sm ">{props.faqQuestion}</p>
      </div>
    );
  };

  return (
    <>
      <div className="absolute inset-0" style={backgroundImageStyle}></div>
      <div className="bg-black absolute inset-0 opacity-80 "></div>

      {isLoading && (
        <div className="w-full h-full bg-black opacity-20 inset-0 flex absolute z-50 justify-center items-center text-center">
          <h1 className="text-white font-bold text-3xl">Thinking....</h1>
          <span className="loading absolute loading-ring h-[36rem] w-[36rem]"></span>
          <span className="loading absolute loading-ring h-72 w-72"></span>
        </div>
      )}

      {!isLoading && (
        <div className="w-full md:w-[80%] h-screen text-white flex flex-col overflow-y-hidden gap-10 justify-center items-center relative">
          <h1 className="font-semibold text-center text-white text-4xl">What do you want to ask?</h1>
          <div className="w-[90%] md:mt-0 mt-18 md:w-[60%]">
            <form onSubmit={handleSubmit} className="flex gap-4 md:gap-3 w-full md:flex-row flex-col justify-center items-center">
              <input type="text" value={data} onChange={handleInputChange} placeholder="Type here..." className="input bg-[#00f7ff3d] input-info w-full" />
              <button type="submit" className="btn bg-gradient-to-r from-cyan-500 to-green-500 btn-active md:text-sm text-xl md:w-fit w-[60%] btn-accent">
                Ask
              </button>
            </form>
            {/* <Button/> */}
          </div>

          {/* ----------------- FAQ --------- */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-start font-semibold mb-4">Frequently Asked :</h1>
            <div className="wrapper-faq flex gap-5 flex-wrap w-[80%] justify-center">
              <Faq faqQuestion={'what is cancer? and how to solve it immediately'} />
              <Faq faqQuestion={'How to solve Hepatitic with nature?'}/>
              <Faq faqQuestion={'Give me advantage when we do jogging in every morning'}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainBefore;
