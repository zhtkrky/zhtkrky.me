import React from "react";
import { PROJECTS } from "@/lib/constants";

function Projects() {
  return (
    <div className="mb-16">
      <span className="mb-5 block font-medium sm:mb-4">Projects</span>
      <div className="group">
        <div
          className="flex flex-col md:gap-0 gap-4 dark:group-hover:text-neutral-600 dark:text-neutral-400
        text-neutral-500 group-hover:text-neutral-400
        "
        >
          {Object.values(PROJECTS).map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              className="-mx-3 flex flex-col md:flex-row items-start md:items-center justify-between rounded-md px-3 no-underline dark:hover:bg-neutral-900 dark:hover:text-neutral-300 
              hover:bg-neutral-100 hover:text-neutral-900 sm:py-3"
            >
              <span>{project.title}</span>
              <span className="text-xs">{project.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Projects);
