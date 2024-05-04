import css from "./vk-block.module.scss";

const VkBlock = () => {
  return (
    <div className={css.container}>
      <div className={css.textBlock}>
        <h2 className={css.title}>Мы Вконтакте</h2>
        <div className={css.text}>
          Подписывайтесь на нас{" "}
          <a target="_blank" href="https://vk.com/evakyatorkomi">
            <b>https://vk.com/evakyatorkomi</b>
          </a>
          <ul>
            <li>Актуальные цены и спецпредложения</li>
            <li>Статьи и обсуждения</li>
            <li>Возможность задавать нам любые интересующие вопросы</li>
            <li>Фотоотчеты о проделанной работе</li>
          </ul>
        </div>
      </div>
      <a
        href="https://vk.com/evakyatorkomi"
        target="_blank"
        className={css.img}
      >
        <img alt="" src="/vk-image.jpg" />
      </a>
    </div>
  );
};

export default VkBlock;
