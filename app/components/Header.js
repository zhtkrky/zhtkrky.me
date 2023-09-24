import React from "react";
import Link from "next/link";
import Image from "next/image";

import { externalIcon } from "@/lib/icons";

function Header({ title, content }) {
  return (
    <>
      <header className="mb-16 flex flex-col">
        <Link href="/" className="text-medium inline-block font-medium no-underline">
          Zahid Karakaya
        </Link>

        <span className="mb-6 text-medium font-medium leading-none dark:text-neutral-400 text-neutral-500">
          {title}
        </span>

        <p className="mb-6 dark:text-neutral-400 text-neutral-500">{content}</p>

        <div className="relative w-full h-64 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 rounded-md">
          <div className="absolute flex gap-2 items-center z-20 bottom-4 right-4 px-4 py-2 bg-white rounded-md text-xs text-neutral-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Riga, Latvia</span>
          </div>

          <Image
            className="w-full h-full object-cover opacity-90 rounded-md grayscale"
            src="https://www.datocms-assets.com/48165/1675078392-img_0898-1.jpg"
            alt="Zahid Karakaya"
            width={800}
            height={600}
          />
        </div>
      </header>
    </>
  );
}

export default React.memo(Header);
