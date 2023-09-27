"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ZoomIn({ children }) {
  return (
    <motion.div initial={{ scale: 1.03 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}
