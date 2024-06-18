import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Scrollbar, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import css from './Photo.module.css';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import langArr from '../../lang';

const classNames = require('classnames/bind');

const Photo = ({ currentLanguage }) => {
  const cx = classNames.bind(css);

  // Массив зображень
  const images = [
    '06.jpg', '05.jpg', '03.jpg', '021.jpg', '026.jpg', '09.jpg', '011.jpg', '04.jpg', '07.jpg'
  ];

  return (
    <>
      <div className={css.wrapper}>
        <Header currentLanguage={currentLanguage} />
        <h2 className={css.titlePage}>{currentLanguage === 'ua' ? langArr.photoPageTitle.ua : langArr.photoPageTitle.en}</h2>
        <div className={css.photo}>
          <Swiper
            speed={1000}
            spaceBetween={500}
            navigation={{
              nextEl: `.${cx('swiper-button-next')}`,
              prevEl: `.${cx('swiper-button-prev')}`,
            }}
            pagination={{ clickable: true }}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onReachEnd={() => {}}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, Navigation]}
            className={cx('swiper', 'slider')}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={cx('slide')}>
                <img
                  src={require(`../../img/pic/${image}`)}
                  alt={`Slide ${index + 1}`}
                  className={cx('img')}
                />
              </SwiperSlide>
            ))}
            <div className={cx('swiper-button-prev')}>
              <FaChevronLeft className={cx('icon')}/>
            </div>
            <div className={cx('swiper-button-next')}>
              <FaChevronRight className={cx('icon')}/>
            </div>
          </Swiper>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Photo;

