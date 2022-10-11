import React from "react";
import Image from "next/image";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri"
import Hotel from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
const tesodevTask = () => {
  return (
    <div className="w-full ">
      <div className=" h-[50vh]  m-auto sm:grid grid-cols-1">
        <Image src={Hotel} objectFit="cover" alt="" />
      </div>
      <div className=" p-2  ">
        
        <h2 className="py-2 uppercase text-[#524ddd]">Tesodev Task</h2>
        <div className="p-2 grid 2xl:grid-cols-1 gap-8 py-8 ">
        <Link href="/#projects">
            <h4 className="underline cursor-pointer hover:text-[#3a36aa]">Turn Back The Projects</h4>
        </Link>
          <h3>Overview</h3>
          <p>
          The objective is to create a search engine application for TESODEV’s business requirements.According to the given json data, the search operation can be performed with name and surname. in the first place, if the incoming call data is less than 3, that call appears directly.  If the incoming data is greater than 3,  the button to see more appears.More than one incoming data is paginated and you have the chance to sort these incoming data in alphabetical order and by date.thanks to add new record side, we will able to  enter the forum elements name surname, country, city and email data by filling in. If we enter incorrectly, a warning message will appear.
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
             
            </div>
          <a
            href='https://github.com/guncel-aldemir/tesodev-task'
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

export default tesodevTask;
