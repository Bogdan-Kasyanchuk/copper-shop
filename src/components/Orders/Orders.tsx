import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import ButtonIconText from '../ButtonIconText';
import OrderCard from '../OrderCard';
import { size } from '../../styles/variables';
import { orders } from '../../data/orders';

const Orders: FC = () => {
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
        <TitleH3 textAalign="left">Личный кабинет</TitleH3>
        <BoxOrders>
          <BoxButton>
            <ButtonIconText iconName="user" widthIcon="26px" heightIcon="26px">
              Детали профиля
            </ButtonIconText>
            <ButtonIconText
              iconName="basket-order"
              widthIcon="26px"
              heightIcon="26px"
            >
              Заказы
            </ButtonIconText>
            <ButtonIconText iconName="heart" widthIcon="26px" heightIcon="26px">
              Список желаемого
            </ButtonIconText>
            <ButtonIconText
              iconName="logout"
              widthIcon="26px"
              heightIcon="26px"
            >
              Выйти
            </ButtonIconText>
          </BoxButton>
          <BoxListOrders>
            <ListOrders>
              {orders.map(el => (
                <OrderCard key={el.id} el={el} />
              ))}
            </ListOrders>
            <Pagination>Пагинация</Pagination>
          </BoxListOrders>
        </BoxOrders>
      </Container>
    </Section>
  );
};

export default Orders;

const BoxOrders = styled.div`
  ${size.desktop} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const BoxButton = styled.div`
  margin-bottom: 30px;

  button {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;

    button {
      margin-top: 20px;
      margin-left: 20px;
      flex-basis: calc((100% - 40px) / 2);

      :not(:last-child) {
        margin-bottom: 0;
      }
    }
  }

  ${size.min1024} {
    button {
      flex-basis: calc((100% - 60px) / 3);
    }
  }

  ${size.desktop} {
    flex-basis: 23%;
    display: initial;
    margin-top: initial;
    margin-left: initial;

    button {
      margin-top: initial;
      margin-left: initial;

      :not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;

const BoxListOrders = styled.div`
  ${size.desktop} {
    flex-basis: calc(100% - 30px - 23%);
  }
`;

const ListOrders = styled.ul`
  margin-bottom: 20px;

  ${size.tabletMin} {
    margin-bottom: 30px;
  }

  ${size.desktop} {
    margin-bottom: 40px;
  }
`;

const Pagination = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  height: 50px;
  background-color: #f3d0d0;
`;
