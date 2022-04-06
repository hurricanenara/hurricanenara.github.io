import { motion } from "framer-motion";
import React from "react";
import { HOVER_STYLES } from "../../constants";
import { ModalContext } from "../../Menu/MenuItem";

import css from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const PillListItem = ({ children }: Props) => {
  const { setIsModalOpen } = React.useContext(ModalContext);
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.li
      whileHover={HOVER_STYLES}
      onClick={() => setIsModalOpen(true)}
      variants={item}>
      {children}
    </motion.li>
  );
};

export default PillListItem;
