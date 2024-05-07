import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Photo.module.css';

const Photo = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          тут будуть фоточки
          <ul className={css.contents}></ul>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Photo;
