"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex w-full flex-col">
      <h2 className="text-xl">Not Found</h2>
      <p className="py-4">This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here..</p>
    </div>
  );
}
