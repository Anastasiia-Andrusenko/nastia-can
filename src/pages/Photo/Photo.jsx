import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Photo.module.css';

const Photo = () => {
  return (
    <>
      <div className={css.section}>
        <Header />
        <div className={css.container}>
          тут будуть фоточки
          <ul className={css.contents}></ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Photo;
