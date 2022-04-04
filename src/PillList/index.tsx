import React from "react";

import profile from "../nara.json";

import { motion } from "framer-motion";

import cn from "classnames";

import css from "./styles.module.css";
import PillListItem from "./PillListItem";

const { categories } = profile;

type PillListProps = {
  content: string;
};

const PillList = ({ content }: PillListProps) => {
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

  const pillListClasses = cn({
    [css.pillList]: true,
    [css[content]]: true,
  });

  //   @ts-ignore json any error
  const listItems = Object.keys(categories[content]).map((categoryItem) => (
    <PillListItem key={categoryItem} children={categoryItem} />
  ));

  return (
    <motion.ul
      className={pillListClasses}
      variants={listVariants}
      initial='hidden'
      animate='show'>
      {listItems}
    </motion.ul>
  );
};

export default PillList;
