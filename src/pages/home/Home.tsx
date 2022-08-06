
import React from 'react';
import messages from '../../assets/local/messages';
import Slider from '../../components/slider/Slider';
import ImageWithText from '../../components/shared/image-with-text/ImageWithText'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/button/Button';

import CardDetails from '../../components/shared/card/CardDetails';
import "./Home.scss"
import HorizLine from '../../components/shared/horizontor-line/HorizLine';
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
    }
  ]
  return (
    <>
      <Slider items={sliders} />
      {/* <div className="mx-auto flex flex-col space-y-10 md:space-y-20 px-10 md:px-20 lg:px-40"> */}
      <div className="mx-auto grid grid-cols-1 gap-12 md:space-y-20 px-10 md:px-20 lg:px-40">

        {/* First section */}
        <div className='flex justify-between '>
          <span>{messages.ar.mostReading}</span>
          <span className='flex items-center'>
            {messages.ar.readMore}
            <span className='ms-10 text-tiffany'>
              <FaChevronLeft />
            </span>
          </span>
        </div>
        <div className='grid grid-cols-3 gap-7 md:gap-12 lg:gap-18 space-y-10 lg:space-y-0'>
          {
            sliders.map((item, i) =>
              <ImageWithText imageUrl={item.img_url} contentPosition={'bottom'} key={i}>
                <h3 className="leading-loose text-lg mb-8">{item.title}</h3>
                <p className="mb-8">{item.description}</p>
                <p className="">{item.author}</p>
              </ImageWithText>)
          }
        </div>

        {/* SECODE section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 lg:gap-18'>
          <Card data={sliders[0]}></Card>
          <div className='grid grid-row-3 gap-10'>
            {
              blogs.map((item, i) =>
                <div className='flex' >
                  <img src={item.img_url} alt="" width="20%" className='me-14 rounded' />
                  <CardDetails data={item} />
                </div>
              )
            }
          </div>
        </div>

        <HorizLine />

        {/* Third section */}
        <div>
          <ImageWithText imageUrl={blogs[0].img_url} key={blogs[0].title}>
            <CardDetails data={blogs[0]} key={blogs[0].title} size="lg" theme="light" />

            {/* <h3 className="leading-loose text-lg mb-8 text-center">{blogs[0].title}</h3>
            <p className="mb-8 text-center">{blogs[0].description}</p>
            <p className="text-center">{blogs[0].author}</p> */}
          </ImageWithText>
        </div>

        {/* Fourth section */}
        <div className='flex justify-between'>
          <div className='text-black600 space-x-20'>
            <button className='active me-20'> {messages.ar.mostWatching}</button>
            <button> {messages.ar.mostPopular}</button>
            <button> {messages.ar.mostReading}</button>
          </div>
          <div className="flex">
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4">
              <FaChevronRight />
            </Button>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" >
              <FaChevronLeft />
            </Button>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-12 lg:gap-18'>
            {
              blogs.map((item, i) =>
                <Card data={item} key={i}></Card>
              )
            }
          </div>

        </div>
        {/* Section  */}
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/6 lg:me-10 mt-10 lg:mt-0'>
            {
              blogs.map((item, i) => <>
                <CardDetails data={item} key={i} />
                <HorizLine />
              </>)
            }
          </div>

          <ImageWithText imageUrl={blogs[1].img_url} contentPosition="bottom" key={blogs[1].title} customClasses="order-first lg:order-last" >
            <CardDetails data={blogs[1]} key={blogs[1].title} size="lg" theme="light" />
          </ImageWithText>
        </div>

      </div>

    </>
  );
};

export default Home;


