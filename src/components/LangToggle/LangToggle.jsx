import css from './LangToggle.module.css';
import langArr from '../../lang.js';

const LangToggle = () => {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>{langArr.language.ua}</p>
        <span className={css.lang}>EN</span>
        <span className={css.lang}>UA</span>
      </div>
    </>
  );
};

export default LangToggle;
