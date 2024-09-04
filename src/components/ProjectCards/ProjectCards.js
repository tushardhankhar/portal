import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCards({ project }) {
  return (
    <Link to={project.link}>
      <div className="w-96 min-h-96 bg-[#ffffff] dark:text-[#f0f4f8] dark:bg-[#2d3748] cursor-pointer p-4">
        <h2 className="text-center font-semibold text-xl mb-2">
          {project.name}
        </h2>
        <hr />
        <section className="mt-4">{project.description}</section>
        <img className="mt-8  solid border-4 border-orange-500" src={project.image} alt="" />
      </div>
    </Link>
  );
}
