import css from './Navigation.module.css';
import { SlBookOpen } from 'react-icons/sl';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { FaLaptopCode } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import lang from '../../lang.js';

const Navigation = ({ currentLanguage }) => {
  return (
    <>
      <ul className={css.likeList}>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/write">
            <SlBookOpen className={css.icon} />
            {currentLanguage === 'ua'
              ? lang.likeList.ua[0]
              : lang.likeList.en[0]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/code">
            <FaLaptopCode className={css.icon} />
            {currentLanguage === 'ua'
              ? lang.likeList.ua[2]
              : lang.likeList.en[2]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/draw">
            <PiPaintBrushDuotone className={css.icon} />
            {currentLanguage === 'ua'
              ? lang.likeList.ua[1]
              : lang.likeList.en[1]}
          </NavLink>
        </li>

        <li className={css.likeItem}>
          <NavLink className={css.link} to="/photo">
            <ImCamera className={css.icon} />
            {currentLanguage === 'ua'
              ? lang.likeList.ua[3]
              : lang.likeList.en[3]}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
