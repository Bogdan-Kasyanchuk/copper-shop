import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Breadcrumb from '../Breadcrumb';
import OrderCardBasket from '../OrderCardBasket';
import ButtonText from '../ButtonText';
import { size } from '../../styles/variables';
import { ordersBasket } from '../../data/ordersBasket';
import car from '../../assets/icon-png/car.png';
import basket from '../../assets/icon-png/basket.png';

const Basket: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '80px',
        bottomDesk: '80px',
      }}
    >
      <Container>
        <Breadcrumb />
        <TitleH3 textAalign="left">Корзина</TitleH3>
        <BoxBasket>
          <BoxListBasket>
            <ListBasket>
              {ordersBasket.map(el => (
                <OrderCardBasket key={el.id} el={el} />
              ))}
            </ListBasket>
          </BoxListBasket>
          <BoxPlaceOrder>
            <BoxTotal>
              <TotalTitle>Итого</TotalTitle>
              <TotalPrice>10930 грн</TotalPrice>
            </BoxTotal>
            {true && <FreeShipping>У вас бесплатная доставка!</FreeShipping>}
            <ButtonText>Оформить заказ</ButtonText>
          </BoxPlaceOrder>
          <ButtonText>Назад к покупкам</ButtonText>
        </BoxBasket>
      </Container>
    </Section>
  );
};

export default Basket;

const BoxBasket = styled.div`
  ${size.desktop} {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
  }
`;

const BoxListBasket = styled.div`
  margin-bottom: 20px;

  ${size.desktop} {
    margin-bottom: initial;
    flex-basis: calc(100% - 450px - 30px);
  }
`;

const ListBasket = styled.ul``;

const BoxPlaceOrder = styled.div`
  overflow: hidden;
  padding: 20px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);

  button {
    margin-top: 30px;

    ${size.desktop} {
      width: 100%;
    }
  }

  & ~ button {
    margin-top: 20px;
    color: #a1a1a1;
    background: transparent;
    border: 1px solid #a1a1a1;

    ${size.tabletMin} {
      margin-top: 30px;
    }

    ${size.desktop} {
      margin-left: initial;
    }
  }

  ${size.desktop} {
    flex-basis: 450px;
    height: fit-content;
  }
`;

const BoxTotal = styled.div`
  position: relative;
  padding: 0 20px 20px;
  border-bottom: 1px solid #e6e8e7;
  margin-left: -20px;
  margin-right: -20px;

  ::after {
    content: '';
    position: absolute;
    top: -38px;
    right: 0;
    width: 69px;
    height: 72px;
    background-image: url(${basket});
    background-size: cover;
  }

  ${size.tabletMin} {
    text-align: center;
    padding-bottom: 30px;

    ::after {
      top: -60px;
      right: 0;
      width: 157px;
      height: 176px;
    }
  }

  ${size.desktop} {
    text-align: left;
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

const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 30px;
  line-height: 1;

  ${size.tabletMin} {
    font-size: 40px;
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

  ${size.desktop} {
    justify-content: flex-start;
  }
`;
