
import React from 'react';
import cn from 'classnames'
export const CardDetails = ({ data, size, theme, hideSubtitle, lineClamp }:
  {
    data: CardDetailsInterface, size?: 'lg';
    theme?: 'light' | 'default',
    lineClamp?: number;
    hideSubtitle?: boolean
  }) => {
  const lineNumber = lineClamp && `line-clamp-${lineClamp}`
  return (
    <>
      <div className='flex flex-col justify-start pb-10 '>
        {
          data.subtitle?.length > 0 ?
            <p className={cn('text-black800 mb-7', { 'hidden': hideSubtitle })}>
              <span className='text-tiffany me-3'>|</span>
              <span className={cn({
                'text-base': size === 'lg', 'text-sm': !size,
                'text-gray50': theme === 'light', 'text-black800': !theme
              })}
              > {data.subtitle}
              </span>
            </p>
            : ''
        }
        <p className={size === 'lg' ? 'text-2xl md:text-4xl' : 'text-lg'} >{data.title}</p>
        <p className={cn('text-black600', lineNumber, { 'text-lg md:text-xl my-7': size === 'lg', 'text-sm lg:text-lg my-3 lg:my-7 ': !size, 'text-gray100': theme === 'light' })}>{data.description}</p>
        <p className={cn('text-black800 ', { 'text-sm': size === 'lg', 'text-base': !size, 'text-gray100': theme === 'light' })}>{data.author}</p>
      </div>
    </>
  );
};

export default CardDetails;

export interface CardDetailsInterface {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  img_url?: string;
}