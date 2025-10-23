import React from "react";
import { IoIosMore } from "react-icons/io";
import { SiGoogledocs } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Dot from "../assets/dot.png";
import Project4 from "../assets/project4.png";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="relative w-[304px] h-[236px] overflow-hidden py-4 px-2 flex flex-col justify-center mx-auto">
      <div className="w-[282px] h-[180px] rounded-2xl overflow-hidden bg-[#F2F2F7] justify-center flex items-center">
        <img
          src={image}
          className="object-cover rounded-[8px]"
          alt="project-img"
        />
      </div>
      <h3 className="font-inter text-[14px] font-semibold">{title}</h3>
      <div className="flex flex-row items-center gap-1 justify-between">
        <p className="font-roboto-flex text-[12px] text-[#3C3C4399]">
          {description}
        </p>
        <IoIosMore className="w-4 h-4 text-[#979A9B]" />
      </div>
      {image == Project1 ? (
        <div className="absolute top-5.5 left-3.5 p-1 bg-[#FFFFFF] flex flex-row items-center gap-0.5 rounded-[12px] border-2 border-[#F2F2F7]">
          <SiGoogledocs className="text-[#4F8EF5] w-[13px] h-[13px]" />
          <p className="font-roboto-flex text-[11px]">Open in</p>
          <MdArrowOutward className="w-4 h-4" />
        </div>
      ) : (
        ""
      )}
      {image == Project2 ? (
        <div className="absolute top-5.5 right-5.5 px-2 py-0.5 bg-[#3FAF5B] flex flex-row items-center gap-0.5 rounded-[12px]">
          <p className="font-roboto-flex text-[11px] text-white">Updating..</p>
        </div>
      ) : (
        ""
      )}
      {image == Project4 ? (
        <div className="absolute top-5.5 left-3.5 px-2 py-0.5 bg-[#FFFFFF] flex flex-row items-center gap-0.5 rounded-[12px]">
          <img src={Dot} alt="dot-img" />
          <p className="font-roboto-flex text-[11px]">Needs Review</p>
        </div>
      ) : (
        ""
      )}
      {
        image == Project4 ? (
            <div className="absolute top-5.5 right-5.5 px-2 py-0.5 bg-[#5856D6] flex flex-row items-center gap-0.5 rounded-[12px]">
          <p className="font-roboto-flex text-[11px] text-white">Live</p>
        </div>
        ) : ('')
      }
    </div>
  );
};

export default ProjectCard;
