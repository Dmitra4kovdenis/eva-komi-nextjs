import { FC } from "react";
import { prices } from "./prices.constants";
import CardPrice from "@/components/card-price";
import css from "./prices.module.scss";

export const Prices: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.row}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>
            Цены на эвакуацию
            <br /> автомобиля
          </h2>
          <div>
            Фактические цены могут отличаться от деталей услуги, для уточнения
            звоните нам
            <br />
            <br />
            Для постоянных клиентов возможны <b>скидки до 30%</b>
          </div>
        </div>
        {prices.map((price) => (
          <div key={price.title} className={css.cardWrapper}>
            <CardPrice {...price} />
          </div>
        ))}
      </div>
    </div>
  );
};
