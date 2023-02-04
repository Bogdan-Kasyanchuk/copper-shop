import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import HeroCard from 'components/HeroCard';
import Section from 'components/Section';
import SliderHero from 'components/SliderHero';

import { productsHero } from 'data/productsHero';

const Hero: FC = () => {
  return (
    <Section
      color='#ffffff'
      background='transparent'
      padding={{
        topMob: '0',
        bottomMob: '0',
        topTab: '0',
        bottomTab: '0',
        topDesk: '0',
        bottomDesk: '0',
      }}
    >
      <SliderHero>
        {productsHero.map((el) => (
          <SwiperSlide key={el.id}>
            <HeroCard el={el} />
          </SwiperSlide>
        ))}
      </SliderHero>
    </Section>
  );
};

export default Hero;
