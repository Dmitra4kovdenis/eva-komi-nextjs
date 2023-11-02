import React, { FC } from "react";
import css from "./advantages.module.scss";
import Image from "next/image";
export const Advantages: FC = () => {
  return (
    <div className={css.container}>
      <Image
        className={css.image}
        alt="Наши преимущества"
        src="/advantages.svg"
        width={900}
        height={500}
      />
    </div>
  );
};
