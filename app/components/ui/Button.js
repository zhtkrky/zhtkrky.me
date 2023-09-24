import React from "react";
import Link from "next/link";

function Button({ children, link }) {
  if (link) {
    return (
      <Link
        href={link}
        className="relative flex items-center justify-center gap-3 px-4 py-1 dark:text-neutral-400 text-neutral-500
        hover:text-neutral-700 dark:hover:text-neutral-300
        bg-transparent border border-black/10 dark:border-white/10 dark:hover:border-white/50 shadow shadow-black/5 rounded-md"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className="relative flex items-center justify-center gap-3 px-4 py-1 dark:text-neutral-400 text-neutral-500
    hover:text-neutral-700 dark:hover:text-neutral-300
    bg-transparent border border-black/10 dark:border-white/10 dark:hover:border-white/50 shadow shadow-black/5 rounded-md"
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
