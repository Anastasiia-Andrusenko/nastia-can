// Pages Draw.jsx
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Draw.module.css';
import langArr from '../../lang';

const classNames = require('classnames/bind');

const Draw = ({ currentLanguage }) => {
  const cx = classNames.bind(css);

  // Массив зображень
  const images = [
    '18.webp', '16.webp', '17.webp', '2.webp', '1.webp', '3.webp', '4.webp', '10.webp', '5.webp', '15.webp', '7.webp', '14.webp', '13.webp', '11.webp', '6.webp', '12.webp', '8.webp',
    '9.webp', 
  ];

  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <h2 className={css.title}>{currentLanguage === 'ua' ? langArr.drawPageTitle.ua : langArr.drawPageTitle.en}</h2>
        <div className={css.container}>
          <ul className={css.picList}>
            {images.map((image, index) => (
              <li key={index} className={cx('img')}>
                <img src={require(`../../img/draw/${image}`)} alt={`Draw ${index + 1}`} />
              </li>
            ))}
          </ul>
          <ul className={css.contents}></ul>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Draw;

