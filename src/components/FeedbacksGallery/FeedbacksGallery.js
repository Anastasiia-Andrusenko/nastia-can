
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gapi } from 'gapi-script';
import css from './FeedbacksGallery.module.css';
import FeedbackBtn from 'components/FeedbackBtn/FeedbackBtn';
import langArr from '../../lang';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BiMessageError } from "react-icons/bi";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import Slider from 'react-slick';
import '../../slick-custom.css';


const API_KEY = 'AIzaSyC8Ex2_L-qtfha76b032HYEoapTDjzgzQI'; 
const SPREADSHEET_ID = '1RNQ_uKDEq7hAdezPMstEky7rlmsBjohQMhr6xPImpsI'; 
const RANGE = 'Sheet1!A2:G'; 

const FeedbackGallery = ({currentLanguage}) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  // eslint-disable-next-line
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(() => {
        loadReviews();
      });
    };

    gapi.load('client', initClient);
  }, []);

  const loadReviews = () => {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    }).then(response => {
      const data = response.result.values;
      if (data && data.length > 0) {
        setReviews(data);
        console.log(data);
      } else {
        setReviews([]);
      }
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching data', error);
      setReviews([]);
      setLoading(false);
    });
  };

  const CustomNextArrow = (props) => {
    const {onClick } = props;
    return (
      <div
        className={`${css.arrow} ${css.nextArrow}`}
        onClick={onClick}
      >
        <FaCaretRight />
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const {onClick } = props;
    return (
      <div
        className={`${css.arrow} ${css.prevArrow}`}
        onClick={onClick}
      >
        <FaCaretLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: reviews.length > 1,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: reviews.length > 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: reviews.length > 1 ? <CustomNextArrow /> : null,
    prevArrow: reviews.length > 1 ? <CustomPrevArrow /> : null,
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const capitalizeEachWord = (string) => {
    return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getDate()).padStart(2, '0');
    const day = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleToggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{
        currentLanguage === 'ua' 
        ? langArr.feedbackTitle.ua
        : langArr.feedbackTitle.en}
      </h2>
      <div className={css.gallery}>
        {loading ? (<div className={css.loader}></div>
        ) : (
          reviews.length > 0 ? (
          <Slider {...settings} ref={c => setSlider(c)}>
            {reviews.map((review, index) => (
              <div key={index} className={css.review}>
                <p className={css.name}>{capitalizeEachWord(review[1])}</p>
                <p className={css.position}><span className={css.field}>Посада: </span>{review[3].toLowerCase()}</p>
                {showFeedback && <p className={css.company}><span className={css.field}>Місце співпраці: </span>{review[2].toLowerCase()}</p>}
                <p className={css.rating}>{review[4]} досвід.</p>
                {showFeedback && <p className={css.text}>{review[5]}</p>}
                {showFeedback && <p className={css.date}><span className={css.field}>{formatDate(review[0])}</span></p>}
                <button type='button' className={css.toggleFeedback} onClick={handleToggleFeedback}>
                  { showFeedback ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  <span className={css.remark}>{ showFeedback ? 'згорнути відгук' : 'показати повністю'}</span>
                </button>
              </div>
            ))}
          </Slider>
        ) : ( <p className={css.error}>
            {currentLanguage === 'ua' ? 'Ще немає відгуків. Ти можеш стати першим' : 'No reviews yet. You can be the first'}
            <span className={css.errorIcon}><BiMessageError /></span>
          </p>)
        )}
      </div>
      <FeedbackBtn currentLanguage={currentLanguage}/>
    </div>
  );
};


export default FeedbackGallery;
