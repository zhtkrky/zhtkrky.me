"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeUp({ children }) {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  );
}
