import Head from "next/head";
import { Header } from "@/containers/header";
import PageHome from "@/containers/page-home";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Круглосуточная эвакуация автомобилей в городе и области - быстро и
          недорого
        </title>
        <meta
          name="description"
          content="Мы предоставляем услуги по эвакуации легковых и грузовых автомобилей круглосуточно и в любой точке города и области. Вызвать эвакуатор можно в любое время дня и ночи по телефону. Мы работаем быстро, профессионально и недорого. Команда наших опытных водителей справится с транспортировкой любой марки и модели автомобиля без повреждения. Обращайтесь к нам за помощью в случае поломки, ДТП или парковки на закрытой территории. Вам не придется ждать долго - мы приедем в кратчайшие сроки и выполним работу качественно."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHome />
    </>
  );
}
