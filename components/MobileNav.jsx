"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { BsDownload } from 'react-icons/bs'
import { ToggleContext } from "@Contexts/ToggleContext";


const MobileNav = () => {
    const {toggle} = useContext(ToggleContext);
    const {setToggle} = useContext(ToggleContext);

    function download(url) {
      const a = document.createElement('a')
      a.href = url
      a.download = url.split('/').pop()
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  
  return <div className=''>
        <div className={
            toggle
            ? "fixed flex flex-col items-center justify-around top-[5rem] rounded-br-[10em] left-0 h-[58%] sm:hidden bg-orange-100 w-full ease-in-out duration-[0.5s] text-gray-700"
            : "fixed top-[5rem] h-[58%] flex flex-col items-center justify-around w-full left-[-100%] ease-in-out duration-[0.5s]"
        }>
        <Link href="#about" onClick={() => setToggle(false)}>About</Link>
        <Link href="#projects" onClick={() => setToggle(false)}>Projects</Link>
        <Link href="#skills" onClick={() => setToggle(false)}>Skills</Link>
        <Link href="#contacts" onClick={() => setToggle(false)}>Contact</Link>
        <button className="bg-orange-900 px-5 py-2 rounded w-[8rem]" onClick={() => {download('assets/Ekwebenem_Collins_resume.pdf');setToggle(false)}}>
          <Link className="text-gray-100 flex items-center justify-around" href="">
            <BsDownload />
            Resume
          </Link>
        </button>
      </div>
  </div>;
};

export default MobileNav;
