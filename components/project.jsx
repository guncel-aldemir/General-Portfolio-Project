import React from "react";

import NextJs from "../public/assets/nextjs.png";

import ProjectItems from "./projectItems";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#524ddd]">Projects:</p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <ProjectItems title="Hotel-Booking-Site" backgroundImg={NextJs} projectUrl="/hotelBooking"/>
        <ProjectItems title="Movie-Site" backgroundImg={NextJs} projectUrl="/movieSite"/>
        <ProjectItems title="Book-Site" backgroundImg={NextJs} projectUrl="/bookHouse"/>
        <ProjectItems title="Tesodev-Task" backgroundImg={NextJs} projectUrl="/tesodevTask"/>
        <ProjectItems title="Anex-Task" backgroundImg={NextJs} projectUrl="/property"/>
        </div>
      </div>
    </div>
  )
};

export default Project;
