import css from './Home.module.css';

import LangToggle from '../../components/LangToggle/LangToggle';
import langArr from '../../lang.js';
import Navigation from 'components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.hi}>
          {langArr.welcome.ua}
          <br />
          {langArr.welcome.ua2}
        </h1>
        <div className={css.portrait}></div>
        <LangToggle />
        <div className={css.skills}>
          <h2 className={css.title}>{langArr.like.ua}</h2>
          <Navigation />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
