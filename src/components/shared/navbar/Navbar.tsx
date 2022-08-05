
import React, { useState, useEffect } from 'react';
import messages from "../../../assets/local/messages"
import cn from 'classnames';
import { FaSistrix, FaRegMoon } from 'react-icons/fa';

export const Navbar = ({
  logoInfo,
  isDarkMode,
  menuItems
}: NavbarInterface) => {

  if (!menuItems) {
    menuItems = [
      messages.ar.menuItems.home, messages.ar.menuItems.reports, messages.ar.menuItems.assay
    ]
  }
  let logo;
  if (logoInfo?.url) {
    logo = <img src={logoInfo.url} alt={logoInfo.name_ar} height="70px" className='pe-40' />;
  } else {
    logo = <span className='pe-40 text-2xl'>{logoInfo?.name_ar} | {logoInfo?.name_en}</span>;
  }

  return (
    <>
      <div className={cn('flex justify-between min-h-20 sticky top-0 z-50 w-screen items-center px-5 md:px-20 lg:px-60 py-10 ', { 'bg-black': isDarkMode })} >
        <div className='text-white'>
          {logo}
          {
            menuItems.map((item, index) => <span className='px-10 ' key={index}>{item}</span>)
          }
        </div>
        <div className='flex'>
          <button className='text-white border-solid border-white border-full p-4 me-10'>
            <FaSistrix /></button>
          <button className='text-white border-solid border-white border-full p-4'>
            <FaRegMoon /></button>
        </div>
      </div>

    </>
  );
};

export default Navbar;


interface NavbarInterface {
  logoInfo: { name_ar: string, name_en: string, url?: string };
  isDarkMode?: boolean;
  menuItems?: string[];
}