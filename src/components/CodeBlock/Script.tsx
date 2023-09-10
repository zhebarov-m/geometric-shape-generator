import { FC, ReactNode } from "react";
import styles from "./Script.module.scss";

interface iScriptPorps {
  children: ReactNode;
}

const Script: FC<iScriptPorps> = (props) => {
  const { children } = props;
  return (
    <div className={styles.codeStyle}>
      <i>css-styles:</i>
      {children}
    </div>
  );
};

export default Script;
