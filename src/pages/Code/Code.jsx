import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Code.module.css';

const Code = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          <div className={css.skills}>
            <h3 className={css.title}>знаю це</h3>
            <ul className={css.list}>
              <li className={css.skill}>HTML</li>
              <li className={css.skill}>CSS</li>
              <li className={css.skill}>JavaScript</li>
              <li className={css.skill}>TypeScript</li>
              <li className={css.skill}>React</li>
              <li className={css.skill}>Node.js</li>
              <li className={css.skill}>REST Api</li>
              <li className={css.skill}>SASS</li>
              <li className={css.skill}>Git</li>
              <li className={css.skill}>Ajax</li>
            </ul>
          </div>
          <div className={css.works}>
            <h3 className={css.titleWork}>мої роботи</h3>
            <ul className={css.list}></ul>
          </div>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Code;
