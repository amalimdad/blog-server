

import React, { createRef, useEffect, useState } from 'react';
import "./Slider.scss"
import cn from "classnames"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '../shared/button/Button';

const Slider = ({ items }: { items: SliderInterface[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsReference = items.reduce((elements: Record<string, any>, item, index) => {
    elements[index] = createRef();
    return elements;
  }, {});

  const prev = () => {
    currentIndex === 0
      ? onScroll(items.length - 1)
      : onScroll(currentIndex - 1)
  };
  const next = () => {
    currentIndex >= items.length - 1
      ? onScroll(0)
      : onScroll(currentIndex + 1);
  };
  const onScroll = (i: number) => {
    setCurrentIndex(i);
    itemsReference[i].current?.scrollIntoView({
      behavior: 'smooth',
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  });

  const carouselControl = (isLeft?: boolean,) => (
    <Button textColor="white" borderColor="gray-light" bgColor="transparent"
      shape="full-sm" extraClasses={cn('absolute top-[40%]', { 'md:left-20 left-10': isLeft, 'md:right-24 right-10': !isLeft })}
      onClick={isLeft ? prev : next}>
      <span className='text-white text-2xl'>{isLeft ? <FiChevronLeft /> : <FiChevronRight />} </span>
    </Button>
  );

  return (
    <>

      <div className="flex justify-center w-screen relative">
        <div className="slider">
          <div className="overlay"></div>
          {carouselControl(true)}
          {items.map((item, i) => (<>

            <div className="w-full flex-shrink-0" key={i} ref={itemsReference[i]}>
              <img
                src={item.img_url}
                className="w-full h-full object-cover"
                alt={item.title}
              />
              <div className='text-white text-xl top-1/2 opacity-100 px-12 left-1/2 transform  -translate-x-[36%] md:-translate-x-[45%]  -translate-y-[464%] lg:-translate-y-[1328%] md:-translate-y-[775%] ' >
                <p className=''>{item.title}</p>
              </div>

            </div>
          </>
          ))}
          {carouselControl()}
          {/* <!-- The dots/circles --> */}
          <div className='content-details'>
            {
              items.map((item, index) =>
                <span className='' onClick={() => { console.log(index + 1) }}></span>
              )
            }
          </div>

        </div>
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