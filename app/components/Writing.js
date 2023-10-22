import React from "react";
import Link from "next/link";

import { getDateTimeFormat } from "@/lib/utils";

function Blog({ blogs }) {
  return (
    <section className="mb-16">
      <h2 className="mb-5 block font-medium sm:mb-4">Writing</h2>
      <div className="mb-4 flex flex-col justify-between">
        {blogs?.map((blog) => (
          <Link href={`/${blog.slug}`} key={blog.id}>
            <card-component
              title={blog.title}
              description={blog.excerpt}
              date={getDateTimeFormat(blog._firstPublishedAt)}
            ></card-component>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Blog);
