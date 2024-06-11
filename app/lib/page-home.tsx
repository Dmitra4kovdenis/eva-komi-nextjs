"use client";

import { FC } from "react";
import Prices from "./prices";
import WhenToCall from "./when-to-call";
import { Banner } from "./banner";
import WorkGallery from "./work-gallery";
import BannerRoad from "./banner-road";
import Transportation from "./transportation";
import CallBlock from "./call-block";
import ForCall from "./for-call";
import { Advantages } from "./advantages/advantages";
import CallInstructions from "./сall-instructions";
import VkBlock from "./vk-block/vk-block";
import Faq from "./faq/faq";

const PageHome: FC = () => {
  return (
    <>
      <Banner />
      <Advantages />
      <ForCall />
      <WorkGallery />
      <WhenToCall />
      <Prices />
      <BannerRoad />
      <Transportation />
      <CallInstructions />
      <VkBlock />
      <Faq />
    </>
  );
};

export default PageHome;
