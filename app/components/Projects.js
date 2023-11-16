// TODO: Add icon for each project
import React from "react";
import { externalIcon } from "@/lib/icons";

function Projects({ projects }) {
  return (
    <section className="mb-16">
      <h2 className="mb-5 block font-medium sm:mb-4">Projects</h2>
      <div
        className="flex flex-col sm:flex-row flex-wrap -mx-4
        mb-4 text-sm dark:text-neutral-400 text-neutral-500"
      >
        {Object.values(projects).map((project) => (
          <a
            key={project.link}
            href={project.link}
            target="_blank"
            className="flex justify-start w-full sm:w-1/2 gap-3 items-center dark:hover:bg-neutral-900 hover:bg-neutral-100 p-4 rounded-md no-underline"
          >
            <div className="w-12 h-12 rounded-md shadow-inner bg-neutral-200/30 dark:bg-neutral-700/40 flex justify-center items-center ">
              <span className="text-xl font-bold text-neutral-400 dark:text-neutral-500">{project.title[0]}</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-200 pr-1">{project.title}</h3>
                <div className="w-4 h-4">{externalIcon}</div>
              </div>
              <span>{project.description}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Projects);
