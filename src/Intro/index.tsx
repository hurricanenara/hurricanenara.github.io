import React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import profile from "../nara.json";
import css from "../styles.module.css";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";

export const AppContext = React.createContext<{
  idxOfPillClicked: string | null;
  setIdxOfPillClicked: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  idxOfPillClicked: null,
  setIdxOfPillClicked: () => {},
});

function Intro() {
  const [idxOfPillClicked, setIdxOfPillClicked] = React.useState<string | null>(
    null
  );
  const [clickVariant, setClickVariant] = React.useState({});
  const [list, setList] = React.useState<{ [x in string]: number }>({
    projects: 1,
    experience: 1,
    education: 1,
  });

  const listControls = useAnimation();
  const isClicked = Object.keys(clickVariant).length > 0;
  const lengthOfList = Object.keys(list).length;

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

  React.useEffect(() => {
    if (isClicked) {
      listControls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2, ease: "easeIn", duration: 0.3 },
      }));
    }
  }, [listControls, isClicked, idxOfPillClicked]);

  React.useEffect(() => {
    if (idxOfPillClicked) {
      setList({ [idxOfPillClicked]: 1 });
    }
  }, [idxOfPillClicked, lengthOfList]);

  const pills = Object.keys(list).map((content, i) => {
    return (
      <MenuItem
        content={content}
        custom={i}
        animate={listControls}
        key={content}
        onClick={() => setIdxOfPillClicked(content)}
        exit={{ opacity: 0 }}
      />
    );
  });

  return (
    <div className={css.appContainer}>
      <motion.div
        variants={blockVariants}
        initial='initial'
        animate='target'
        onTap={() =>
          setClickVariant({
            x: "calc(-16vw + 90px)",
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
        <AppContext.Provider
          value={{
            idxOfPillClicked,
            setIdxOfPillClicked,
          }}>
          <Menu>
            <AnimatePresence>{pills}</AnimatePresence>
          </Menu>
        </AppContext.Provider>
      </motion.div>
    </div>
  );
}

export default Intro;
