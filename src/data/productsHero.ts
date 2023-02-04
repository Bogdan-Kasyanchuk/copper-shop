import heroImgDesk from 'assets/hero_bg_desktop_1920-896.png';
import heroImgMob from 'assets/hero_bg_mobile_1920-729.png';
import heroImgTab from 'assets/hero_bg_tablet_1920-1024.png';

type TProductsHero = {
  id: string;
  title: string;
  price: string;
  imgUrlMob: string;
  imgUrlTab: string;
  imgUrlDesk: string;
};

export const productsHero: TProductsHero[] = [
  {
    id: '01',
    title: 'Дистиллятор для эфирных масел',
    price: '4 906 грн',
    imgUrlMob: heroImgMob,
    imgUrlTab: heroImgTab,
    imgUrlDesk: heroImgDesk,
  },
  {
    id: '02',
    title: 'Дистиллятор для эфирных масел',
    price: '4 906 грн',
    imgUrlMob: heroImgMob,
    imgUrlTab: heroImgTab,
    imgUrlDesk: heroImgDesk,
  },
  {
    id: '03',
    title: 'Дистиллятор для эфирных масел',
    price: '4 906 грн',
    imgUrlMob: heroImgMob,
    imgUrlTab: heroImgTab,
    imgUrlDesk: heroImgDesk,
  },
];
