import React from "react";
import Image from "next/image";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri"
import Hotel from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
const bookHouse = () => {
  return (
    <div className="w-full ">
      <div className=" h-[50vh]  m-auto sm:grid grid-cols-1">
        <Image src={Hotel} objectFit="cover" alt="" />
      </div>
      <div className=" p-2  ">
        
        <h2 className="py-2 uppercase text-[#524ddd]">Book House</h2>
        <div className="p-2 grid 2xl:grid-cols-1 gap-8 py-8 ">
        <Link href="/#projects">
            <h4 className="underline cursor-pointer hover:text-[#3a36aa]">Turn Back The Projects</h4>
        </Link>
          <h3>Overview</h3>
          <p>
          Using api data, you will be able to perform different searches, such as books, authors. You will able to  see the author of the book you are looking for, the name, if any, the poster. After seeing the details of the book you have selected from the books again, you must enter the form values correctly in order to make a purchase. If you do not enter correctly, you will receive a error message.
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
                <RiRadioButtonFill className='pr-1'/> Sass
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/> Bootstrap
              </p>
            </div>
          <a
            href='https://github.com/guncel-aldemir/Book-Site'
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

export default bookHouse;
