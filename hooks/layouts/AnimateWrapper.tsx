"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  initialX: number; // Initial X position for the animation
  className?: string; // Optional className prop
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  initialX,
  className,
}) => {
  const [showAnimated, setShowAnimated] = useState(false);
  const { ref, inView} = useInView({
    triggerOnce: true, // Only trigger once when it enters the view
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  // This effect will set showAnimated to true when inView changes to true
  useEffect(() => {
    if (inView) {
      setShowAnimated(true);
    }
  }, [inView]);
  return inView && showAnimated ?  (
    <motion.div
      ref={ref}
      className={className} // Correctly apply the className prop
      initial={{ opacity: 0, x: initialX }} // Start hidden and offset
      animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.8 }} // Duration of the animation
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
    ref={ref}
    className={className} // Correctly apply the className prop
    initial={{ opacity: 0, x: initialX }} // Start hidden and offset
    animate={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
    transition={{ duration: 0.8 }} // Duration of the animation
  >
    {children}
  </motion.div>
  );
};

export default AnimatedWrapper;
