
import React, { useState } from 'react';

import ImageWithText from '../../../components/shared/image-with-text/ImageWithText';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CardDetails, CardDetailsInterface } from '../../../components/shared/card/CardDetails';
import messages from '../../../assets/local/messages';
import Card from '../../../components/shared/card/Card';
import HorizLine from '../../../components/shared/horizontor-line/HorizLine';
import Button from '../../../components/shared/button/Button';
import cn from 'classnames';
import Loader from '../../../components/shared/loader/Loader';
import EmptyState from '../../../components/shared/empty-state/EmptyState';
import { SpliceArrayInToFirstSub } from "../../../utils/Utils"
import { useNavigate } from 'react-router-dom';

export const TabsSection = ({ data }: { data: CardDetailsInterface[] }) => {
  const activeItem = data[0];
  const tabItems = [messages.ar.mostWatching, messages.ar.mostPopular, messages.ar.mostReading];
  const [active, setActive] = useState(tabItems[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState(SpliceArrayInToFirstSub(data, 3));
  let navigate = useNavigate();

  const onTabChanged = (tab: string, i: number): void => {
    setActive(tab);
    setActiveIndex(i);
    setIsLoading(true);
    //TODO: get data of active tab
    // For testing
    if (i === 1) {
      setIsLoading(false);
      setBlogs([])
    } else {
      setBlogs(SpliceArrayInToFirstSub(data, 3))
      setIsLoading(false);
    }
  }
  return (
    <>
      {/* Tabs 
      *TODO: convert this into shared component
       */}
      <div>
        <div className='flex justify-between'>
          <div className='text-black600 space-x-20'>
            {tabItems.map((tab, i) => (
              <button key={i} onClick={() => onTabChanged(tab, i)}
                className={cn(' me-10 md:me-20', { 'active': active === tab })}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex">
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4" onClick={() => {
                if (activeIndex > 0) {
                  setActive(tabItems[activeIndex - 1]);
                  setActiveIndex(activeIndex - 1);
                }
              }}>
              <FaChevronRight />
            </Button>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" onClick={() => {
                if (activeIndex < tabItems.length - 1) {
                  setActive(tabItems[activeIndex + 1]);
                  setActiveIndex(activeIndex + 1);
                }
              }}>
              <FaChevronLeft />
            </Button>
          </div>
        </div>
        {/* Active Tab body */}
        {
          isLoading ? <Loader />
            : blogs.length === 0
              ? <EmptyState size="md" label="Opps ! there is no data" />
              : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-12 lg:gap-18 mt-10'>
                {blogs.map((item, i) =>
                  <Card data={item} key={i} isJustifyHight={true} callbackFunc={() => {
                    navigate(`/reports/${item.id}`, { replace: true });
                  }}></Card>
                )}
              </div>
        }
      </div>
      {/* First section */}
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/5 lg:me-10 mt-10 lg:mt-0'>
          {
            data.map((item, i) => <>
              <CardDetails data={item} lineClamp={2} key={i} />
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