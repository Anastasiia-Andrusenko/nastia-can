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
  const getLanguage = () => {
    const lang = localStorage.getItem('language') || 'en'; // Повертаємо 'en' як мову за замовчуванням, якщо немає значення у localStorage
    return lang;
  };

  const currentLanguage = getLanguage(); // Отримати поточну мову

  return (
    <div className={css.container}>
      <Routes>
        <Route index element={<HomePage currentLanguage={currentLanguage} />} />
        <Route
          path="/write"
          element={<WritePage currentLanguage={currentLanguage} />}
        />
        <Route
          path="/draw"
          element={<DrawPage currentLanguage={currentLanguage} />}
        />
        <Route
          path="/code"
          element={<CodePage currentLanguage={currentLanguage} />}
        />
        <Route
          path="/photo"
          element={<PhotoPage currentLanguage={currentLanguage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
