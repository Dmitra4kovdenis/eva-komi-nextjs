import Head from "next/head";
import { Header } from "@/containers/header";
import PageHome from "@/containers/page-home";
import { phoneTitle } from "@/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Эва-Коми | Услуги эвакуатора в Сыктывкаре и Республике Коми
        </title>
        <meta
          name="description"
          content={`Эвакуация автомобилей, быстро и дешево. Даем гарантию. Просто наберите ${phoneTitle}, мы будем у Вас в течении 10 минут. `}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHome />
    </>
  );
}
