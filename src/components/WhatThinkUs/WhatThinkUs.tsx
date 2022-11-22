import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Slider from '../Slider';
import ReviewCard from '../ReviewCard';
import { whatThinkUs } from '../../data/whatThinkUs';

const WhatThinkUs: FC = () => {
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
        <TitleH3 textAalign="center">Что думают о нас</TitleH3>
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

export default WhatThinkUs;
