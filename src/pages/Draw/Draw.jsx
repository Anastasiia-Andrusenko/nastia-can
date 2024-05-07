import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Draw.module.css';

const Draw = () => {
  return (
    <>
      <div className={css.section}>
        <Header />
        <div className={css.container}>
          тут будуть малюнки
          <ul className={css.contents}></ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Draw;
