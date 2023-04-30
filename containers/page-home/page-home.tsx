import { FC } from "react";
import Prices from "@/containers/page-home/prices";
import WhenToCall from "@/containers/page-home/when-to-call";
import { Banner } from "@/containers/page-home/banner";
import WorkGallery from "@/containers/page-home/work-gallery";
import BannerRoad from "@/containers/page-home/banner-road";
import Transportation from "@/containers/page-home/transportation";

export const PageHome: FC = () => {
  return (
    <>
      <Banner />
      <Prices />
      <WorkGallery />
      <WhenToCall />
      <BannerRoad />
      <Transportation/>
    </>
  );
};
