import catalogCard_01 from '../assets/catalog-card-1.jpg';
import catalogCard_02 from '../assets/catalog-card-2.jpg';
import catalogCard_03 from '../assets/catalog-card-3.jpg';
import catalogCard_04 from '../assets/catalog-card-4.jpg';
import catalogCard_05 from '../assets/catalog-card-5.jpg';
import catalogCard_06 from '../assets/catalog-card-6.jpg';

type TCatalog = {
  id: string;
  title: string;
  imgUrl: string;
};

export const catalogOurProduction: TCatalog[] = [
  {
    id: '01',
    title: 'Для эфирных масел',
    imgUrl: catalogCard_01,
  },
  {
    id: '02',
    title: 'Для гидролатов',
    imgUrl: catalogCard_02,
  },
  {
    id: '03',
    title: 'Медная посуда',
    imgUrl: catalogCard_03,
  },
  {
    id: '04',
    title: 'Аксессуары из меди',
    imgUrl: catalogCard_04,
  },
  {
    id: '05',
    title: 'Индивидуальный заказ',
    imgUrl: catalogCard_05,
  },
  {
    id: '06',
    title: 'Скидки и предложения',
    imgUrl: catalogCard_06,
  },
];
