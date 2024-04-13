import css from "./vk-block.module.scss";

const VkBlock = () => {
  return (
    <div className={css.container}>
      <div className={css.textBlock}>
        <h2 className={css.title}>Мы Вконтакте</h2>
        <div className={css.text}>
          Подписывайтесь на нас{" "}
          <a href="https://vk.com/evakyatorkomi">
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
      <img alt="" src="/vk-image.jpg" className={css.img} />
    </div>
  );
};

export default VkBlock;
