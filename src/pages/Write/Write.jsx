import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Write.module.css';

const Write = () => {
  return (
    <>
      <div className={css.section}>
        <Header />
        <div className={css.container}>
          <ul className={css.contents}>
            <li>mfvkfmkv</li>
            <li>mfvkfmkv</li>
            <li>mfvkfmkv</li>
          </ul>
          <article className={css.article}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
