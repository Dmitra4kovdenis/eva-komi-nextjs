import React, { FC } from "react";
import css from "./banner.module.scss";
import IconPhone from "@/assets/icons/icon-phone";
import { phoneCompact, phoneFull } from "@/constants";
import Image from "next/image";

export const Banner: FC = () => {
  return (
    <>
      <div className={css.banner}>
        <div id="ForCall" className={css.yakor}></div>
        <div className={css.backgroundPhotoBanner} />
        <a
          href={`tel:${phoneCompact}`}
          title={`Вызвать ${phoneFull}`}
          className={css.button}
        >
          <IconPhone />
        </a>
        <Image
          className={css.carBanner}
          alt="Баннер с эвакуатором"
          src="/car-banner.webp"
          width={900}
          height={500}
        />
        <div className={css.content}>
          <h1 className={css.title}>
            Наши эвакуаторы – ваша безопасность на дороге.
          </h1>
          <div className={css.text}>
            Эвакуация автомобилей по Сыктывкару и Республике Коми
          </div>
        </div>
      </div>

      <div className={css.socialMedia}>
        <a
          href={"https://vk.com/evakyatorkomi"}
          target={"_blank"}
          className={css.vk}
        >
          <Image
            className={css.vkImage}
            alt={"Vk"}
            width={20}
            height={20}
            src={"/gallery/vk.png"}
          />
          <div className={css.textVk}>https://vk.com/evakyatorkomi</div>
        </a>
        <a
          href={"https://wa.me/79630221679"}
          target={"_blank"}
          className={css.vk}
        >
          <Image
            className={css.vkImage}
            alt={"Vk"}
            width={20}
            height={20}
            src={"/gallery/whatsapp.svg"}
          />
          <div className={css.textVk}>+7 963 022-16-79</div>
        </a>
      </div>
    </>
  );
};
