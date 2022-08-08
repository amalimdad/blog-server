import React from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import Navbar from "../components/shared/navbar/Navbar";
import messages from "../assets/local/messages"
import Footer from '../components/shared/footer/Footer';
import Home from '../pages/home/Home';
import Slider from '../components/slider/Slider';

function App() {
  let logoInfo: { name_ar: string, name_en: string, url?: string } = { name_ar: messages.ar.appName, name_en: messages.en.appName }
  let items = [
    messages.ar.menuItems.home, messages.ar.menuItems.reports, messages.ar.menuItems.assay
  ]
  let sliders = [
    {
      img_url: "https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022.ashx?bid=d66124ce6b944fad86f787828cc8337b&h=1040&w=1536&hash=97CE6501D10D5930CAE420E1ADC154BB",
      title: "التسويق", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",

      author: "امل سليم"
    },
    {
      img_url: "https://eatsleepworkrepeat.com/wp-content/uploads/2020/06/office.jpg",
      title: "التسويق", description: "من المتوقع أن تزيد المبيعات من 1.3 تريليون عام 2014  الى 4.5 تريليون فى عام 2021",
      author: "aamal saleem"
    },
    {
      img_url: "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
      title: "this is title three", description: "this is description three ",
      author: "aamal saleem"
    }
  ]

  return (
    <main dir='rtl'>
      <Navbar logoInfo={logoInfo} menuItems={items} />
      <aside className="min-h-screen">
        <Home />
        <Slider items={sliders} />
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
