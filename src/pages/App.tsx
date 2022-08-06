import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import Navbar from "../components/shared/navbar/Navbar";
import messages from "../assets/local/messages"
import Footer from '../components/shared/footer/Footer';
import Home from '../pages/home/Home';

function App() {
  let logoInfo: { name_ar: string, name_en: string, url?: string } = { name_ar: messages.ar.appName, name_en: messages.en.appName }
  let items = [
    messages.ar.menuItems.home, messages.ar.menuItems.reports, messages.ar.menuItems.assay
  ]


  return (
    <main dir='rtl'>
      <Navbar logoInfo={logoInfo} menuItems={items} />
      <aside className="min-h-screen">
        <Home />
      </aside>

      {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline text-black600">
          Hello world!
        </h1>

      </header> */}
      <Footer />
    </main>
  );
}

export default App;
