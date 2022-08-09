
import React from 'react';
import CardDetails from "./CardDetails"
import cn from "classnames"
export const Card = ({ data, isJustifyHight, callbackFunc }: { data: any, isJustifyHight?: boolean, callbackFunc?: () => void }) => {
  return (
    <>
      <div className={cn('flex flex-col shadow-soft', { 'cursor-pointer': callbackFunc })} onClick={callbackFunc}>
        <div className={cn('mb-10', { 'h-2/3': isJustifyHight })}>
          <img src={data.img_url} alt="" className='object-cover rounded-t' />
        </div>
        <CardDetails data={data} />
      </div>
    </>
  );
};

export default Card;


