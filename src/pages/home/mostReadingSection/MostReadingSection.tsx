
import React from 'react';

import ImageWithText from '../../../components/shared/image-with-text/ImageWithText';
import { FaChevronLeft } from 'react-icons/fa';
import { CardDetails, CardDetailsInterface } from '../../../components/shared/card/CardDetails';
import messages from '../../../assets/local/messages';
import Card from '../../../components/shared/card/Card';
import HorizLine from '../../../components/shared/horizontor-line/HorizLine';
import { Link, useNavigate } from 'react-router-dom';

export const MostReadingSection = ({ data }: { data: CardDetailsInterface[] }) => {


  const activeItem = data[0]
  const width = window.innerWidth;
  let navigate = useNavigate();

  return (
    <>
      {/* First section */}
      <div>
        <div className='flex justify-between mt-20'>
          <h4>{messages.ar.mostReading}</h4>
          <Link to="/reports" className='flex items-center' >
            {messages.ar.readMore}
            <span className='ms-5 text-tiffany'>
              <FaChevronLeft />
            </span>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-12 lg:gap-18 items-start mt-10'>
          {
            data.map((item, i) =>
              <ImageWithText imageUrl={item.img_url} contentPosition={width >= 1115 ? 'bottom' : 'middle'} key={i} customClasses="h-full">
                <CardDetails data={item} theme="light" hideSubtitle={true} />
              </ImageWithText>)
          }
        </div>
      </div>
      {/* Second section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-12 lg:gap-18'>
        <Card data={activeItem} callbackFunc={() => {
          navigate(`/reports/${activeItem.id}`, { replace: true });
        }}></Card>
        <div className='flex flex-col space-y-7 gap-10'>
          {
            data.map((item, i) =>
              <div className='flex' key={i}>
                <img src={item.img_url} alt="" className='me-14 rounded w-1/5 shrink-0' />
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

