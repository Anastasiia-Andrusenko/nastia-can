
import child from './img/timeline/dinoEgg.png';
import school from './img/timeline/student.png';
import edu from './img/timeline/architect.png';
import move from './img/timeline/leave.png';
import copy from './img/timeline/copywriter.png';
import dev from './img/timeline/development.png';
import now from './img/timeline/forecast.png';


const biography = [
  {
    id: 1,
    period: {
      en: `Childhood`,
      ua: `Дитинство`,
    },
    text: {
      en: `It all started in January 1994 in Donetsk. My childhood was super happy: I rode a bicycle, drew, played hockey on a frozen pond, helped my grandfather collect honey, did crafts, kept all kinds of "junk" according to my mother's version, and "treasures" in my opinion.`,
      ua: `Все почалося в січні 1994 в Донецьку. Моє дитинство було суперщасливим: я ганяла на велосипеді, малювала, грала в хокей на замерзлій водоймі, допомагала дідусю збирати мед, майструвала, зберігала усілякий "непотріб" по версії мами, та "скарби" на мою думку.`,
    },
    icon: `${child}`,
  },
  {
    id: 2,
    period: {
      en: `School`,
      ua: `Школа`,
    },
    text: {
      en: `In 2000, I went to school. The first bell became memorable for me and all teachers, when I accidentally bumped an eleventh-grader with the bell.`,
      ua: `У 2000 році я пішла в школу. Перший дзвоник став пам'ятним для мене та всього вчительського складу, коли я на лінійці випадково дзвоником набила шишку одинадцятикласнику.`,
    },
    icon: `${school}`,
  },
  {
    id: 3,
    period: {
      en: `Education`,
      ua: `Освіта`,
    },
    text: {
      en: `After graduating from school in 2010, I entered the Donbas Academy of Architecture. These were the most fulfilling 4 years of my life. I understood myself, found friends and plunged into adult life.`,
      ua: `Закінчивши школу у 2010, я вступила до Донбаської Архітектурної Академії. Це були найнасиченіші 4 роки мого життя. Я зрозуміла себе, знайшла друзів та занурилася в доросле життя.`,
    },
    icon: `${edu}`,
  },
  { 
    id: 4,
    period: {
      en: `Relocation`,
      ua: `Переїзд`,
    },
    text: {
      en: `In 2014, the war started, and I moved to Kyiv. Although I implemented several projects, I did not become a full-fledged architect.`,
      ua: `У 2014 почалась війна, і я переїхала в Київ. Хоч я і реалізувала кілька проєктів, але повноцінного архітектора з мене не вийшло. Проте я завжди обирала роботу повʼязану із творчістю. `,
    },
    icon: `${move}`,
  },
  { 
    id: 5,
    period: {
      en: `Career in advertising`,
      ua: `Кар'єра в рекламі`,
    },
    text: {
      en: `In 2018, I started working in advertising as a creative copywriter. Without the necessary education, but with a lot of motivation, I learned the basic skills and gained experience.`,
      ua: `У 2018 році я почала працювати в рекламі як креативний копірайтер. Без потрібної освіти, але з великою мотивацією, я опанувала базові навички та здобула досвід.`,
    },
    icon: `${copy}`,
  },
  { 
    id: 6,
    period: {
      en: `Change of profession`,
      ua: `Зміна професії`,
    },
    text: {
      en: `In 2022, the war got me again. I started learning development and now work as a freelance copywriter and front end developer.`,
      ua: `У 2022 війна дістала мене знов. Я почала вивчати розробку і тепер працюю як фриланс копірайтер та фронт енд розробниця.`,
    },
    icon: `${dev}`,
  },
  { 
    id: 7,
    period: {
      en: `Now`,
      ua: `Наразі`,
    },
    text: {
      en: `For now, I continue to do what I love and continue to develop my skills. And I don't see work without art in work yet.`,
      ua: `Зараз я продовжую робити те, що мені подобається й продовжую розвивати свої навички, та все ще не уявляю роботу без творчості.`,
    },
    icon: `${now}`,
  }
];

export default biography;