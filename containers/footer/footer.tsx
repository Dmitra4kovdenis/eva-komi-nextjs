import { FC } from "react";
import css from "./footer.module.scss";
import { phoneFull } from "@/constants";
export const Footer: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.logoContainer}>
        <img className={css.logo} alt="logo" src="/eva-komi-logo%202.png" />
      </div>
      <div className={css.line} />
      <div className={css.content}>
        <a className={css.phoneNumber} href={`tel:${phoneFull}`}>
          {phoneFull}
        </a>
        <div className={css.text}>г. Сыктывкар, Республика Коми</div>
      </div>
      <div className={css.container2}>
        <div className={css.developer}>Разработано Unclespace group</div>
      </div>
    </div>
  );
};
