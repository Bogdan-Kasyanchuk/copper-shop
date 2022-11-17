import { FC } from 'react';
import styled from 'styled-components';
import { ICatalogCardProps } from '../../interfaces';
import { size } from '../../styles/variables';

const CatalogCard: FC<ICatalogCardProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <Image src={el.imgUrl} alt="Catalog" />
        <Title>{el.title}</Title>
      </BoxImage>
    </Item>
  );
};

export default CatalogCard;

const Item = styled.li`
  flex-basis: calc((100% - 40px) / 2);
  margin-top: 20px;
  margin-left: 20px;

  :first-child {
    div {
      ::after {
        background: linear-gradient(
          171.3deg,
          rgba(203, 141, 98, 0) 33.24%,
          #cb8d62 104.72%
        );
      }
    }
  }

  ${size.tabletMin} {
    flex-basis: calc((100% - 60px) / 2);
    margin-top: 30px;
    margin-left: 30px;
  }

  ${size.desktop} {
    flex-basis: calc((100% - 90px) / 4);
    margin-top: 0;
    margin-left: 0;
  }
`;

const BoxImage = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(7, 44, 38, 0.5) 0%,
      rgba(7, 44, 38, 0) 100%
    );
  }
`;

const Image = styled.img`
  height: 150px;

  ${size.tabletMin} {
    height: 100%;
  }
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  bottom: 12px;
  width: 90%;
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  text-align: center;
  z-index: 1;
  transform: translateX(-50%);

  ${size.tabletMin} {
    bottom: 20px;
    font-weight: 700;
    font-size: 20px;
  }
`;
