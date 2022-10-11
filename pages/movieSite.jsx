import React from "react";
import Image from "next/image";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri"
import Hotel from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
const movieSite = () => {
  return (
    <div className="w-full ">
      <div className=" h-[50vh]  m-auto sm:grid grid-cols-1">
        <Image src={Hotel} objectFit="cover" alt="" />
      </div>
      <div className=" p-2  ">
        
        <h2 className="py-2 uppercase text-[#524ddd]">Movie site</h2>
        <div className="p-2 grid 2xl:grid-cols-1 gap-8 py-8 ">
        <Link href="/#projects">
            <h4 className="underline cursor-pointer hover:text-[#3a36aa]">Turn Back The Projects</h4>
        </Link>
          <h3>Overview</h3>
          <p>
          You will be able to  search for movies and series using tmdb api data. you will be able to see popular TV series and movies as suggestions. You will be able to get the details of the movie or series you are looking for, the release date, poster and the chance to watch the trailer.
          </p>
          <h3>Technologies</h3>
          <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/> React
              </p>
             
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/> Tailwind
              </p>
            </div>
          <a
            href='https://github.com/guncel-aldemir/Movie-Site'
            target='_blank'
            rel='noreferrer'
          >
            <button className=' bg-[#3a36aa] text-[#fff] px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          
        </div>
      </div>
    </div>
  )
};

export default movieSite;
