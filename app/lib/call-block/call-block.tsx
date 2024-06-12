import { FC } from "react";
import css from "./call-block.module.scss";
import { phoneCompact, phoneFull } from "@/constants";
export const CallBlock: FC = () => {
  return (
    <div
      className={css.container}
      itemScope
      itemType="http://schema.org/Organization"
    >
      <span itemProp="name" className={css.hidden}>
        ЭваКоми - эвакуатор в Сыктывкаре и республике коми
      </span>
      <div className={css.line} />
      <p className={css.text}>
        Для заказа эвакуатора, уточнения цен, акций и прочей информации, просто
        позвоните нам <br />
        Или нажмите на номер ниже, звонок начнется автоматически
      </p>
      <a
        itemProp="telephone"
        className={css.phoneNumber}
        href={`tel:${phoneCompact}`}
      >
        {phoneFull}
      </a>
      <p className={css.text2}>Машина приедет в течении 20 минут</p>
    </div>
  );
};
