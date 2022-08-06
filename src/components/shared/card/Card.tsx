
import React from 'react';
import CardDetails from "./CardDetails"

export const Card = ({ data }: any) => {

  return (
    <>
      <div className='flex flex-col shadow-soft'>
        <div className='h-2/3 mb-20'>
          <img src={data.img_url} alt="" className='object-cover rounded-t' />
        </div>
        <CardDetails data={data} />
      </div>
    </>
  );
};

export default Card;


