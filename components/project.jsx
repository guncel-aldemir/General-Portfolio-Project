import React from "react";

import Developer from "../public/assets/developer.jpg";
import Summer from "../public/assets/summer.jpg";
import Cinema from "../public/assets/cinema.jpg";
import Books from "../public/assets/books.jpg";
import Search from "../public/assets/search.jpg"
import ProjectItems from "./projectItems";

const Project = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#524ddd]">Projects:</p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <ProjectItems title="Hotel-Booking-Site" backgroundImg={Summer} projectUrl="/hotelBooking"/>
        <ProjectItems title="Movie-Site" backgroundImg={Cinema} projectUrl="/movieSite"/>
        <ProjectItems title="Book-Site" backgroundImg={Books} projectUrl="/bookHouse"/>
        <ProjectItems title="Tesodev-Task" backgroundImg={Search} projectUrl="/tesodevTask"/>
        <ProjectItems title="Anex-Task" backgroundImg={Developer} projectUrl="/anexTask"/>
        </div>
      </div>
    </div>
  )
};

export default Project;
