import css from './Header.module.css';
import { SlBookOpen } from 'react-icons/sl';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { FaLaptopCode } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import { RiHomeHeartLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import lang from '../../lang.js';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
};

const Header = () => {
  return (
    <div className={css.header}>
      <div>
        <Link to="/" className={css.homeIcon}>
          <RiHomeHeartLine className={css.icon} />
        </Link>
        <p className={css.text}>Дивись, як Настя вміє</p>
      </div>
      <ul className={css.likeList}>
        <li className={css.likeItem}>
          <NavLink className={getClassName} to="/write">
            <SlBookOpen className={css.icon} />
            {lang.likeList.ua[0]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={getClassName} to="/draw">
            <PiPaintBrushDuotone className={css.icon} />
            {lang.likeList.ua[1]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={getClassName} to="/code">
            <FaLaptopCode className={css.icon} />
            {lang.likeList.ua[2]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={getClassName} to="/photo">
            <ImCamera className={css.icon} />
            {lang.likeList.ua[3]}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
