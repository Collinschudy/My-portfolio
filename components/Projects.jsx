import { projects } from "./data";
import Image from "next/image";
import { BsArrowRight, BsGithub } from "react-icons/bs";


const Projects = () => {
  return (
    <div className="sm:px-[2em] lg:px-[2rem] px-[0.5rem] py-[3em]" id='projects'>
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-[40px] text-orange-800 text-[26px]">Projects</h2>
        <p className="text-gray-800">Some of my latest work</p>
        <span className="bg-gray-200 w-[6em] h-[6px] rounded-l-lg rounded-r-lg mt-[1em]"></span>
        <div className="w-full sm:w-full flex flex-wrap">
          {projects.map((item, idx) => {
            const { id, imageUrl, title, text, live, github } = item;
            return (
              <article
                key={id}
                className="w-full sm:max-w-[38rem] lg:max-w-[26rem] lg:px-[1rem] sm:px-[2rem] px-[1rem] pb-[1rem] bg-orange-100 rounded-[1rem] sm:m-[1rem] mt-[1.5rem] sm:mt-[2.5rem] sm:m-auto"
              >
                <div className="bg-orange-100 flex items-center justify-center lg:w-[24rem] sm:w-[34rem] w-full lg:h-[18rem] sm:h-[26rem] h-[17rem]">
                  <Image
                    src={imageUrl}
                    alt="illustrator"
                    width={550}
                    height={550}
                    className="rounded-[8px]"
                  />
                </div>
                <h3 className="py-[1rem] text-gray-800 text-[22px] sm:text-[32px]">{title}</h3>
                <p className="pb-[2rem] text-gray-700 text-[14px] sm:text-[16px]">{text}</p>
                <div className="flex items-center justify-between">
                  <p className="flex items-center justify-between w-full max-w-[7.5rem] text-orange-800 cursor-pointer" onClick={() => window.open(live)}>
                    Live Preview <BsArrowRight />
                  </p>
                  <p className="flex items-center justify-between w-full max-w-[5rem] text-orange-800 cursor-pointer" onClick={() => window.open(github)}>
                    Github <BsGithub />
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
