import { FC } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../ButtonIcon';
import { IOrderCardProps } from '../../interfaces';
import { size } from '../../styles/variables';

const OrderCard: FC<IOrderCardProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <img src={el.imgUrl} alt="News" />
      </BoxImage>
      <Title>{el.title}</Title>
      <BoxDateCount>
        <Date>{el.date}</Date>
        <Count>{el.count}</Count>
      </BoxDateCount>
      <BoxPriceStatus>
        <BoxPrice>
          {el.oldPrice && <OldPrice>{el.oldPrice}</OldPrice>}
          <Price oldPrice={el.oldPrice}>{el.price}</Price>
        </BoxPrice>
        <Status>{el.status}</Status>
      </BoxPriceStatus>
      <ButtonIcon
        iconName="basket"
        widthIcon="16px"
        heightIcon="17px"
      ></ButtonIcon>
    </Item>
  );
};

export default OrderCard;

const Item = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 32% calc(100% - 32% - 15px);
  grid-gap: 15px;
  padding-top: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;

  &:not(:last-child) {
    margin-bottom: 15px;

    ${size.tabletMin} {
      margin-bottom: 20px;
    }
  }

  ${size.tabletMin} {
    position: initial;
    grid-template-columns: 15% 29% 38% 6%;
    grid-column-gap: 25px;
    grid-row-gap: 10px;
    padding-top: initial;
  }

  ${size.min1024} {
    grid-template-columns: 12% 29% 41% 6%;
    grid-column-gap: 35px;
  }

  ${size.desktop} {
    grid-template-columns: 9% 24% 23% 26% 4%;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    ${size.tabletMin} {
      position: initial;
      grid-row: 1/3;
      align-self: center;
      justify-self: flex-end;
    }

    ${size.desktop} {
      grid-row: initial;
    }
  }
`;

const BoxImage = styled.div`
  width: 90px;

  ${size.tabletMin} {
    grid-row: 1/3;
  }

  ${size.desktop} {
    grid-row: initial;
  }
`;

const Title = styled.p`
  align-self: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  text-transform: uppercase;

  ${size.tabletMin} {
    grid-column: 2/4;
    font-size: 18px;
  }

  ${size.desktop} {
    grid-column: initial;
  }
`;

const BoxDateCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${size.tabletMin} {
    grid-row: 2/3;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 25px;
  }

  ${size.desktop} {
    grid-row: initial;
    padding-right: 30px;
  }
`;

const Date = styled.time`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
`;

const Count = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
`;

const BoxPriceStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${size.tabletMin} {
    grid-row: 2/3;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${size.min1024} {
    padding-left: 60px;
  }

  ${size.desktop} {
    grid-row: initial;
    padding-left: initial;
  }
`;

const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px;
  min-width: max-content;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: initial;
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

const Status = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: #029281;
`;
