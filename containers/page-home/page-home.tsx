import { FC } from "react";
import Prices from "@/containers/page-home/prices";
import { Banner } from "@/containers/page-home/banner";
import WorkGallery from "@/containers/page-home/work-gallery";
import BannerRoad from "@/containers/page-home/banner-road";

export const PageHome: FC = () => {
  return (
    <>
      <Banner />
      <Prices />
      <WorkGallery />
      <BannerRoad />
    </>
  );
};
