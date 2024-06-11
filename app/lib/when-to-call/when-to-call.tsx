import { FC } from "react";
import css from "./when-to-call.module.scss";
import WhenToCallCases from "./when-to-call-cases";
import Image from "next/image";
export const WhenToCall: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.leftBlock}>
        <h2 className={css.title}>Вызывайте эвакуатор, если у вас</h2>
        <Image
          className={css.image}
          alt={"car"}
          width={320}
          height={320}
          src={"/when-to-call1.jpg"}
        />
        <Image
          className={css.image}
          alt={"car"}
          width={320}
          height={320}
          src={"/when-to-call2.jpg"}
        />
      </div>
      <div className={css.rightBlock}>
        <WhenToCallCases />
      </div>
    </div>
  );
};
