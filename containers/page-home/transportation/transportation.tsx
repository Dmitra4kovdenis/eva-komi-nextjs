import { FC } from "react";
import css from "./transportation.module.scss";
import Image from "next/image";
export const Transportation: FC = () => {
  return (
    <div className={css.container}>
      <Image
        width={600}
        height={240}
        className={css.image}
        alt={"map"}
        src={"/russia-map.svg"}
      />
      <div className={css.text}>
        <h2 className={css.title}>
          Также доступны перевозки за городом и по России
        </h2>
        <div>
          Междугородние перевозки, по России и республике Коми, а также в страны
          СНГ
        </div>
      </div>
    </div>
  );
};
