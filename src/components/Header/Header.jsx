import css from './Header.module.css';
import { SlBookOpen } from 'react-icons/sl';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { FaLaptopCode } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import { RiHomeHeartLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import lang from '../../lang.js';

import LangToggle from '../../components/LangToggle/LangToggle';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
};

const Header = ({ currentLanguage }) => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.mobNav}>
          <Link to="/" className={css.homeIcon}>
            <RiHomeHeartLine className={css.iconHouse} />
          </Link>
          <p className={css.text}>
            {currentLanguage === 'ua'
              ? lang.headerTitle.ua
              : lang.headerTitle.en}
          </p>
        </div>
        <ul className={css.likeList}>
          <li className={css.likeItem}>
            <NavLink className={getClassName} to="/write">
              <SlBookOpen className={css.icon} />
              {currentLanguage === 'ua'
                ? lang.likeList.ua[0]
                : lang.likeList.en[0]}
            </NavLink>
          </li>
          <li className={css.likeItem}>
            <NavLink className={getClassName} to="/draw">
              <PiPaintBrushDuotone className={css.icon} />
              {currentLanguage === 'ua'
                ? lang.likeList.ua[1]
                : lang.likeList.en[1]}
            </NavLink>
          </li>
          <li className={css.likeItem}>
            <NavLink className={getClassName} to="/code">
              <FaLaptopCode className={css.icon} />
              {currentLanguage === 'ua'
                ? lang.likeList.ua[2]
                : lang.likeList.en[2]}
            </NavLink>
          </li>
          <li className={css.likeItem}>
            <NavLink className={getClassName} to="/photo">
              <ImCamera className={css.icon} />
              {currentLanguage === 'ua'
                ? lang.likeList.ua[3]
                : lang.likeList.en[3]}
            </NavLink>
          </li>
        </ul>
        <LangToggle isHeader={true} />
      </div>
    </div>
  );
};

export default Header;
