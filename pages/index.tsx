import Head from "next/head";
import { Header } from "@/containers/header";
import PageHome from "@/containers/page-home";
import { phoneFull } from "@/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Эвакуатор в Сыктывкаре (тел. {phoneFull}). Круглосуточная эвакуация
          автомобилей в Сыктывкаре и Республике Коми - быстро и недорого
        </title>
        <meta
          name="description"
          content={`Мы предоставляем услуги по эвакуации легковых и грузовых автомобилей круглосуточно и в любой точке города Сыктывкар и Коми Республики. Вызвать эвакуатор можно в любое время дня и ночи по телефону ${phoneFull}. Мы работаем быстро, профессионально и недорого. Команда наших опытных водителей справится с транспортировкой любой марки и модели автомобиля без повреждения. Обращайтесь к нам за помощью в случае поломки, ДТП или парковки на закрытой территории. Вам не придется ждать долго - мы приедем в кратчайшие сроки и выполним работу качественно.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHome />
    </>
  );
}
