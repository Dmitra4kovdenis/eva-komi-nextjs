import { FC } from "react";
import css from "./banner.module.scss";
import IconPhone from "@/assets/icons/icon-phone";
import { phoneFull } from "@/constants";
import Image from "next/image";

export const Banner: FC = () => {
  return (
    <div className={css.banner}>
      <div className={css.backgroundPhotoBanner} />
      <a
        href={`tel:${phoneFull}`}
        title={`Вызвать ${phoneFull}`}
        className={css.button}
      >
        <IconPhone />
      </a>
      <Image
        className={css.carBanner}
        alt="Баннер с эвакуатором"
        src="/car-banner.png"
        width={900}
        height={500}
      />
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
