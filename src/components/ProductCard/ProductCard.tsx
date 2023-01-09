import { FC } from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { size } from 'styles/variables';

import { IProductCardProps } from 'interfaces';

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;

    ${size.tabletMin} {
      margin-bottom: 0;
    }
  }

  ${size.tabletMin} {
    margin-top: 20px;
    margin-left: 20px;
    flex-basis: calc((100% - 40px) / 2);
  }

  ${size.min1024} {
    flex-basis: calc((100% - 60px) / 3);
  }

  ${size.desktop} {
    margin-top: 35px;
    margin-left: 35px;
    flex-basis: calc((100% - 105px) / 3);
  }
`;

const BoxImage = styled.div`
  position: relative;
  margin-bottom: 15px;

  ${size.tabletMin} {
    margin-bottom: 30px;
  }
`;

const Sale = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 0.9;
  color: #fff;
  text-transform: uppercase;
  background: #9b0000;
  z-index: 1;
`;

const Favorite = styled.span<{ favorite: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 14px 7px;
  color: ${({ favorite }) => (favorite ? '#A4704D' : '#031412')};
  background: #fff;

  ${size.desktop} {
    padding: 20px 10px;
    .icon {
      width: 30px;
      height: 26px;
    }
  }
`;

const BoxContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  margin-right: 25px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;

  ${size.desktop} {
    margin-right: 50px;
    font-weight: 600;
  }
`;

const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: max-content;
  line-height: 1;
`;

const Price = styled.span<{ oldPrice: string }>`
  font-weight: 700;
  font-size: 20px;
  color: ${({ oldPrice }) => (oldPrice ? '#9B0000' : '#031412')};

  ${size.tabletMin} {
    font-size: 30px;
  }
`;

const OldPrice = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: line-through;
  opacity: 0.3;

  ${size.tabletMin} {
    font-size: 20px;
  }
`;

const ProductCard: FC<IProductCardProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <img src={el.imgUrl} alt='News' />
        {el.sale && <Sale>Sale</Sale>}
        <Favorite favorite={el.favorite}>
          <Icon iconName={el.favorite ? 'heart-favorite' : 'heart'} width='22px' height='19px' />
        </Favorite>
      </BoxImage>
      <BoxContent>
        <Title>{el.title}</Title>
        <BoxPrice>
          {el.oldPrice && <OldPrice>{el.oldPrice}</OldPrice>}
          <Price oldPrice={el.oldPrice}>{el.price}</Price>
        </BoxPrice>
      </BoxContent>
    </Item>
  );
};

export default ProductCard;
