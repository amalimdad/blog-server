import React from "react";
import EmptyStateSrc from '../../../assets/images/empty-state.svg'
import cn from "classnames";

const EmptyState = ({ label, size }: { label?: string, size?: 'lg' | 'md' | 'sm' }) => {

  return (
    <div className="flex flex-col items-center">
      <img src={EmptyStateSrc} alt="empty-data"
        className={cn('m-20', { 'w-60': size === 'sm', 'w-80': size === 'md', 'w-150': !size || size === 'lg' })}
      />
      <p className="text-xl text-black600 "> {label}</p>
    </div>
  );
};

export default EmptyState;
