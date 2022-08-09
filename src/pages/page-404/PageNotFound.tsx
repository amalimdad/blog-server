
import React from 'react';
import messages from '../../assets/local/messages';
import Page404 from "../../assets/images/page404.png";

export const PageNotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center text-center py-auto'>
        <img src={Page404} alt="404" className='m-20' />
        {messages.ar.pageNotFound}
      </div>
    </>
  );
};

export default PageNotFound;


