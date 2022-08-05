
import React from 'react';
import messages from '../../../assets/local/messages';
import { FaSistrix, FaRegMoon } from 'react-icons/fa';
import Newsletter from "../newsletter/Newsletter"
export const Footer = () => {

  return (
    <>
      <div className='left-0 bottom-0 w-full '>
        <Newsletter />
        <div className='min-h-50 flex flex-col md:flex-row md:justify-between px-10 md:px-20 lg:px-60 py-20 bg-white items-center '>
          <span> <span className='text-black600 me-2'>{messages.ar.copyRight}</span>
            <span className='text-black900'>{messages.ar.companyBlog}</span>
          </span>

          <div className='flex'>
            <button className=' border-solid border-black border-full p-3 '>
              <FaSistrix /></button>
            <button className=' border-solid border-black border-full p-3'>
              <FaRegMoon /></button>
          </div>
          <a href="/" className='text-orang'> {messages.ar.termAndConditions}</a>
        </div>
      </div>
    </>
  );
};

export default Footer;


