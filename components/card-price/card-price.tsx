import { FC } from "react";
import css from "./card-price.module.scss";
import Image from "next/image";

interface CardPriceProps {
  imageUrl: string;
  price: string;
  title: string;
}

export const CardPrice: FC<CardPriceProps> = ({ price, imageUrl, title }) => {
  return (
    <div>
      <Image
        width={320}
        height={260}
        className={css.image}
        src={imageUrl}
        alt={`Цена на эвакуацию автомобиля ${title}`}
      />
      <div className={css.title}>{title}</div>
      <div className={css.price}>{price} Руб.</div>
    </div>
  );
};
