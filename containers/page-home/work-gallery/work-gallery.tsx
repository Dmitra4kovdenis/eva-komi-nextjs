import css from "./work-gallery.module.scss";
import Image from "next/image";

const images = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-6.jpg",
];

export const WorkGallery = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Фотогалерея работ</h2>
      <div className={css.text}>Последние выполненные нами заказы</div>
      <div className={css.row}>
        {images.map((item, key) => (
          <div key={key} className={css.col}>
            <Image
              width={320}
              height={240}
              className={css.image}
              alt={`image-gallery-${key}`}
              src={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
