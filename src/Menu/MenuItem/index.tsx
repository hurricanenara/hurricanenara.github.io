import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  exit?: any;
};

const MenuItem = ({ content, custom, exit, ...restProps }: Props) => {
  const menuVariants = {
    initial: {
      opacity: 0,
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const { isPillFocused } = React.useContext(AppContext);

  const containerClasses = cn({
    [css.pillCotainer]: true,
    [css.focusedPill]: isPillFocused,
  });

  const menuItemClasses = cn({
    [css.pill]: true,
    [css[content + "Background"]]: true,
  });

  const pillListClasses = cn({
    [css.pillList]: true,
    [css[content]]: true,
  });

  return (
    <div className={containerClasses}>
      <motion.div
        layout
        className={menuItemClasses}
        custom={custom}
        variants={menuVariants}
        initial='initial'
        exit={exit}
        {...restProps}>
        {content}
      </motion.div>{" "}
      {isPillFocused && (
        <AnimatePresence>
          <motion.ul
            // layout
            className={pillListClasses}
            variants={listVariants}
            initial='hidden'
            animate='show'>
            <motion.li variants={item}>quiche</motion.li>
            <motion.li variants={item}>oil</motion.li>
            <motion.li variants={item}>dao</motion.li>
            <motion.li variants={item}>nft</motion.li>
          </motion.ul>
        </AnimatePresence>
      )}
      {/* <Modal /> */}
    </div>
  );
};

export default MenuItem;
