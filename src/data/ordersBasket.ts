import productCard_01 from '../assets/product-card-1.jpg';
import productCard_02 from '../assets/product-card-2.jpg';

type TOrdersBasket = {
  id: string;
  title: string;
  price: string;
  oldPrice: string;
  imgUrl: string;
  count: string;
};

export const ordersBasket: TOrdersBasket[] = [
  {
    id: '01',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '5000 грн',
    oldPrice: '1953 грн',
    imgUrl: productCard_01,
    count: '2 шт',
  },
  {
    id: '02',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4000 грн',
    oldPrice: '',
    imgUrl: productCard_02,
    count: '3 шт',
  },
  {
    id: '03',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4000 грн',
    oldPrice: '',
    imgUrl: productCard_02,
    count: '3 шт',
  },
  {
    id: '04',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '4000 грн',
    oldPrice: '',
    imgUrl: productCard_02,
    count: '3 шт',
  },
];
