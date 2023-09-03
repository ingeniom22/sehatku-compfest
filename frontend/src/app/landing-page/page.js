import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "../components/Footer";
import Stats from "@/app/components/Stats";
import CardMembers from "@/app/components/CardMembers";
import TechStack from "@/app/components/TechStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/img/bg-landingpage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0" style={backgroundImageStyle}></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <Navbar />
        <div className="absolute inset-0 z-20 flex flex-col-reverse md:flex-row justify-center md:justify-between px-10 md:px-5 items-center">
          <div className="hidden lg:flex">
            <Stats />
          </div>
          <div className="absolute inset-0 text-center md:text-start flex flex-col pt-[20vh] md:pt-[40vh] items-center z-10 gap-3">
            <h1 className="font-bold text-4xl lg:text-6xl text-white">Discover your illness with AI</h1>
            <h1 className="font-bold text-4xl hidden md:flex text-white">Find Your Solution in Here</h1>
            <a
              href="/"
              className="px-7 py-3 rounded-lg mt-7 md:mt-0 border-2 border-cyan-300 shadow-2xl hover:bg-green-900 transition ease-in-out duration-700 bg-green-600  text-white"
              // style={{
              //   boxShadow: "32px 10px 41px 0px rgba(0,0,0,0.75)",
              // }}
            >
              Ask AI
            </a>
          </div>

          {/* Social Media */}
          <div className="flex md:flex-col gap-3 items-center mt-60 md:mt-0">
            <div className="hidden md:inline-block h-[40vh] w-[2px] border-white bg-white"></div>
            {/* <FontAwesomeIcon icon={faGithub } className="h-10"/> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-white h-10 hover:fill-black transition ease=in-out duration-500">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-white h-10 hover:fill-black transition ease=in-out duration-500">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        className="pb-10 px-3 md:px-10 pt-10 md:pt-0"
        style={{
          background: "linear-gradient(90deg, rgba(32,81,49,1) 0%, rgba(41,81,55,1) 33%, rgba(47,86,49,1) 69%, rgba(48,100,52,1) 83%, rgba(43,95,49,1) 100%)",
        }}
      >
        {/* Contentt nyaaa */}
        <div
          className="py-7 flex gap-3 flex-col text-center px-[3rem]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <h1 className="text-4xl text-white font-bold mt-5">About</h1>
          <p className="text-gray-300">
            Sehatku merupakan website AI yang siap menerima seluruh pertanyaan Anda seputar dunia kesehatan. Dengan dukungan penuh dari kecerdasan buatan (AI), kami hadir dengan berbagai jawaban yang dirancang untuk membantu Anda memahami
            informasi kesehatan dengan lebih mendalam.
          </p>

          <h1 className="text-4xl text-white font-bold mt-5 mb-3">Our Teams</h1>
          <div className="flex flex-row justify-between gap-6 md:gap-0 flex-wrap">
            <CardMembers nama={"James Micheal Fritz"} bagian={"Data Science"} />
            <CardMembers nama={"Danu Wardana"} bagian={"Front end"} />
            <CardMembers nama={"Ilham Satria"} bagian={"Back end"} />
          </div>

          <div className="h-full ">
            <h1 className="text-4xl  text-white font-bold mt-5 mb-3">What we use</h1>
            <div className="flex  justify-between">
              <TechStack />
            </div>
          </div>
        </div>

        {/* FOOTER */}
      </div>
      <div className="footer w-full bg-green-900 p-5">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
