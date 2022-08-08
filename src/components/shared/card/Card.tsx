
import React from 'react';
import CardDetails from "./CardDetails"
import cn from "classnames"
export const Card = ({ data, isJustifyLength }: any) => {
  return (
    <>
      <div className='flex flex-col shadow-soft'>
        <div className={cn('mb-10', { 'h-2/3': isJustifyLength })}>
          <img src={data.img_url} alt="" className='object-cover rounded-t' />
        </div>
        <CardDetails data={data} />
      </div>
    </>
  );
};

export default Card;


