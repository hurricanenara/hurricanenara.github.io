import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import profile from "../nara.json";
import css from "../styles.module.css";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";

function Intro() {
  const [clickVariant, setClickVariant] = React.useState({});

  const blockVariants = React.useMemo(
    () => ({
      initial: {
        scale: 0,
      },
      target: {
        scale: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.6,
        },
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
        onTap={() =>
          setClickVariant({
            x: "calc(-40vw + 90px)",
            transition: {
              duration: 1,
              type: "spring",
              damping: 50,
              stiffness: 200,
            },
          })
        }
        className={css.intro}>
        {profile.greeting}
      </motion.div>
      <motion.div>
        <Menu>
          <MenuItem content='projects' />
          <MenuItem content='experience' />
          <MenuItem content='education' />
        </Menu>
      </motion.div>
    </div>
  );
}

export default Intro;
