import css from './App.module.css';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Footer from './Footer/Footer';

const HomePage = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
