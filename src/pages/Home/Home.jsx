import css from './Home.module.css';

import LangToggle from '../../components/LangToggle/LangToggle';
import langArr from '../../lang.js';
import Navigation from 'components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Home = ({ currentLanguage }) => {
  // console.log(currentLanguage);

  return (
    <>
      <div className={css.container}>
        <LangToggle isHeader={false} />
        <div className={css.hero}>
          <h1 className={css.hi}>
            {currentLanguage === 'ua' ? langArr.welcome.ua : langArr.welcome.en}
            <br />
            {currentLanguage === 'ua'
              ? langArr.welcome.ua2
              : langArr.welcome.en2}
          </h1>
          <div className={css.portrait}></div>
          <div className={css.skills}>
            <h2 className={css.title}>
              {currentLanguage === 'ua' ? langArr.like.ua : langArr.like.en}
            </h2>
            <Navigation currentLanguage={currentLanguage} />
          </div>
        </div>
        <h2 className={css.biographyTitle}>{
              currentLanguage === 'ua'
              ? langArr.timeLineTitle.ua
              : langArr.timeLineTitle.en
            }
          </h2>
        <div className={css.biographyWrapper}>
          <div className={css.wrapperBorn}>
            <div className={css.illustration}></div>
          </div>
          <div className={css.wrapperSchool}>
            <div className={css.illustration}></div>
          </div>
          <div className={css.wrapperStudy}>
            <div className={css.illustration}></div>
          </div>
          <div className={css.wrapperWork}>
            <div className={css.illustration}></div>
          </div>
          <div className={css.wrapperCopy}>
            <div className={css.illustration}></div>
          </div>
          <div className={css.wrapperDev}>
            <div className={css.illustration}></div>
          </div>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Home;
