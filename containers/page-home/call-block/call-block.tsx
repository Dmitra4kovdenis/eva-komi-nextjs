import { FC } from "react";
import css from "./call-block.module.scss";
import { phoneFull } from "@/constants";
export const CallBlock: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.line} />
      <p className={css.text}>
        Для заказа эвакуатора, уточнения цен, акций и прочей информации, просто
        позвоните нам <br />
        Или нажмите на номер ниже, звонок начнется автоматически
      </p>
      <a className={css.phoneNumber} href={`tel:${phoneFull}`}>
        {phoneFull}
      </a>
      <p className={css.text2}>Машина приедет в течении 20 минут</p>
    </div>
  );
};
