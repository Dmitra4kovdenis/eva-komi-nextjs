import css from "./faq-card.module.scss";
import React, { FC } from "react";

interface FaqCardProps {
  title: string;
  text: React.ReactNode;
}

const FaqCard: FC<FaqCardProps> = ({ title, text }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </div>
  );
};

export default FaqCard;
