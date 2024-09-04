import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { useTheme } from "../../context/themeContext";
import ProjectCards from "../ProjectCards/ProjectCards";
import { PROJECTS } from "../../projectsDetails";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <main className="bg-[#f0f4f8] dark:bg-[#1e293b] w-full flex gap-10 p-10 ">
        {PROJECTS.map((project) => {
          return <ProjectCards key={project.id} project={project} />;
        })}
      </main>
    </div>
  );
}
