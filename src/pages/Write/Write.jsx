// pages Write.jsx

import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Write.module.css';
import articleArr from '../../articles';
import langArr from '../../lang';

const Write = ({ currentLanguage }) => {
  const [selectedText, setSelectedText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const scrollTo = () => {
    scroll.scrollTo(950);
  };

  const getArticleNumber = () => {
    return localStorage.getItem('number of item') || 0;
  };

  const setItemNumber = number => {
    localStorage.setItem('number of item', number);
  };

  const getArticle = () => {
    const articleNumber = parseInt(getArticleNumber(), 10);
    const article = articleArr.find(item => item.id === articleNumber); 
    const text = article?.text[currentLanguage] || langArr.oops?.[currentLanguage];
    setSelectedText(text);
  };

  const handleClickOnList = e => {
    const selectedItemValue = e.target.value;
    setItemNumber(selectedItemValue);
    getArticle();
    setSelectedItem(selectedItemValue); // Встановлюємо вибраний елемент
    scrollTo();
  };

  const renderContentItems = () => {
    return articleArr.map((article, index) => ( 
      <li key={index}>
        <button
          type="button"
          className={`${selectedItem === article.id.toString() ? css.current : css.contentItem}`}
          onClick={handleClickOnList}
          value={article.id}
        >
          {currentLanguage === 'ua' ? article.name.ua : article.name.en}
        </button>
      </li>
    ));
  };

  const selectedArticle = articleArr.find(item => item.id.toString() === selectedItem);


  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <h2 className={css.title}>{currentLanguage === 'ua' ? langArr.writePageTitle.ua : langArr.writePageTitle.en}</h2>
        <div className={css.container}>
          <ol className={css.content} type="1">
            {renderContentItems()}
          </ol>
          <article className={css.article} name="article">
          <p className={css.date}>
              {selectedArticle ? selectedArticle.date[currentLanguage] : ''}
            </p> {/* Динамічно підставляємо дату */}
            <p className={css.remark}>
              {selectedArticle ? selectedArticle.remark[currentLanguage] : ''}
            </p> {/* Динамічно підставляємо коментар */}
            <br/>
            {selectedText === ''
              ? currentLanguage === 'ua'
                ? <p className={css.oops}>{langArr.click.ua}</p>
                : <p className={css.oops}>{langArr.click.en}</p>
              : selectedText.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
          </article>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Write;
