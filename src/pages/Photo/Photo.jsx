import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Photo.module.css';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const classNames = require('classnames/bind');

const Photo = ({ currentLanguage }) => {
  const cx = classNames.bind(css);

  return (
    <>
      <div className={css.wrapper}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.photo}>
          <Swiper
            speed={1000}
            spaceBetween={500}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onReachEnd={() => {}}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            className={cx('swiper', 'slider')}
          >
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/06.jpg')}
                alt="Jane"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/08.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/05.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/2.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/03.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/018.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/021.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/028.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/026.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/023.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/09.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/011.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/04.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/07.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/016.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/012.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/013.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/015.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/019.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/024.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/017.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/010.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/020.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
            <SwiperSlide className={cx('slide')}>
              <img
                src={require('../../img/pic/025.jpg')}
                alt="1"
                className={cx('img')}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Photo;
