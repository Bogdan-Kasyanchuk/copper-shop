import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import ButtonText from '../ButtonText';
import { size } from '../../styles/variables';
import promotionImg from '../../assets/Promotion.png';
import promotionBg from '../../assets/Promotion-background.png';
/* linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%); */
// const testing = `url(${promotionBg}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`;
const Promotion: FC = () => {
  return (
    <Section
      padding={{
        topMob: '50px',
        bottomMob: '0',
        topTab: '0',
        bottomTab: '0',
        topDesk: '0',
        bottomDesk: '0',
      }}
      color="#031412"
      // background="#212121"
      // backgroundImage={testing}
      backgroundImage={`url(${promotionBg}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`}
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom, center"
      backgroundSize="200px, cover"
    >
      <Container>
        <TitleH2Prom>1 + 1 = 3</TitleH2Prom>
        <Text>Закажите два товара и получите третий бесплатно</Text>
        <ButtonText>Перейти в каталог</ButtonText>
        <BoxImage>
          <ImagePromo src={promotionImg} alt="Promotion image" />
        </BoxImage>

        <TitleH3Prom>COPPER PRO</TitleH3Prom>
      </Container>
    </Section>
  );
};

export default Promotion;

const TitleH2Prom = styled.h2`
  margin-bottom: 20px;
  width: 210px;
  height: auto;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 0.75;
  text-transform: uppercase;
  color: #ffffff;

  ${size.tabletMin} {
    margin-bottom: 30px;
    font-size: 60px;
    line-height: 1.1;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    font-size: 100px;
  }
`;

const Text = styled.p`
  margin-bottom: 18px;
  width: 165px;
  height: auto;
  font-family: 'Mont';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0.92;
  color: #ffffff;
`;

const BoxImage = styled.div`
  position: relative;
  margin-top: 34px;
  margin-bottom: 0;

  /* ${size.tabletMin} {
    margin-bottom: 30px;
  } */
`;

const ImagePromo = styled.img`
  margin: 0 auto;
`;

const TitleH3Prom = styled.h2`
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 206px;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 0.75;
  text-align: right;
  color: #ffffff;
`;
