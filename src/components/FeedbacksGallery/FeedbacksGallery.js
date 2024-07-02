
import React, { useEffect, useState } from 'react';
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
// import { FaRegSmile } from "react-icons/fa";
// import { PiSmileyBlankBold } from "react-icons/pi";
// import { PiSmileySadBold } from "react-icons/pi";



const API_KEY = 'AIzaSyC8Ex2_L-qtfha76b032HYEoapTDjzgzQI'; 
const SPREADSHEET_ID = '1RNQ_uKDEq7hAdezPMstEky7rlmsBjohQMhr6xPImpsI'; 
const RANGE = 'Sheet1!A2:G'; 

const FeedbackGallery = ({currentLanguage}) => {
  const [reviews, setReviews] = useState([]);
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
      } else {
        setReviews([]);
      }
    }).catch(error => {
      console.error('Error fetching data', error);
      setReviews([]);
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <FaCaretRight className={css.arrow} />,
    prevArrow: <FaCaretLeft className={css.arrow} />,
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
        {/* <button type='button' className={css.toggleFeedback} onClick={handleToggleFeedback}>
          { showFeedback ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <span className={css.remark}>{ showFeedback ? 'згорнути відгук' : 'показати повністю'}</span>
        </button> */}
        {reviews.length > 0 ? (
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
        ) : (
          <p className={css.error}>
            {currentLanguage === 'ua' ? langArr.oops.ua : langArr.oops.en}
            <span className={css.errorIcon}><BiMessageError /></span>
          </p>
        )}
      </div>
      <FeedbackBtn currentLanguage={currentLanguage}/>
    </div>
  );
};





export default FeedbackGallery;
