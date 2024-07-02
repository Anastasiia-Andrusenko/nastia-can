import css from './Home.module.css';

import LangToggle from '../../components/LangToggle/LangToggle';
import langArr from '../../lang.js';
import Navigation from 'components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import biography from '../../biography';
import FeedbackGallery from 'components/FeedbacksGallery/FeedbacksGallery';
import BtnToTop from 'components/BtnToTop/BtnToTop';

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
        <h2 className={css.biographyTitle}>
          {
              currentLanguage === 'ua'
              ? langArr.timeLineTitle.ua
              : langArr.timeLineTitle.en
            }
        </h2>
        <ul className={css.biographyWrapper}>
          {biography.map((period) => (
            <li key={period.id} className={css.period}>
              <div className={css.item}>
                <p className={css.periodName}>
                  {currentLanguage === 'ua'
                    ? period.period.ua
                    : period.period.en}
                </p>
                <img src={period.icon} alt={period.period} width={100} className={css.illustration}></img>
              </div>
              <p className={css.text}>
                { currentLanguage === 'ua'
                  ? period.text.ua
                  : period.text.en
                }
              </p>
            </li>
          ))}
        </ul>
        <BtnToTop/>
        <FeedbackGallery currentLanguage={currentLanguage}/>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Home;
