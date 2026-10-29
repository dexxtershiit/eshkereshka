const STORAGE = {
  USERS: 'users',
  CURRENT_USER: 'currentUser'
};

// Справочник областей и районов Беларуси (ключ — область, значение — массив районов)
const REGIONS_DISTRICTS = {
  'Брестская область': ['Брестский', 'Барановичский', 'Пинский', 'Кобринский', 'Лунинецкий'],
  'Витебская область': ['Витебский', 'Оршанский', 'Полоцкий', 'Новополоцкий', 'Лепельский'],
  'Гомельская область': ['Гомельский', 'Мозырский', 'Жлобинский', 'Светлогорский', 'Речицкий'],
  'Гродненская область': ['Гродненский', 'Лидский', 'Ошмянский', 'Слонимский', 'Волковысский'],
  'Минская область': ['Минский', 'Борисовский', 'Слуцкий', 'Молодечненский'],
  'Могилевская область': ['Могилевский', 'Бобруйский', 'Осиповичский', 'Мстиславский', 'Кричевский']
};

// Список исторических мест с полем district (район)
const PLACES = [
  {
    id: '1',
    title: 'Станция Дубица',
    short_desc: 'Самая маленькая железнодорожная станция Брестской области, включённая в список историко-культурных ценностей Беларуси.',
    region: 'Брестская',
    district: 'Брестский',
    image_url: 'images/dubitsa.jpg',
    lat: 51.983, lng: 23.683,
    era: 'конец XIX века'
  },
  {
    id: '2',
    title: 'Церковь Святой Троицы в Вольно',
    short_desc: 'Шедевр виленского барокко, бывший монастырь базилиан, с уникальной лепниной военной тематики.',
    region: 'Брестская',
    district: 'Барановичский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Вольно._Троицкая_церковь_%282020%29.jpg',
    lat: 53.15, lng: 26.05,
    era: 'XVIII век'
  },
  {
    id: '3',
    title: 'Усадьба Дубое',
    short_desc: 'Старинный парк с барочной часовней XVIII века и 450-летним дубом, бывшая летняя резиденция пинских иезуитов.',
    region: 'Брестская',
    district: 'Пинский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Дубае._Капліца_%2801%29.jpg',
    lat: 52.1, lng: 26.05,
    era: 'XVIII век'
  },
  {
    id: '4',
    title: 'Усадьба Суворова в Кобрине',
    short_desc: 'Дом, в котором жил и был похоронен великий полководец Александр Суворов, сейчас здесь военно-исторический музей.',
    region: 'Брестская',
    district: 'Кобринский',
    image_url: 'images/suvorov-kobrin',
    lat: 52.2098, lng: 24.3557,
    era: 'XVIII век'
  },
  {
    id: '5',
    title: 'Свято-Николаевская церковь в Кожан-Городке',
    short_desc: 'Жемчужина полесского деревянного зодчества с алтарями и иконами XVIII–XIX веков.',
    region: 'Брестская',
    district: 'Лунинецкий',
    image_url: 'images/kozhan-gorodok.jpg',
    lat: 52.22, lng: 27.05,
    era: 'XVIII век'
  },
  {
    id: '6',
    title: 'Несвижский замок',
    short_desc: 'Бывшая резиденция рода Радзивиллов с уникальным парком и древним архивом, объект Всемирного наследия ЮНЕСКО.',
    region: 'Минская',
    district: 'Борисовский',
    image_url: 'images/nesvizh.jpg',
    lat: 53.2229, lng: 26.6917,
    era: 'XVI-XVII вв.'
  },
  {
    id: '7',
    title: 'Мирский замок',
    short_desc: 'Один из наиболее известных памятников оборонного зодчества Беларуси XVI века, объект Всемирного наследия ЮНЕСКО.',
    region: 'Гродненская',
    district: 'Гродненский',
    image_url: 'images/mir.jpg',
    lat: 53.4513, lng: 26.4729,
    era: 'XVI век'
  },
  {
    id: '8',
    title: 'Мемориальный комплекс «Хатынь»',
    short_desc: 'Памятник сожжённой деревне и символ трагедии Великой Отечественной войны.',
    region: 'Минская',
    district: 'Борисовский',
    image_url: 'images/khatyn.jpg',
    lat: 54.3345, lng: 27.9446,
    era: 'XX век'
  },
  {
    id: '9',
    title: 'Успенский собор в Витебске',
    short_desc: 'Главный православный храм города, восстановленный в стиле виленского барокко, символ Витебска.',
    region: 'Витебская',
    district: 'Витебский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Vitebsk_Sobor_2012.jpg',
    lat: 55.195, lng: 30.205,
    era: 'XVIII век (восстановлен в 2011)'
  },
  {
    id: '10',
    title: 'Иезуитский коллегиум в Орше',
    short_desc: 'Крупнейший монастырский комплекс Беларуси в стиле барокко, бывший центр образования и культуры.',
    region: 'Витебская',
    district: 'Оршанский',
    image_url: 'images/orsha-jesuit.jpg',
    lat: 54.509, lng: 30.425,
    era: 'XVII век'
  },
  {
    id: '11',
    title: 'Софийский собор в Полоцке',
    short_desc: 'Древнейший каменный храм Беларуси, символ независимости Полоцкого княжества.',
    region: 'Витебская',
    district: 'Полоцкий',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/%D0%A1%D0%BE%D1%84%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%D0%B2_%D0%9F%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B5_1.jpg',
    lat: 55.4864, lng: 28.7586,
    era: 'XI век'
  },
  {
    id: '12',
    title: 'Мемориальный комплекс «Первая палатка»',
    short_desc: 'Памятник первостроителям Новополоцка, символизирующий начало города нефтяников.',
    region: 'Витебская',
    district: 'Новополоцкий',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Khatyn_Memorial_in_Belarus-2232.jpg',
    lat: 55.532, lng: 28.65,
    era: 'XX век'
  },
  {
    id: '13',
    title: 'Костёл Святого Казимира в Лепеле',
    short_desc: 'Католический храм в стиле классицизма, построенный на средства местных помещиков.',
    region: 'Витебская',
    district: 'Лепельский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Lepiel%2C_kaścioł_%2813.08.2008%29.jpg',
    lat: 54.881, lng: 28.699,
    era: 'XIX век'
  },
  {
    id: '14',
    title: 'Дворец Румянцевых-Паскевичей',
    short_desc: 'Главная достопримечательность Гомеля, великолепная усадьба на берегу реки Сож, бывшая резиденция знаменитых дворянских родов.',
    region: 'Гомельская',
    district: 'Гомельский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86%D0%B0%D0%B2%D0%B0-%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D0%B2%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D1%9E_%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%96._%D0%A4%D0%B0%D1%81%D0%B0%D0%B4_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86%D0%B0.jpg',
    lat: 52.422, lng: 31.0167,
    era: 'XVIII–XIX века'
  },
  {
    id: '15',
    title: 'Свято-Михайловский собор в Мозыре',
    short_desc: 'Крупный православный храм в центре Мозыря, важный духовный центр Полесья.',
    region: 'Гомельская',
    district: 'Мозырский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Church_of_Saint_Michael_Archangel%2C_Mazyr.jpg',
    lat: 52.0458, lng: 29.2705,
    era: 'XVIII век'
  },
  {
    id: '16',
    title: 'Свято-Троицкий собор в Жлобине',
    short_desc: 'Главный православный храм города, памятник архитектуры XIX века с богатой историей.',
    region: 'Гомельская',
    district: 'Жлобинский',
    image_url: 'images/zhlobin-troitskiy.jpg',
    lat: 52.892, lng: 30.038,
    era: 'XIX век'
  },
  {
    id: '17',
    title: 'Мемориальный комплекс «Ола»',
    short_desc: 'Памятник сожжённым белорусским деревням, расположенный на месте трагедии 1944 года.',
    region: 'Гомельская',
    district: 'Светлогорский',
    image_url: 'images/ola.jpg',
    lat: 52.7377, lng: 29.6651,
    era: 'XX век'
  },
  {
    id: '18',
    title: 'Свято-Успенский собор в Речице',
    short_desc: 'Старинный православный храм, восстановленный и действующий по сей день.',
    region: 'Гомельская',
    district: 'Речицкий',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Rečyca%2C_carkva_%2811.08.2008%29.jpg',
    lat: 52.361, lng: 30.405,
    era: 'XIX век'
  },
  {
    id: '19',
    title: 'Старый замок в Гродно',
    short_desc: 'Резиденция великих князей и королей, одна из главных исторических достопримечательностей Беларуси.',
    region: 'Гродненская',
    district: 'Гродненский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%A1%D1%82%D0%B0%D1%80%D1%8B_%D0%97%D0%B0%D0%BC%D0%B0%D0%BA.JPG',
    lat: 53.677, lng: 23.823,
    era: 'XII век'
  },
  {
    id: '20',
    title: 'Лидский замок',
    short_desc: 'Один из немногих сохранившийся средневековых замков Беларуси, построенный в XIV веке для защиты от крестоносцев.',
    region: 'Гродненская',
    district: 'Лидский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/2024.07.17_LIDA_CASTLE_Lidski_zamak.jpg',
    lat: 53.8872, lng: 25.3024,
    era: 'XIV век'
  },
  {
    id: '21',
    title: 'Костёл Святого Михаила Архангела в Ошмянах',
    short_desc: 'Известный католический храм, в котором венчался народный поэт Янка Купала.',
    region: 'Гродненская',
    district: 'Ошмянский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Ashmiana_catolic_kosel2.JPG',
    lat: 54.426, lng: 25.937,
    era: 'XIX век'
  },
  {
    id: '22',
    title: 'Жировичский монастырь',
    short_desc: 'Один из главных православных центров Беларуси, крупный архитектурный комплекс с чудотворной иконой.',
    region: 'Гродненская',
    district: 'Слонимский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/%D0%96%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C%2C_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F.jpg',
    lat: 53.0145, lng: 25.3459,
    era: 'XV век'
  },
  {
    id: '23',
    title: 'Костёл Святого Вацлава в Волковыске',
    short_desc: 'Исторический католический храм в центре города, памятник архитектуры XIX века.',
    region: 'Гродненская',
    district: 'Волковысский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Касцёл_Святога_Вацлава._Ваўкавыск.jpg',
    lat: 53.156, lng: 24.467,
    era: 'XIX век'
  },
  {
    id: '24',
    title: 'Мирский замок',
    short_desc: 'Всемирно известный замок в стиле готики и ренессанса, объект Всемирного наследия ЮНЕСКО.',
    region: 'Минская',
    district: 'Минский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mir_Castle.jpg',
    lat: 53.4513, lng: 26.4729,
    era: 'XVI век'
  },
  {
    id: '25',
    title: 'Несвижский замок',
    short_desc: 'Великолепный дворцово-парковый комплекс рода Радзивиллов, также входящий в список ЮНЕСКО.',
    region: 'Минская',
    district: 'Минский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Nesvizh_Castle_in_Belarus.jpg',
    lat: 53.2229, lng: 26.6917,
    era: 'XVI век'
  },
  {
    id: '26',
    title: 'Свято-Воскресенский собор в Борисове',
    short_desc: 'Главный православный храм города, памятник архитектуры XIX века.',
    region: 'Минская',
    district: 'Борисовский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Борисов_Воскресенский_собор_05.jpg',
    lat: 54.227, lng: 28.505,
    era: 'XIX век'
  },
  {
    id: '27',
    title: 'Слуцкая ратуша',
    short_desc: 'Историческое здание городского самоуправления с часовой башней, символ магдебургского права Слуцка.',
    region: 'Минская',
    district: 'Слуцкий',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Слуцкая_брама_ўлетку.jpg',
    lat: 53.027, lng: 27.552,
    era: 'XVIII век'
  },
  {
    id: '28',
    title: 'Костёл Пресвятой Девы Марии в Молодечно',
    short_desc: 'Изящный католический храм в центре города, памятник архитектуры начала XX века.',
    region: 'Минская',
    district: 'Молодечненский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Костёл_Вознесения_Пресвятой_Девы_Марии_в_деревне_Красное_%28Молодечненский_район%29.jpg',
    lat: 54.313, lng: 26.855,
    era: 'XX век'
  },
  {
    id: '29',
    title: 'Могилевская ратуша',
    short_desc: 'Величественное здание городского самоуправления на главной площади, символ независимости города.',
    region: 'Могилевская',
    district: 'Могилевский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Mahilio%C5%AD%2C_ratu%C5%A1a._%D0%9C%D0%B0%D0%B3%D1%96%D0%BB%D1%91%D1%9E%2C_%D1%80%D0%B0%D1%82%D1%83%D1%88%D0%B0_%282020%29_04.jpg',
    lat: 53.894, lng: 30.33,
    era: 'XVII век'
  },
  {
    id: '30',
    title: 'Бобруйская крепость',
    short_desc: 'Мощное фортификационное сооружение XIX века, одна из главных достопримечательностей города.',
    region: 'Могилевская',
    district: 'Бобруйский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%A1%D1%82%D0%B0%D1%80%D1%8B_%D0%97%D0%B0%D0%BC%D0%B0%D0%BA.JPG',
    lat: 53.1389, lng: 29.2458,
    era: 'XIX век'
  },
  {
    id: '31',
    title: 'Осиповичский краеведческий музей',
    short_desc: 'Музей с богатой исторической экспозицией, рассказывают о жизни края с древнейших времён.',
    region: 'Могилевская',
    district: 'Осиповичский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%A1%D1%82%D0%B0%D1%80%D1%8B_%D0%97%D0%B0%D0%BC%D0%B0%D0%BA.JPG',
    lat: 53.306, lng: 28.638,
    era: 'XX век'
  },
  {
    id: '32',
    title: 'Пустынский Свято-Успенский монастырь',
    short_desc: 'Древний мужской монастырь, основанный в XV веке, один из старейших в Беларуси.',
    region: 'Могилевская',
    district: 'Мстиславский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Пустынский_Свято-Успенский_мужской_монастырь_01.jpg',
    lat: 54.02, lng: 31.72,
    era: 'XV век'
  },
  {
    id: '33',
    title: 'Дворец Потемкина в Кричеве',
    short_desc: 'Руины великолепного дворца, построенного для князя Григория Потемкина, памятник архитектуры XVIII века.',
    region: 'Могилевская',
    district: 'Кричевский',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Nesvizh_Castle_in_Belarus.jpg',
    lat: 53.71, lng: 31.715,
    era: 'XVIII век'
  }
];

