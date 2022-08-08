

import React, { useState } from 'react';
import Navbar from '../../components/shared/navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/shared/footer/Footer';
import messages from '../../assets/local/messages';
import Button from '../../components/shared/button/Button';
import { FaRegMoon, FaSistrix } from 'react-icons/fa';
import cn from "classnames"
export const Layout = () => {
  let menuItems = [
    { name: messages.ar.menuItems.home, url: '/' }, { name: messages.ar.menuItems.reports, url: '/reports' }, { name: messages.ar.menuItems.assay, url: '/' }
  ]
  const [isDarkMode, setDarkMode] = useState(true);
  let logoInfo: { name_ar: string, name_en: string, url?: string } = { name_ar: messages.ar.appName, name_en: messages.en.appName }


  let logo;
  if (logoInfo?.url) {
    logo = <img src={logoInfo.url} alt={logoInfo.name_ar} height="70px" className='pe-40' />;
  } else {
    logo = <span className='pe-40 text-2xl'>{logoInfo?.name_ar} | {logoInfo?.name_en}</span>;
  }
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;


