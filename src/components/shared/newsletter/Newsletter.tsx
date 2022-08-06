
import React from 'react';
import messages from '../../../assets/local/messages';



export const Newsletter = () => {
  return (
    <>
      <div className='bg-grayNeutrals50 py-20  justify-center items-center leading-relaxed'>
        <p className='text-black leading-8'> {messages.ar.termAndConditions}</p>
        <span className='font-normal leading-8'>{messages.ar.termAndConditions}</span>
        <div>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;


