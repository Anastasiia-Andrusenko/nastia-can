import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Code.module.css';

const Code = () => {
  return (
    <>
      <div className={css.section}>
        <Header />
        <div className={css.container}>
          тут будуть посилання
          <ul className={css.contents}></ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Code;
