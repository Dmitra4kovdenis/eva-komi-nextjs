import { FC } from "react";
import css from "./header.module.scss";
import ProgressBar from "@/containers/header/progress-bar";
import { phoneCompact, phoneFull } from "@/constants";

export const Header: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <a href="#Banner">
            <img alt="logo" src="/eva-komi-logo.svg" />
            <div>Сыктывкар и Республика Коми</div>
          </a>
        </div>
        <div className={css.center}>
          <span>круглосуточно, без выходных</span>
          <span>подача за 20 минут</span>
        </div>
        <a className={css.phone} href={`tel:${phoneCompact}`}>
          {phoneFull}
        </a>
      </div>
      <ProgressBar />
    </div>
  );
};
