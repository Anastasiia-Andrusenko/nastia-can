import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Draw.module.css';
const classNames = require('classnames/bind');

const Draw = ({ currentLanguage }) => {
  const cx = classNames.bind(css);
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          <ul className={css.picList}>
            <li className={cx('picItem1', 'img')}></li>
            <li className={cx('picItem2', 'img')}></li>
            <li className={cx('picItem3', 'img')}></li>
            <li className={cx('picItem4', 'img')}></li>
            <li className={cx('picItem5', 'img')}></li>
            <li className={cx('picItem6', 'img')}></li>
            <li className={cx('picItem7', 'img')}></li>
            <li className={cx('picItem8', 'img')}></li>
            <li className={cx('picItem9', 'img')}></li>
            <li className={cx('picItem10', 'img')}></li>
            <li className={cx('picItem11', 'img')}></li>
            <li className={cx('picItem12', 'img')}></li>
            <li className={cx('picItem13', 'img')}></li>
            <li className={cx('picItem14', 'img')}></li>
            <li className={cx('picItem15', 'img')}></li>
            <li className={cx('picItem16', 'img')}></li>
            <li className={cx('picItem17', 'img')}></li>
            <li className={cx('picItem18', 'img')}></li>
          </ul>
          <ul className={css.contents}></ul>
        </div>
      </div>

      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Draw;
