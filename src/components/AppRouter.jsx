import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from './pages/Contacts.jsx';
import Corporation from './pages/Corporation.jsx';
import News from './pages/News.jsx';
import Partners from './pages/Partners.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={< Navigate to='/corporation' />} />
      <Route path='/corporation' element={< Corporation />} />
      <Route path='/contacts' element={< Contacts />} />
      <Route path='/news' element={< News />} />
      <Route path='/partners' element={< Partners />} />
      <Route path='*' element={< Navigate to='/corporation' />} />
    </Routes>
  );
};

export default AppRouter;
