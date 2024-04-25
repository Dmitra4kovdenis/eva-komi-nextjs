import { FC } from "react";
import css from "./for-call.module.scss";
import { phoneCompact } from "@/constants";

export const ForCall: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h2 className={css.titleText}>
          Не можешь двигаться сам? Обратись скорее к нам!
        </h2>
        <a href="#ForCall">
          <div className={css.btnForCall}>Как нас вызвать</div>
        </a>
      </div>
      <div className={css.text}>
        <div className={css.textBody}>
          <p>Обращайтесь к нам!</p>
          <p>Мы готовы предложить Вам свои услуги!</p>
          <p>
            Мы уже несколько лет занимаемся эвакуацией автомобилей любых марок и
            моделей по самым выгодным ценам в городе.
          </p>
        </div>
        <div className={css.textMobile}>
          <p>
            Проводим эвакуацию в любое время суток, где бы вы ни находились.
          </p>
          <p>
            С нами вы можете быть уверены в качестве услуг и ответственном
            подходе к каждой работе. Свяжитесь с нами прямо сейчас и получите
            высококлассный сервис эвакуации автомобилей!
          </p>
        </div>
      </div>
    </div>
  );
};
