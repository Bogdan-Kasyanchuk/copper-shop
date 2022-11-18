import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Slider from '../Slider';
import ButtonText from '../ButtonText';
import ProductCard from '../ProductCard';
import { products } from '../../data/products';

const WeRecommend: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '20px',
        bottomMob: '40px',
        topTab: '40px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign="center">Новинки</TitleH3>
        <Slider>
          {products.map(el => (
            <SwiperSlide key={el.id}>
              <ProductCard el={el} />
            </SwiperSlide>
          ))}
        </Slider>
        <ButtonText />
      </Container>
    </Section>
  );
};

export default WeRecommend;
