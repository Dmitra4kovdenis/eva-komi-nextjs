import { FC } from "react";
import css from "./when-to-call-cases.module.scss";
import { casesList } from "./cases-list";

const WhenToCallCases: FC = () => {
  return (
    <div className={css.container}>
      {casesList.map((item, key) => {
        return (
          <div className={css.card} key={key}>
            <h3 className={css.title}>{item.title}</h3>
            <div className={css.text}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WhenToCallCases;
