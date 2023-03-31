import { FC } from "react";
import css from "./header.module.scss";

export const Header: FC = () => {
  return (
    <div className={css.container}>
      <div>
        <a className={css.phone}>89073328743</a>
        <span className={css.caption}>круглосуточно, без выходных</span>
      </div>
      <div className={css.logo}>
        <img alt="logo" src="/eva-komi-logo.svg" />
      </div>
    </div>
  );
};
