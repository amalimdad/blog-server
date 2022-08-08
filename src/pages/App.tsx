import { createContext } from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';
import Navbar from "../components/shared/navbar/Navbar";
import messages from "../assets/local/messages"
import Footer from '../components/shared/footer/Footer';
import Home from '../pages/home/Home';
import Reports from '../pages/reports/Reports';

import Slider from '../components/slider/Slider';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import React from 'react';
import PageNotFound from './page-404/PageNotFound';
import Layout from './layout/Layout';

function App() {



  const LangContext = createContext(localStorage.getItem('lang') ?? 'ar')

  return (
    <>
      <BrowserRouter>
        <div dir='rtl'>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="*" element={< PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;

// export const Home = React.lazy(() => import('../pages/home/Home'));
// export const Reports = React.lazy(() => import('../pages/reports/Reports'));

