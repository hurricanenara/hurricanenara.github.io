import React from "react";

import css from "./styles.module.css";

const Menu = ({ children }: { children: React.ReactNode }) => {
  return <div className={css.menu}>{children}</div>;
};

export default Menu;
