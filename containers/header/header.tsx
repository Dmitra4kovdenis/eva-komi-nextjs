import { FC } from "react";
import css from "./header.module.scss";
import ProgressBar from "@/containers/header/progress-bar";

export const Header: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <a className={css.phone}>89073328743</a>
          <span className={css.caption}>круглосуточно, без выходных</span>
        </div>
        <div className={css.logo}>
          <img alt="logo" src="/eva-komi-logo.svg" />
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};
