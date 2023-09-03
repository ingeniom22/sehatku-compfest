import React from "react";

function Footer() {
  return (
    <>
      <div className="wrapper-footer flex flex-col md:flex-row gap-10 w-full">
        <div className="branding h-full md:w-[30%]  flex flex-col">
          <h1 className="text-white font-bold text-2xl">
            Sehat<span className="text-green-400">Ku</span> Healthcare
          </h1>
          <p>Sehatku | © 2023 All Right Reserved</p>
        </div>

        <div className="anggota flex flex-col gap-5 md:w-[30%] text-white">
          <div className="flex flex-col">
            <h1 className="font-bold">Ilham Satria</h1>
            <p>Email : ilhamsatria@gmail.com</p>
            <p>Contact : 081359357517</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">James Micheal Fritz</h1>
            <p>Email : jamesmicheal@gmail.com</p>
            <p>Contact : 081359357517</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Ahmad Syahid Danu Wardana</h1>
            <p>Email : danuwardana4@gmail.com</p>
            <p>Contact : 081359357517</p>
          </div>
        </div>

        <div className="about md:w-[30%]  flex flex-col gap-2 text-white">
          <h1 className="font-bold">About</h1>
          <p>Sehatku adalah platform inovatif berbasis website yang didedikasikan untuk memberikan informasi kesehatan yang akurat, dapat dipercaya, dan personal kepada penggunanya. Dengan fokus...</p>
          <a href="">
            <h1 className="font-semibold hover:text-black hover:font-bold">Privacy and Credit</h1>
          </a>
          <a href="">
            <h1 className="font-semibold hover:text-black hover:font-bold">Term of Use</h1>
          </a>
          <a href="">
            <h1 className="font-semibold  hover:text-black hover:font-bold">Credit Guide</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
