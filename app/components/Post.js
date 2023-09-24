import React from "react";

function Post({ children }) {
  return (
    <div
      className="
            prose
            prose-md
            max-w-none
            mx-auto
            prose-img:rounded-md
            dark:text-neutral-400
            dark:prose-headings:text-neutral-300
            dark:prose-blockquote:text-neutral-400
            dark:prose-strong:text-neutral-300
            dark:prose-a:text-neutral-300
            dark:prose-code:text-neutral-300
            text-neutral-600
            prose-headings:text-neutral-700
            prose-blockquote:text-neutral-600
            prose-strong:text-neutral-700
            prose-a:text-neutral-700
            prose-code:text-neutral-400
            "
    >
      {children}
    </div>
  );
}

export default React.memo(Post);
