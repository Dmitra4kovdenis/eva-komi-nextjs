import css from "./banner-road.module.scss";
import { FC } from "react";

export const BannerRoad: FC = () => {
  return <img className={css.image} src="/banner-road.png" />;
};
