import { FC } from "react";
import css from "./header.module.scss";
import ProgressBar from "@/containers/header/progress-bar";

export const Header: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <img alt="logo" src="/eva-komi-logo.svg" />
          <div>Сыктывкар и Республика Коми</div>
        </div>
        <div className={css.center}>
          <span>круглосуточно, без выходных</span>
          <span>подача за 20 минут</span>
        </div>
        <a className={css.phone} href="tel:89087153123">
          89087153123
        </a>
      </div>
      <ProgressBar />
    </div>
  );
};
