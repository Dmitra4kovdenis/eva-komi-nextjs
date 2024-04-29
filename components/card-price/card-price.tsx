import { FC } from "react";
import css from "./card-price.module.scss";
import Image from "next/image";

interface CardPriceProps {
  imageUrl: string;
  price: string;
  title: string;
  text: string;
}

const priceToSchema = (price: string): string => {
  return Number(price.replaceAll(" ", "")).toFixed(2);
};

// schema.org согласно доке https://yandex.ru/support/webmaster/supported-schemas/strict-microdata-offers.html
export const CardPrice: FC<CardPriceProps> = ({
  price,
  imageUrl,
  title,
  text,
}) => {
  return (
    <div itemScope itemType="https://schema.org/Product">
      <Image
        itemProp="image"
        width={320}
        height={260}
        className={css.image}
        src={imageUrl}
        alt={`Цена на эвакуацию автомобиля ${title}`}
      />
      <h3 itemProp="name" className={css.title}>
        {title}
      </h3>
      <div itemProp="description" className={css.text}>
        {text}
      </div>
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <meta itemProp="price" content={priceToSchema(price)} />
        <meta itemProp="priceCurrency" content="RUB" />
        <link itemProp="availability" href="http://schema.org/InStock" />
        <div className={css.price}>{price} Руб.</div>
      </div>
    </div>
  );
};
