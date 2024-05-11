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

const Code = ({ currentLanguage }) => {
  return (
    <>
      <div className={css.section}>
        <Header currentLanguage={currentLanguage} />
        <div className={css.container}>
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
            </ul>
          </div>
          <div className={css.works}>
            <h3 className={css.titleWork}>
              {currentLanguage === 'ua'
                ? langArr.codePortfolio.ua
                : langArr.codePortfolio.en}
            </h3>
            <ul className={css.workList}>
              <li className={css.workItem}>
                <a
                  href="https://anastasiia-andrusenko.github.io/goit-markup-hw-08/"
                  target="blank"
                  className={css.webStudio}
                >
                  WebStudio
                </a>
              </li>
              <li className={css.workItem}>
                <a
                  href="https://anastasiia-andrusenko.github.io/project14__ice-cream/"
                  target="blank"
                  className={css.iceCream}
                >
                  Ice Cream Shop
                </a>
              </li>
              <li className={css.workItem}>
                <a
                  href="https://anastasiia-andrusenko.github.io/goit-react-hw-05-movies/"
                  target="blank"
                  className={css.movies}
                >
                  Movieland
                </a>
              </li>
              <li className={css.workItem}>
                <a
                  href="https://anastasiia-andrusenko.github.io/world-family/"
                  target="blank"
                  className={css.family}
                >
                  World Family
                </a>
              </li>
              <li className={css.workItem}>
                <a
                  href="https://yourpet-nu.vercel.app/main"
                  target="blank"
                  className={css.pets}
                >
                  Your Pet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer currentLanguage={currentLanguage} />
    </>
  );
};

export default Code;