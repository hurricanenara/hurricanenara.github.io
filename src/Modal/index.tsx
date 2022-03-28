import React from "react";

import css from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  return <div className={css.modal}>{children}</div>;
};

export default Modal;
