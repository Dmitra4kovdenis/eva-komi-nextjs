import { FC } from "react";
import css from "./banner.module.scss";
export const Banner: FC = () => {
  return (
    <div className={css.banner}>
      <img className={css.vector} alt="" src="/vector.svg" />;
        <div className={css.car}>
            <img alt="" src="/car.svg" />
        </div>
    </div>
  );
};
