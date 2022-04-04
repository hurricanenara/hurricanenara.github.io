import { motion } from "framer-motion";
import React from "react";
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
      whileHover={{
        scale: 1.12,
        cursor: "pointer",
        transition: {
          duration: 0.3,
        },
      }}
      onClick={() => setIsModalOpen(true)}
      variants={item}>
      {children}
    </motion.li>
  );
};

export default PillListItem;
