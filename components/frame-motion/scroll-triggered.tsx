import { motion } from "framer-motion";
import React from "react";

interface ScrollTriggeredProps {
  children: React.ReactNode;
}

export const ScrollTriggered: React.FC<ScrollTriggeredProps> = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
