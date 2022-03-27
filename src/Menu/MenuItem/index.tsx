import React from "react";
import cn from "classnames";

import css from "./styles.module.css";

type Props = {
  content: string;
};

const MenuItem = ({ content }: Props) => {
  const menuItemClasses = cn({
    [css.pill]: true,
    [css[content]]: true,
  });
  return <div className={menuItemClasses}>{content}</div>;
};

export default MenuItem;
