import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import Navbar from './components/shared/navbar/Navbar';
import messages from "./assets/local/messages"
import Footer from './components/shared/footer/Footer';
function App() {
  let logoInfo: { name_ar: string, name_en: string, url?: string } = { name_ar: messages.ar.appName, name_en: messages.en.appName }
  let items = [
    messages.ar.menuItems.home, messages.ar.menuItems.reports, messages.ar.menuItems.assay
  ]
  let logo, isDarkMode: boolean = true;
  if (logoInfo?.url) {
    logo = <img src={logoInfo.url} alt={logoInfo.name_ar} height="70px" className='pe-28' />;
  } else {
    logo = <span className='pe-28 text-2xl'>{logoInfo?.name_ar} | {logoInfo?.name_en}</span>;
  }
  return (
    <div className="App" dir='rtl'>
      <Navbar logoInfo={logoInfo} isDarkMode={true} menuItems={items} />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1 className="text-3xl font-bold underline text-black600">
          Hello world!
        </h1>
        <span className='sa-icon__search'></span>
      </header>
      <Footer />
    </div>
  );
}

export default App;