function getPlaceById(id) {
  return PLACES.find(p => String(p.id) === String(id));
}

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.USERS)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE.USERS, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.CURRENT_USER)) || null;
  } catch {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem(STORAGE.CURRENT_USER, JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem(STORAGE.CURRENT_USER);
}

function routeKey(email) {
  return `route_${email}`;
}

function getRoute(email) {
  try {
    return JSON.parse(localStorage.getItem(routeKey(email))) || [];
  } catch {
    return [];
  }
}

function saveRoute(email, route) {
  localStorage.setItem(routeKey(email), JSON.stringify(route));
}

function visitedKey(email) {
  return `visited_${email}`;
}

function getVisited(email) {
  try {
    return JSON.parse(localStorage.getItem(visitedKey(email))) || [];
  } catch {
    return [];
  }
}

function saveVisited(email, visited) {
  localStorage.setItem(visitedKey(email), JSON.stringify(visited));
}

function register(name, email, password) {
  const users = getUsers();
  if (users.some(u => u.email === email)) {
    throw new Error('Пользователь с таким email уже зарегистрирован');
  }
  const user = { name, email, password };
  users.push(user);
  saveUsers(users);
  return user;
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Неверный email или пароль');
  }
  setCurrentUser(user);
  return user;
}

function logout() {
  clearCurrentUser();
  window.location.href = 'index.html';
}

