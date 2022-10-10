import React from "react";
import Image from "next/image";
import ContactPhoto from "../public/assets/melinda-gimpel-5Ne6mMQtIdo-unsplash.jpg";
import { AiOutlineMail } from "react-icons/ai";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#524ddd]">
          Contact
        </p>
        <h2 className="py-4"> Get In Touch</h2>
        <div className="grid lg:grid-cols-2 gap-8 ">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 text-center">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactPhoto}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Güncel ALDEMİR</h2>
                <p className="py-4 text-lg">
                  I am available for full-time positions.Contact me and
                  let&apos;s talk.
                </p>
                <p className="text-lg">
                  <span className="text-xl font-bold pr-2">Mail Adress:</span>
                  guncelaldemir@gmail.com
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-lg">Contact With Me</p>

                <div className="flex items-center justify-evenly py-4">
                  <a
                    href="https://www.linkedin.com/in/guncelaldemir/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>

                  <a
                    href="https://github.com/guncel-aldemir"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default contact;
