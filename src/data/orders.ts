import productCard_01 from '../assets/product-card-1.jpg';
import productCard_02 from '../assets/product-card-2.jpg';
import productCard_03 from '../assets/product-card-3.jpg';

type TOrders = {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  imgUrl: string;
  count: string;
  date: string;
  status: string;
};

export const orders: TOrders[] = [
  {
    id: '01',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '5000 грн',
    oldPrice: '1953 грн',
    imgUrl: productCard_01,
    count: '2 шт',
    date: '27.10.21',
    status: 'Отправлено',
  },
  {
    id: '02',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4000 грн',
    oldPrice: '2953 грн',
    imgUrl: productCard_02,
    count: '3 шт',
    date: '20.10.21',
    status: 'Получено',
  },
  {
    id: '03',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4000 грн',
    oldPrice: '',
    imgUrl: productCard_03,
    count: '1 шт',
    date: '10.05.21',
    status: 'Ожидается',
  },
  {
    id: '04',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '2000 грн',
    oldPrice: '953 грн',
    imgUrl: productCard_01,
    count: '2 шт',
    date: '11.11.21',
    status: 'Отклонено',
  },
  {
    id: '05',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '6000 грн',
    oldPrice: '',
    imgUrl: productCard_02,
    count: '2 шт',
    date: '03.05.21',
    status: 'Отправлено',
  },
  {
    id: '06',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4200 грн',
    oldPrice: '2933 грн',
    imgUrl: productCard_03,
    count: '5 шт',
    date: '14.03.21',
    status: 'Получено',
  },
];
