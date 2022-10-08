import Image from "next/image";
import React from "react";
import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JavaScript from "../public/assets/javascript.png";
import REACT from "../public/assets/react.png";
import Github from "../public/assets/github1.png";
import Bootstrap from "../public/assets/Bootstrap.png";
import NEXTJS from "../public/assets/nextjs.png";
import Tailwind from "../public/assets/tailwind.png";
import NodeJS from "../public/assets/node.png";
import Mongo from "../public/assets/mongo.png"
const Skills = () => {
  return(
    <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
            <p className="text-xl tracking-widest uppercase text-[#524ddd]">Skills</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={HTML} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={CSS} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={JavaScript} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={REACT} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Bootstrap} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Tailwind} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Github} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NEXTJS} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJS} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Mongo} alt="" width="64px" height="64px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  ); 
};

export default Skills;
