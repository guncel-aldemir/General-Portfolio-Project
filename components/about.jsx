import React from "react";
import Link from "next/link";
import Image from "next/image";
import Photo from ".//../public/assets/vesikalık.jpg";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#524ddd]">
            About
          </p>
          <h2 className="py-4">Who am I </h2>
          <p className="py-2 text-gray-600">
            I graduated izmir university of economics in civil engineering
            faculty at 2020.After graduation , i was worked civil engineer for
            approximately 2 years. Afterwards, I resigned my job to be front end
            developer because i was always wanting to be a developer. In after
            that, I started with one by one HTML ,CSS, Bootstrap and JavaScript
            . I made some simple projects . Then I applied Kodluyoruz boot camp
            program. Meanwhile, i was improving my javascript skills. I got
            reward of my work by being selected for the Kodluyoruz Front end
            bootcamp program.
          </p>
          <p className="py-2 text-gray-600">
            In bootcamp, I worked with React and Sass. I graduated with making a
            project. Now, I work with NextJs and Tailwind also, I learning
            Nodejs which is backend technology.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={Photo} alt="" className='rounded-xl'/>
        </div>
      </div>
    </div>
  );
};

export default About;
