"use client";
import React, { useState } from "react";
// import resume from '@assets/resume.pdf';
// import about from '@assets/images/aboutimage.png'
import Image from "next/image";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-[40px] text-orange-800">About Me</h2>
        <p className="text-gray-800">A Brief Information on Myself</p>
        <span className="bg-gray-100 w-[6em] h-[6px] rounded-l-lg rounded-r-lg mt-[1em]"></span>
        <div
          id="a"
          className="mt-[1.5rem] bg-orange-100 w-full px-[2rem] sm:px-[4rem] mb-[4rem] sm:mb-[5rem] flex justify-center items-center"
        >
          <div className="w-full flex flex-col-reverse lg:gap-[2rem] lg:flex-row justify-between items-center">
            <div className="w-full lg:max-w-[40rem]">
              <h1 className="w-full md:text-[2.5rem] text-center lg:text-left mb-[1rem] text-gray-800">
                Hi, I am Collins, a frontend developer
              </h1>
              <p
                className={`text-gray-700 w-full overflow-hidden mb-[1rem] text-justify leading-[2rem] ease-in-out duration-[1s] ${
                  showInfo
                    ? "h-[52rem] xl:h-[29rem] lg:h-[36rem] md:h-[30rem]"
                    : "h-[13.5rem] xl:h-[8rem] md:h-[8rem] lg:h-[9.5rem]"
                }`}
              >
                I have a strong experience in building modern and responsive web
                applications using React and Nextjs. I have a strong understanding of the
                React ecosystem, including React Router, Redux, and JSX, and I'm
                comfortable using modern front-end build tools like MUI and
                HTTP client like axios.
                <br />
                <br className={`sm:hidden ${showInfo && "hidden"}`} />
                My passion for building user-friendly interfaces and attention
                to detail drive me to create high-quality and visually appealing
                applications. I believe that great software starts with great
                communication and collaboration, so I work closely with
                designers, product owners, and other stakeholders to ensure that
                every project I work on is a success. <br />
                In addition to my technical skills, I am very proficient in the use of 
                version control systems like Git.
                I'm always looking to improve my skills and stay up-to-date with
                the latest front-end development trends and best practices.
                <br /> If you're looking for a dedicated and experienced
                frontend developer to help bring your ideas to life, I'd love to
                be that developer. You can reach out to me
              </p>
              <div className="w-full flex items-center justify-center sm:justify-start gap-[1rem] mb-[2rem]">
                <button onClick={() => setShowInfo((prev) => !prev)} className="bg-orange-900 text-slate-100 px-[12px] py-[8px] rounded-sm">
                  {showInfo ? "show less" : "show more"}
                </button>
                <button
                className="bg-orange-900 text-slate-100 px-[12px] py-[8px] rounded-sm"
                  onClick={() =>
                    window.open(`${"/assets/resume.pdf"}`, "_blank")
                  }
                >
                  download resume
                </button>
              </div>
            </div>
            <Image
              src={"/assets/images/aboutimage.png"}
              alt="user"
              width={550}
              height={550}
              className="w-full md:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[43rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
