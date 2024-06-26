import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';
import { TbFaceIdError } from 'react-icons/tb';
import { RiHomeHeartLine } from 'react-icons/ri';
import langArr from '../../lang';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.message}>
        {langArr.noPage.ua} <TbFaceIdError />{' '}
      </p>
      <Link to="/" className={css.link}>
        {langArr.goHome.ua}
        <RiHomeHeartLine className={css.icon} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
