import { FC } from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import ButtonText from '../ButtonText';
import Slider from '../Slider';
import ReviewCard from '../ReviewCard';
import { size } from '../../styles/variables';
import { whatThinkUs } from '../../data/whatThinkUs';

const Reviews: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <BoxTitle>
          <TitleH3 textAalign="left">Отзывы</TitleH3>
          <ButtonText>Перейти в каталог</ButtonText>
        </BoxTitle>
        <Slider>
          {whatThinkUs.map(el => (
            <SwiperSlide key={el.id}>
              <ReviewCard el={el} />
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default Reviews;

const BoxTitle = styled.div`
  ${size.mobileMax} {
    h3 {
      text-align: center;
    }

    button {
      margin-bottom: 20px;
    }
  }

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      margin-bottom: 0;
    }

    button {
      margin-bottom: 0;
      margin-left: initial;
      margin-right: initial;
    }
  }

  ${size.desktop} {
    margin-bottom: 24px;
  }
`;
