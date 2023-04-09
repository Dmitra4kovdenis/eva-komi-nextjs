import { FC } from "react";
import css from "./banner.module.scss";
import IconPhone from "@/assets/icons/icon-phone";
export const Banner: FC = () => {
  return (
    <div className={css.banner}>
      <img
        className={css.backgroundPhotoBanner}
        alt=""
        src="/background-photo-banner.svg"
      />
      <a href="#" className={css.button}>
        <IconPhone />
      </a>
      <img className={css.carBanner} alt="" src="/car-banner.svg" />
      <div className={css.content}>
        <h1 className={css.title}>
          Быстрая, надежная и безопасная эвакуация автомобилей!
        </h1>
        <div className={css.text}>
          Эвакуация автомобилей по Сыктывкару и Республике Коми
        </div>
      </div>
    </div>
  );
};
