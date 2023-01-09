import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import reviews from 'assets/icon-png/reviews.png';

import { IReviewCardProps } from 'interfaces';

const Item = styled.li`
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 110px;
    height: 90px;
    background-image: url(${reviews});
    background-size: cover;
  }
`;

const BoxImage = styled.div`
  margin-bottom: 20px;
  width: 62px;
`;

const Title = styled.p`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

const Desc = styled.p`
  margin-bottom: 15px;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  ${size.tabletMin} {
    margin-bottom: 20px;
  }
`;

const Date = styled.time`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
`;

const ReviewCard: FC<IReviewCardProps> = ({ el }) => {
  return (
    <Item key={el.id}>
      <BoxImage>
        <img src={el.imgUrl} alt='Reviev' />
      </BoxImage>
      <Title>{el.title}</Title>
      <Desc>{el.desc}</Desc>
      <Date>{el.date}</Date>
    </Item>
  );
};

export default ReviewCard;
