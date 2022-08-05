
import React from 'react';
import messages from '../../assets/local/messages';
import Slider from '../../components/slider/Slider';

export const Home = () => {
  let sliders = [
    {
      img_url: "https://i.ytimg.com/vi/xZJcJ6QRvfY/maxresdefault.jpg",
      title: "this is title one", description: "this is description one "
    },
    {
      img_url: "http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      title: "this is title two", description: "this is description two "
    },
    {
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "this is title three", description: "this is description three "
    }
  ]
  return (
    <>
      <Slider items={sliders} />
      <div></div>
    </>
  );
};

export default Home;


