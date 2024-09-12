import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
import { PROJECTS } from "../../projectsDetails";

export default function HomePage() {
  return (
    <div>
      <main className="flex gap-20 p-16 flex-wrap w-full ">
        {PROJECTS.map((project) => {
          return <ProjectCards key={project.id} project={project} />;
        })}
      </main>
    </div>
  );
}
