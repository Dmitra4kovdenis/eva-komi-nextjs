import { FC } from "react";
import css from "./banner.module.scss";
export const Banner: FC = () => {
  return (
    <div className={css.banner}>
      <img
        className={css.backgroundPhotoBanner}
        alt=""
        src="/background-photo-banner.svg"
      />
      <a>
      <button className={css.button}></button>
      </a>
        <img className={css.carBanner} alt="" src="/car-banner.svg" />
      <span className={css.textBanner}>Быстрая, надежная и безопасная эвакуация автомобилей!</span>
      <span className={css.textBanner2}>Эвакуация автомобилей по Сыктывкару и Республике Коми</span>
      </div>
  )
}
