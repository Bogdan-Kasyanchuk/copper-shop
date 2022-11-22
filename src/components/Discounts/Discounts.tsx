import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Slider from '../Slider';
import ButtonText from '../ButtonText';
import ProductCard from '../ProductCard';
import { products } from '../../data/products';

const Discounts: FC = () => {
  return (
    <Section
      color="#031412"
      background="#f7f7f7"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign="center">Скидки</TitleH3>
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

export default Discounts;
