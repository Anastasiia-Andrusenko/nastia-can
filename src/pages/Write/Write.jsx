// pages Write.jsx

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Write.module.css';
import articleArr from '../../articles';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';
import langArr from '../../lang';

const Write = ({ currentLanguage }) => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    scrollSpy.update();
  });

  const scrollTo = () => {
    scroll.scrollTo(950);
  };

  const getArticleNumber = () => {
    const numberOfArticle = localStorage.getItem('number of item') || 0;
    // console.log(numberOfArticle);
    return numberOfArticle;
  };

  const setItemNumber = number => {
    localStorage.setItem('number of item', number);
  };

  const getArticle = () => {
    const articleNumber = parseInt(getArticleNumber());
    const text =
      articleArr[`text${articleNumber}`]?.[currentLanguage] ||
      langArr.oops?.[currentLanguage];
    setSelectedText(text);
  };

  const handleClickOnList = e => {
    const selectedItem = e.target.value;
    setItemNumber(selectedItem);
    getArticle();
    scrollTo();
  };

  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          <ol className={css.content} type="1">
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="1"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name1.ua
                  : articleArr.name1.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="2"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name2.ua
                  : articleArr.name2.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="3"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name3.ua
                  : articleArr.name3.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="4"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name4.ua
                  : articleArr.name4.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="5"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name5.ua
                  : articleArr.name5.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="6"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name6.ua
                  : articleArr.name6.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="7"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name7.ua
                  : articleArr.name7.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="15"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name15.ua
                  : articleArr.name15.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="8"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name8.ua
                  : articleArr.name8.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="9"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name9.ua
                  : articleArr.name9.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="10"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name10.ua
                  : articleArr.name10.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="11"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name11.ua
                  : articleArr.name11.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="12"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name12.ua
                  : articleArr.name12.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="13"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name13.ua
                  : articleArr.name13.en}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={css.contentItem}
                onClick={handleClickOnList}
                value="14"
              >
                {currentLanguage === 'ua'
                  ? articleArr.name14.ua
                  : articleArr.name14.en}
              </button>
            </li>
          </ol>
          <article className={css.article} name="article">
            {/* <div className={css.loader}></div> */}
            {selectedText === ''
              ? currentLanguage === 'ua'
                ? langArr.click.ua
                : langArr.click.en
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
