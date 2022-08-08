
import React from 'react';
import Slider from '../../components/slider/Slider';
import ImageWithText from '../../components/shared/image-with-text/ImageWithText'
import { SpliceThreeItems } from "../../utils/Utils"
import CardDetails from '../../components/shared/card/CardDetails';
import "./Home.scss"
import MostReadingSection from './mostReadingSection/MostReadingSection';
import TabsSection from "./tabsSection/TabSection"
export const Home = () => {
  let sliders = [
    {
      img_url: "https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022.ashx?bid=d66124ce6b944fad86f787828cc8337b&h=1040&w=1536&hash=97CE6501D10D5930CAE420E1ADC154BB",
      title: "التسويق", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",

      author: "امل سليم"
    },
    {
      img_url: "https://eatsleepworkrepeat.com/wp-content/uploads/2020/06/office.jpg",
      title: "التسويق", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      author: "aamal saleem"
    },
    {
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "this is title three", description: "this is description three ",
      author: "aamal saleem"
    }
  ]
  let blogs = [
    {
      img_url: "https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022.ashx?bid=d66124ce6b944fad86f787828cc8337b&h=1040&w=1536&hash=97CE6501D10D5930CAE420E1ADC154BB",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      img_url: "https://eatsleepworkrepeat.com/wp-content/uploads/2020/06/office.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    },
    {
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "ماهو مستقبل التجارة الالكترونية", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      subtitle: 'افكار البزنس',
      author: "امل سليم"
    }
  ]
  const subBlogs = SpliceThreeItems(blogs)
  const activeItem = blogs[0]

  return (
    <>
      <Slider items={sliders} />
      {/* <div className="mx-auto flex flex-col space-y-10 md:space-y-20 px-10 md:px-20 lg:px-40"> */}
      <div className="mx-auto grid grid-cols-1 gap-12 space-y-20 px-10 md:px-20 lg:px-40">

        <MostReadingSection data={subBlogs} />

        <ImageWithText imageUrl={activeItem.img_url} key={activeItem.title} customClasses="md:h-300 w-full">
          <CardDetails data={activeItem} key={activeItem.title} size="lg" theme="light" />
        </ImageWithText>

        <TabsSection data={subBlogs} />

      </div>

    </>
  );
};

export default Home;


