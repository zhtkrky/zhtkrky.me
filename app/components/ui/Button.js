"use client";
import React from "react";
import Link from "next/link";
import { chevronRightIcon } from "@/lib/icons";
import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <button className="relative flex items-center justify-center gap-3 px-4 py-1 dark:text-neutral-400 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 bg-transparent border border-black/10 dark:border-white/10 dark:hover:border-white/50 shadow shadow-black/5 rounded-md">
      {children}
    </button>
  );
}

function LinkButton({ children, link }) {
  return (
    <Link
      href={link}
      className="relative flex items-center justify-center gap-3 px-4 py-1 dark:text-neutral-400 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 bg-transparent border border-black/10 dark:border-white/10 dark:hover:border-white/50 shadow shadow-black/5 rounded-md"
    >
      {children}
    </Link>
  );
}

function AnimatedLinkButton({ content, link }) {
  return (
    <Link href={link}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: [0, 0, 0, 0, 0, 180],
          opacity: 1,
          transition: { staggerChildren: 0.5 },
        }}
        transition={{ duration: 0.3 }}
        className="fixed font-medium bottom-6 left-1/2 transform -translate-x-1/2 h-12 rounded-full dark:bg-[#2e2e30]/80 bg-[#efeff2]/80 backdrop-blur-sm flex items-center justify-center group cursor-pointer"
      >
        <motion.span
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: 1,
            display: "block",
          }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mr-8 text-center"
        >
          {content}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mr-2 h-8 w-8 rounded-full bg-[#0071c5] flex items-center justify-center text-neutral-300 group-hover:text-neutral-white group-hover:dark:text-white"
        >
          {chevronRightIcon}
        </motion.span>
      </motion.div>
    </Link>
  );
}

export { Button, LinkButton, AnimatedLinkButton };
