module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      title: 'Honda CR-Z',
      text: 'Honda CR-Z совмещает в себе преимущества бензино-электрической гибридной силовой установки с механической трансмиссией и стильным кузовом купе. Совокупная мощность двигателя и гибридной системы IMA составляет 124 л.с., а крутящий момент - 174 Нм. Электромотор IMA мощностью 14 л.с. способный выдавать 78 Нм крутящего момента увеличивает крутящий момент в низком и среднем диапазоне оборотов и органично дополняет бензиновый двигатель любящий высокие обороты. Благодаря такому сочетанию CR-Z достигает эластичности, которая раньше была свойственна лишь автомобилям с турбированными двигателями, расходуя при этом всего 5.0 л на 100 км в смешанном цикле.',
      img: '/IMG/Models/Honda-CR-Z.jpeg',
      car_model_id: '466',
    },
    {
      title: 'Skoda Octavia 1959',
      text: 'Škoda Octavia — автомобиль малого класса с двухдверным кузовом, который являлся модернизацией автомобилей Skoda 440 «Спартак» (или Skoda 445), выпускавшегося компанией AZNP (Automobilové závody národní podnik, чешск.) в 1955—1958 годах. Производство Skoda Octavia началось в 1959 году. Автомобили с кузовом седан производились вплоть до 1964-го, после чего была проведена модернизация, а кузовная гамма расширилась вариантом универсал, после чего модель производилась до 1971 года. Всего в Чехословакии было произведено 286 тысяч автомобилей этой серии.',
      img: 'https://s.auto.drom.ru/i24268/c/photos/fullsize/skoda/octavia/skoda_octavia_1067441.jpg',
      car_model_id: '1324',
    },
    {
      title: 'Skoda Octavia 1996',
      text: 'Škoda Octavia — автомобиль размерного класса C, производимый чешской компанией Škoda Auto a.s. Название современной модели (четыре поколения, начиная с 1996 года) было позаимствовано у предшественника, производимого в 1959—1971 годах. Выпускается с кузовами лифтбек и универсал, с передним поперечным расположением бензиновых или дизельных двигателей, приводом на передние или на все четыре колеса (4х4). На данный момент (2019 год) Octavia является самой популярной моделью Škoda за всю историю, произведено более 7 миллионов единиц всех поколений.',
      img: 'https://s.auto.drom.ru/i24222/c/photos/fullsize/skoda/octavia/skoda_octavia_817487.jpg',
      car_model_id: '1324',
    },
    {
      title: 'Skoda Octavia A5 2004',
      text: `Второе поколение поколение Skoda Octavia было представлено в марте 2004 года. Автомобиль построен на платформе A5, общей с Audi A3 второго поколения, Volkswagen Golf пятого поколения и т.д. Помимо новой линейки двигателей, модель получила более просторный салон, в частности больше пространства для ног задних пассажиров (слабое место предшествующего поколения). Кроме того, был увеличен дорожный просвет спереди и сзади. Подтверждением мировой популярности автомобиля служит запуск его производства в разных странах, включая Россию — в конце 2007 года открыто производство Skoda Octavia в Калуге. В 2009 году проведен фейслифтинг модели: косметический редизайн бамперов и передних фар, произошли изменения в составе линейки моторов и КПП, небольшие нововведения коснулись и интерьера.

      Skoda Octavia второго поколения предлагалась покупателям в двух типах кузова: универсал и хэтчбек, с широкой линейкой двигателей и выбором по трансмиссии. В базовой комплектации Active автомобиль оснащен стальными колесными дисками 15", боковыми зеркалами с повторителями указателей поворота, рулевой колонкой с регулировкой в двух плоскостях, водительским сиденьем с регулировкой высоты положения; электропакет включает в себя привод передних стекол и боковых зеркал, предусмотрен обогрев боковых зеркал и форсунок стеклоомывателя; присутствует радиоподготовка, центральный замок, иммобилайзер и полноразмерное запасное колесо. Собственно, на этом список не исчерпывается. Опционально доступны: кожаный руль, передний подлокотник, противотуманные фары, задние датчики парковки, кондиционер, CD-проигрыватель и бортовой компьютер. В самой богатой комплектации Octavia предлагает широкий перечень оборудования высшего класса: легкосплавные диски, ксенон, датчик дождя, круиз-контроль, CD-чейнджер, мульти-руль, полный электропакет, включая обогрев передних и задних сидений.
      
      В России Octavia предлагались с атмосферными и турбированными бензиновыми двигателями объёмом от 1,4 до 1,8 литра в комбинации с механической, автоматической или роботизированной трансмиссией. Кроме того, универсал может комплектоваться 2-литровым турбодизельным двигателем с непосредственным впрыском TDI, оборудованным роботизированной КПП. Вообще, важно отметить это высокое техническое разнообразие, по большей части недоступное для многих иномарок, официально поставляемых на российский рынок. Здесь доступны и полноприводные модификации, пользующиеся заслуженным интересом, как, например, универсал Octavia Scout, который отличается повышенной функциональностью и массой прочих достоинств.
      
      Подвеска Skoda Octavia полностью независимая. Передняя — McPherson. Задняя — многорычажная. Передние и задние тормоза дисковые (передние — вентилируемые). Дорожный просвет варьируется в зависимости от версии. У хэтчбека в простом исполнении — 140 мм, у Octavia Scout он увеличен до 180 мм, что дает этому автомобилю улучшенные возможности передвижения по пересеченной местности. Полноприводная трансмиссия использует систему Haldex Traction, имеющей в составе центральную муфту с компьютерным управлением, которая способна автоматически перераспределять крутящий момент, передавая на выбранное колесо до 85% усилия.
      
      Комплекс компонентов безопасности Octavia второго поколения неплохо выглядит и по современным требованиям, особенно при рассмотрении послерестайлинговых автомобилей (с 2008 года), где присутствуют подушки безопасности водителя и переднего пассажира (последняя — с функцией деактивации), преднатяжители ремней безопасности, крепление для детского сиденья ISOFIX, а также целый набор систем активной безопасности: антиблокировочная система тормозов, системы распределения тормозных усилий и помощи при экстренном торможении. Опционально предлагаются системы: курсовой устойчивости, антипробуксовочная, помощи при старте на подъеме, контроля давления в шинах.
      
      Skoda Octavia второго поколения отличается доступной ценой при оптимальном наборе характеристик. Скромный, в какой-то степени даже строгий имидж, не отличающийся особыми изысками, — скорее плюс, особенно для ценителей классического дизайна. Автомобиль заслуживает высоких оценок и за свою надежность и практичность, что доказало еще предыдущее поколение. Автомобили же новой генерации стали заметно лучше в плане комфорта и оснащения.`,
      img: 'https://s.auto.drom.ru/i24201/c/photos/fullsize/skoda/octavia/skoda_octavia_633559.jpg',
      car_model_id: '1324',
    },
    {
      title: 'Skoda Octavia рестайлинг A7 2016',
      text: `В 2016 году компания Skoda представила обновленную версию семейства Octavia третьего поколения (5E). Универсал Octavia Combi получил иное оформление передней части: новые сдвоенные фары, новую решетку радиатора, бамперы и некоторые другие детали. На смену биксеноновой оптике в топовом исполнении пришли опциональные светодиодные фары. Сзади изменился рисунок фонарей. Кроме того, универсал Octavia теперь можно заказать с 16- и 18-дюймовыми дисками с новым дизайном. Вслед за премьерой обновленной базовой версии Octavia в конце 2016 года производитель показал спортивные модификации с индексом RS. Продажи автомобилей обновленного семейства Skoda Octavia Combi с линейкой бензиновых моторов 1.6 (110 л.с.), 1.4 (турбо, 150 л.с.) и 1.8 (турбо, 180 л.с.) начались в России в апреле 2017-го, а чуть позже стартовали продажи «заряженной» Octavia Combi RS с 2,0-литровым турбомотором мощностью 230 л.с.

      На российском рынке стандартный универсал Octavia Combi предлагается в трех комплектациях: Active, Ambition и Style. В списке оборудования базовой версии: рейлинги на крыше, светодиодные ходовые огни и задние фонари, регулировка высоты водительского сиденья, бортовой компьютер, обогрев форсунок омывателя лобового стекла, наружные электрозеркала с обогревом, передние электростеклоподъемники, аудиосистема Радио Swing с экраном 6.5" (MP3, USB, Aux, SD). В комплектации Ambition оба передних кресла оснащены подогревом и регулируются по высоте, есть регулировка поясничной опоры, имеются кондиционер, Bluetooth. В комплектации Style универсал предложит мультируль, атмосферную подсветку, климат-контроль, складывающиеся зеркала, центральный дисплей 8", голосовое управление и многое другое. Внутреннее убранство Skoda Octavia Combi заслуживает самого пристального внимания, особенно в дорогих версиях с дополнительными функциональными пакетами, где установлены кресла с электроприводом, мультимедийная система Columbus с 9,2-дюймовым экраном, панорамная крыша и прочее. Сзади появились USB-разъемы и опциональная розетка на 230 вольт. Другие нововведения — контурная подсветка во вставках дверных карт и зонтик в отсеке рядом с креслом переднего пассажира. Для универсала Combi дополнительно предлагаются двойной пол в багажнике, складные столики на спинках передних сидений, многофункциональный держатель для вещей под полкой багажника, сетка-перегородка между салоном и багажным отделением.
      
      Линейку бензиновых моторов Skoda Octavia Combi открывает атмосферный 1.6 MPI (110 л.с.). Этот двигатель агрегатируется с 5-ступенчатой механической КПП или 6-ступенчатым «автоматом». К турбомоторам — 1.4 TSI (150 л.с.), 1.8 TSI (180 л.с.) и 2.0 TSI для Octavia RS (230 л.с.) — предложены 6-ступенчатая «механика» или роботизированная преселективная коробка передач DSG (7-ступенчатая или 6-ступенчатая для 2.0 TSI и для полноприводного универсала 1.8 TSI 4×4). В самой динамичной версии RS универсал разгоняется до «сотни» всего за 6,8 секунды (7 сек. с коробкой DSG). Двигатели 1.4 TSI и 1.8 TSI также отлично тянут и шустро разгоняют Octavia Combi — на разгон до 100 км/ч потребуется от 7,4 до 8,3 секунды. Для базового мотора на «механике» этот же показатель — 10,8 сек. (12,2 сек. с «автоматом»). Средний расход бензина для 1.6 MPI — 6,1 (6,3) л/100 км. Для турбомоторов расход варьируется от 5,5 до 6,8 л/100 км. Объем бака — 50 литров, а для полноприводной Octavia Combi 1.8 4×4 он больше на 5 литров.
      
      Передняя подвеска Skoda Octavia — стойки Макферсона. Задняя — упрощенной конструкции: полузависимая, торсионная балка. Однако у самых мощных Octavia 1.8 TSI и RS есть особенность — многорычажная задняя подвеска, способствующая лучшему комфорту и управляемости. По сравнению со стандартным универсалом Combi версия RS отличается сниженным клиренсом в 127 мм (в стандарте 154-155 мм) и расширенной на 30 мм задней колеей. Также в ней доступны селектор режимов езды, рулевое управление с переменным усилием и Performance Sound Generator — система звуковой имитации спортивного мотора. Исключительно для универсала предусмотрена также «внедорожная» версия SCOUT — ее отличают прочный передний бампер, пластиковый обвес, увеличенный до 171 мм дорожный просвет, 17" диски, внедорожный пакет, включающий помимо прочего защиту картера и коробки передач. SCOUT оснащается системой выбора режимов движения Driving Mode Selection с режимом Offroad.
      
      Высокая безопасность третьего поколения — один из важных козырей Octavia. Автомобиль заслужил пять звезд из пяти в тестах EuroNCAP. Обновленная версия стандартно оборудована фронтальными подушками безопасности (для пассажира — с отключением), креплениями детского кресла, антиблокировочной системой тормозов, ассистентом подъема в гору (для АКПП и DSG), а также, за исключением базового мотора на «механике», электронной системой курсовой устойчивости ESC, включая блокировку дифференциала XDS. В более дорогих комплектациях имеются индикатор износа тормозных колодок, датчики света и дождя, боковые подушки спереди, а в комплектации Style — шторки безопасности.
      
      Широкое разнообразие модификаций по-прежнему остается одним из преимуществ Octavia Combi. Салон отличает продуманная эргономика, достаточный запас места сзади, спинка переднего сиденья складывается (опция), а по объему багажного отделения (588-1718 литров) универсал является одним из лидеров в классе. Выделяется версия Octavia Combi RS, она самая быстрая в линейке, но, как отмечают эксперты «Дром», лишена ряда преимуществ: у RS низкий клиренс и «травмоопасный» в российских реалиях обвес. Поэтому имеет смысл отдать предпочтение машине со 180-сильным мотором. С этим же мотором можно приобрести не только дорогой «внедорожный» универсал SCOUT, но также обычную версию с полным приводом, уже начиная с комплектации Ambition.`,
      img: 'https://s.auto.drom.ru/i24206/c/photos/fullsize/skoda/octavia/skoda_octavia_676741.jpg',
      car_model_id: '1324',
    },
    {
      title: 'Honda CR-Z 2010',
      text: `Honda CR-Z — гибридное спорт-купе (так позиционируют хэтчбек) с бензиновым двигателем 1,5 л (таким же, как на Fit) и гибридной установкой IMA (такой же, как на Insight). Входящий в состав силовой установки 14-сильный электромотор отлично помогает бензиновому мотору, а комбинированная мощность достигает 122 л.с. Система может работать в трех режимах: Economy, Normal или Sport. Построен CR-Z на базе модели Honda Insight, но создатели машины основательно потрудились, чтобы сделать новинку, можно сказать, полностью оригинальной. Низкий кузов, короткая колесная база и широкая колея шасси в сочетании с обтекаемым силуэтом создают очень выразительный, динамичный образ автомобиля.

      Аэродинамически совершенные формы и выраженно спортивные внешние данные хэтчбека сочетаются с посадочной формулой 2+2 и таким практичным решением, как складывающееся в ровный пол заднее сиденье. К слову, в Штатах автомобиль продавался в «чистом» варианте купе — только с двумя сиденьями. Внутри Honda CR-Z можно увидеть спортивную панель приборов с большим круглым колодцем тахометра и цифрового спидометра, слева и справа от которого находятся панели информации о состоянии электрической части и параметрах бензинового двигателя. Сиденья — спортивного типа, с отличной поддержкой. В списке стандартной комплектации «Beta» есть климат-контроль, рулевая колонка с регулировкой по наклону и вылету. Версия «Alpha» порадует владельца ксеноновыми фарами, 16-дюймовыми дисками, кожаным рулем, задним дворником, системой круиз-контроля. Опции включают кожаный салон, панорамную крышу. Специальный выпуск «Dressed label» отличается эксклюзивными решениями, среди которых — новый цвет кузова «коричневый перламутр», отдельные элементы салона в цвете бордо, эффектные металлические педали.
      
      Гибридная система Honda CR-Z включает рядный четырехцилиндровый двигатель объемом 1496 куб.см с системами DOHC и i-VTEC. Бензиновый агрегат развивает максимальные 114 л.с. (при 6000 оборотах в минуту) и 145 Нм крутящего момента (при 4800 об/мин). Механическая коробка передач — шестиступенчатая, аналогичная европейскому Honda Civic, со спортивно настроенными передаточными числами. С вариатором двигатель развивает 113 «сил» и 144 Нм. В характеристиках CR-Z с шестиступенчатой механикой указан расход 7,5 л/100 км в городе и 6,3 л на сотню по трассе, а с вариатором — 6,5 л на 100 км в городском режиме и 6,1 л — по трассе. Нельзя не упомянуть тюнинговые версии CR-Z с суперчарджером — этим занимались японская HKS, датская Rotrex. В мае 2011 представила свой вариант мастерская Mugen: совокупная мощность силовой установки возросла до 200 л.с. (147 кВт), а максимальный крутящий момент составил 245 Нм. До сотни автомобиль ускоряется за неполные 7 секунд, что по замечанию разработчиков сравнимо с разгонной динамикой 238-сильного Honda Civic Type-R. При этом машина потребляет скромные 5,6-литра топлива на сто километров пробега. 
      
      Учитывая, что хэтчбек построен на переднеприводной платформе Honda Insight, то и конструктивно схема шасси здесь точно такая же. Спереди независимая подвеска типа MacPherson с коваными нижними рычагами из алюминия; сзади полузависимая подвеска с торсионной балкой. Автомобиль оборудован электрическим усилителем рулевого управления (EPS) с переменными характеристиками. Тормозная система включает все дисковые тормоза (передние вентилируемые). Если говорить о размерах машины, то она получилась вполне компактной: габариты кузова составляют 4080 x 1740 x 1395 мм (Д x Ш x В). При колесной базе 2435 мм радиус разворота — всего 5 метров. Размеры салона достаточными не назовешь — в характеристиках производитель указывает 1605 x 1430 x 1080 мм, и если впереди места вполне хватает, то сзади впритык: удобно будет лишь детям. Глубокие выемки в подушке дивана (с учетом нависающего потолка) позволяют лучше зафиксировать пассажиров, которые будут сидеть «как влитые» даже в поворотах. Спинка заднего сиденья складывается целиком одним движением — объем багажника увеличивается почти вдвое, и получается ровный пол. Не разочарует автомобиль и по числу вместительных отделений в салоне, подстаканников, лотков и карманов.
      
      Honda CR-Z имеет на борту все самое необходимое для безопасности. Хэтчбек CR-Z (2010-2012) включает передние подушки для водителя и пассажира, опциональные боковые подушки; оснащен трехточечными ремнями на всех местах (передние с преднатяжителями и ограничителями усилия), производитель стандартно устанавливает антиблокировочную тормозную систему в сочетании с вспомогательной системой торможения и электронным регулятором тормозного усилия, а также систему стабилизации VSA.
      
      Honda CR-Z — по-своему уникален. Honda очень гордится сочетанием «механики» и гибрида — инновация, прецедентов в мире пока еще не было. Как отмечает производитель, тщательно продумана функциональность багажника, чтобы реализовать вместимость, которую можно использовать для повседневных покупок и выходных поездок. В 2010-м был признан «Автомобилем года» в Японии. Благодаря доступной цене у CR-Z имеется много поклонников. Какие-то нарекания обычно связаны с жесткостью подвески, теснотой сзади, недостаточной стойкостью к коррозии, отсутствием запаски, низким клиренсом.`,
      img: 'https://s.auto.drom.ru/i24253/c/photos/fullsize/honda/cr-z/honda_cr-z_990989.jpg',
      car_model_id: '466',
    },
    {
      title: 'Skoda Octavia A8 2019',
      text: `В четвертом поколении Октавия построена на модернизированной модульной платформе MQB Evo, на которой создан восьмой Volkswagen Golf. Эксперимент с «четырехглазой» Октавией (такой она стала во время рестайлинга) официально признан неудачным: автомобиль вернулся к обычным фарам. В целом же новое поколение оказалось похоже на старшего брата — Skoda Superb. Интерьер во многом напоминает Гольф: теперь элементы расположены в два яруса, разделенных серой горизонтальной полосой. От немецкого собрата достался и миниатюрный рычажок переключения режимов «автомата». А вот новый двухспицевый руль здесь свой. Впервые в серии появился опциональный трехзонный климат-контроль. Семейство по-прежнему доступно в вариантах лифтбэк и универсал. Для России заявлен только лифтбэк. С октября 2020 года модель производят по полному циклу на заводе ГАЗ в Нижнем Новгороде.

      В России четвертая Октавия предлагается в комплектациях Active Plus, Ambition Plus и Style Plus. Первый вариант включает светодиодные фары, кондиционер, медиасистему с 8-дюймовым сенсорным экраном, бесключевой доступ и кнопочное зажигание, мультируль (с подрулевыми переключателями для варианта с АКП). Ambition Plus дооснащен легкосплавными дисками (в базе штамповка R16), светодиодными противотуманками, регулировкой поясничного подпора передних сидений, двухзонным климат-контролем. В опциях: цифровая комбинация приборов 10,2 дюйма, аудиосистема премиум-класса с 12 динамиками, электропривод дверцы багажника, подогрев руля. Исполнение Style Plus — это литые диски R17, медиасистема Bolero с 10-дюймовым экраном, 8 динамиков, навигатор, обивка сидений «кожа + алькантара». Опции: электропривод регулировок передних сидений, 3-зонный климат и многое другое.
      
      Гамма двигателей для российского рынка включает три бензиновых агрегата — атмосферный 1,6 л с распределенным впрыском, а также турбированные с непосредственным впрыском 1,4 л и 2,0 л. Первый развивает 110 л.с. (155 Нм), второй — 150 л.с. (250 Нм), третий — 190 л.с., при этом он оснащен двухступенчатой регулировкой впускных клапанов и обеспечивает, как заявляет производитель, «дизельный» показатель крутящего момента — 320 Нм. Самый слабый мотор по выбору покупателя сочетается с 5-ступенчатой «механикой» или 6-диапазонным «автоматом», промежуточный — с 6-ступенчатой МКП или 8-ступенчатой АКП, самый мощный — только с 7-ступенчатым преселективным «роботом» DSG. Вариант 2.0 TSI DSG, естественно, будет самым быстрым — максимальные 240 км/ч, разгон 0-100 — за 7,4 секунды. Версии 1.4 TSI удается разогнаться до 223 / 227 км/ч (АТ/МТ), а до «сотни» — за 9,0/8,1 сек. Самый медлительный — 1.6 MPI, с «максималкой» 199 км/ч и разгоном до «сотни» за 12,4 сек. Базовый мотор в среднем расходует 6,4-6,9 л/100 км. Тогда как самым экономичным будет лифтбек 1.4 TSI — 5,5-5,8 л. Расход у модели 2.0 TSI DSG — 6,1 л/100 км. Объем топливного бака — 45 литров у моделей с младшими моторами и 50 литров у 2,0-литровой версии.
      
      Кузов Skoda Octavia четвертого поколения создан полностью с нуля. В варианте лифтбек габаритная длина автомобиля возросла на 19 мм, до 4689 мм, ширина — на 15 мм, до 1829 мм. Колесная база не изменилась и составляет 2686 мм. Коэффициент аэродинамического сопротивления удалось улучшить с 0,29 до 0,24. Спереди у Octavia подвеска на стойках МакФерсона, сзади торсионная. С двигателем 2.0 TSI сзади многорычажка — она комфортнее и лучше по динамическим качествам. В новом поколении слегка увеличился объем багажника: у лифтбека — с 590 до 600 литров. Во всех исполнениях спинка заднего сиденья складывается по частям (40/60), это можно сделать из салона или из багажного отделения (опция). Лифтбек рассчитан на буксировку прицепа массой до 1500 кг. При установке оригинального фаркопа в системе ESC активируется функция для стабилизации прицепа, движение становится еще более безопасным. 
      
      Автомобиль оборудован фронтальными и боковыми подушками в базовой комплектации, креплениями детского кресла Isofix, индикатором непристегнутого ремня водителя и всех пассажиров, функцией слежения за давлением в шинах. В комплектации Active Plus у версии с АКП есть ассистент подъема в гору, за доплату предлагаются круиз-контроль, задний парктроник, датчик усталости водителя и дополнительные подушки безопасности-шторки. Ambition Plus по умолчанию имеет все перечисленное, а также датчики света и дождя, а за доплату предложит освещение поворотов при помощи противотуманок, задние динамические поворотники и камеру с омывателем. У Style Plus матричные фары с автоматическим управлением пучком света, а в списке опций — ассистент парковки.
      
      Несмотря на все возрастающую долю кроссоверов, прежняя Octavia даже под излет карьеры оставалась самым популярным продуктом марки. Немудрено, что производитель попытался улучшить автомобиль по всем фронтам и интегрировать в него максимальное количество передовых фишек. Впрочем, для российского рынка Octavia предлагает далеко не все возможности — в европейской линейке есть «мягкий» и полноценный подключаемый гибрид. Пока у нас не доступен кузов универсал. Говоря о недостатках машины следует отметить, что с каждым поколением возрастает стоимость владения, при этом надежность автомобиля не поспевает за его технологичностью, а значительная часть детских болезней приходится на электронику, что отмечают и европейские покупатели. Нарекания вызывают также цена автомобиля, проблемы с обзорностью, настраивание многих функций только с кнопок на руле или сенсорной панели, отсутствие ровного пола при складывании сидений. `,
      img: '/IMG/Models/Skoda-Octavia.jpeg',
      car_model_id: '1324',
    },
    {
      title: 'Honda CR-Z рестайлинг 2012',
      text: `Небольшое обновление компактного спорт-гибрида Honda CR-Z произошло менее чем через три года с начала выпуска модели. По замыслу разработчиков рестайлинг должен заставить эту «хонду» поехать. Этой задаче служат как изменения внешнего вида автомобиля, так и модернизация гибридной силовой установки. Изменения в экстерьере машины включают модифицированный передок: укрупнились фальшрадиаторная решетка (теперь она в сотах черного цвета) и нижние вырезы в бампере, сплошной стала «губа» переднего спойлера. В головных фарах новые светодиодные секции из 16-ти элементов, прежде их было восемь. Чуть изменился и задок машины, где можно увидеть новый задний диффузор. Изменены характеристики гибридной силовой установки — суммарная производительность выросла до 130 л.с. 

      Новшества в интерьере минимальны, в основном они коснулись материалов отделки, цветовых решений. Самые заметные — новый дизайн рулевого колеса, декора дверных ручек и динамиков, обшивки сидений и дверных карт. Появилась новая версия «Master Label», которую отличают специально настроенная подвеска, 17-дюймовые алюминиевые диски в стандартной комплектации (для «Alpha» предлагаются опцией). В 2013-м вышли серии «Dressed Label II» и «Alpha Master Label 2-Tone Color Style» — как обычно, улучшены отделка салона и внешний вид, приняты эксклюзивные цветовые решения (для Master Label — двухтоновый окрас). Не заставила себя ждать и следующая спецификация Alpha Dressed Label III, в том числе и в двухцветной окраске, придающей машине больше индивидуальности.
      
      Если говорить об изменениях в гибридной силовой установке, то ее перенастроили так, что максимальная мощность увеличилась с 114 л.с. на 6000 об/мин до 120 л.с. при 6600 об/мин в случае с шестиступенчатой механической трансмиссией. За счет доукомплектовки блока никель-металл-гидридных батарей новыми литий-ионными аккумуляторами максимальное напряжение увеличилось со 100 Вольт до 144 Вольт, а мощность электромотора возросла с 14 л.с. до 20 л.с. Особым «шиком» рестайлинговой Honda CR-Z стала система «Plus Sport» — после нажатия кнопки «S+» будет использована вся объединенная мощность полуторалитрового двигателя внутреннего сгорания и электромотора, а отклик на полное нажатие газа в течение 5 секунд будет сравнимым с 3,0-литровым V6 (так заверяют в Honda). Действует система на скорости выше 30 км/ч и при уровне заряда батарей не ниже 50%. После рестайлинга расход топлива в смешанном режиме для версии с вариатором составляет 4,3 литра на сотню, для версии с механической коробкой передач — 4,8 литра. Специальная версия от мастерской Mugen — CR-Z Mugen RZ — поступила в продажу в октябре 2012-го. В автомобиле установлены: механический нагнетатель, высокопроизводительные инжекторы, специальный блок электронного управления, модернизированная система выхлопа. В итоге мощность 1,5-литрового мотора увеличилась до 156 л.с. (при 6600 об/мин), а крутящий момент с 14,8 кг-м поднялся до 18,9 кг-м. Естественно, версию от Mugen укомплектовали новыми амортизаторами с 5-ю степенями регулировки, коваными дисками 17'', спортивной тормозной системой. 
      
      Хэтчбек построен на переднеприводной платформе Honda Insight. Спереди независимая подвеска типа MacPherson, сзади полузависимая с торсионной балкой. Автомобиль оборудован электрическим усилителем рулевого управления (EPS) с переменными характеристиками. Тормозная система включает все дисковые тормоза (передние вентилируемые). Габариты кузова после рестайлинга практически не изменились: 4080 x 1740 x 1395 мм (Д x Ш x В). При колесной базе 2435 мм радиус разворота машины — всего 5 метров. Размеры салона достаточными не назовешь — в характеристиках производитель указывает 1605 x 1430 x 1080 мм, и если впереди места вполне хватает, то сзади впритык: удобно будет лишь детям. Глубокие выемки в подушке дивана (с учетом нависающего потолка) позволяют лучше зафиксировать пассажиров, которые будут сидеть «как влитые» даже в поворотах. Спинка заднего сиденья складывается целиком одним движением — объем багажника увеличивается почти вдвое, и получается ровный пол. Не разочарует автомобиль и по числу вместительных отделений в салоне, подстаканников, лотков и карманов.
      
      Honda CR-Z имеет на борту все самое необходимое для безопасности. Хэтчбек CR-Z после рестайлинга (2012-2015) включает передние подушки для водителя и пассажира, боковые подушки (стандарт с ноября 2014-го); оснащен трехточечными ремнями на всех местах (передние с преднатяжителями и ограничителями усилия), производитель стандартно устанавливает антиблокировочную тормозную систему в сочетании с вспомогательной системой торможения и электронным регулятором тормозного усилия, а также систему стабилизации VSA.
      
      Honda CR-Z — отличный компактный гибрид с заявкой на спортивность. Низкий кузов, короткая колесная база и широкая колея шасси в сочетании с обтекаемым силуэтом создают очень выразительный, динамичный образ. После весьма существенных изменений автомобиль стал чуть «горячее» и выглядит лучше внешне. Благодаря доступной цене у CR-Z имеется много поклонников. Какие-то нарекания обычно связаны с жесткостью подвески, теснотой сзади, недостаточной стойкостью к коррозии, отсутствием запаски, низким клиренсом.`,
      img: 'https://s.auto.drom.ru/i24253/c/photos/fullsize/honda/cr-z/honda_cr-z_991014.jpg',
      car_model_id: '466',
    },
    {
      title: 'Honda CR-Z 2-й рестайлинг 2015',
      text: `Очередной рестайлинг гибридного компактного хэтчбека Honda CR-Z, проведенный во второй половине 2015 года (обновленные машины компания выкатила в октябре), был призван подогреть интерес к модели — очарование от первого выпуска довольно быстро прошло и продажи стали падать. С целью привлечь новых поклонников в компании посчитали единственно верным решением не менять силовую часть, но сделать облик машины максимально агрессивным, изменить настройки ходовой, дополнительно улучшить безопасность. Помимо прочего, у автомобиля появилась система активного шумоподавления, а благодаря функции «3 Mode Drive System» из динамиков можно услышать приятный звук работы двигателя, создающий ощущение езды на более мощной машине.

      За яркую выразительную внешность Honda CR-Z выпуска 2015-2017 отвечают новый передний бампер, фары с еще более эффектными ресницами светодиодов и полностью светодиодной начинкой в комплектации Alpha Master Label. Изменен дизайн колесных дисков, задней части автомобиля. Стилистической «изюминкой» стали крыловидные аэродинамические элементы, встроенные в передний и задний бамперы. В салоне машины — новые варианты отделки. Стояночный тормоз получил электронное управление, появились центральный подлокотник с большим встроенным бардачком, кнопка запуска-остановки двигателя. Бортовая система с 7-дюймовым сенсорным дисплеем стала более функциональной за счет новых мультимедийных интерфейсов. Аудиосистема включает усилитель в 360 Вт и семь динамиков, создающих реалистичное звучание.
      
      Honda CR-Z (2015-2017) настроена на 120 л.с. (при 6600 об/мин) в случае с шестиступенчатой механической трансмиссией (118 л.с. с вариатором). Максимальное напряжение гибридной силовой установки составляет 144 В, мощность электромотора 20 л.с. Водитель по-прежнему может выбирать между тремя ездовыми режимами: «Экономный» (Econ), «Стандартный» (Normal) и «Спортивный» (Sport). Система «Plus Sport» позволяет кратковременно использовать всю объединенную мощность полуторалитрового двигателя внутреннего сгорания и электромотора с помощью нажатия соответствующей кнопки. Отклик на полный газ в течение нескольких секунд будет сравнимым с 3,0-литровым V6 (так заверяют в Honda). Действует система на скорости выше 30 км/ч и при уровне заряда батарей не ниже 50%. Расход топлива в смешанном режиме для версии с вариатором составляет 4,3 литра на сотню, для версии с механической коробкой передач — 4,8 литра.
      
      Хэтчбек построен на переднеприводной платформе Honda Insight. Спереди независимая подвеска типа MacPherson, сзади полузависимая с торсионной балкой. Автомобиль оборудован электрическим усилителем рулевого управления (EPS) с переменными характеристиками. Тормозная система включает все дисковые тормоза (передние вентилируемые). После второго рестайлинга изменения в конструкции машины включают увеличенную на 10 мм колею задних колес (с 1500 до 1510), на 1 миллиметр увеличен диаметр переднего стабилизатора (до 20 мм), увеличен диаметр передних и задних тормозных дисков, изменена жесткость пружин. Все это сделало автомобиль послушнее на дороге. Более агрессивные бамперы несколько увеличили длину хэтча — с 4075 до 4105 мм, ширина и высота остались неизменными: 1740 и 1395 мм. При колесной базе 2435 мм радиус разворота машины — всего 5 метров. Размеры салона достаточными не назовешь — в характеристиках производитель указывает 1605 x 1430 x 1080 мм, и если впереди места вполне хватает, то сзади впритык: удобно будет лишь детям. Глубокие выемки в подушке дивана (с учетом нависающего потолка) позволяют лучше зафиксировать пассажиров, которые будут сидеть «как влитые» даже в поворотах. Спинка заднего сиденья складывается целиком одним движением — объем багажника увеличивается почти вдвое (с 214 до 401 л), и получается ровный пол. Не разочарует автомобиль и по числу вместительных отделений в салоне, подстаканников, лотков и карманов.
      
      После второго рестайлинга продолжен курс на повышение безопасности автомобиля. Для CR-Z предложен пакет, включающий систему активного торможения в городских условиях, интеллектуальные боковые подушки передних сидений, боковые шторки безопасности для передних и задних сидений. В стандартное оборудование входят электронный стояночный тормоз, антиблокировочная тормозная система в сочетании с вспомогательной системой торможения и электронным регулятором тормозного усилия, а также система стабилизации VSA.
      
      С сожалением можно отметить, что еще в 2014 году компания объявила о прекращении продаж моделей CR-Z и Insight в Европе из-за низкого спроса, а затем в Австралии. Достаточно насытился и внутренний рынок — явные поклонники получили то, что хотели, однако найти новых покупателей автомобиль не мог в силу своих ограниченных спортивных и функциональных возможностей. В 2016-м компания представила на внутреннем рынке финальную версию гибридного хэтчбека — CR-Z Final Label. Всего с момента начала производства в 2010 году Honda выпустила около четырех миллионов экземпляров CR-Z. Благодаря доступной цене у CR-Z имеется много поклонников. Автомобиль очень неплох в качестве псевдо-спортивного, яркого внешне и в то же время экономичного хэтчбека для тех, кого не смущает посадочная формула 2+2 (американский вариант и вовсе двухместный). Какие-то нарекания обычно связаны с жесткостью подвески, теснотой сзади, недостаточной стойкостью к коррозии, отсутствием запаски, низким клиренсом.`,
      img: 'https://s.auto.drom.ru/i24253/c/photos/fullsize/honda/cr-z/honda_cr-z_991021.jpg',
      car_model_id: '466',
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
