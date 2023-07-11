import FormHolder from "./Form";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import React from "react";

const Contact = () => {
  return (
    <div className="flex sm:flex-row sm:h-[30rem] flex-col" id='contacts'>
      <div className="w-full sm:w-[50%] flex flex-col px-[2rem] lg:px-[4rem] md:px-[3rem]">
        <div className="flex flex-col items-center justify-center sm:block">
        <h2 className="sm:text-[40px] text-[26px] text-orange-800">Contact Me</h2>
        <p className="text-gray-800">You can reach out to me</p>
        <span className="bg-gray-200 w-[6em] h-[6px] rounded-l-lg rounded-r-lg mt-[1em] mb-[1rem]"></span>
        </div>
        <div className="text-gray-700">
          <div>
            <p>Email:</p>
            <h2 className="text-[20px] sm:text-[40px] lg:text-[30px] md:text-[25px]">
              collinschudy@gmail.com
            </h2>
          </div>
          <div>
            <p>Whatsapp:</p>
            <h2 className="text-[24px] sm:text-[40px] lg:text-[30px] md:text-[25px]">
              (+234) 80715 99378
            </h2>
            <p>For a Phone call:</p>
            <h2 className="text-[24px] sm:text-[40px] lg:text-[30px] md:text-[25px]">
              (+234) 90635 56779
            </h2>
            <p>socials:</p>
            <div className="flex flex-row w-full max-w-[10rem] items-center justify-between pt-[1rem]">
        <BsGithub className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiFillLinkedin className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiOutlineMail className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
        <AiOutlineWhatsApp className="hover:text-orange-900 text-gray-700" size='1.7rem'/>
      </div>

          </div>
        </div>
      </div>
      <div className="w-full sm:w-[50%] pt-[2rem]">
        <FormHolder />
      </div>
    </div>
  );
};

export default Contact;
