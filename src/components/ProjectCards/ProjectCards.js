import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCards({ project }) {
  return (
    <Link to={project.link}>
      <div className="w-56 h-60 bg-[#ffffff] dark:text-[#f0f4f8] dark:bg-[#2d3748] cursor-pointer p-4">
        <h2 className="text-center font-semibold text-xl mb-2">
          {project.name}
        </h2>
        <hr />
        <section className="mt-2">{project.description}</section>
      </div>
    </Link>
  );
}
