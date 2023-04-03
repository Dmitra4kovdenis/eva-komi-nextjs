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
      ;
      <div className={css.carBanner}>
        <img alt="" src="/car-banner.svg" />
      </div>
    </div>
  );
};
