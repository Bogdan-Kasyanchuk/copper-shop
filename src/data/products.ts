import productCard_01 from '../assets/product-card-1.jpg';
import productCard_02 from '../assets/product-card-2.jpg';
import productCard_03 from '../assets/product-card-3.jpg';

type TProducts = {
  id: string;
  title: string;
  price: string;
  imgUrl: string;
  favorite: boolean;
  sale: boolean;
  oldPrice: string;
};

export const products: TProducts[] = [
  {
    id: '01',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '1953 грн',
    imgUrl: productCard_01,
    favorite: true,
    sale: false,
    oldPrice: '',
  },
  {
    id: '02',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '2953 грн',
    imgUrl: productCard_02,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
  {
    id: '03',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '3953 грн',
    imgUrl: productCard_03,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
  {
    id: '04',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '1053 грн',
    imgUrl: productCard_01,
    favorite: true,
    sale: true,
    oldPrice: '1553 грн',
  },
  {
    id: '05',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '2053 грн',
    imgUrl: productCard_02,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
  {
    id: '06',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '3153 грн',
    imgUrl: productCard_03,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
  {
    id: '07',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '2053 грн',
    imgUrl: productCard_01,
    favorite: true,
    sale: true,
    oldPrice: '2353 грн',
  },
  {
    id: '08',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '1243 грн',
    imgUrl: productCard_02,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
  {
    id: '09',
    title: 'Медный чайник с фарфоровой ручкой',
    price: '2647 грн',
    imgUrl: productCard_03,
    favorite: false,
    sale: false,
    oldPrice: '',
  },
];
