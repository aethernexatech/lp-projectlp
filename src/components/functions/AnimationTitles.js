import { motion } from "framer-motion";
import React from "react";

function AnimationTitles({
  children,
  className,
  size = "5rem",
  weight = "bold",
}) {
  // Variants for the container that holds the entire content
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const textStyle = {
    fontSize: size,
    fontWeight: weight,
    color: "black",
  };

  // Variants for each child (could be text or a JSX element)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 16, stiffness: 200 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
      style={textStyle}
    >
      {React.Children.map(children, (child, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {child}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimationTitles;
