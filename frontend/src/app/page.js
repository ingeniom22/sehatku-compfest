import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Stats from "@/app/components/Stats";
import CardMembers from "@/app/components/CardMembers";
import TechStack from "@/app/components/TechStack";
import ilham from "/public/teams/ilham.jpeg"
import james from "/public/teams/james.jpeg"
import danu from "/public/teams/danu.jpeg"

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
            <h1 className="font-bold text-4xl lg:text-6xl text-white animate-ease-in">Discover your illness with AI</h1>
            <h1 className="font-bold text-4xl hidden md:flex text-white">Find Your Solution in Here</h1>
            <a
              href="/main-app"
              className="px-7 py-3 rounded-lg mt-7 md:mt-0 border-2 border-cyan-300 shadow-2xl hover:bg-green-900 transition ease-in-out duration-700 bg-green-600  text-white"
              // style={{
              //   boxShadow: "32px 10px 41px 0px rgba(0,0,0,0.75)",
              // }}
            >
              Ask AI
            </a>
          </div>

          {/* Social Media */}
          
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
            <CardMembers nama={"James Michael Fritz"} bagian={"AI Engineer"} photo={james} />
            <CardMembers nama={"Danu Wardana"} bagian={"Front end"} photo={danu} />
            <CardMembers nama={"Ilham Satria"} bagian={"Back end"} photo={ilham}/>
          </div>

          <div className="h-full ">
            <h1 className="text-4xl  text-white font-bold mt-10 mb-5">What we use</h1>
            <div className="flex justify-between">
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
