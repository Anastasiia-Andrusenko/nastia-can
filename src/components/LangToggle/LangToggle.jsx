import css from './LangToggle.module.css';
import langArr from '../../lang.js';

const LangToggle = ({ isHeader }) => {
  // Функція для отримання вибраної мови з localStorage
  const getLanguage = () => {
    const lang = localStorage.getItem('language') || 'en'; // Повертаємо 'en' як мову за замовчуванням, якщо немає значення у localStorage
    return lang;
  };

  const getClassName = () => {
    return isHeader ? css.noText : css.text;
  };

  // Функція для збереження вибраної мови в localStorage
  const setLanguage = language => {
    localStorage.setItem('language', language);
  };

  const handleChange = e => {
    const selectedLanguage = e.target.value;
    // console.log(e.target.value);

    setLanguage(selectedLanguage); // Зберегти вибрану мову у localStorage
    window.location.reload(); // Перезавантажити сторінку для застосування змін
  };

  const currentLanguage = getLanguage(); // Отримати поточну мову

  return (
    <>
      <div className={css.container}>
        <p className={getClassName()}>{langArr.language[currentLanguage]}</p>
        <button className={css.lang} onClick={handleChange} value="en">
          EN
        </button>
        <button className={css.lang} onClick={handleChange} value="ua">
          UA
        </button>
      </div>
    </>
  );
};

export default LangToggle;
