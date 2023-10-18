import React from "react";
import Link from "next/link";

function Header({ title, content }) {
  return (
    <header className="mb-16 flex flex-col">
      <Link href="/" className="text-medium inline-block font-medium no-underline">
        Zahid Karakaya
      </Link>

      <span className="mb-6 text-medium font-medium leading-none dark:text-neutral-400 text-neutral-500">{title}</span>

      <p className="mb-6 dark:text-neutral-400 text-neutral-500">{content}</p>
    </header>
  );
}

export default React.memo(Header);