function isInRoute(placeId) {
  const user = getCurrentUser();
  if (!user) return false;
  return getRoute(user.email).some(p => String(p.id) === String(placeId));
}

function isVisited(placeId) {
  const user = getCurrentUser();
  if (!user) return false;
  return getVisited(user.email).map(String).includes(String(placeId));
}

function addToRoute(place) {
  const user = getCurrentUser();
  if (!user) return false;
  let route = getRoute(user.email);
  if (route.some(p => String(p.id) === String(place.id))) return false;

  const normalized = {
    id: String(place.id),
    name: place.title,
    region: place.region,
    district: place.district || '',
    image: place.image_url,
    description: place.short_desc || ''
  };

  route.push(normalized);
  saveRoute(user.email, route);
  return true;
}

function removeFromRoute(placeId) {
  const user = getCurrentUser();
  if (!user) return;
  let route = getRoute(user.email);
  route = route.filter(p => String(p.id) !== String(placeId));
  saveRoute(user.email, route);
  let visited = getVisited(user.email);
  visited = visited.filter(id => String(id) !== String(placeId));
  saveVisited(user.email, visited);
}

function toggleVisited(placeId) {
  placeId = String(placeId);
  const user = getCurrentUser();
  if (!user) return;
  let visited = getVisited(user.email);
  if (visited.map(String).includes(placeId)) {
    visited = visited.filter(id => String(id) !== placeId);
  } else {
    visited.push(placeId);
  }
  saveVisited(user.email, visited);
}

