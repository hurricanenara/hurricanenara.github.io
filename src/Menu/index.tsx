import React from "react";

import css from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};

const Menu = ({ children }: Props) => {
  return <div className={css.menu}>{children}</div>;
};

export default Menu;
