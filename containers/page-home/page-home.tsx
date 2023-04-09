import { FC } from "react";
import Prices from "@/containers/page-home/prices";
import { Banner } from "@/containers/banner";
import WhenToCall from "@/containers/page-home/when-to-call";

export const PageHome: FC = () => {
  return (
    <>
      <Banner/>
      <Prices />
      <WhenToCall/>
    </>
  );
};
