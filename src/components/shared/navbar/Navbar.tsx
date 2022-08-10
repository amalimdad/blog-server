
import React, { useState } from 'react';
import messages from "../../../assets/local/messages"
import cn from 'classnames';
import { FaSistrix, FaRegMoon, FaBars } from 'react-icons/fa';
import Button from '../button/Button';
import { Link } from 'react-router-dom'

export const Navbar = ({ menuItems }:
  { menuItems?: { name: string, url: string }[]; }) => {

  const [isDarkMode, setDarkMode] = useState(true);

  let logoInfo: {
    name_ar: string,
    name_en: string,
    url?: string
  } = { name_ar: messages.ar.appName, name_en: messages.en.appName }

  if (!menuItems) {
    menuItems = [
      { name: messages.ar.menuItems.home, url: '/' },
      { name: messages.ar.menuItems.reports, url: '/reports' },
      { name: messages.ar.menuItems.assay, url: '/essays' }
    ]
  }

  return (
    <>
      <div className={cn('flex justify-between min-h-20 sticky top-0 z-1000 w-screen items-center px-5 md:px-20 lg:px-60 py-10 ', { 'bg-black': isDarkMode, 'shadow-popup bg-white': !isDarkMode })} >
        <div className={isDarkMode ? 'text-white' : "text-black"}>
          <div className='inline-flex'>
            <Button textColor={isDarkMode ? 'text-white' : 'text-black'} borderStyle='none' bgColor="transparent"
              shape="full-sm" extraClasses="inline md:hidden me-10" onClick={() => { }}>
              <FaBars />
            </Button>


            {
              logoInfo?.url
                ? <Link to="/" ><img src={logoInfo.url} alt={logoInfo.name_ar} height="70px" className='pe-40' /></Link>
                : <Link to="/" ><span className='pe-40 text-2xl'>{logoInfo?.name_ar} | {logoInfo?.name_en}</span></Link>
            }
          </div>
          {
            menuItems.map((item, index) =>
              <Link to={item.url} key={index} className='px-10 hidden md:inline' > {item.name} </Link>)
          }
        </div>
        <div className={cn('flex', { 'text-white': isDarkMode, 'text-black': !isDarkMode })} >
          <Button textColor="white" borderColor={isDarkMode ? "gray-light" : "black"} bgColor="transparent" extraClasses="me-10"
            shape="full-sm">
            <FaSistrix />
          </Button>

          <Button textColor="white" borderColor={isDarkMode ? "gray-light" : "black"} bgColor="transparent"
            shape="full-sm" extraClasses="me-10" onClick={() => {
              setDarkMode(!isDarkMode)
            }}>
            <FaRegMoon />
          </Button>

        </div>
      </div>

    </>
  );
};

export default Navbar;

