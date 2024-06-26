import React, { FC } from "react";
import css from "./сall-instructions.module.scss";
import Image from "next/image";
import { phoneCompact } from "@/constants";

export const CallInstructions: FC = () => {
  return (
    <div className={css.bg}>
      <div className={css.container}>
        <div id="ForCall" className={css.anchor}></div>
        <h2 className={css.h2}>Как вызвать эвакуатор</h2>
        <div className={css.row}>
          <div className={css.card}>
            <Image
              className={css.image}
              alt="Работаем 24/7"
              src="/call-card-1.svg"
              width={160}
              height={160}
            />
            <div className={css.title}>Напишите или позвоните нам</div>
            <div className={css.text}>
              <ul>
                <li className={css.li}>
                  • Звоните по номеру:{" "}
                  <a className={css.phone} href={`tel:${phoneCompact}`}>
                    <b> 8 912 864 01 11</b>
                  </a>
                </li>
                <li className={css.li}>
                  • Vk:{" "}
                  <a
                    className={css.phone}
                    target="_blank"
                    href={"https://vk.com/evakyatorkomi"}
                  >
                    {" "}
                    <b>https://vk.com/evakyatorkomi</b>
                  </a>
                </li>
                <li className={css.li}>
                  • Whatsapp:{" "}
                  <a className={css.phone} href={"https://wa.me/79630221679"}>
                    <b>+7 903 333 23 34</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={css.card}>
            <Image
              className={css.image}
              alt="Работаем 24/7"
              src="/call-card-2.svg"
              width={160}
              height={160}
            />
            <div className={css.title}>Опишите проблему</div>
            <div className={css.text}>
              Сообщите модель и тип автомобиля, откуда и куда нужно
              эвакуировать. Проблемы
            </div>
          </div>
          <div className={css.card}>
            <Image
              className={css.image}
              alt="Работаем 24/7"
              src="/call-card-3.svg"
              width={160}
              height={160}
            />
            <div className={css.title}>Дождитесь наш эвакуатор</div>
            <div className={css.text}>
              Подача в районе города обычно занимает 20 минут. В остальных
              случаях, наш сотрудник сообщит время прибытия
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
