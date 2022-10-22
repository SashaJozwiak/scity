import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from './pages/Contacts.jsx';
import Corporation from './pages/Corporation/Corporation.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Partners from './pages/Partners.jsx';
import Main from './pages/Main.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={< Main />} />
      <Route path='corporation/*' element={< Corporation />} />
      <Route path='contacts' element={< Contacts />} />
      <Route path='projects/*' element={< Projects />} />
      <Route path='partners' element={< Partners />} />
      <Route path='*' element={< Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
