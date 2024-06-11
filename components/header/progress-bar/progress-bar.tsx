import css from "./progress-bar.module.scss";
import { FC, useEffect, useRef } from "react";

export const ProgressBar: FC = () => {
  const barRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;

      if (barRef.current) {
        barRef.current.style.width = scrolled + "%";
      }
    }

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={css.container}>
      <div className={css.bar} ref={barRef} />
    </div>
  );
};
