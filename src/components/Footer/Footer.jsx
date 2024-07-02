import css from './Footer.module.css';
import { FaRegHandPointRight } from 'react-icons/fa6';
import langArr from '../../lang';
import { ImSkype } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = ({ currentLanguage }) => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p className={css.callToAction}>
          {currentLanguage === 'ua' ? langArr.footer.ua : langArr.footer.en}
          <span className={css.hand}>
            <FaRegHandPointRight className={css.iconHand}/>
          </span>
        </p>
        <ul className={css.contactsList}>
          <li className={css.contactItem}>
            <a href="mailto:nastya.andrus@gmail.com" target="blank"
            className={css.link}>
              <IoMdMail className={css.icon}/>
              nastya.andrus@gmail.com
            </a>
          </li>
          <li className={css.contactItem}>
            <a href="https://join.skype.com/invite/cFrUyX19Qw90" target="blank"
            className={css.link}>
              <ImSkype className={css.icon}/>
              skype
            </a>
          </li>
          <li className={css.contactItem}>
            <a href="tel:+380996434033" target="blank"
            className={css.link}>
              <FaPhoneSquareAlt className={css.icon}/>
              +380 99 64 34 033
            </a>
          </li>
          <li className={css.contactItem}>
            <a
              href="https://www.facebook.com/anastasiia.andrusenko"
              target="blank"
              className={css.link}
            >
              <FaFacebookSquare className={css.icon}/>
              facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
