import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import css from "./styles.module.css";
import Modal from "../../Modal";
import { AppContext } from "../../Intro";
import AnimateControls from "framer-motion/types/animation/types";
import PillList from "../../PillList";
import { HOVER_STYLES } from "../../constants";
import useModal from "../../utils/useModal";

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
  const { ref, isModalOpen, setIsModalOpen } = useModal(false);
  const menuVariants = {
    initial: {
      opacity: 0,
    },
  };

  const modalVariatns = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
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

  function handleHover() {
    return !isPillFocused ? HOVER_STYLES : undefined;
  }

  return (
    // @ts-ignore
    <div className={containerClasses} ref={ref}>
      <motion.div
        layout
        whileHover={handleHover()}
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
      <AnimatePresence>
        {isPillFocused && isModalOpen && (
          <motion.div
            variants={modalVariatns}
            initial='hidden'
            animate='show'
            className={css.modalContainer}>
            modal content
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
