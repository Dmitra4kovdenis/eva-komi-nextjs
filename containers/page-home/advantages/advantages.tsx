import React, { FC } from "react";
import css from "./advantages.module.scss";
import Image from "next/image";

export const Advantages: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.card1}>
        <Image
          className={css.image1}
          alt="Работаем 24/7"
          src="/card1.svg"
          width={160}
          height={160}
        />
        <div className={css.title}>Работаем 24/7</div>
        <div className={css.text}>
          Работаем 24/7 без выходных.
          <br /> Аккуратно и профессионально
        </div>
      </div>

      <div className={css.card2}>
        <Image
          className={css.image2}
          alt="Работаем 24/7"
          src="/card2.svg"
          width={160}
          height={160}
        />
        <div className={css.title}>Любая сложность работы</div>
        <div className={css.text}>Готовы браться за самые сложные заказы</div>
      </div>
      <div className={css.card3}>
        <Image
          className={css.image3}
          alt="Работаем 24/7"
          src="/card3.svg"
          width={160}
          height={160}
        />
        <div className={css.title}>Быстро и не дорого</div>
        <div className={css.text}>Подача по городу за 20 минут!</div>
      </div>
    </div>
  );
};
