import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hotel from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
import {RiRadioButtonFill} from "react-icons/ri"
const hotelBooking = () => {
  return (
    <div className="w-full ">
      <div className=" h-[50vh]  m-auto sm:grid grid-cols-1">
        <Image src={Hotel} objectFit="cover" alt="" />
      </div>
      <div className="p-2">
        
        <h2 className="py-2 uppercase text-[#524ddd]">Hotel booking site</h2>
        <div className="p-2 grid 2xl:grid-cols-1 gap-8 py-8 ">
        <Link href="/#projects">
            <h4 className="underline cursor-pointer hover:text-[#3a36aa]">Turn Back The Projects</h4>
        </Link>
          <h3>Overview</h3>
          <p>
            This app was built using React JS. Users are able to search hotels and can be made by specifying the number of people, including adults and children from Antalya,Muğla,Izmir and Aydın regions.Also,  these hotels seperated by some categories.These are Ultra All Inclusive, All Inclusive,Adults Only and Breakfast Only. when you search hotels, you will able to see the hotels overview and distance from city center etc. If you pick a room , you will able to see rooms photos and you can  use swipe  and to pass easily between the photos.If all form values are entered according to the rules, the reservation process will be performed.Otherwise, you will see error messages and disabled button.
          </p>
          <h3>Technologies</h3>
          <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
             
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              
            </div>
          <a
            href='https://github.com/guncel-aldemir/Hotel-Booking-Site'
            target='_blank'
            rel='noreferrer'
          >
            <button className=' bg-[#3a36aa] text-[#fff] px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default hotelBooking;
