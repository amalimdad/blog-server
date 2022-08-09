import { createContext } from 'react';
import './App.scss';
import Home from '../pages/home/Home';
import Reports from '../pages/reports/Reports';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import React from 'react';
import PageNotFound from './page-404/PageNotFound';
import Layout from './layout/Layout';
import ViewReport from './reports/view/viewReport';
import Essays from './essays/Essays';

function App() {
  const LangContext = createContext(localStorage.getItem('lang') ?? 'ar')

  return (
    <>
      <BrowserRouter>
        <div dir='rtl'>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/reports' element={<Reports />} />
              <Route path="/reports/:id" element={<ViewReport />} />
              <Route path='/essays' element={<Essays />} />
              <Route path="*" element={< PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
