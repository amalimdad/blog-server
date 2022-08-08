
import React from 'react';
import messages from '../../../assets/local/messages';
import Button from '../button/Button';



export const Newsletter = () => {
  return (
    <>
      <div className='flex flex-col bg-gray50 py-20  justify-center items-center leading-relaxed'>
        <p className='text-black900 leading-8'> {messages.ar.registerInNewsLetter}</p>
        <span className='font-normal leading-8 text-black600'>{messages.ar.registerInNewsLetterSubtitle}</span>
        <div className='flex mt-10 bg-white rounded w-1/2 h-32'>
          <input type="text" className='w-full h-full px-20 outline-none' />
          <Button bgColor="tiffany" extraClasses="rounded-e">
            {messages.ar.actions.register}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;


