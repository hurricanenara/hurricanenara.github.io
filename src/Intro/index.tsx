import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profile from "../nara.json";
import css from "../styles.module.css";

function Intro() {
  const [clickVariant, setClickVariant] = React.useState({});

  const blockVariants = React.useMemo(
    () => ({
      initial: {
        scale: 0,
      },
      target: {
        scale: 1,
        ...clickVariant,
      },
      tap: {
        x: -300,
      },
    }),
    [clickVariant]
  );

  return (
    <div className={css.appContainer}>
      <motion.div
        variants={blockVariants}
        initial='initial'
        animate='target'
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
        onTap={() =>
          setClickVariant({
            x: "calc(-50vw + 90px)",
            transition: {
              duration: 2,
              type: "spring",
              damping: 50,
              stiffness: 200,
            },
          })
        }
        className={css.intro}>
        {profile.greeting}
      </motion.div>
    </div>
  );
}

export default Intro;
