export interface IProductCardProps {
  el: {
    id: string;
    title: string;
    price: string;
    imgUrl: string;
    favorite: boolean;
    sale: boolean;
    oldPrice: string;
  };
}
