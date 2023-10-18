import React from "react";
import { getDateTimeFormat } from "@/lib/utils";
import Link from "next/link";

function Blog({ blogs }) {
  return (
    <section className="mb-16">
      <h2 className="mb-5 block font-medium sm:mb-4">Writing</h2>
      <div className="mb-4 flex flex-col justify-between">
        {blogs?.map((blog) => (
          <Link
            href={`/${blog.slug}`}
            key={blog.id}
            className="-mx-4 flex flex-col items-start rounded-md px-4 no-underline dark:hover:bg-neutral-900 
              hover:bg-neutral-100 py-4"
          >
            <div className="flex w-full justify-between items-center mb-2">
              <h3>{blog.title}</h3>
              <span
                className="text-sm hidden md:block
               text-neutral-400 dark:text-neutral-500
              "
              >
                {getDateTimeFormat(blog._firstPublishedAt)}
              </span>
            </div>
            <p className="text-md text-neutral-500 dark:text-neutral-400">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Blog);
