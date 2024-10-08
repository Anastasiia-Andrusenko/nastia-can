import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Code.module.css';
import langArr from '../../lang';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FaNpm } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiWebpack } from 'react-icons/si';
import BtnToTop from 'components/BtnToTop/BtnToTop';
import { GiClick } from 'react-icons/gi';

const Code = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <h2 className={css.titlePage}>
          {currentLanguage === 'ua'
            ? langArr.codePageTitle.ua
            : langArr.codePageTitle.en}
        </h2>
        <div className={css.container}>
          <div className={css.laptop}></div>
          <div className={css.skills}>
            <h3 className={css.title}>
              {currentLanguage === 'ua'
                ? langArr.codeTeh.ua
                : langArr.codeTeh.en}
            </h3>
            <ul className={css.list}>
              <li className={css.skill}>
                HTML
                <TiHtml5 className={css.icon} />
              </li>
              <li className={css.skill}>
                CSS
                <FaCss3Alt className={css.icon} />
              </li>
              <li className={css.skill}>
                JavaScript
                <IoLogoJavascript className={css.icon} />
              </li>
              <li className={css.skill}>
                TypeScript
                <SiTypescript className={css.icon} />
              </li>
              <li className={css.skill}>
                React
                <FaReact className={css.icon} />
              </li>
              <li className={css.skill}>
                Node.js
                <FaNodeJs className={css.icon} />
              </li>
              <li className={css.skill}>
                REST Api
                <TiHtml5 className={css.icon} />
              </li>
              <li className={css.skill}>
                SASS
                <FaSass className={css.icon} />
              </li>
              <li className={css.skill}>
                Git
                <FaGithub className={css.icon} />
              </li>
              <li className={css.skill}>
                Ajax
                <TiHtml5 className={css.icon} />
              </li>
              <li className={css.skill}>
                VS Code
                <VscVscode className={css.icon} />
              </li>
              <li className={css.skill}>
                npm
                <FaNpm className={css.icon} />
              </li>
              <li className={css.skill}>
                Redux
                <SiRedux className={css.icon} />
              </li>
              <li className={css.skill}>
                webpack
                <SiWebpack className={css.icon} />
              </li>
              <li className={css.skill}>
                Figma
                <FaFigma className={css.icon} />
              </li>
            </ul>
          </div>
          <div className={css.works}>
            <h3 className={css.titleWork}>
              {currentLanguage === 'ua'
                ? langArr.codePortfolio.ua
                : langArr.codePortfolio.en}
            </h3>
            <div className={css.viewWindow}>
              <ul className={css.workList}>
                <li className={`${css.workItem} ${css.webStudio}`}>
                  <a
                    href="https://anastasiia-andrusenko.github.io/goit-markup-hw-08/"
                    target="blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    Web Studio
                  </a>
                </li>
                <li className={`${css.workItem} ${css.iceCream}`}>
                  <a
                    href="https://anastasiia-andrusenko.github.io/project14__ice-cream/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    Ice Cream Project
                  </a>
                </li>
                <li className={`${css.workItem} ${css.moodPlaylist}`}>
                  <a
                    href="https://my-mood-playlist.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    Mood Playlist
                  </a>
                </li>
                <li className={`${css.workItem} ${css.movies}`}>
                  <a
                    href="https://movielandi.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    Movies App
                  </a>
                </li>
                <li className={`${css.workItem} ${css.pets}`}>
                  <a
                    href="https://yourpet-nu.vercel.app/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.link}
                  >
                    Your Pet
                  </a>
                </li>
              </ul>
              <div className={css.clickBtn}>
                <GiClick className={css.clickIcon} />
              </div>
            </div>
          </div>
          <BtnToTop />
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Code;
