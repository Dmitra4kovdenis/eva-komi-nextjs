import { FC } from "react";
import Prices from "@/containers/page-home/prices";
import { Banner } from "@/containers/banner";

export const PageHome: FC = () => {
  return (
    <>
      <Banner/>
      <Prices />
    </>
  );
};