function addToRouteComposed(place) {
  const user = getCurrentUser();
  if (!user) return false;
  let route = getRoute(user.email);
  if (route.some(p => String(p.id) === String(place.id))) return false;

  const normalized = {
    id: String(place.id),
    name: place.title,
    region: place.region,
    district: place.district || '',
    image: place.image_url,
    description: place.short_desc || ''
  };

  route.push(normalized);
  saveRoute(user.email, route);
  return true;
}

function removeFromRouteComposed(placeId) {
  const user = getCurrentUser();
  if (!user) return;
  let route = getRoute(user.email);
  route = route.filter(p => String(p.id) !== String(placeId));
  saveRoute(user.email, route);
  let visited = getVisited(user.email);
  visited = visited.filter(id => String(id) !== String(placeId));
  saveVisited(user.email, visited);
}

function reorderRoute(fromIndex, toIndex) {
  const user = getCurrentUser();
  if (!user) return;
  let route = getRoute(user.email);
  if (fromIndex < 0 || fromIndex >= route.length || toIndex < 0 || toIndex >= route.length) return;
  const [movedItem] = route.splice(fromIndex, 1);
  route.splice(toIndex, 0, movedItem);
  saveRoute(user.email, route);
}

function moveRouteItem(placeId, direction) {
  const user = getCurrentUser();
  if (!user) return;
  let route = getRoute(user.email);
  const idx = route.findIndex(p => String(p.id) === String(placeId));
  if (idx === -1) return;
  const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
  if (targetIdx < 0 || targetIdx >= route.length) return;
  [route[idx], route[targetIdx]] = [route[targetIdx], route[idx]];
  saveRoute(user.email, route);
}

