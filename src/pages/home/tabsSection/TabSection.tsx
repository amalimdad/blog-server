
import React from 'react';

import ImageWithText from '../../../components/shared/image-with-text/ImageWithText';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CardDetails } from '../../../components/shared/card/CardDetails';
import messages from '../../../assets/local/messages';
import Card from '../../../components/shared/card/Card';
import HorizLine from '../../../components/shared/horizontor-line/HorizLine';
import Button from '../../../components/shared/button/Button';

export const TabsSection = ({ data }: any) => {
  const activeItem = data[0]
  return (
    <>
      {/* Tabs 
      *TODO: convert this into shared component
       */}
      <div className='flex justify-between'>
        <div className='text-black600 space-x-20'>
          <button className='active me-10 md:me-20'> {messages.ar.mostWatching}</button>
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
      {/* First section */}
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-12 lg:gap-18'>
          {
            data.map((item: CardDetails, i: number) =>
              <Card data={item} key={i} isJustifyLength="true"></Card>
            )
          }
        </div>

      </div>
      {/* First section */}
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/5 lg:me-10 mt-10 lg:mt-0'>
          {
            data.map((item: CardDetails, i: number) => <>
              <CardDetails data={item} lineClamp="2" key={i} />
              <HorizLine />
            </>)
          }
        </div>
        <ImageWithText imageUrl={activeItem.img_url} contentPosition="bottom" key={activeItem.title} customClasses=" order-first lg:order-last" >
          <CardDetails data={activeItem} key={activeItem.title} size="lg" theme="light" />
        </ImageWithText>

      </div>
    </>
  );
};

export default TabsSection;