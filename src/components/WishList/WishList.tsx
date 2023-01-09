import { FC } from 'react';
import styled from 'styled-components';

import ButtonIconText from 'components/ButtonIconText';
import Container from 'components/Container';
import ProductCard from 'components/ProductCard';
import Section from 'components/Section';
import TitleH3 from 'components/TitleH3';

import { size } from 'styles/variables';

import { products } from 'data/products';

const BoxWishList = styled.div`
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

const BoxListProducts = styled.div`
  ${size.desktop} {
    flex-basis: calc(100% - 30px - 23%);
  }
`;

const ListProducts = styled.ul`
  margin-bottom: 20px;

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;
    margin-bottom: 30px;
  }

  ${size.desktop} {
    margin-top: -30px;
    margin-left: -30px;
    margin-bottom: 40px;
  }

  li {
    ${size.desktop} {
      flex-basis: calc((100% - 90px) / 3);
      margin-top: 30px;
      margin-left: 30px;
    }
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

const WishList: FC = () => {
  return (
    <Section
      color='#031412'
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topDesk: '80px',
        bottomDesk: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign='left'>Личный кабинет</TitleH3>
        <BoxWishList>
          <BoxButton>
            <ButtonIconText iconName='user' widthIcon='26px' heightIcon='26px'>
              Детали профиля
            </ButtonIconText>
            <ButtonIconText iconName='basket-order' widthIcon='26px' heightIcon='26px'>
              Заказы
            </ButtonIconText>
            <ButtonIconText iconName='heart' widthIcon='26px' heightIcon='26px'>
              Список желаемого
            </ButtonIconText>
            <ButtonIconText iconName='logout' widthIcon='26px' heightIcon='26px'>
              Выйти
            </ButtonIconText>
          </BoxButton>
          <BoxListProducts>
            <ListProducts>
              {products.map((el) => (
                <ProductCard key={el.id} el={el} />
              ))}
            </ListProducts>
            <Pagination>Пагинация</Pagination>
          </BoxListProducts>
        </BoxWishList>
      </Container>
    </Section>
  );
};

export default WishList;
