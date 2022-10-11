import React from "react";
import Link from "next/link";
import Image from "next/image";
const projectItems = ({title,backgroundImg,projectUrl}) => {

  return <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#524ddd] to-[#709dff]">
  <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt=""/>
  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    <h3 className="text-[#fff] text-2xl tracking-wider text-center">{title}</h3>
    <p className="text-[#fff] pb-4 pt-2 text-center">ReactJs</p>
    <Link href={projectUrl}>
      <p className="text-gray-700 font-bold text-lg cursor-pointer text-center py-3 rounded-lg bg-[#f2f23b]  hover:bg-[#fff]  ">More Info</p>
    </Link>
  </div>
</div>;
};

export default projectItems;
