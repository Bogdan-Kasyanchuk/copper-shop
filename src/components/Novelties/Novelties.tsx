import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Slider from '../Slider';
import ButtonText from '../ButtonText';
import ProductCard from '../ProductCard';
import { products } from '../../data/products';

const Novelties: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '20px',
        topTab: '80px',
        bottomTab: '40px',
      }}
    >
      <Container>
        <TitleH3 textAalign="center">Мы рекомендуем</TitleH3>
        <Slider>
          {products.map(el => (
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

export default Novelties;
