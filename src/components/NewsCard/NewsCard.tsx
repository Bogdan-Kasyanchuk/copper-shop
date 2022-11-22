import { FC } from 'react';
import styled from 'styled-components';
import ReadMore from '../ReadMore';
import { INewsCardProps } from '../../interfaces';
import { size } from '../../styles/variables';

const NewsCard: FC<INewsCardProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <Image src={el.imgUrl} alt="News" />
        <Badge>{el.date}</Badge>
        <Title>{el.title}</Title>
      </BoxImage>
      <Desc>{el.desc}</Desc>
      <ReadMore
        handlerButton={() => {
          console.log(1);
        }}
      />
    </Item>
  );
};

export default NewsCard;

const Item = styled.li`
  ${size.min1024} {
    margin-top: 30px;
    margin-left: 30px;
    flex-basis: calc((100% - 60px) / 2);
  }
`;

const BoxImage = styled.div`
  position: relative;
  margin-bottom: 15px;

  ::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(7, 44, 38, 0.7) 0%,
      rgba(7, 44, 38, 0) 100%
    );
  }

  ${size.tabletMin} {
    margin-bottom: 25px;
  }
`;

const Image = styled.img`
  height: 110px;

  ${size.tabletMin} {
    height: 100%;
  }
`;

const Badge = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 0.9;
  color: #fff;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  z-index: 1;
`;

const Title = styled.p`
  position: absolute;
  left: 10px;
  bottom: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: #fff;
  z-index: 1;

  ${size.tabletMin} {
    left: 30px;
    bottom: 25px;
    font-size: 20px;
  }
`;

const Desc = styled.p`
  margin-bottom: 15px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.3;

  ${size.tabletMin} {
    margin-bottom: 25px;
    font-weight: 400;
  }
`;
