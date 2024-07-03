
import child from './img/timeline/dinoEgg.png';
import school from './img/timeline/student.png';
import edu from './img/timeline/architect.png';
import move from './img/timeline/leave.png';
import copy from './img/timeline/copywriter.png';
import dev from './img/timeline/development.png';
import now from './img/timeline/forecast.png';
import marketing from './img/timeline/marketing.png';


const biography = [
  {
    id: 1,
    period: {
      en: `1. Childhood`,
      ua: `1. Дитинство`,
    },
    text: {
      en: `It all started in January 1994 in Donetsk. My childhood was super happy: I rode my bike, painted, played hockey on frozen ponds, helped my grandpa collect honey, crafted, and kept all sorts of "junk" (according to my mom, or "treasures," in my opinion).`,
      ua: `Все почалося в січні 1994 в Донецьку. Моє дитинство було супершасливим: я ганяла на велосипеді, малювала, грала в хокей на замерзлій водоймі, допомагала дідусю збирати мед, майструвала, зберігала всілякий "непотріб" (за версією мами, та "скарби" на мою думку).`,
    },
    icon: `${child}`,
  },
  {
    id: 2,
    period: {
      en: `2. School`,
      ua: `2. Школа`,
    },
    text: {
      en: `In the year 2000, I started school. The first bell became memorable for me and the entire teaching staff when I accidentally bumped into an eleventh grader with the bell.`,
      ua: `У 2000 році я пішла в школу. Перший дзвінок став пам'ятним для мене та всього вчительського складу, коли я на лінійці випадково дзвоником набила шишку одинадцятикласнику.`,
    },
    icon: `${school}`,
  },
  {
    id: 3,
    period: {
      en: `3. Education`,
      ua: `3. Освіта`,
    },
    text: {
      en: `Having finished school in 2010, I entered Donetsk Architectural Academy. Those were the most fulfilling four years of my life. I discovered myself, found friends, and immersed myself in adult life.`,
      ua: `Закінчивши школу у 2010, я вступила до Донецької Архітектурної Академії. Це були найнасиченіші 4 роки мого життя. Я зрозуміла себе, знайшла друзів та занурилася в доросле життя.`,
    },
    icon: `${edu}`,
  },
  { 
    id: 4,
    period: {
      en: `4. Relocation`,
      ua: `4. Переїзд`,
    },
    text: {
      en: `In 2014, the war began, and I moved to Kyiv. Although I managed a few projects, I didn't quite become a full-fledged architect. Nevertheless, I always chose work related to creativity.`,
      ua: `У 2014 розпочалася війна, і я переїхала до Києва. Хоча я реалізувала кілька проєктів, але повноцінного архітектора з мене не вийшло. Проте я завжди обирала роботу, пов'язану із творчістю. `,
    },
    icon: `${move}`,
  },
  { 
    id: 5,
    period: {
      en: `5. Design and Production`,
      ua: `5. Дизайн та продакшн`,
    },
    text: {
      en: `I found myself in a studio that created style and decor for brands, musicians, and advertising campaigns. I also had the opportunity to work in production, involved in shooting music videos and commercials.`,
      ua: `Я знайшла себе в студії, яка створювала стиль та декор для брендів, музикантів та рекламних кампаній. Мені також довелося попрацювати у продакшені, який займався зйомкою кліпів та рекламних роликів.`,
    },
    icon: `${marketing}`,
  },
  { 
    id: 6,
    period: {
      en: `6. Career in advertising`,
      ua: `6. Кар'єра в рекламі`,
    },
    text: {
      en: `In 2018, I became a creative copywriter, not just participating in someone else's ideas but creating ideas myself. Without formal education but with great motivation, I mastered basic skills and gained valuable experience.`,
      ua: `У 2018 році я стала креативним копірайтером. Тепер я не просто брала участь в реалізації чиїхось задумів, а сама створювала ідеї. Без необхідної освіти, але з великою мотивацією, я опанувала базові навички та здобула цінний досвід.`,
    },
    icon: `${copy}`,
  },
  { 
    id: 7,
    period: {
      en: `7. Career Change`,
      ua: `7. Зміна професії`,
    },
    text: {
      en: `In 2022, the war got me again. This motivated me to learn a new profession, and I successfully completed a FULLSTACK developer course. Thus, I became a developer.`,
      ua: `У 2022 війна дістала мене знов. Це змотивувало мене опанувати нову професію, і я успішно завершила курс FULLSTACK developer. Так я стала розробницею.`,
    },
    icon: `${dev}`,
  },
  { 
    id: 8,
    period: {
      en: `8. Today`,
      ua: `8. Сьогодні`,
    },
    text: {
      en: `For now, I continue doing what I love and improving my skills. So, if you're looking for a copywriter to create naming, advertising scripts, and campaigns for your brand or need a promising JavaScript developer, feel free to contact me. I'm always open to exciting opportunities.`,
      ua: `Зараз я продовжую робити те, що мені подобається та вдосконалюю свої здібності. Тож якщо ви шукаєте копірайтера для створення неймінгу, рекламних сценаріїв та кампаній для вашого бренду або вам потрібен перспективний JavaScript розробник, зв’яжіться зі мною. Я завжди відкрита для цікавих пропозицій.`,
    },
    icon: `${now}`,
  },
];

export default biography;
