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
  },
  {
    id: 5,
    date: {
      en: `March 4, 2022`,
      ua: `4 березня 2022`,
    },
    remark: {
      en: `The eighth day of the war. The same number of sleepless nights in a row.`,
      ua: `Восьмий день війни. Стільки ж безсонних ночей поспіль.`,
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
  },
  {
    id: 7,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: 'Notes on the phone',
      ua: 'Нотатки на телефоні',
    },
    text: {
      en: ``,
      ua: ``,
    },
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
      en: ``,
      ua: ` \v \b \v Поїздка моя була дуже недовгою, але дуже значною. 
        Я завжди хотіла побувати в тих далеких країнах, куди люди не їдуть за гламурними тусовками, не беруть нові сукні та не сподіваються там гарно засмагнути. Мої улюблені виконавці з Ісландії. Від їхніх пісень віє прохолодою, умиротворенням, зігріваючими напоями та затишком, що видобувається обіймами з коханою людиною. Я мріяла про Ісландію, але мені потрапили дешеві квитки, і я полетіла в Дублін - Ірландія. Були муки з візами, документами й тепер моє життя ділиться на ДО та ПІСЛЯ.
         \v \b \v Воно того варте!
         \v \b \v Я не знаю, скільки витратила, не пам'ятаю, як мучилася в черзі на візу. Я пам'ятаю, як стояла на краю скелі, піді мною вирував атлантичний океан, вітер підіймав сльози вгору, і я зрозуміла, що навіть якщо цей клаптик землі на якому я стою зараз відірветься разом зі мною і ми рухнемо в океан з висоти 120 м, то я ні крапельки не засмучусь. Ось так у мене зашкалювали емоції.
        Земля не обірвалася і мені пощастило. Та й загалом, Ірландія – це суцільне везіння! Щастило буквально на кожному кроці та в усьому, мене жодна країна не зустрічала так - з розкритими обіймами. природа. Повітря. Океан. Веселка. Милі люди. Паби. Архітектура. Дощ. Відчуття казки. У цій країні я вміла літати! Я обов'язково доїду до Ісландії, але Ірландія назавжди оселилася у моєму серці.
         \v \b \v Пам'ятаєте це відчуття, коли довелося на якийсь час розлучитися з людиною на піку вашого кохання? І ви нескінченно переглядаєте фото, сумуєте, любите весь світ, але не уявляєте життя без того, хто на фото. Так ось. У мене так само, тільки на моїх фото Ірландія та відчуття в 70273 км² сильніші.`,
    },
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
      en: ``,
      ua: ``,
    },
  },
  {
    id: 11,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: 'Election campaign',
      ua: 'Передвиборча кампанія',
    },
    text: {
      en: ``,
      ua: ``,
    },
  },
  {
    id: 12,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: 'Rose of Donbass',
      ua: 'Троянда Донбасу',
    },
    text: {
      en: ``,
      ua: ``,
    },
  },
  {
    id: 13,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: 'Yesterday I caught a cockroach',
      ua: 'Вчора спіймала тарганчика',
    },
    text: {
      en: ``,
      ua: ``,
    },
  },
  {
    id: 14,
    date: {
      en: ``,
      ua: ``,
    },
    remark: {
      en: ``,
      ua: ``,
    },
    name: {
      en: `You just can't`,
      ua: 'Не можна просто',
    },
    text: {
      en: ``,
      ua: ``,
    },
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
  },
];

export default articleArr;
