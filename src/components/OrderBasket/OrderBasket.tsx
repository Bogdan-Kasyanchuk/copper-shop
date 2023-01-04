import { FC } from 'react';
import styled from 'styled-components';
import OrderCardBasketCopy from '../OrderCardBasketCopy';
import ButtonText from '../ButtonText';
import { size } from '../../styles/variables';
import { ordersBasket } from '../../data/ordersBasket';
import car from '../../assets/icon-png/car.png';
import basket from '../../assets/icon-png/basket.png';

const OrderBasket: FC = () => {
  return (
    <BoxBasket>
      <BoxListBasket>
        <ListBasket>
          {ordersBasket.map(el => (
            <OrderCardBasketCopy key={el.id} el={el} />
          ))}
        </ListBasket>
      </BoxListBasket>
      <BoxPlaceOrder>
        <Form>
          <Label htmlFor="inputPromo">Имя</Label>
          <Input
            type="text"
            name="promo"
            placeholder="Введите промокод"
            id="inputPromo"
          />
          <ButtonText>Применить</ButtonText>
        </Form>
        <BoxTotal>
          <div>
            <TotalTitle>Итого</TotalTitle>
            <TotalPrice>10930 грн</TotalPrice>
          </div>
          <TotalDiscount>
            <span>-30%</span> с учетом промокода
          </TotalDiscount>
        </BoxTotal>
        {true && <FreeShipping>У вас бесплатная доставка!</FreeShipping>}
        <ButtonText>Оформить заказ</ButtonText>
      </BoxPlaceOrder>
    </BoxBasket>
  );
};

export default OrderBasket;

const BoxBasket = styled.div``;

const BoxListBasket = styled.div``;

const ListBasket = styled.ul`
  height: 250px;
  overflow-y: scroll;
  padding-right: 10px;
  scrollbar-color: #c98c60 #b3b9b8;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #b3b9b8;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(95deg, #5e3928 -2.56%, #e4a16f 63.17%);
  }
`;

const BoxPlaceOrder = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);

  ${size.tabletMin} {
    padding-bottom: 30px;
    padding-top: 30px;
    padding-left: 80px;
    padding-right: 80px;
  }

  ${size.desktop} {
    padding-left: 30px;
    padding-right: 30px;
  }

  .btn-text {
    margin-top: 30px;
  }
`;

const Form = styled.form`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .btn-text {
    margin-top: initial;
    flex-basis: 40%;
    font-size: 14px;
    padding: 18px 12px;
  }

  ${size.tabletMin} {
    margin-bottom: 30px;

    .btn-text {
      min-width: 1px;
    }
  }
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const Input = styled.input`
  width: 60%;
  padding: 16px 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  border: 1px solid #a1a1a1;
`;

const BoxTotal = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 69px;
    height: 72px;
    background-image: url(${basket});
    background-size: cover;
  }

  ${size.tabletMin} {
    padding: 0 80px 30px;
    margin-left: -80px;
    margin-right: -80px;

    ::after {
      top: -65px;
      right: 0px;
      width: 157px;
      height: 176px;
    }
  }

  ${size.desktop} {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: -30px;
    margin-right: -30px;
  }
`;

const TotalTitle = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: 20px;
    font-size: 35px;
  }
`;

const TotalPrice = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1;

  ${size.tabletMin} {
    font-size: 40px;
  }
`;

const TotalDiscount = styled.p`
  position: relative;
  z-index: 1;
  width: min-content;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  span {
    font-weight: 700;
    color: #9b0000;
  }

  ${size.tabletMin} {
    font-size: 16px;
  }
`;

const FreeShipping = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
  color: #a1a1a1;

  ::before {
    content: '';
    margin-right: 20px;
    flex-shrink: 0;
    width: 48px;
    height: 26px;
    background-image: url(${car});
    background-size: cover;
  }

  ${size.tabletMin} {
    margin-top: 30px;
  }
`;
