import css from './Footer.module.css';
import { FaRegHandPointRight } from 'react-icons/fa6';
import langArr from '../../lang';

const Footer = ({ currentLanguage }) => {
  return (
    <footer className={css.footer}>
      <p className={css.callToAction}>
        {currentLanguage === 'ua' ? langArr.footer.ua : langArr.footer.en}
        <span className={css.hand}>
          <FaRegHandPointRight />
        </span>
      </p>
      <ul className={css.contactsList}>
        <li className={css.contactItem}>
          <a href="mailto:nastya.andrus@gmail.com" target="blank">
            nastya.andrus@gmail.com
          </a>
        </li>
        <li className={css.contactItem}>
          <a href="tel:+380996434033" target="blank">
            +380 99 64 34 033
          </a>
        </li>
        <li className={css.contactItem}>
          <a
            href="https://www.facebook.com/anastasiia.andrusenko"
            target="blank"
          >
            facebook
          </a>
        </li>
        <li className={css.contactItem}>
          <a href="https://join.skype.com/invite/cFrUyX19Qw90" target="blank">
            skype
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
