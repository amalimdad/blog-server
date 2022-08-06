
import React from 'react';
import cn from 'classnames'
export const CardDetails = ({ data, size, theme, hideSubtitle }: any) => {
  return (
    <>
      <div className='flex flex-col justify-start pb-10 '>
        <p className={cn('text-black800 mb-7', { 'hidden': hideSubtitle })}><span className='text-tiffany me-3'>|</span> <span className={cn({ 'text-base': size === 'lg', 'text-sm': !size, 'text-grayNeutrals50': theme === 'light', 'text-black800': !theme })} > {data.subtitle}</span></p>
        <p className={size === 'lg' ? 'text-4xl' : 'text-lg'} >{data.title}</p>
        <p className={cn('text-black600 my-7', { 'text-xl': size === 'lg', 'text-grayNeutrals100': theme === 'light' })}>{data.description}</p>
        <p className={cn('text-black800 ', { 'text-sm': size === 'lg', 'text-base': !size, 'text-grayNeutrals100': theme === 'light' })}>{data.author}</p>
      </div>
    </>
  );
};

export default CardDetails;

export interface CardDetails {
  title: string,
  subtitle: string;
  description: string;
  author: string;
  img_url?: string
}
export interface CardDetailsProps {
  data: CardDetails;
  size?: 'lg';
  theme?: 'light' | 'default'
}

