import { FC } from "react";
import css from "./when-to-call.module.scss";
import WhenToCallCases from "@/containers/page-home/when-to-call/when-to-call-cases";
export const WhenToCall: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.leftBlock}>
        <h2 className={css.title}>Когда следует вызывать эвакуатор</h2>
        <img
          className={css.image}
          alt={"car"}
          src={"/when-to-call-image.png"}
        />
      </div>
      <div className={css.rightBlock}>
        <WhenToCallCases />
      </div>
    </div>
  );
};
