import React from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import profile from "../nara.json";
import css from "../styles.module.css";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";

export const AppContext = React.createContext<{
  idxOfPillClicked: number | null;
  setIdxOfPillClicked: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  idxOfPillClicked: null,
  setIdxOfPillClicked: () => {},
});

function Intro() {
  const [clickVariant, setClickVariant] = React.useState({});
  const [idxOfPillClicked, setIdxOfPillClicked] = React.useState<number | null>(
    null
  );
  const [list, setList] = React.useState<{ [x in string]: number }>({
    projects: 1,
    experience: 1,
    education: 1,
  });
  const listMap = {
    projects: 1,
    experience: 1,
    education: 1,
  };

  const listControls = useAnimation();
  const isClicked = Object.keys(clickVariant).length > 0;

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

  function clickHandler(i: number, clickedIdx: number) {
    if (i !== clickedIdx) {
    }
  }

  React.useEffect(() => {
    if (isClicked && idxOfPillClicked === null) {
      listControls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2, ease: "easeIn", duration: 0.3 },
      }));
    }
  }, [listControls, isClicked]);

  React.useEffect(() => {
    if (idxOfPillClicked !== null) {
      listControls.start((i) => ({
        opacity: 0,
        transition: { delay: i * 0.2, ease: "easeIn", duration: 0.3 },
      }));
    }
  }, [listControls, idxOfPillClicked]);

  console.log(listControls);

  console.log(idxOfPillClicked);

  function test(idx: number) {}

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
      {/* <AnimatePresence> */}
      {/* {isClicked && ( */}
      <motion.div>
        <AppContext.Provider
          value={{
            idxOfPillClicked,
            setIdxOfPillClicked,
          }}>
          <Menu>
            {Object.keys(list)
              .filter((key) => list[key])
              .map((content, i) => {
                return (
                  <MenuItem
                    content={content}
                    custom={i}
                    animate={listControls}
                    onClick={() => {
                      setIdxOfPillClicked(i);
                    }}
                    key={content}
                  />
                );
              })}
            {/* <MenuItem
              onClick={() => setIdxOfPillClicked(0)}
              custom={0}
              animate={listControls}
              content='projects'
            />
            <MenuItem
              onClick={() => setIdxOfPillClicked(1)}
              custom={1}
              animate={listControls}
              content='experience'
            />
            <MenuItem
              onClick={() => setIdxOfPillClicked(2)}
              custom={2}
              animate={listControls}
              content='education'
            /> */}
          </Menu>
        </AppContext.Provider>
      </motion.div>
      {/* )} */}
      {/* </AnimatePresence> */}
    </div>
  );
}

export default Intro;
