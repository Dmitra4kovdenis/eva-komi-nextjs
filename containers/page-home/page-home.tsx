import { FC } from "react";
import Prices from "@/containers/page-home/prices";
import WhenToCall from "@/containers/page-home/when-to-call";
import { Banner } from "@/containers/page-home/banner";
import WorkGallery from "@/containers/page-home/work-gallery";
import BannerRoad from "@/containers/page-home/banner-road";
import Transportation from "@/containers/page-home/transportation";
import CallBlock from "@/containers/page-home/call-block";
import { Footer } from "@/containers/footer";
import ForCall from "@/containers/page-home/for-call";

export const PageHome: FC = () => {
  return (
    <>
      <Banner />
      <ForCall />
      <Prices />
      <WorkGallery />
      <WhenToCall />
      <BannerRoad />
      <Transportation />
      <CallBlock />
      <Footer />
    </>
  );
};
