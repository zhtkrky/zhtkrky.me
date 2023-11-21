"use client";

import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "@/lib/constants";

export default function FadeUp({ children }) {
  if (isMobile()) return children;
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}
