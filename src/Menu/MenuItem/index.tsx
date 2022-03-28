import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";

import css from "./styles.module.css";
import Modal from "../../Modal";
import { AppContext } from "../../Intro";
import AnimateControls from "framer-motion/types/animation/types";

type Props = {
  content: string;
  custom: number;
  animate: typeof AnimateControls;
  onClick?: any;
};

const MenuItem = ({ content, custom, ...restProps }: Props) => {
  const menuVariants = {
    initial: {
      opacity: 0,
    },
  };
  const menuItemClasses = cn({
    [css.pill]: true,
    [css[content]]: true,
  });

  const { idxOfPillClicked, setIdxOfPillClicked } =
    React.useContext(AppContext);

  return (
    <div className={css.pillContainer}>
      <motion.div
        className={menuItemClasses}
        custom={custom}
        variants={menuVariants}
        initial='initial'
        {...restProps}>
        {content}
      </motion.div>
      {/* <Modal /> */}
    </div>
  );
};

export default MenuItem;
