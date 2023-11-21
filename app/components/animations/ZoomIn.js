"use client";

import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "@/lib/constants";

export default function ZoomIn({ children }) {
  if (isMobile()) return children;
  return (
    <motion.div initial={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}
