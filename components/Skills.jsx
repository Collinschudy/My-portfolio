import React from "react";
import ProgressCircle from "./ProjectCircle";
import skillsData from "./skillsdsata";
import Image from "next/image";


const Skills = () => {
  return (
    <div className="sm:px-[4rem] mb-[2rem] flex flex-col items-center justify-center" id='skills'>
      <h2 className="sm:text-[40px] text-orange-800 text-[26px]">Skills</h2>
      <p className="text-gray-800">My work stack</p>
      <span className="bg-gray-200 w-[6em] h-[6px] rounded-l-lg rounded-r-lg mt-[1em]"></span>
      <div className="flex flex-wrap sm:justify-between justify-around sm:gap-[2rem] my-[1rem] mx-[1rem] ">
        {skillsData.map((item) => {
          const { progress, id, imageUrl, name, percent } = item;
          return (
            <div
              key={id}
              className="flex max-w-max bg-gray-200 items-center justify-between sm:gap-[4rem] gap-[2rem] rounded-xl py-[0.5rem] px-[1.1rem] my-[1rem]"
            >
              <h2 className="flex items-center max-w-max justify-between gap-[0.5rem] text-gray-700 sm:text-[32px] text-[24px]">
                <Image height={25} width={25} src={imageUrl} alt="icons" />
                {name}
              </h2>
              {/* <div className="border-2 border-red-600 relative">
                <ProgressCircle progress={progress} size="40" hidden />
                <p className="absolute italic text-gray-700 text-[12px] -z-100 sm:block hidden left-[2rem] top-[1rem]">
                  {percent}
                </p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;


// -translate-y-[1.85rem] translate-x-[6px]