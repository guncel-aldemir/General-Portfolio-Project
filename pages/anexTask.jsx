import React from "react";
import Image from "next/image";
import Link from "next/link";
import Anex from "../public/assets/anex.jpg"
import {RiRadioButtonFill} from "react-icons/ri";
const AnexTask = () => {
  return (<div className="w-full ">
  <div className=" h-[50vh] w-[50%] mt-8  m-auto sm:grid grid-cols-1 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
    <Image src={Anex} objectFit="contain" alt="" />
  </div>
  <div className=" p-2  ">
    
    <h2 className="py-2 uppercase text-[#524ddd]">Anex Task</h2>
    <div className="p-2 grid 2xl:grid-cols-1 gap-8 py-8 ">
    <Link href="/#projects">
        <h4 className="underline cursor-pointer hover:text-[#3a36aa]">Turn Back The Projects</h4>
    </Link>
      <h3>Overview</h3>
      <p>
      Astara Kremlin Palace Hotel web page was created with Nextjs. Tailwind from Css frameworks was used as the style. The page was completely translated into English and Turkish languages. For this, the Next i18 technology was used.
      </p>
      <h3>Technologies</h3>
      <div className='grid grid-cols-2 md:grid-cols-1'>
          <p className='text-gray-600 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1'/> NextJs
          </p>
         
          <p className='text-gray-600 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1'/> Javascript
          </p>
          <p className='text-gray-600 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1'/> Tailwind
          </p>
          <p className='text-gray-600 py-2 flex items-center'>
            <RiRadioButtonFill className='pr-1'/> Next-i18Next
          </p>
         
        </div>
      <a
        href='https://github.com/guncel-aldemir/NextJs-Task'
        target='_blank'
        rel='noreferrer'
      >
        <button className=' bg-[#3a36aa] text-[#fff] px-8 py-2 mt-4 mr-8'>Code</button>
      </a>
      
    </div>
  </div>
</div>)
};

export default AnexTask;
