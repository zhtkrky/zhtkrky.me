import React from "react";
import { getYear } from "@/lib/utils";

function Blog({ allBlogs }) {
  return (
    <div className="mb-16">
      <span className="mb-5 block font-medium sm:mb-4">Writing</span>
      <div className="group">
        <div
          className="dark:group-hover:text-neutral-600 dark:text-neutral-400
        text-neutral-500 group-hover:text-neutral-400
        "
        >
          <div className="mb-4 flex flex-col md:gap-0 gap-4 justify-between">
            {allBlogs?.map((blog) => (
              <a
                href={`/${blog.slug}`}
                key={blog.id}
                className="-mx-3 flex justify-between items-center rounded-md px-3 no-underline dark:hover:bg-neutral-900 dark:hover:text-neutral-300 
              hover:bg-neutral-100 hover:text-neutral-900
                sm:py-3"
              >
                <span>{blog.title}</span>
                <span className="text-xs hidden md:block">{getYear(blog._firstPublishedAt)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Blog);
