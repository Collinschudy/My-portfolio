"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsDownload } from 'react-icons/bs'
import { LiaTimesSolid } from 'react-icons/lia';

const Header = () => {

  
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-orange-100 w-[100%] h-[5rem] flex justify-between items-center shadow-md">
      <div className="flex items-center justify-center w-[15rem] sm:w-[20em]">
        <h3 className="font-extrabold text-white-800 sm:text-[28px] text-[20px]">
          {" "}
          &#x270C; Collins Chudy
        </h3>
      </div>
      <div className="flex items-center justify-around w-[35rem] hidden sm:flex">
        <Link href="">About</Link>
        <Link href="">Projects</Link>
        <Link href="">Contact</Link>
        <button className="bg-orange-900 px-5 py-2 rounded w-[8rem]">
          <Link className="text-gray-100 flex items-center justify-around" href="">
            <BsDownload />
            Resume
          </Link>
        </button>
      </div>
      <div className="border border-2 border-orange-400 w-[2.5rem] sm:hidden h-[2.5rem] rounded-full flex justify-center items-center mr-4">
        {!toggle ? (
          //   <FaBars
          //     onClick={() => setToggle((prev) => !prev)}
          //     size="1.2rem"
          //     className="font-light text-gray-300"
          //   />
          <Image
            src="./assets/icons/menu.svg"
            alt='dropdown'
            width={20}
            height={37}
            onClick={() => setToggle((prev) => !prev)}
            className=""
          />
        ) : (
          <LiaTimesSolid onClick={() => setToggle((prev) => !prev)} />
        )}
      </div>
    </div>
  );
};
export default Header;
