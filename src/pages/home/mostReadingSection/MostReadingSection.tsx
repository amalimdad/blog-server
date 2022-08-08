
import React from 'react';

import ImageWithText from '../../../components/shared/image-with-text/ImageWithText';
import { FaChevronLeft } from 'react-icons/fa';
import { CardDetails } from '../../../components/shared/card/CardDetails';
import messages from '../../../assets/local/messages';

import Card from '../../../components/shared/card/Card';
import HorizLine from '../../../components/shared/horizontor-line/HorizLine';

export const MostReadingSection = ({ data }: any) => {


  const activeItem = data[0]


  return (
    <>
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
      <div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-12 lg:gap-18 items-start'>
        {
          data.map((item: CardDetails, i: number) =>
            <ImageWithText imageUrl={item.img_url} contentPosition={'bottom'} key={i} customClasses="h-full">
              <CardDetails data={item} theme="light" hideSubtitle='true' />
            </ImageWithText>)
        }
      </div>

      {/* Second section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-12 lg:gap-18'>
        <Card data={activeItem}></Card>
        <div className='flex flex-col space-y-7 gap-10'>
          {
            data.map((item: CardDetails, i: number) =>
              <div className='flex' key={i}>
                <img src={item.img_url} alt="" className='me-14 rounded w-1/5' />
                <CardDetails data={item} />
              </div>
            )
          }
        </div>
      </div>
      <HorizLine />
    </>
  );
};

export default MostReadingSection;

