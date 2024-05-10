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
            <li
              className={css.contentItem}
              value="5"
              onClick={handleClickOnList}
            >
              {articleArr.name5.ua}
            </li>
            <li
              className={css.contentItem}
              value="6"
              onClick={handleClickOnList}
            >
              {articleArr.name6.ua}
            </li>
            <li
              className={css.contentItem}
              value="7"
              onClick={handleClickOnList}
            >
              {articleArr.name7.ua}
            </li>
            <li
              className={css.contentItem}
              value="15"
              onClick={handleClickOnList}
            >
              {articleArr.name15.ua}
            </li>
            <li
              className={css.contentItem}
              value="8"
              onClick={handleClickOnList}
            >
              {articleArr.name8.ua}
            </li>
            <li
              className={css.contentItem}
              value="9"
              onClick={handleClickOnList}
            >
              {articleArr.name9.ua}
            </li>
            <li
              className={css.contentItem}
              value="10"
              onClick={handleClickOnList}
            >
              {articleArr.name10.ua}
            </li>
            <li
              className={css.contentItem}
              value="11"
              onClick={handleClickOnList}
            >
              {articleArr.name11.ua}
            </li>
            <li
              className={css.contentItem}
              value="12"
              onClick={handleClickOnList}
            >
              {articleArr.name12.ua}
            </li>
            <li
              className={css.contentItem}
              value="13"
              onClick={handleClickOnList}
            >
              {articleArr.name13.ua}
            </li>
            <li
              className={css.contentItem}
              value="14"
              onClick={handleClickOnList}
            >
              {articleArr.name14.ua}
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
