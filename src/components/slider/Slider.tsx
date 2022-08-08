

import React from 'react';
import messages from '../../assets/local/messages';
import "./Slider.scss"

import cn from "classnames"
const Slider = ({ items }: any) => {

  return (
    <>
      <div className="slideshow-container">
        {
          items.map((item: SliderInterface, i: number) => {

            <div key={i} className="mySlides fade">
              <img src={item.img_url} className="w-full" />
              <div className=" text-tiffany">{item.title}</div>
            </div>
          })
        }
        <a className="prev" onClick={() => {
          console.log("test");
        }}>prev</a>
        <a className="next" onClick={() => {
          console.log("test");
        }}>next</a>

      </div>
    </>
  );
};

export default Slider;



interface SliderInterface {
  img_url: string;
  title: string;
  description: string;
  redirect_url?: string;
}