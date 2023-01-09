import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import ProductCard from 'components/ProductCard';
import Section from 'components/Section';
import Slider from 'components/Slider';
import TitleH3 from 'components/TitleH3';

import { products } from 'data/products';

const YouWillAlsoInterested: FC = () => {
  return (
    <Section
      color='#031412'
      background='#f7f7f7'
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '20px',
        bottomTab: '40px',
      }}
    >
      <Container>
        <TitleH3 textAalign='center'>Вам также будет интересно</TitleH3>
        <Slider>
          {products.map((el) => (
            <SwiperSlide key={el.id}>
              <ProductCard el={el} />
            </SwiperSlide>
          ))}
        </Slider>
        <ButtonText>Перейти в каталог</ButtonText>
      </Container>
    </Section>
  );
};

export default YouWillAlsoInterested;
