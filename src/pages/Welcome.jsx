import React, { useState } from "react";
import welcomeVideo from "../assets/original-848c54b44182083599d62428e3ac9ad2 (1).mp4";
import introImgLight from "../assets/eacbd73be365c7aef3b53b74990292622932794c.png";
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Welcome = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    setIsDark(!isDark)
  }
  return (
    <div className={isDark ? "dark" : ""}>
      <div className="relative dark:bg-[#404040] flex items-center justify-center min-h-screen max-md:px-[50px] max-md:py-[15px]">
        <div onClick={handleDark} className="absolute cursor-pointer top-5 right-8 px-1 py-1 rounded-full border-2">
            {isDark ? (<MdOutlineLightMode className='w-4 h-4 text-white'/>) : (<MdDarkMode className='w-4 h-4'/>)}
        </div>
        <div className="flex w-[1180px] h-[680px] rounded-3xl shadow-2xl overflow-hidden dark:bg-[#292929]">
          <div className="flex flex-1/2 flex-col justify-between px-[20px] md:px-[40px] py-[64px]  ">
            <div className="flex flex-col font-poppins dark:text-white">
              <h1 className="text-[40px]">Welcome to Sonola</h1>
              <p className="text-[20px] leading-[28px]">
                With Sonola, making stand-out marketing content is as easy as a
                few clicks. Let’s get started!
              </p>
            </div>
            <div className="flex flex-col">
              <div className="px-[16px] dark:text-white">
                <p className=" text-[18px] leading-[24px] font-poppins">
                  63% of marketers say creating engaging content consistently is
                  their biggest challenge.
                </p>
                <p className=" text-[12px] leading-[24px] font-urbanist">
                  Content Marketing Institute, 2022
                </p>
              </div>
              <div className="flex flex-row justify-between items-center max-md:mt-[25px] gap-3">
                <div className="flex flex-2/3 px-4 py-2 flex-row gap-2 w-full">
                  <div className="flex-1/10 bg-[#3F8BFE1A] h-[8px]  rounded-[12px]"></div>
                  <div className="flex-1/10 bg-[#3F8BFE1A] h-[8px]  rounded-[12px]"></div>
                  <div className="flex-1/10 bg-[#3F8BFE1A] h-[8px]  rounded-[12px]"></div>
                  <div className="flex-1/10 bg-[#3F8BFE1A] h-[8px]  rounded-[12px]"></div>
                  <div className="flex-6/10 bg-[#0066FFCC] h-[8px]  rounded-[12px] opacity-80"></div>
                </div>
                <div
                  onClick={() => navigate("/dashboard")}
                  className="flex-1/3 text-white text-[16px] px-[8px] py-[14px] rounded-xl flex justify-center items-center bg-[#0066FFCC] font-sf-pro"
                >
                  Next
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-1/2 relative h-full">
            <video
              src={welcomeVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 z-10 w-full h-full object-cover bg-transparent"
            />

            <img
              src={introImgLight}
              alt="intro-img"
              className="absolute inset-0 z-20 w-full h-full object-cover opacity-80"
              style={{ mixBlendMode: "plus-lighter" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
