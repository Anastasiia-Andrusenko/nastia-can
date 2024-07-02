import langArr from '../../lang';
import css from './FeedbackBtn.module.css';
import { VscFeedback } from "react-icons/vsc";

const FeedbackBtn = ({currentLanguage}) => {

  return <>
    <div className={css.wrapper}>
      <a href="https://forms.gle/6hDQp8rw8LKbXAQRA"
        target='blank'
        className={css.link}>
        {currentLanguage === 'ua' 
        ? langArr.feedbackBtn.ua
        : langArr.feedbackBtn.en
        }
        <VscFeedback className={css.icon}/>
      </a>
    </div>
  </>
};


export default FeedbackBtn;