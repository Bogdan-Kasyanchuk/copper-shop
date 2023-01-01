import { FC } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon';
import { IOrderCardBasketProps } from '../../interfaces';
import { size } from '../../styles/variables';

const OrderCardBasket: FC<IOrderCardBasketProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <img src={el.imgUrl} alt="News" />
      </BoxImage>
      <Title>{el.title}</Title>
      <Count>{el.count}</Count>
      <BoxPrice>
        {el.oldPrice && <OldPrice>{el.oldPrice}</OldPrice>}
        <Price oldPrice={el.oldPrice}>{el.price}</Price>
      </BoxPrice>
      <ButtonIcon
        iconName="basket"
        widthIcon="16px"
        heightIcon="17px"
      ></ButtonIcon>
    </Item>
  );
};

export default OrderCardBasket;

const Item = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 15px;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 20px;

  &:not(:last-child) {
    margin-bottom: 15px;
    border-bottom: 1px solid #e6e8e7;

    ${size.tabletMin} {
      margin-bottom: 20px;
    }
  }

  ${size.tabletMin} {
    position: initial;
    grid-template-columns: 1fr 2.2fr 1fr 1.4fr 0.4fr;
    grid-column-gap: 25px;
    padding-top: 0;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    ${size.tabletMin} {
      position: initial;
      justify-self: flex-end;
    }
  }
`;

const BoxImage = styled.div`
  width: 92px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  text-transform: uppercase;

  ${size.tabletMin} {
    font-size: 18px;
  }
`;

const Count = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;

  ${size.tabletMin} {
    justify-self: center;
  }
`;

const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: max-content;
  line-height: 1;

  ${size.tabletMin} {
    justify-self: center;
  }
`;

const Price = styled.span<{ oldPrice: string }>`
  font-weight: 700;
  font-size: 20px;
  color: ${({ oldPrice }) => (oldPrice ? '#9B0000' : '#031412')};
`;

const OldPrice = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: line-through;
  opacity: 0.3;
`;
