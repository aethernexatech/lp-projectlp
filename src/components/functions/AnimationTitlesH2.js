import { motion } from "framer-motion";

function AnimationTitlesH2({ title, className }) {
  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.h2
      variants={hVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {title.split("").map((char, index) => (
        <motion.span variants={spanVariants} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

export default AnimationTitlesH2;
