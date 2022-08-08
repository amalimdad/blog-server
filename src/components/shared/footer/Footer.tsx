
import React from 'react';
import messages from '../../../assets/local/messages';
import Newsletter from "../newsletter/Newsletter"
import Button from '../button/Button';
import { FaChevronRight } from 'react-icons/fa';
export const Footer = () => {

  return (
    <>
      <div className='left-0 bottom-0 w-full mt-50 '>
        <Newsletter />
        <div className='min-h-50 flex flex-col lg:flex-row md:justify-between px-10 md:px-20 lg:px-60 py-20 bg-white items-center space-y-6 lg:space-y-0 '>
          <span> <span className='text-black600 me-2'>{messages.ar.copyRight}</span>
            <span className='text-black900'>{messages.ar.companyBlog}</span>
          </span>

          <div className='flex space-x-10 '>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4">
              <FaChevronRight />
            </Button>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4">
              <FaChevronRight />
            </Button>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4">
              <FaChevronRight />
            </Button>
            <Button textColor="gray" borderColor="gray-light" bgColor="gray-lighter"
              shape="full-sm" extraClasses="me-4">
              <FaChevronRight />
            </Button>

            <div className="border-s border-black800 "></div>

            <Button bgColor="orang" shape="rounded" extraClasses="me-4 px-10 py-5">
              {messages.ar.beFirstCommenter}
            </Button>
          </div>
          <a href="/" className='text-black600'> {messages.ar.termAndConditions}</a>
        </div>
      </div>
    </>
  );
};

export default Footer;


