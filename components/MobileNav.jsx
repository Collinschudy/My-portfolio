"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { BsDownload } from 'react-icons/bs'
import { ToggleContext } from "@Contexts/ToggleContext";


const MobileNav = () => {
    const {toggle} = useContext(ToggleContext)
  return <div className=''>
        <div className={
            toggle
            ? "fixed flex flex-col items-center justify-around top-[5rem] rounded-br-[10em] left-0 h-[58%] sm:hidden bg-orange-100 w-full ease-in-out duration-[0.5s] text-gray-700"
            : "fixed top-[5rem] h-[58%] flex flex-col items-center justify-around w-full left-[-100%] ease-in-out duration-[0.5s]"
        }>
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
  </div>;
};

export default MobileNav;
