import css from './Navigation.module.css';
import { SlBookOpen } from 'react-icons/sl';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { FaLaptopCode } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import lang from '../../lang.js';

// const getClassName = ({ isActive }) => {
//   return isActive ? `${css.link} ${css.current}` : css.link;
// };

const Navigation = () => {
  return (
    <>
      <ul className={css.likeList}>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/write">
            <SlBookOpen className={css.icon} />
            {lang.likeList.ua[0]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/draw">
            <PiPaintBrushDuotone className={css.icon} />
            {lang.likeList.ua[1]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/code">
            <FaLaptopCode className={css.icon} />
            {lang.likeList.ua[2]}
          </NavLink>
        </li>
        <li className={css.likeItem}>
          <NavLink className={css.link} to="/photo">
            <ImCamera className={css.icon} />
            {lang.likeList.ua[3]}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
