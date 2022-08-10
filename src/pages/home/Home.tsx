
import React from 'react';
import Slider from '../../components/slider/Slider';
import ImageWithText from '../../components/shared/image-with-text/ImageWithText'
import CardDetails from '../../components/shared/card/CardDetails';
import "./Home.scss";
import MostReadingSection from './mostReadingSection/MostReadingSection';
import TabsSection from "./tabsSection/TabSection";
import { BLOGS, SLIDERS } from '../../utils/Constant';

export const Home = () => {
  let sliders = SLIDERS;
  let blogs = BLOGS;

  const activeItem = blogs[0]

  return (
    <>
      <Slider items={sliders} />
      <div className="mx-auto grid grid-cols-1 gap-12 space-y-20 px-10 md:px-20 lg:px-40">

        <MostReadingSection data={blogs} />

        <ImageWithText imageUrl={activeItem.img_url} key={activeItem.title} customClasses="md:h-300 w-full">
          <CardDetails data={activeItem} key={activeItem.title} size="lg" theme="light" />
        </ImageWithText>

        <TabsSection data={blogs} />

      </div >

    </>
  );
};

export default Home;


