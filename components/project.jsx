import React from "react";
import Image from "next/image";
import NextJs from "../public/assets/nextjs.png"
const Project = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#524ddd]">Projects:</p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#524ddd] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-10" src={NextJs} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;
