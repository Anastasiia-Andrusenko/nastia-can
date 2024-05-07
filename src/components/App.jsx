import css from './App.module.css';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home/Home'));
const WritePage = lazy(() => import('../pages/Write/Write'));
const DrawPage = lazy(() => import('../pages/Draw/Draw'));
const CodePage = lazy(() => import('../pages/Code/Code'));
const PhotoPage = lazy(() => import('../pages/Photo/Photo'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/draw" element={<DrawPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
