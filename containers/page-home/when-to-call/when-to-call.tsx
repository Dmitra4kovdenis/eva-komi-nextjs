import { FC } from "react";
import css from "./when-to-call.module.scss";
import WhenToCallCases from "@/containers/page-home/when-to-call/when-to-call-cases";
import Image from "next/image";
export const WhenToCall: FC = () => {
  return (
    <div className={css.container}>
      <div className={css.leftBlock}>
        <h2 className={css.title}>Когда следует вызывать эвакуатор</h2>
        <Image
          className={css.image}
          alt={"car"}
          width={320}
          height={320}
          src={"/when-to-call-image.webp"}
        />
      </div>
      <div className={css.rightBlock}>
        <WhenToCallCases />
      </div>
    </div>
  );
};
