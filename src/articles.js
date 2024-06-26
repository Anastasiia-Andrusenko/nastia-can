import rose from '../src/media/rose.jpg';
import grandpa from '../src/media/grandpa.gif';
import crball from '../src/media/crball.jpg';
import iam from '../src/media/iam.jpg';
import naked from '../src/media/naked.jpg';
import ba from '../src/media/ba.jpg';
import we from '../src/media/we.jpg';
import event from '../src/media/event.jpg';
import bus from '../src/media/bus.jpg'
import Ireland from '../src/media/irish.jpg';
import karachi from '../src/media/kukarucha.jpg';
import donetsk from '../src/media/bade.jpg';
import sad from '../src/media/sad.jpg';

// Get the current date
const today = new Date();

// Set the past date February 24, 2014
const pastDate = new Date(2014, 1, 24); // Note: Months are zero-based, so February is 1

// Calculate the difference in milliseconds
const difference = today.getTime() - pastDate.getTime();

// Convert milliseconds to days
const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

const articleArr = [
  {
    id: 1,
    date: {
      en: `February 2023`,
      ua: `Лютий 2023`,
    },
    remark: {
      en: `A couple of weeks after my birthday, which I didn't want to celebrate, I didn't want this day to even exist.`,
      ua: `Пару тижнів після мого Дня народження, який не хотілося не те що святкувати, не хотілося, щоб цей день взагалі існував.`,
    },
    name: {
      en: 'Christmas ball',
      ua: 'Різдвяна кулька',
    },
    text: {
      en: ` \v \b \v Once I will become a Christmas ball.
        I will lie in darkness for a whole year and see only the holiday and snow. 
        But for now, we are all here. Courageously enduring distances, arrivals, and deaths, but we howl until we burst when the shell falls into the egg. We accumulate messages in news telegram channels. We plan vacations with the note "well let's see." We wake up tired. We count losses. We wish for revenge. We try to be strong. We buy vitamins. We ignore the sirens. We hide our fists in our pockets. We don't hold back tears. We save electricity. We spend nerves.
         \v \b \v And I want to write an obituary for myself.
        Tell about my happy childhood, about the difficult 10 years of war. About how I turned 29 on the 29th and forgot how to dream. To admit that I was thrilled by Miley Cyrus, who can buy flowers for herself. I want to briefly tell the story of my long life and love. Tell how I had two Jack Russell Terriers and a huge white pickup truck. How in my old age I won at poker and went on a cruise.
         \v \b \v I'll tell you how once I became a Christmas ball. But for now, we are all here.`,
      ua: ` \v \b \v  Колись я стану різдвяною кулькою.
         \v \b \v Лежатиму в темряві цілий рік і бачитиму тільки свято та сніг. 
         \v \b \v Але поки що ми всі тут.
         \v \b \v Мужньо витримуємо відстані, прильоти та смерті, але ревемо аж заходимося, коли шкаралупа падає в яєчню. Накопичуємо повідомлення в новинних телеграм каналах. Плануємо відпустки з приміткою «ну подивимося». Прокидаємося втомленими. Рахуємо втрати. Бажаємо помсти. Намагаємося бути сильними. Купуємо вітаміни. Не зважаємо на сирени. Ховаємо кулаки в кишені. Не стримуємо сліз. Економимо світло. Витрачаємо нерви.
         \v \b \v А я хочу написати собі некролог.
         \v \b \v Розказати, про своє щасливе дитинство, про важкі 10 років війни. Про те як 29 - го мені стукнуло 29, а я розучилася мріяти. Зізнатися, що кайфувала, від Майлі Сайрус яка може сама купити собі квіти. Хочу коротко розповісти історію свого довгого життя та кохання. Розказати як у мене були два Джек Рассел Терєра і величезний білий пікап. Як на старості років виграла в покер і вирушила в круїз.
         \v \b \v Розкажу, як колись я стала різдвяною кулькою. Але поки що ми всі тут.`,
    },
    illustration: `${crball}`,
  },
  {
    id: 2,
    date: {
      en: `November 3, 2022`,
      ua: `3 листопада 2022`,
    },
    remark: {
      en: `About 7 months of life in Poland as a refugee due to the big war in Ukraine.`,
      ua: `Близько 7 місяців життя в Польщі як біженка через велику війну в Україні.`,
    },
    name: {
      en: 'Careful, exposed person',
      ua: 'Обережно, оголена людина',
    },
    text: {
      en: `  \v \b \v  For the first time, I met her on the bridge near the railway station. Snow fell from the sky to the ground, and she stood between them.
          \v \b \v  She was unaware of her nakedness and refused help. Speaking with her, I understood that her belongings and youth remained in Donetsk, marked forever. She was dreamy enough to be happy. And to warm up, she just needed to breathe in the smell of coal, coming from Platform 11 where an old train had arrived.
          \v \b \v  The second time I met her was in the summer, several years later. She was picking tomatoes at Silpo and was just as exposed. This time she was ashamed of her nudity and kept people away. Every touch from outsiders sent her into a shock of memories. She had so little that she drowned in her scarcity. She dragged herself out by her hair, clutched at sad songs, and grew muscles.
          \v \b \v  Once in the fall, I turned at the sound, only a naked person could rustle leaves like that. It was her. She walked the streets and flaunted her nudity. She met many people, but went to the movies alone. She laughed to sad songs, danced to muscle aches. She was polite and greeted too much. Her smile suited her nudity very well.
          \v \b \v  Over time, no one noticed her nakedness anymore. And she forgot the smell of the old railway herself.
          \v \b \v  Then sirens sounded across the country and everyone lost something. Someone lost peace, someone lost home, and someone lost family.\n
          \v \b \v  When I crossed the border, at the entrance to Ukraine I saw a missing sign: "Beware, naked people."`,
      ua: ` \v \b \v Вперше я зустріла її на мосту біля залізничого вокзалу. Сніг спускався з неба на землю, а вона стояла між ними.
          \v \b \v  Вона не усвідомлювала своєї оголеності та відмовлялася від допомоги. Заговоривши з нею, я зрозуміла, що її речі та юність залишилися у мʼякому знаку Донецька. Назавжди. Вона була достатньо замріяна, щоб бути щасливою. А щоб зігрітися їй достатньо було вдихати запах вугілля, який доносився з колії 11 на яку підʼїхав старий потяг.
          \v \b \v  Вдруге я зустріла її влітку через декілька років. Вона обирала помідори в Сільпо і була так саме оголена. На цей раз вона соромилася своєї оголеності й не підпускала до себе людей. Кожен сторонній дотик вбивав її струмом спогадів. В неї настільки нічого не було, що вона тонула у своєму немайні. Потопаюча витягала себе за волосся, хапалася за сумні пісні та обростала м'язами.
          \v \b \v  Якось восени, я обернулася на звук, тільки оголена людина спроможна так буцати листя. Це була вона. Гуляла вулицями та хизувалася своєю оголеністю. Зустрічалася з багатьма людьми, але в кіно ходила одна. Сміялася під сумні пісні, танцювала до болів у мʼязах. Була ввічлива і забагато віталася. Посмішка дуже личила її оголеності.
          \v \b \v  Пройшов час, ніхто вже не помічав її оголеності. Та й вона сама забула запах старої залізниці.
          \v \b \v  А потім пролунали сирени по всій країні й кожен щось втратив. Хтось спокій, хтось домівку, а хтось родину.\n
          \v \b \v  Коли я перетинала кордон, на вʼїзді в Україну я побачила відсутній напис: «Обережно, оголені люди»`,
    },
    illustration: `${naked}`,
  },
  {
    id: 3,
    date: {
      en: `May 10, 2022`,
      ua: `10 травня 2022`,
    },
    remark: {
      en: `A couple of months after the start of Russia's full-scale invasion of Ukraine. And 8 years of occupation of Donetsk by the same Russia.`,
      ua: `Пару місяців після початку повномасштабного вторгнення Росії в Україну. Та 8 років окупації Донецька тією самою Росією.`,
    },
    name: {
      en: 'I planned the 10th of May in advance',
      ua: 'Десяте травня я планувала заздалегідь',
    },
    text: {
      en: ` \v \b \v I planned the tenth of May in advance.
        I arrived in Donetsk, home. We sat with my grandmother and grandfather in our blooming mini garden. Grandfather quotes me at five years old, and the bees are buzzing.
         \v \b \v Today's text is not about the grandfather. Today's text is about the one who inspired him to act, who endured his whims all his life, who supported all his crazy ideas, who scolds him and comforts him, who has been calling him to dinner for 60 years while he sits and listens to his bees buzz.
         \v \b \v Grandmother, even though this year, as planned, did not come true. A thousand kilometers lie between us, and the bees that were supposed to buzz died from explosions. But this is just a test that we will overcome, like all the others! The main thing is that we are all unbreakable, so the lilies of the valley and lilacs still bloom for you, and grandfather has already got new bees.
         \v \b \v I sincerely believe it is unfair that you always had to do the hard work, and grandfather got the laurels. I didn't say it, but know that your granddaughter is proud of you! Furthermore, I am grateful for your songs before bed, for your "wear a hat," and for your pickled cucumbers. All the time, while grandfather was dragging me into an adventure, you prayed for me. Thank you.
         \v \b \v I'm very sorry that, being born in war, you have to go through it again and celebrate your 80th birthday not in hugs but in horror. But, I know, this is definitely not your last anniversary, and the next one we will celebrate as planned. I will order you the pizza you have been dreaming of for several years, we will sit in our blooming garden, grandfather will quote me at five years old, and the bees will buzz like never before!
        `,
      ua: ` \v \b \v Десяте травня я планувала заздалегідь. 
        Приїхала я в Донецьк, додому. Сіли ми з бабусею та дідусем на дворі  у нашому квітучому мінісадочку. Дідусь цитує мене п'ятирічну, а бджоли гудуть. 
         \v \b \v Сьогоднішній текст не про дідуся. Сьогоднішній текст про ту, котра надихала його на вчинки, хто терпів його вибрики все життя, хто підтримував всі його божевільні ідеї, хто сварить його і жаліє, хто вже 60 років кличе його вечеряти поки він сидить та слухає як гудуть його бджоли. 
         \v \b \v Бабуся, нехай цього року, як планувала не здійснилося. Між нами тисяча кілометрів, а ті бджоли, що мали гудіти, померли від вибухів. Але це лише випробування, яке ми здолаємо як і усі інші! Головне, що ми всі незламні, тому конвалії та бузок все одно цвітуть для тебе, а дідусь вже завів нових бджіл. 
         \v \b \v Щиро вважаю несправедливим, що тобі завжди діставалась важка робота, а дідусеві - лаври. Я не казала, але знай, твоя внучечка пишається тобою! Я вдячна за твої пісні перед сном, за твої "вдягни шапочку" та за твої солоні огірки. Весь час поки дідусь тягнув мене на авантюру, ти молилася за мене. Дякую. 
         \v \b \v Мені дуже прикро прикро, що народившись у війні, тобі доводиться переживати її знову і зустрічати своє 80-річчя не в обіймах, а в жаху. Але, я знаю, це точно твій не останній ювілей і наступний ми відсвяткуємо як і планували. Я замовлю тобі піцу, про яку ти мрієш вже декілька років, ми сядемо в нашому квітучому садочку, дідусь буде цитувати мене п'ятирічну, а бджоли гудітимуть як ніколи!`,
    },
    illustration: `${ba}`,
  },
  {
    id: 4,
    date: {
      en: `March 15, 2022`,
      ua: `15 березня 2022`,
    },
    remark: {
      en: `My grandfather's birthday. Due to heavy shelling, there is no connection to Donetsk and I don't even know if he was still alive.`,
      ua: `День народження мого дідуся. Через сильні обстріли Донецьку немає звʼязку і я навіть не знаю чи жив він ще.`,
    },
    name: {
      en: '79 in the corridor',
      ua: '79 в коридорі',
    },
    text: {
      en: ` \v \b \v 79 in the corridor.
         \v \b \v This is not how my grandfather dreamed of celebrating his birthday. All he wanted was to hear his granddaughters' voices in the morning, but now that's impossible; now I can't even call him. Donetsk is enduring such heavy shelling now, heavier than any it has faced in the eight years of war. Yes, exactly eight years. For some, the war started on February 24, 2022, but for me and all the people of Donetsk and Luhansk, it started in the summer of 2014.
         \v \b \v That's when my grandfather stopped living in the future, or even the present, and started living in the past. Every phone call included the phrase, "Do you remember when we...". Thanks to my grandfather, I have many "remember when" moments. Walks in the forest. First driving lessons. My grandfather told me and showed me everything he knew. While grandma yelled "Kolya, that's enough!" he took me horse riding, played hockey on the frozen pond, caught frogs, took me sledding in the summer, taught me how to load cartridges and build a fire...
         \v \b \v I am writing this text not in Russian but in the language of war. It has been like this since 2014. Before 2014, I spoke my first words in this language, Grandpa read poems, and Grandma called us to eat. How did it come to this? I don't understand. I have always lived with the belief that we get what we deserve. But none of us deserved this war. Why are our tears not coming from happiness? Why do we dance while dodging bullets? Why are our homes and hopes being destroyed? Why can't I hug my grandfather on his birthday?
         \v \b \v The scariest part is that my story is considered a happy one. While I lament losing my home for the second time, my friends are losing their loved ones. Too many losses in this nightmare.
         \v \b \v It feels like when Grandpa and I fell asleep in the hayloft, some straw was painfully pressing against my ribs. Grandpa, wake me up and tell me a good story, and then let's go celebrate your birthday.
        All together.
        Not in the corridor.`,
      ua: ` \v \b \v 79 лет в коридоре.
         \v \b \v Не так мой дедушка мечтал встретить свой День рождения. Всё, что он хотел это услышать голоса внучек с утра, но сейчас это невозможно, сейчас я не могу ему даже позвонить. Сейчас Донецк терпит такие сильные обстрелы, каких не знал за все 8 лет войны. Да, именно 8 лет. Для кого-то война началась 24.02.22, для меня и всех донецких/луганских с приходом лета 2014.
         \v \b \v Именно тогда мой дедушка стал жить не будущем, даже не настоящим, а прошлым. Каждый телефонный звонок содержал фразу «помнишь, как мы с тобой…». Благодаря дедушке у меня очень много «помнишь». Прогулки по лесу. Первые уроки вождения. Дедушка рассказал и показал мне всё что знает. Пока бабушка кричала «Коля, хватит», он катал меня на лошади, играл в хоккей на замёрзшем ставке, ловил лягушек, летом катал на санках, учил заряжать патроны и разводить костёр… 
         \v \b \v Этот текст я пишу не на русском, а на языке войны. Таким он стал с 2014. До 2014 на этом языке я говорила свои первые слова, дедушка читал стихи, а бабушка звала кушать. Как так получилось? Я не понимаю. Я всегда жила с убеждением, что мы имеем всё, что заслужили. Но эту войну никто из нас не заслужил. Почему наши слёзы не от счастья? Почему мы танцуем, уворачиваясь от пуль? Почему рушатся наши дома и надежды? Почему я не могу обнять дедушку в его День рождения? 
         \v \b \v Самое страшное, что моя история считается счастливой. Пока я плачусь, что второй раз потеряла дом, мои друзья теряют любимых и родных. Слишком много потерь в этом страшном сне. 
         \v \b \v Кажется, что когда мы уснули с дедушкой на сеновале, какая-то соломинка больно давила мне под ребро. Дедушка, разбуди меня и расскажи добрую сказку, а потом пойдём праздновать твой День рождения.
        Все вместе. 
        Не в коридоре.`,
    },
    illustration: `${grandpa}`,
  },
  {
    id: 5,
    date: {
      en: `March 4, 2022`,
      ua: `4 березня 2022`,
    },
    remark: {
      en: `The eighth day of the war. The same number of sleepless nights in a row.`,
      ua: `Восьмий день війни. Стільки ж безсонних ночей поспіль.\n
        Фото зроблено під час першого перебування у сховищі.`,
    },
    name: {
      en: 'Do you remember?',
      ua: 'А памʼятаєш?',
    },
    text: {
      en: `\v \b \v Do you remember how at dawn on Thursday, Svitka called with the words, "Are you sleeping? The war has started!"
\v \b \v Do you remember how I didn’t believe, “Again? Someone wants to take my home, no way!”
\v \b \v Do you remember how we went outside on the first day of the war and realized everyone had forgotten about the pandemic?
\v \b \v Do you remember how we threw out our healthy eating habits and bought sweets to eat away our fear?
\v \b \v Do you remember how we taped the windows with crosses?
\v \b \v Do you remember how I taught you to distinguish between outgoing and incoming shells?
\v \b \v Do you remember how we poured ourselves wine, turned on a Nina Simone record, and danced with smiles to keep from crying?
\v \b \v Do you remember how we slept in the corner of the basement with a heart drawn on the wall?
\v \b \v Do you remember how we decided to leave our home for a while, and while packing the essentials, you took down all our photos?
\v \b \v Do you remember how, to the sound of the siren, we dared to lock the doors from the outside?
\v \b \v Do you remember how the Carpathian fir trees wanted to cheer you up and covered themselves in snow?
\v \b \v Do you remember the family from Nemyriv, who not only gave us shelter but also their thermos?
\v \b \v Do you remember Matviychik in Kolomyia, who gave up his bed for my sister and sang the anthem to us before sleep?
\v \b \v Do you remember how we lived in a small but friendly commune in an old village house?
\v \b \v Do you remember how our eyes welled up with tears at every display of Ukrainian unity?
\v \b \v Do you remember how we thought of the worst but believed in the best?
\v \b \v Do you remember how we returned home?
\v \b \v Do you remember how we hung the photos back up and danced to jazz again?
\v \b \v Do you remember how the entire country, with bloodied hands, rebuilt every house, every bridge, and every road?
\v \b \v Do you remember how we achieved everything we dreamed of?
\v \b \v Do you remember how the hardest time for us became a memory we would like to forget, but never can...
\n
\v \b \v P.S.: ${daysDifference} days have passed. The war is still not a memory.
`,
      ua: ` \v \b \v А пам'ятаєш, як на світанку у четвер зателефонувала Свєтка  зі словами «Ви що спите? Війна почалася!»
 \v \b \v А пам'ятаєш, як я не повірила «вдруге? Хтось хоче забрати мій дім, ну ні!»
 \v \b \v А пам'ятаєш, як вийшли надвір у перший день війни й виявилося, всі забули про корону ?
 \v \b \v А пам'ятаєш, як ми похерили наше здорове харчування і пішли накупили солодощів, щоб заїдати страх?
 \v \b \v А пам'ятаєш, як заклеїли вікна хрестиком?
 \v \b \v А пам'ятаєш, як я навчила тебе розрізняти відльоти від прильотів?
 \v \b \v А пам'ятаєш, як ми налили собі вина, увімкнули платівку Ніни Симон і танцювали усміхаючись, щоб не плакати?
 \v \b \v А пам'ятаєш, як у підвалі ми спали в кутку із сердечком на стіні?
 \v \b \v А пам'ятаєш, як вирішили на час покинути наш будинок і збираючи найнеобхідніше, ти зняла всі наші фото?
 \v \b \v А пам'ятаєш, як під виття сирени зважилися зачинити двері зовні?
 \v \b \v А пам'ятаєш, як карпатські смереки хотіли тебе порадувати й вкрилися снігом?
 \v \b \v А пам'ятаєш сім'ю з Немирова, які дали нам, крім ночівлі, свій термос?
 \v \b \v А пам'ятаєш, Матвійчика в Коломиї, який поступився моїй сестрі ліжком і заспівав нам Гімн перед сном?
 \v \b \v А пам'ятаєш, як ми жили невеликою, але дружною комуною у старому будинку на селі?
 \v \b \v А пам'ятаєш, як від кожного прояву єдності українців мокріли очі?
 \v \b \v А пам'ятаєш, як ми думали про гірше, але вірили у краще?
 \v \b \v А пам'ятаєш, як ми поверталися додому?
 \v \b \v А пам'ятаєш, як вішали фотографії на місце та знову танцювали під джаз?
 \v \b \v А пам'ятаєш, як потім вся країна з розбитими в кров руками відбудувала кожну хату, кожен міст та кожну дорогу?
 \v \b \v А пам'ятаєш, як ми здійснили все, про що мріяли?
 \v \b \v А пам'ятаєш, як найважчий для нас час став спогадом, який хотілося б забути, але ніколи не вийде...\n
 \n
 \v \b \v P.S.: Пройшло ${daysDifference} днів. Війна все ще не стала спогадом.
 `,
    },
    illustration: `${we}`,
  },
  {
    id: 6,
    date: {
      en: `October 30, 2021`,
      ua: `30 жовтня 2021`,
    },
    remark: {
      en: `The duty of the older sister fell on me. Today I am accompanying my little one to the dance competition.`,
      ua: `На мене впав обовʼязок старшою сестри. Сьогодні я супроводжую малу на танцювальні змагання.`,
    },
    name: {
      en: 'Mass events',
      ua: 'Масові заходи',
    },
    text: {
      en: `\v \b \v Mass events during a pandemic. A dance contest is one way to exchange bacteria with hundreds of people and legally stare at them. That's exactly what I'm doing.
        \v \b \v Quite an ordinary, but very pleasant man, I thought. First of all, he's wearing glasses. But not everyone in glasses seems pleasant to me. Or do they? What's the matter now? And after I realized that it wasn’t the man himself that touched me, but the fact that he was carrying his five-year-old daughter, my tenderness quickly turned to indignation and a little bit of anger at myself.
        \v \b \v What the hell!
        Why on earth does a man just need to be there to seem pleasant? Just be with his family. And that's it. If he's somewhere lost, it's no surprise, but if he came to his daughter's performance, then immediately, "Wow, what a man, father of the year!" Why did my attention first go to the man with the daughter, and then I noticed an equally pleasant woman busily preparing this girl's costume while talking to the older son?
        \v \b \v I caught myself thinking stereotypically, scolded myself, and continued to watch them.
        \v \b \v Thank the Gods, the family from five-year-olds to forty-five-year-olds turned out to be quite pleasant. Mom, dad, older son around 8-9 years old, and a girl around 5 years old. All four share a facial feature that's hard to pinpoint. The brother looks like the sister. The children look like the parents, and the husband and wife, after a long life together, have acquired a shared wrinkle. Families like these should be sold in new photo frames, not those plastic and sugary ones.
        \v \b \v Early Saturday morning wake-up, quick breakfast, cold car, fog over Kyiv, and here’s a sleepy family on the left bank watching a bunch of girls in blue swimsuits with white wings. Two minutes of long-awaited performance. And here’s the pleasant one in glasses carrying a crying angel with his own last name.
        Did she get nervous? Did something go wrong?
        \v \b \v It's not clear. This time, my attention was drawn to the second pleasant man in this family.
        \v \b \v When the culprit was standing on a chair, wiping her tears and taking off her wings, the older brother looked at his younger sister with dog-like eyes, gently stroked her, and said nothing. God, there was more empathy on his face than I have felt in my entire life. When the child calmed down, he stepped aside and continued to watch the performance of other people's sisters.
        \v \b \v A few more observations of the beautiful mother, and I realized that this family is definitely the most beautiful of all present here.
        `,
      ua: ` \v \b \v Масові заходи під час пандемії. Танцювальний конкурс - один зі способів обмінятися бактеріями з сотнями людей і законно витріщатися на них. Чим я й займаюся. 
         \v \b \v Цілком звичайний, але дуже приємний чоловік, подумала я. По-перше, він в окулярах.  Але ж далеко не всі в окулярах мені здаються приємними. Чи всі? У чому справа зараз? І після того, як я зрозуміла, що мене зворушив не сам чоловік, а те, що він ніс на руках доньку років п'яти, розчулення швидко перетворилося на обурення і невелику злість на себе.
         \v \b \v Якого біса!
        З якого переляку мужику, щоб здаватися приємним, досить просто бути? Бути поряд із сім'єю. І все. Якщо він десь загублений, то не дивно, а якщо він прийшов на виступ доньки, то одразу "Ваааау, оце чоловік, батько року!". Чому мою увагу привернув спочатку чоловік із донькою, й потім вже, я помітила не менш приємну жінку, яка метушливо готувала цій дівчинці костюм, при цьому спілкуючись зі старшим сином.
         \v \b \v Застукала себе на стереотипній думці, пожурилася і продовжила за ними спостерігати.
         \v \b \v Слава Богам, що сім'я від п'ятирічних до сорока п'ятирічних виявилася цілком приємною. Мама, тато, старший син років 8-9 та дівчинка років 5. Вся четвірка має загальну рису обличчя, яка не вловна поглядом. Брат схожий на сестру. Діти схожі на батьків, а чоловік із дружиною, через довге співжиття, отримали одну на двох зморшку. Ось такі сім'ї повинні продаватися в нових фото рамках, а не ті пластикові й нудотні.
         \v \b \v Ранній суботаранковий підйом, швидкий сніданок, холодна машина, туман над Києвом і ось сім'я, що не виспалася, на лівому березі дивиться на купку дівчаток у синіх купальниках та з білими крильцями. Дві хвилини довгоочікуваного виступу. І ось цей приємний в окулярах несе ридаюче янголя зі своїм же прізвищем. 
        Перенервувала? Щось пішло не так? 
         \v \b \v Не ясно. Цього разу мою увагу привернув другий приємний чоловік цієї родини.
         \v \b \v Коли винуватиця стояла на стільці, витирала сльози й знімала крила, старший брат собачими очима дивився на молодшу, ніжно гладив її та нічого не говорив. Боже, на його обличчі було стільки співпереживання, скільки я за все життя не відчувала. Коли дитина заспокоїлася, він відійшов убік і продовжив дивитися виступ чужих сестер.
         \v \b \v Ще кілька спостережень за прекрасною мамою і я зрозуміла, що ця сім'я є однозначно найкрасивішою з усіх присутніх тут.
        `,
    },
    illustration: `${event}`,
  },
  {
    id: 7,
    date: {
      en: `August 2019`,
      ua: `Серпень 2019`,
    },
    remark: {
      en: `I got into the phone and saw that there were already 47 notes. I hope no one will ever read most of them. But here is one of those that allowed.`,
      ua: `Залізла в телефон, побачила, що нотаток вже 47. Більшість із них, сподіваюся ніхто й ніколи не прочитає. Але ось одна з тих, що можна.`,
    },
    name: {
      en: 'Notes on the phone',
      ua: 'Нотатки на телефоні',
    },
    text: {
      en: ``,
      ua: ` \v \b \v Київ  
        \v \b \v Автобусний маршрут номер 62.
        Через обруч навушників я спираюсь головою на велике вікно автобуса.
        \v \b \v Зупинка на липках. Заходять пасажири.
        \v \b \v 1. Молода й красиво мама з маленькою донькою на руках. У жінки неймовірно витончені риси обличчя та на диво широка ступня. А ще вона явно в когось закохана. Інакше не можу виправдати ці червоні балетки.
        \v \b \v 2.Бабуся в білій хустинці.
        Сідає поруч і кладе, як школярка, навколішки свою улюблену сумку. Здається, вона з тих, хто здатний помічати гарне. Доказ тому — її усміхнені зморшки. Мою увагу привернула сумка схожа на Катрін Деньов. Колись дуже модна, з дуже коштовною биркою, а зараз із потертостями по краях. Думаю, бабуся в білій хустинці вже дуже давно ходить із цією сумкою. Швидше за все, це сумка її дочки. Гадаю, спочатку дочка відходила з цією сумкою сезон, потім кілька років зберігала в коробці на шафі, а потім у зворотний спадок передала своїй матері. І ось контролерка витріщалася на цей не доречний в автобусі гламур.
        \n Може від того, що сидимо ми на місцях автобуса, що «качають», а може від того, що літня мати пишається, любить і страшно сумує за давно самостійною донькою…не знаю…але з якоїсь причини, та посміхалася і двома руками притискала потерту, дорогу і вже не модну сумку до в'язаної кофти. Автобус нахиляється на повороті, там де церква. Жінка похилого віку хреститься. Вона продовжує вірити в Бога та гомеопатію, а кожна штопана її річ пропахлася Барбовалом.`,
    },
    illustration: `${bus}`,
  },
  {
    id: 8,
    date: {
      en: `October 16, 2019`,
      ua: `16 жовтня 2019`,
    },
    remark: {
      en: `Impressions of a trip to Ireland.`,
      ua: `Враження про подорож до Ірландії.`,
    },
    name: {
      en: 'Ireland',
      ua: 'Ірландія',
    },
    text: {
      en: `\v \b \v My trip was very short, but very significant.
        I have always wanted to visit those faraway countries where people don't go for glamorous parties, don't take new dresses, and don't expect to get a good tan. My favorite performers are from Iceland. Their songs exude coolness, tranquility, warming drinks, and the coziness that comes from hugging a loved one. I dreamed of Iceland, but I got cheap tickets, and I flew to Dublin - Ireland. There were struggles with visas, documents, and now my life is divided into BEFORE and AFTER.
         \v \b \v It was worth it!
         \v \b \v I don't know how much I spent, I don't remember how I suffered in the visa queue. I remember standing on the edge of a cliff, the Atlantic Ocean raging below me, the wind lifting my tears upwards, and I realized that even if this piece of land I was standing on now broke off along with me and we plummeted into the ocean from a height of 120 meters, I wouldn't be the least bit upset. That's how overwhelming my emotions were.
        The land didn't break off and I was lucky. And in general, Ireland is pure luck! Luck literally at every step and in everything, no country has greeted me like this - with open arms. Nature. Air. Ocean. Rainbow. Nice people. Pubs. Architecture. Rain. A sense of fairy tale. In this country, I knew how to fly! I will definitely get to Iceland, but Ireland has forever settled in my heart.
         \v \b \v Do you remember that feeling when you had to part with someone at the peak of your love for a while? And you endlessly look through photos, miss them, love the whole world, but can't imagine life without the one in the photo. So. I have the same, only in my photos it’s Ireland and the feeling over 70,273km² is stronger.
`,
      ua: ` \v \b \v Поїздка моя була дуже недовгою, але дуже значною. 
        Я завжди хотіла побувати в тих далеких країнах, куди люди не їдуть за гламурними тусовками, не беруть нові сукні та не сподіваються там гарно засмагнути. Мої улюблені виконавці з Ісландії. Від їхніх пісень віє прохолодою, умиротворенням, зігріваючими напоями та затишком, що видобувається обіймами з коханою людиною. Я мріяла про Ісландію, але мені потрапили дешеві квитки, і я полетіла в Дублін - Ірландія. Були муки з візами, документами й тепер моє життя ділиться на ДО та ПІСЛЯ.
         \v \b \v Воно того варте!
         \v \b \v Я не знаю, скільки витратила, не пам'ятаю, як мучилася в черзі на візу. Я пам'ятаю, як стояла на краю скелі, піді мною вирував атлантичний океан, вітер підіймав сльози вгору, і я зрозуміла, що навіть якщо цей клаптик землі на якому я стою зараз відірветься разом зі мною і ми рухнемо в океан з висоти 120 м, то я ні крапельки не засмучусь. Ось так у мене зашкалювали емоції.
        Земля не обірвалася і мені пощастило. Та й загалом, Ірландія – це суцільне везіння! Щастило буквально на кожному кроці та в усьому, мене жодна країна не зустрічала так - з розкритими обіймами. природа. Повітря. Океан. Веселка. Милі люди. Паби. Архітектура. Дощ. Відчуття казки. У цій країні я вміла літати! Я обов'язково доїду до Ісландії, але Ірландія назавжди оселилася у моєму серці.
         \v \b \v Пам'ятаєте це відчуття, коли довелося на якийсь час розлучитися з людиною на піку вашого кохання? І ви нескінченно переглядаєте фото, сумуєте, любите весь світ, але не уявляєте життя без того, хто на фото. Так ось. У мене так само, тільки на моїх фото Ірландія та відчуття в 70273 км² сильніші.`,
    },
    illustration: `${Ireland}`,
  },
  {
    id: 9,
    date: {
      en: `May 23, 2021`,
      ua: `23 травня 2021`,
    },
    remark: {
      en: `An ordinary Sunday morning`,
      ua: `Звичайний недільний ранок`,
    },
    name: {
      en: 'Poached or soft-boiled eggs?',
      ua: 'Яйця пашот чи некруто?',
    },
    text: {
      en: `\v \b \v Poached or soft-boiled eggs?
        \v \b \v Before stepping out onto the balcony, my head was heavy. The number of tangled questions inside my skull exceeded the amount of tangled hair outside. Maybe they curl not by nature, but from thoughts.
        My Sunday midday morning:
        \v \b \v - it's when my pupils dart around the room, catching on items that scream "do this, no do that, but first do this...";
        \v \b \v - when plans for the week ahead are already laid out, and it's advisable to find a window of time because October cinema won’t visit itself;
        \v \b \v - it's when the to-do list is longer than my patience;
        \v \b \v - when there's no time to decide whether you want to see people or not;
        \v \b \v - when one hand is busy brushing teeth, and the other is placing an online order at the pharmacy.
        On autopilot, I find myself on the balcony. Stepping out from the arched kitchen window, here I am, above the chestnut trees, warming my knees in the sun. Breakfast of a couple of eggs, hot bread, and salmon awaits while I turn on the music. Now, if the neighbors' windows are open, they'll be listening to John Coltrane, whether they like it or not.
        \v \b \v My roommate likes it. And I like that she is a chocolatier, so when balcony matters come to bergamot, I have truffles with dorblu and cocoa beans to accompany my tea.
        \v \b \v Thoughts/tasks/questions attack, the wind rushes, the sun treacherously hides behind a cloud, and the crow starts to caw.
        \v \b \v But the saxophone, through the years and the portable speaker, captures 100% of my attention.
        \v \b \v Update complete.
        \v \b \v And as I leave the balcony, there’s only one question in my mind: "Did I have my eggs poached or soft-boiled?"
      `,
      ua: ` \v \b \v Яйця пашот чи некруто?
         \v \b \v Перед тим, як вийти на балкон, голова була важка. Кількість плутаних питань усередині черепної коробки перевищувала кількість заплутаного волосся зовні. Можливо і в'ються вони не від природи, а від думок.
        Мій ранок недільного півдня:
         \v \b \v - це, коли зіниці снують по кімнаті чіпляючись за предмети, які кричать "це зроби, ні ось це, але спочатку це...";
         \v \b \v - коли вже плани на тиждень вперед розписані та бажано знайти віконце, адже Жовтень(кінотеатр) сам у себе не сходить;
         \v \b \v - це коли список справ довший за терпіння;
         \v \b \v - коли немає часу зрозуміти хочеш ти бачити людей чи ні;
         \v \b \v - коли одна рука зайнята зубним чищенням, а інша робить онлайн замовлення в аптеці.
         Так на автопілоті я опиняюся на балконі. Вихід з аркового вікна кухні і ось ти вже вище каштанів грієш коліна на сонці. Сніданок з пари яєць, гарячого хліба та сьомги чекають, поки я вмикаю музику. Тепер, якщо у сусідів відчинені вікна, вони слухатимуть Джона Колтрейна, подобається це їм чи ні.
         \v \b \v Моїй сусідці по квартирі подобається. А мені подобається, що вона шоколатьє і коли балконні справи доходять до бергамотового, в прикуску до чаю у мене трюфеля з дорублю і какао боби.
         \v \b \v Думки/справи/питання атакують, вітер поспішає, сонце зрадницьки ховається за хмару, а ворона перейшла на крик. 
         \v \b \v Але саксофон крізь роки і портативну колонку поглинають 100% моєї уваги.
         \v \b \v Оновлення завершилось.
         \v \b \v  І коли я йду з балкона, то в голові лише одне питання "а яйця я їла пашот чи некруто?"
      `,
    },
    illustration: ``,
  },
  {
    id: 10,
    date: {
      en: `May 13, 2020`,
      ua: `13 травня 2020`,
    },
    remark: {
      en: `About this date`,
      ua: `Про цю дату`,
    },
    name: {
      en: 'A special day',
      ua: 'Особливий день',
    },
    text: {
      en: `\v \b \v Today is a special day for me.
        \v \b \v I don't anticipate it with excitement, I don't plan celebrations, and I don't try to escape like on my birthday. Today, I accidentally looked at the calendar and realized that exactly 6 years ago, a new era of my life began.
        \v \b \v Six years ago, I successfully jumped onto the platform and landed at home. And I went, somewhat blurred, slightly hunched, to take root among the city dwellers. I entered the doorways and came out of the main entrances. I started drinking menthol cigarettes with tea and milk. I fell in love and designated my favorite color — the color of the metro line where "my love lives".
        \v \b \v The infatuations and menthol cigarettes are left in the past. But the maybugs remind me that now is the best time for new beginnings. After all, only in May, when all your life plans are ruined, do you want to dance and laugh for no reason, just from walking around the city.
      `,
      ua: ` \v \b \v Сьогодні особливий день для мене.
        \v \b \v Я не чекаю на нього передчуваючи, не планую святкування і не намагаюся втекти, як у свій День народження. Сьогодні, я випадково подивилася на календар і зрозуміла, що рівно 6 років тому почалася нова ера мого життя.
        \v \b \v Шість років тому я вдало стрибнула на перон, а приземлилася вдома. І пішла ось така нерізка, трохи сутула пускати коріння у столичних мешканців. Я заходила до під'їздів, а виходила з парадних. Я почала цигарки з ментолом запивати чаєм з молоком. Я закохувалась та призначала улюбленим кольором — колір лінії метро, ​​де «живе моє кохання».
        \v \b \v Закоханості та ментолові сигарети залишилися в минулому. Але хрущі нагадують, що зараз – найкращий час для починань. Адже тільки в травні, коли всі плани на життя зруйновані, тобі хочеться танцювати та невиправдано сміятися, просто від прогулянки містом.
        `,
    },
    illustration: `${iam}`,
  },
  {
    id: 11,
    date: {
      en: `January 9, 2021`,
      ua: `9 січня 2021`,
    },
    remark: {
      en: `Conclusions after drawing beautiful hands.`,
      ua: `Висновки після малювання гарних рук.`,
    },
    name: {
      en: 'Election campaign',
      ua: 'Передвиборча кампанія',
    },
    text: {
      en: ``,
      ua: ` Якби я балотувалася в президенти, то мала б таку передвиборчу кампанію:
        \v \b \v  - Безкоштовний проїзд людям із гарними руками!
        \v \b \v  - Пом'якшувальні обставини в суді для людей в окулярах. Не тому, що мені їх шкода, а тому, що це красиво!
        \v \b \v  – Виключила б червоне сухе зі списку алкогольних напоїв. Все одно діти таке не п'ють, а мені набридло кожен раз показувати паспорт.
        \v \b \v  - Збільшила б пенсію людям похилого віку, які не розучилися посміхатися.
        \v \b \v  - І щоб чемним  за люб'язність молоко давали.
        \n Ну оскільки з такими обіцянками мене до парламенту ніхто не пустить, залишається ходити за вином із паспортом та милуватися вашими гарними руками.`,
    },
    illustration: ``,
  },
  {
    id: 12,
    date: {
      en: `January 5, 2021`,
      ua: `5 січня 2021`,
    },
    remark: {
      en: `Passed by the railway. I smelled coal. It became a bit sad that I can't take the train to home.`,
      ua: `Проходила повз залізничного. Відчула запах вугілля. Стало трохи сумно, що не можу сісти на потяг додому.`,
    },
    name: {
      en: 'Rose of Donbass',
      ua: 'Троянда Донбасу',
    },
    text: {
      en: ``,
      ua: `\v \b \v Троянда Донбасу
         \v \b \v Перед вами на фото набережна Кальміусу, юна красуня з трояндою в руках та розумінням у голові, що не хоче прожити у Донецьку все життя. Але є дещо про що ця наївна навіть не підозрювала.
         \v \b \v Одним із факторів сприятливого середовища для починань життя в новому місті є знання того, що в тебе завжди є можливість приїхати додому. У гості, на тиждень, на годинку, щоб пройтися місцями колишньої слави. Та що там, знання того, що десь є будинок, куди Дід Мороз приносив тобі подарунки, допомагає тобі сьогоднішній дорослій. І відповідно навпаки. Без можливості пройтися вулицею, де збивалися коліна, впевненість у завтрашньому дні випаровується. Дивна річ.
         \v \b \v Я давно живу у Києві та дуже цьому рада. Але коли взимку на пероні залізничного вокзалу пахне вугіллям, я впізнаю цей запах у якому росла і стає трохи сумно, що скоро й старих поїздів із вугільним опаленням не стане.`,
    },
    illustration: `${rose}`,
  },
  {
    id: 13,
    date: {
      en: `October 12, 2020`,
      ua: `12 жовтня 2020`,
    },
    remark: {
      en: `Existential reflections.`,
      ua: `Екзистенціальні роздуми.`,
    },
    name: {
      en: 'Yesterday I caught a cockroach',
      ua: 'Вчора спіймала тарганчика',
    },
    text: {
      en: ``,
      ua: `Вчора спіймала тарганчика!
        І ось сидимо ми обидва здивовані, дивимось очі в очі як він мені каже:
        "Настюша, якщо збираєшся щось зробити, а хтось раптом натякнув/попросив чи навіть стверджено сказав зробити те саме, що ти й так збиралася робити, то в мить треба передумати! Тобто, якщо тобі кажуть робити те, що ти й так збиралася робити, то повір, твої плани — безглуздий задум! Неважливо які наміри у цієї людини, бажання автоматично стає не твоїм. Злись й біжи, він твої плани зруйновано!
        Я звичайно починаю сперечатися з тарганом, наводити аргументи, ставити питання на кшталт: ось я хочу з'їсти цей шоколадний торт, наприклад, і тільки відламую шматочок, смакові рецептори вже смакують і тут хтось мені каже: "ну ж бо, давай, з'їж цей торт!"
        І що? Мені відразу перехочеться його? Навіть якщо він вже у ложечці та майже біля мого рота?
        Так! Все, бажання зіпсовано. Торт, напевно, не смачний, а ти йдеш на поводу інших!
        Пригадуючи свою поведінку, я зрозуміла, що цей тарган зі мною живе давно. І наче вже рідний, а люди чужі. І що з ним зробити? Прибити? Відпустити? Чи дбайливо повернути в голову і дозволити далі "піклуватися" про мене?`,
    },
    illustration: `${karachi}`,
  },
  {
    id: 14,
    date: {
      en: `August 18, 2020`,
      ua: `18 серпня 2020`,
    },
    remark: {
      en: `On the way from Donetsk to Kyiv.`,
      ua: `На шляху з Донецька до Києва.`,
    },
    name: {
      en: `You just can't`,
      ua: 'Не можна просто',
    },
    text: {
      en: ``,
      ua: `Не можна просто з'їздити до Донецька не написавши про це текст. Не тому, що "немає тексту — не було поїздки", а тому, що подорож до "міста вугілля та троянд" у сотні разів емоційніша за відпочинок на екзотичних островах. Не дивлячись на те, що замість крему для засмаги я беру із собою пачку заспокійливих.
        На фото основні причини моїх добровільних мук. Вони сумують та плачуть. Вони вирощують помідори, закривають огірочки та заморожують вишні тільки для того, щоб подивитися як я їм їхні запасики. Сенс їхнього життя – дочекатися онучок та нагодувати. І так останні шість років. Їм навіть особливо спілкуватися з нами не потрібно. Вони хочуть надивитися.
        Частіше я нетерпима до них, можу навіть підвищити голос, коли вони намагаються зробити мені добро проти моєї волі. Я не вмію сказати, що люблю їх і теж сумую. Я скоріше фиркну, коли вони спробують засунути мені в сумку згорток тараньки. Але в результаті я везу гостинці та величезний ком в горлі, а бабусі та дідусі починають новий відлік. Я знаю, що поки я проходжу блокпости та намагаюся тримати очі сухими, вони згадують, як у коридорі стояло на дві пари взуття більше, як я на ніч могла випити літр чаю дивлячись на зірки і яка ж я "худенька стала в цьому своєму Києві".
        Ці люди співчувають мені до сліз, хоч живуть у війні. Їм важливіше, щоб мені не тягнуло з вікна мого знімного подільського житла, ніж те, що в них уже кілька разів вилітали вікна через обстріли.
        Скоро я повернуся до Києва і в мене продовжиться моє звичне життя. Вони ображатимуться, що не дзвоню. Я тим часом думатиму про них, про те, як мені добре і відчуватиму свою провину за це.`,
    },
    illustration: `${donetsk}`,
  },
  {
    id: 15,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: 'Sadember',
      ua: 'Сумопад',
    },
    text: {
      en: ``,
      ua: ``,
    },
    illustration: `${sad}`,
  },
  {
    id: 16,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: '',
      ua: 'Бар Годар',
    },
    text: {
      en: ``,
      ua: `Я сегодня побывала в лучшем заведении из всех, что когда-либо посещала!
Меня туда привели мои добрые знакомые. Тот, кто не знает, никогда в жизни не найдёт дороги сам. Идти нужно через дворы и арки, сделав несколько неожиданных поворотов, вы попадаете в длинный узкий дворик в цветах осени. На улице будут стоять ребята в брюках и очках, в одной руке у них будут самокрутки, а в другой - бокалы из толстого стекла. Они неспешно потягивают красное сухое и обсуждают искусство. 
В углу дворика, между двумя зданиями конца 19 века, зажата небольшая дверь. Когда вы зайдёте в неё, вы чудесным образом (как в шатре Гарри Поттера) попадаете в огромное пространство. Всё помещение разбито на несколько разных зон. Более светлых и с приглушенным светом. С маленькими столиками и местами для больших компаний. Там стоит проигрыватель, который крутит виниловые пластинки, а напротив, в другом конце зала, стоит рояль. Места очень много, несмотря на миллионы антикварной мебели. Окон нет. Пол деревянный и неровный, но отполирован туфлями на красивых ногах. Ещё у одной стены расположен камин, который должны прочистить до ноября.
Бар Годар - это очень уютный и атмосферный бар! Вы никогда не уйдёте оттуда с ощущением, что зря потратили время. Там полно художников и киношников, архитекторов, музыкантов и прочей творческой интеллигенции.
Конечно, я встретила там парочку знакомых лиц, но когда шла поздороваться, я проснулась...
Если вы вдруг встретите такое место, как "Годар", отведите меня туда.`,
    },
    illustration: ``,
  },
  {
    id: 17,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: '',
      ua: 'Родина якої я не зустрічала',
    },
    text: {
      en: ``,
      ua: `Сижу в кафе, позавтракала, пью чай, работаю.
За соседним столиком сидит обычная такая, приятная семья из папы, мамы и девочки- подростка. Даше 15 лет, это и много другое я узнала в моменты затихания звука в моих наушниках.
Но самое интересное, что заставило меня обратить внимание на эту среднестатистическую семью, это !ВНИМАНИЕ ! то, что они вышли на семейный утренний кофе чтобы выбрать место, где они встретят НГ ! 
Это был не разговор между-прочим, они реально больше часа выбирали куда лучше поехать.
Варианты были разные, от Будапешта до Индии. Они смотрели карты, проверяли цены на авиабилеты и с воодушевлением делились мечтами о разных городах.
Это была такая милая семья, называющая друг-друга в уменьшительно-ласкательных.
Когда в очередной раз у меня затихли наушники, я услышала повышенный тон отца: 
"Каждый хочет своё! Мама- в Египет, Даша- в Берлин"
,а Я... а я в Чугуев ! "
Они разругались и папа пошел на улицу ждать пока дочь допьет свой латте, а мама сходит в уборную.
Интересно, куда они поедут на НГ ? Интересно, а можно-ли отправить каждого туда, куда он хочет ? И будет-ли мама счастлива встречая НГ в Египте без мужа и дочери? А папа в Чугуеве ? А дочь в Берлине ? Не понятно...
И не менее интересно, живут ли полностью счастливые семьи на этой планете? 
Или только в новых фото-рамках ?`,
    },
    illustration: ``,
  },
  {
    id: 18,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: '',
      ua: 'Проблеми з памʼяттю',
    },
    text: {
      en: ``,
      ua: `После того, как я спрошу у вас, читали ли вы книгу Лимонова "Эдичка", вы подумаете, что я умничаю. После я скажу, что прочла её вовремя и мне она очень понравилась, вы спросите "о чем она?". И когда я не смогу ответить, вы решите, что я вру.
Я не процитирую вам стихи, после того как скажу, что они мне нравятся.
Я не скажу, что в этом человеке такого, что я его люблю. Я не знаю почему лицо другого мне неприятно, даже, видеть. Я не смогу объяснить почему от этой песни хочется плакать или улыбаться. У меня не найдется аргументов чтобы защитить старый закошлаченный свитер.
Всё что я смогу это молча надевать его снова и вспоминать как он лежал рядом, когда мне было тепло и нежно без него.
Я не помню музыку песен, я не помню рифмы стихов, сюжет книги и даже почему моё лицо кривится при виде другого.
Но я помню эти чувства. Что такого со мной сделала эта песня, какая атмосфера этого произведения, какой красивый был снег, когда свитер лежал в шкафу и на сколько соленые были слёзы, когда чьи-то глаза мне врали.
Я не знаю, что это за память такая, добрая или злая. Но я доверяю морщинкам от улыбки и мурашкам на коже и это для меня главный аргумент, который не смогу описать словами, когда вы спросите "почему ?"`,
    },
    illustration: ``,
  },
  {
    id: 19,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: '',
      ua: 'Кухня. Вечір. Дві людини.',
    },
    text: {
      en: ``,
      ua: `Такие вечера как сегодняшний, маленькая ааа особенно ценит. Они откладываются в её неокрепшем восьмилетнем сознании и, наверняка, повлияют на формировании её  личности. Большая ААА очень надеется, что эта личность будет лучше чем ААА. Будет свободной от чужих мнений. И когда-нибудь ааа найдет ответы на вопросы, которых не может объяснить даже ААА. Она будет лучше, счастливее и свободнее. Когда-нибудь. Обязательно. И все начинается с вечеров под звёздам, со слежек за спутниками и чертовой желтой кухонной лампочки. Найдена мамина заначка вермута- это конечно не лучшее лекарство от ангины, но хочется. Возможно проходя вдоль желтого окна, кто-то заметил два силуэта. Это маленькая ааа и большая ААА. Если большой ААА в полночь хочется вермута, слушать голос чернокожей женщины и поджать одну ногу под себя сидя на кухонной табуретке, то почему ааа не может делать, то чего хочется ей ?! Может! Но миссия ААА сделать так, чтобы максимум, чего хотелось ааа на ночь глядя это просто посидеть рядом укутавшись в плед, задать пару вопросов и обдумывать их в волшебных красках сновидений.
- ты встречала когда-нибудь монстров ?
- каких именно ?
- ну таких с зубами и страшными лапами(показывает)
- ооо, так это не самые страшные монстры, я встречала пострашней!
- правда ?! И какие они ?
- на самом деле, они бывают очень красивыми, они даже могут улыбаться тебе
- так это не страшно
- понимаешь, когда перед тобой монстр с огромными зубами, тремя головами и колючим хвостом, это всё самое страшное что у него есть и ты это видишь, он это не скрывает...
- но а если он хочет тебя убить?!?
- это максимум, на что он способен. Куда страшнее, когда кто-то красивый тебе улыбается, а внутри, оказывается, он скрывает монстра...
Тишина... 
ААА уже сомневается, что параллельно со сказками можно рассказывать "такое". Остается надеяться, что ааа не унаследует эту НЕлюбовь к человечеству в целом.
- люди что-ли ? Скривившись спросила ааа.
- люди...
Конечно это не конец разговора, а лишь затухание песни чернокожей женщины.  Что было дальше останется только между ними. Останется под мартовскими звездами и пледом на табуретке.
Остынет желтая кухонная лампочка, а маленькая ааа будет засыпать вспоминая последнее на сегодня обещание ААА, что если мы будем вишенками в следующей жизни, то обязательно будем парой, бочок к бочку висеть на деревце.`,
    },
    illustration: ``,
  }
];

export default articleArr;
