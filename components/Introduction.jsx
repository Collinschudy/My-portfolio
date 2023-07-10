import React from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Introduction = () => {
  return (
    <div className="bg-orange-100 w-[100%] sm:h-[22em] lg:min-h-[22rem] py-[2rem] sm:px-[4em] sm:py-[2em] px-[1rem] mt-[5rem]">
      <h1 className="sm:text-[50px] text-orange-900 text-[32px]">
        <span className="pb-[1rem] block font-bold sm:leading-9 leading-[1.5rem]">
          Frontend Web Developer,
        </span>
        <span className="block font-normal sm:leading-9 leading-[1.5rem]">Breath Life into Your Ideas</span>
      </h1>
      <p className="pt-[1em] text-gray-700">
        Collins Chudy is a solution-oriented web developer with experience in
        building and managing useful softwares.
        <span className="block">
          He also contributes to open-source projects.
        </span>
      </p>
      <div className="flex flex-row w-full max-w-[10rem] items-center justify-between pt-[1rem] sm:mt-[3em] md:mt-[1rem]">
        <BsGithub className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiFillLinkedin className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiOutlineMail className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiOutlineWhatsApp className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
      </div>
    </div>
  );
};

export default Introduction;
