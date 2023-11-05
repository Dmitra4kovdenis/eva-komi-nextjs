import { FC } from "react";
import css from "./for-call.module.scss";
import { phoneCompact } from "@/constants";

export const ForCall: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <div className={css.titleText}>Для вызова эвакуатора звони</div>
        <a className={css.phoneNumber} href={`tel:${phoneCompact}`}>
          340-111
        </a>
      </div>
      <div className={css.text}>
        <div className={css.textBody}>
          <p>Требуется надежный и профессиональный эвакуатор в любой момент?</p>
          <p>Мы готовы предложить Вам свои услуги!</p>
          <p>
            Наша компания вот уже несколько лет занимается профессиональным
            эвакуированием автомобилей любых марок и моделей по самым выгодным
            ценам в городе.
          </p>
        </div>
        <div className={css.textMobile}>
          <p>
            Мы осуществляем эвакуацию в любое время суток, где бы вы ни
            находились в городе.
          </p>
          <p>
            Надежные и квалифицированные специалисты компании гарантируют
            быстрое и безопасное перемещение вашего автомобиля на нужную
            площадку.
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
