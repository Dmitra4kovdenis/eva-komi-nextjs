import { phoneTitle } from "@/constants";
import PageHome from "./lib/page-home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Эва-Коми | Услуги эвакуатора в Сыктывкаре и Республике Коми",
  description: `Эвакуация автомобилей, быстро и дешево. Даем гарантию. Просто наберите ${phoneTitle}, мы будем у Вас в течении 10 минут. `,
};

export default async function HomePage() {
  return <PageHome />;
}
