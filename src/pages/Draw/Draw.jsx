import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Draw.module.css';

const Draw = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          тут будуть малюнки
          <ul className={css.contents}></ul>
        </div>
      </div>

      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Draw;
