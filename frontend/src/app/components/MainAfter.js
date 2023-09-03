import React, { useState } from "react";
import axios from "axios";

function MainAfter({ formData, LLMResponse }) {
  const [question, setQuestion] = useState(formData);
  const [data, setData] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const fetchResponse = async (q) => {
    try {
      const res = await axios.post(
        'https://backend-sn65gvhzfa-de.a.run.app/get_response/',
        {
          question: q,
        }
      );
      return res.data; // Assuming the response data is an object with 'answer' and 'sources' properties
    } catch (error) {
      console.error("Error fetching data:", error);
      return { answer: "", sources: [] }; // Return empty data in case of an error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(typeof (data));
    console.log(data);
    setQuestion(data);
    console.log("Fetching data...");
    setIsLoading(true);

    const response = await fetchResponse(data);
    setAnswer(response.answer);
    setSources(response.sources);

    setIsLoading(false);
    console.log(response);
  };

  const Card = ({ id, text, author }) => {
    return (
      <div className="card indicator w-48 flex p-2 bg-[#1D232A] shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
        <p className="text-sm font-semibold truncate">{text}</p>
        <p className="text-sm font-regular">
          <span className="">{author}</span> <span className="indicator-item badge badge-primary"> {id}</span>
        </p>
      </div>
    );
  };

  const backgroundImageStyle = {
    backgroundImage: "url(/img/bg-landingpage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="absolute inset-0" style={backgroundImageStyle}></div>
      <div className="bg-black absolute inset-0 opacity-80 "></div>

      <div className="w-[95%] md:w-[80%] h-screen text-white pt-5 flex flex-col gap-10 justify-center items-center relative">
        <h1 className="font-semibold text-2xl">{question}</h1>

        {/* FORM ABSOLUTE */}
        <div className="flex gap-4 w-full justify-center absolute right-[50%] top-[80%] translate-x-[50%] translate-y-[50%] z-20">
          <div className="bg-gradient-to-t from-[#082215] hidden md:inline to-transparent absolute inset-0 h-[18vh] w-[100vw] -left-36 -top-3 "></div>
          <form onSubmit={handleSubmit} className="flex w-full justify-center gap-4">
            <input type="text" placeholder="" onChange={handleInputChange} className="input z-30 input-bordered input-info h-xl w-full max-w-xl text-black shadow-md bg-[#0e3030e5] focus:bg-[#2a2d35]" />
            <button type="submit" className="btn btn-active btn-accent z-30 shadow-md shadow-cyan-500/50">Ask</button>
          </form>
        </div>
        {/* FORM ABSOLUTE END */}

        <div className="overflow-y-scroll overflow-x-visible  flex flex-col items-start gap-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {/* ----------------- SUMBER --------- */}
          <h1 className="text-start">Sumber :</h1>
          <div className="wrapper-sumber flex gap-2 flex-wrap w-full justify-start">
            {sources.map((s, index) => (
              <Card key={index} id={index} text={s.text} author={s.author} />
            ))}
          </div>
          {/* ---------------- SUMBER END ---------- */}

          <h1 className="text-start">Jawaban :</h1>
          <div className="w-full">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAfter;
