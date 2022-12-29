type TProductDetails = {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  status: string;
  article: string;
  favorite: boolean;
  sale: boolean;
  description: string;
  descriptionFull: string[];
  img: {
    id: string;
    title: string;
    imgUrl: string;
  }[];
};

export const productDetails: TProductDetails = {
  id: '01',
  title: 'Дистиллятор для получения гидролата 8л',
  price: '10590 грн',
  oldPrice: '1953 грн',
  status: 'В наличии',
  article: 'CP-0803',
  favorite: true,
  sale: true,
  description: `Медный дистиллятор «Феникс» станет Вашим надёжным помощником и
    проводником в мир дистилляции и красоты, с которым Вы легко
    сможете получать свои любимые гидролаты или алкогольные напитки.`,
  descriptionFull: [
    `Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на
    собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.`,
    `Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с      емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.`,
    `Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.`,
  ],
  img: [
    {
      id: '01',
      title: 'nature-1',
      imgUrl: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      id: '02',
      title: 'nature-2',
      imgUrl: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      id: '03',
      title: 'nature-3',
      imgUrl: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      id: '04',
      title: 'nature-4',
      imgUrl: 'https://swiperjs.com/demos/images/nature-4.jpg',
    },
    {
      id: '05',
      title: 'nature-5',
      imgUrl: 'https://swiperjs.com/demos/images/nature-5.jpg',
    },
    {
      id: '06',
      title: 'nature-6',
      imgUrl: 'https://swiperjs.com/demos/images/nature-6.jpg',
    },
    {
      id: '07',
      title: 'nature-7',
      imgUrl: 'https://swiperjs.com/demos/images/nature-7.jpg',
    },
    {
      id: '08',
      title: 'nature-8',
      imgUrl: 'https://swiperjs.com/demos/images/nature-8.jpg',
    },
  ],
};