// ---------- Фильтрация мест по области и району ----------

// Текущее состояние фильтров
let filterRegion = 'Все области';
let filterDistrict = null;

// Возвращает отфильтрованный список мест по выбранной области и району
function filterPlaces(places) {
  // Нормализуем filterRegion: убираем слово «область» для сравнения с p.region
  const regionFilter = filterRegion === 'Все области' ? '' : filterRegion.replace(/ область$/i, '');
  return places.filter(p => {
    // Фильтр по области
    if (regionFilter && p.region !== regionFilter) return false;
    // Фильтр по району (если выбран конкретный район)
    if (filterDistrict && p.district !== filterDistrict) return false;
    return true;
  });
}

// Заполняет выпадающий список районов в зависимости от выбранной области
function populateDistrictSelect() {
  const districtSelect = document.getElementById('filter-district');
  if (!districtSelect) return;

  districtSelect.innerHTML = '<option value="">— Район —</option>';
  districtSelect.disabled = true;

  if (filterRegion !== 'Все области' && REGIONS_DISTRICTS[filterRegion]) {
    districtSelect.disabled = false;
    REGIONS_DISTRICTS[filterRegion].forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      if (filterDistrict === district) option.selected = true;
      districtSelect.appendChild(option);
    });
  }
}

// Рендерит карточки мест с учётом текущих фильтров
function renderPlaces() {
  const placesSection = document.getElementById('places-grid');
  if (!placesSection) return;

  const filtered = filterPlaces(PLACES);

  if (filtered.length === 0) {
    placesSection.innerHTML = '<p class="place-empty">Места не найдены по выбранным фильтрам</p>';
    return;
  }

  placesSection.innerHTML = filtered.map(p => {
    const user = getCurrentUser();
    const inRoute = user ? isInRoute(p.id) : false;
    const btnText = !user ? 'Войти, чтобы добавить' : (inRoute ? 'В маршруте' : 'Добавить в маршрут');
    const btnDisabled = !user ? false : false;

    return `
      <article class="card" data-region="${escapeHtml(p.region)}" data-district="${escapeHtml(p.district)}">
        <div class="card-img">
          <img src="${p.image_url}" alt="${escapeHtml(p.title)}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="region">${escapeHtml(p.region)}</span>
          <span class="district">— ${escapeHtml(p.district)}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.short_desc)}</p>
          <button class="btn-route"
            data-id="${p.id}"
            data-name="${escapeHtml(p.title)}"
            data-region="${escapeHtml(p.region)}"
            data-district="${escapeHtml(p.district)}"
            data-description="${escapeHtml(p.short_desc)}"
            data-image="${p.image_url}">
            ${btnText}
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Перепривязываем обработчики кнопок «Добавить в маршрут»
  placesSection.querySelectorAll('.btn-route').forEach(btn => {
    btn.addEventListener('click', () => {
      const user = getCurrentUser();
      if (!user) {
        window.location.href = 'login.html';
        return;
      }
      const place = PLACES.find(p => String(p.id) === String(btn.dataset.id));
      if (!place) {
        console.error('Место не найдено', btn.dataset.id);
        return;
      }
      if (isInRoute(place.id)) {
        removeFromRoute(place.id);
      } else {
        addToRoute(place);
      }
      renderRouteButtons();
      renderPlaces(); // перерисовать, чтобы обновить текст кнопки
    });
  });

  renderRouteButtons();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
    el.style.display = 'block';
  }
}

function hideError(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.style.display = 'none';
  }
}

function updateHeader() {
  const user = getCurrentUser();
  const nav = document.querySelector('.nav-actions');
  if (!nav) return;

  if (user) {
    nav.innerHTML = `
      <a href="profile.html" class="nav-link">${escapeHtml(user.name)}</a>
      <button class="btn btn-primary btn-logout">Выйти</button>
    `;
    nav.querySelector('.btn-logout').addEventListener('click', () => {
      logout();
    });
  } else {
    nav.innerHTML = `
      <a href="login.html" class="btn btn-outline">Вход</a>
      <a href="register.html" class="btn btn-primary">Регистрация</a>
    `;
  }
}

function renderRouteButtons() {
  const user = getCurrentUser();
  document.querySelectorAll('.btn-route').forEach(btn => {
    if (!user) {
      btn.textContent = 'Войти, чтобы добавить';
      btn.disabled = false;
      return;
    }
    if (isInRoute(btn.dataset.id)) {
      btn.textContent = 'В маршруте';
    } else {
      btn.textContent = 'Добавить в маршрут';
    }
  });
}


function renderRouteMap() {
  const mapEl = document.getElementById('route-map');
  if (!mapEl) return;
  const user = getCurrentUser();
  if (!user) { mapEl.innerHTML = ''; return; }
  const route = getRoute(user.email);
  if (route.length === 0) { mapEl.innerHTML = '<p class="route-empty">Добавьте места в маршрут, чтобы увидеть их на карте.</p>'; return; }
  if (mapEl._leaflet_id) { mapEl._leaflet_id = null; mapEl.innerHTML = ''; }
  const map = L.map('route-map').setView([53.7, 27.5], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  route.forEach(p => {
    const place = PLACES.find(pl => String(pl.id) === String(p.id));
    if (!place || place.lat == null) return;
    const marker = L.marker([place.lat, place.lng]).addTo(map);
    marker.bindPopup(escapeHtml(p.name || place.title));
  });
}

function renderProfileRoute() {
  const routeList = document.getElementById('route-list');
  if (!routeList) return;

  const user = getCurrentUser();
  if (!user) {
    routeList.innerHTML = '<p class="route-empty">Войдите, чтобы увидеть свои маршруты.</p>';
    return;
  }

  const route = getRoute(user.email);
  if (route.length === 0) {
    routeList.innerHTML = '<p class="route-empty">Вы ещё ничего не добавили в маршрут</p>';
    return;
  }

  routeList.innerHTML = route.map((p, index) => {
    const visited = isVisited(p.id);
    return `
      <div class="route-item${visited ? ' visited' : ''}" data-index="${index}">
        <!-- Основной контент карточки: номер + картинка + название + область -->
        <div class="route-content">
          <span class="route-number">${index + 1}</span>
          <img class="route-img" src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
          <div class="route-info">
            <div class="route-header">
              <strong class="route-name">${escapeHtml(p.name)}</strong>
              ${visited ? '<span class="badge-visited">Посещено</span>' : ''}
            </div>
            <span class="route-region">${escapeHtml(p.region)}</span>
          </div>
        </div>

        <!-- Блок с кнопками управления порядком, прижат к правому краю -->
        <div class="route-actions">
          <button class="btn btn-icon btn-move-up" data-id="${p.id}" ${index === 0 ? 'disabled' : ''}>↑</button>
          <button class="btn btn-icon btn-move-down" data-id="${p.id}" ${index === route.length - 1 ? 'disabled' : ''}>↓</button>
        </div>

        <!-- Блок с действиями: отметка посещения и удаление -->
        <div class="route-secondary">
          <button class="btn btn-visited${visited ? ' visited' : ''}" data-id="${p.id}" data-action="toggle-visited">
            ${visited ? 'Снять отметку' : 'Я здесь был'}
          </button>
          <button class="btn btn-ghost btn-remove" data-id="${p.id}">Удалить из маршрута</button>
        </div>
      </div>
    `;
  }).join('');

  // Обработчики кнопок изменения порядка (↑ / ↓)
  routeList.querySelectorAll('.btn-move-up').forEach(btn => {
    btn.addEventListener('click', () => {
      moveRouteItem(btn.dataset.id, 'up');
      renderProfileRoute();
      renderRouteMap();
    });
  });

  routeList.querySelectorAll('.btn-move-down').forEach(btn => {
    btn.addEventListener('click', () => {
      moveRouteItem(btn.dataset.id, 'down');
      renderProfileRoute();
      renderRouteMap();
    });
  });

  // Обработчик отметки «Я здесь был»
  routeList.querySelectorAll('[data-action="toggle-visited"]').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleVisited(btn.dataset.id);
      renderProfileRoute();
      renderRouteMap();
    });
  });

  // Обработчик удаления из маршрута
  routeList.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromRouteComposed(btn.dataset.id);
      renderProfileRoute();
      renderRouteMap();
    });
  });
}
renderRouteMap();

document.addEventListener('DOMContentLoaded', () => {
  updateHeader();

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    hideError('login-error');
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      hideError('login-error');
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      try {
        login(email, password);
        window.location.href = 'index.html';
      } catch (err) {
        showError('login-error', err.message);
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    hideError('register-error');
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      hideError('register-error');
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;
      try {
        register(name, email, password);
        login(email, password);
        window.location.href = 'index.html';
      } catch (err) {
        showError('register-error', err.message);
      }
    });
  }

  // ---------- Инициализация фильтров (только на главной странице) ----------
  const regionSelect = document.getElementById('filter-region');
  const districtSelect = document.getElementById('filter-district');

  if (regionSelect) {
    // Заполняем список областей
    Object.keys(REGIONS_DISTRICTS).forEach(region => {
      const option = document.createElement('option');
      option.value = region;
      option.textContent = region;
      regionSelect.appendChild(option);
    });

    // При изменении области — обновляем список районов и перерисовываем места
    regionSelect.addEventListener('change', e => {
      filterRegion = e.target.value || 'Все области';
      filterDistrict = null; // сбрасываем район при смене области
      districtSelect.value = '';
      populateDistrictSelect();
      renderPlaces();
    });
  }

  if (districtSelect) {
    districtSelect.addEventListener('change', e => {
      filterDistrict = e.target.value || null;
      renderPlaces();
    });
  }

  // Первичная отрисовка мест с фильтрами
  renderPlaces();

  const welcomeEl = document.getElementById('profile-welcome');
  if (welcomeEl) {
    const user = getCurrentUser();
    welcomeEl.textContent = user
      ? `Добро пожаловать, ${escapeHtml(user.name)}!`
      : 'Вы не авторизованы';
  }

  renderProfileRoute();
  renderRouteMap();
});
