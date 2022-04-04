import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";

import css from "./styles.module.css";
import Modal from "../../Modal";
import { AppContext } from "../../Intro";
import AnimateControls from "framer-motion/types/animation/types";
import PillList from "../../PillList";

export const ModalContext = React.createContext<{
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

type Props = {
  content: string;
  custom: number;
  animate: typeof AnimateControls;
  onClick?: any;
  exit?: any;
};

const MenuItem = ({ content, custom, exit, ...restProps }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const menuVariants = {
    initial: {
      opacity: 0,
    },
  };

  const { isPillFocused } = React.useContext(AppContext);

  const containerClasses = cn({
    [css.pillContainer]: true,
    [css.focusedPill]: isPillFocused,
  });

  const menuItemClasses = cn({
    [css.pill]: true,
    [css[content + "Background"]]: true,
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
      </motion.div>
      {isPillFocused && (
        <ModalContext.Provider
          value={{
            isModalOpen,
            setIsModalOpen,
          }}>
          <PillList content={content} />
        </ModalContext.Provider>
      )}
      {isPillFocused && isModalOpen && (
        <div className={css.modalContainer}>modal content</div>
      )}
    </div>
  );
};

export default MenuItem;
