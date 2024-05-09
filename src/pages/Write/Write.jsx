import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Write.module.css';
// import articleArr from '../../articles';

const Write = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
          {/* <ul className={css.content}>
            <li className={css.contentItem}>{articleArr.name1.ua}</li>
            <li className={css.contentItem}>{articleArr.name2.ua}</li>
            <li className={css.contentItem}>{articleArr.name3.ua}</li>
            <li className={css.contentItem}>{articleArr.name4.ua}</li>
            <li className={css.contentItem}>{articleArr.name5.ua}</li>
            <li className={css.contentItem}>{articleArr.name6.ua}</li>
            <li className={css.contentItem}>{articleArr.name7.ua}</li>
            <li className={css.contentItem}>{articleArr.name8.ua}</li>
            <li className={css.contentItem}>{articleArr.name9.ua}</li>
            <li className={css.contentItem}>{articleArr.name10.ua}</li>
            <li className={css.contentItem}>{articleArr.name11.ua}</li>
            <li className={css.contentItem}>{articleArr.name12.ua}</li>
            <li className={css.contentItem}>{articleArr.name13.ua}</li>
            <li className={css.contentItem}>{articleArr.name14.ua}</li>
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
          </article> */}
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Write;
