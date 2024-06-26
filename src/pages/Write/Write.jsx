// pages Write.jsx

import React, { useEffect, useState } from 'react';
import { scrollSpy } from 'react-scroll';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Write.module.css';
import articleArr from '../../articles';
import langArr from '../../lang';
import BtnToTop from 'components/BtnToTop/BtnToTop';

const Write = ({ currentLanguage }) => {
  const [selectedText, setSelectedText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const scrollTo = () => {
    let scrollValue;

    if (window.innerWidth > 1100) {
      scrollValue = 520; // Значення для ширини більше 1100 пікселів
    } else if (window.innerWidth >= 860) {
      scrollValue = 400; // Значення для ширини більше 860 пікселів
    } else {
      scrollValue = 860; // Значення для ширини менше або дорівнює 860 пікселям
    }
  
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth"
    });
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
    scrollTo();
    const selectedItemValue = e.target.value;
    setItemNumber(selectedItemValue);
    getArticle();
    setSelectedItem(selectedItemValue); // Встановлюємо вибраний елемент
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
            <ul className={css.decorList}>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
              <li className={css.decorItem}></li>
            </ul>
            <p className={css.date}>
              {selectedArticle ? selectedArticle.date[currentLanguage] : ''}
            </p> 
            <p className={css.remark}>
              {selectedArticle ? selectedArticle.remark[currentLanguage] : ''}
            </p> 
            <div className={css.illustrationWrapper}>
              {selectedArticle
              ? <img 
                  className={css.illustration}
                  src={selectedArticle ? selectedArticle.illustration : ''} 
                  alt={selectedArticle ? selectedArticle.name[currentLanguage] : ''}
                  width={400}>
                </img> 
              : ''
              }
            </div>
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
          <BtnToTop/>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Write;
