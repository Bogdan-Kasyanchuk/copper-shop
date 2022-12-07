import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import ButtonText from '../ButtonText';
import { size } from '../../styles/variables';
// import promotionImg from '../../assets/PromotionMob.png';
import promotionImg from '../../assets/PromotionTab.png';
import promotionBgMob from '../../assets/Promotion-background-mobile.png';
import promotionBgTab from '../../assets/Promotion-background-tablet.png';
import promotionBgDesk from '../../assets/Promotion-background-desktop.png';

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
      /* backgroundImage={`url(${promotionBg}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`} */
      backgroundImage={{
        mob: `url(${promotionBgMob}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
        tab: `url(${promotionBgTab}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
        desk: `url(${promotionBgDesk}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
      }}
      backgroundRepeat={{
        mob: 'no-repeat',
        tab: 'no-repeat',
        desk: 'no-repeat',
      }}
      backgroundPosition={{
        mob: 'right bottom, center',
        tab: 'right bottom, center',
        desk: 'right bottom, center',
      }}
      backgroundSize={{
        mob: '200px, cover',
        tab: '370px, cover',
        desk: '885px, cover',
      }}
      // backgroundImage={`url(${promotionBgTab}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`}
    >
      <Container>
        <BoxPromotion>
          <LeftSide>
            <TitleH2Prom>1 + 1 = 3</TitleH2Prom>
            <Text>Закажите два товара и получите третий бесплатно</Text>
            <ButtonText>Перейти в каталог</ButtonText>
          </LeftSide>

          <RightSide>
            <BoxImage>
              <ImagePromo src={promotionImg} alt="Promotion image" />
            </BoxImage>
            <TitleH3Prom>COPPER PRO</TitleH3Prom>
          </RightSide>
        </BoxPromotion>
      </Container>
    </Section>
  );
};

export default Promotion;

const BoxPromotion = styled.div`
  ${size.tabletMin} {
    /* background-color: black; */
    display: flex;
  }
`;

const LeftSide = styled.div`
  margin-bottom: 34px;

  ${size.tabletMin} {
    margin-top: 120px;
    margin-bottom: 0;
  }

  ${size.desktop} {
    margin-top: 70px;
    margin-bottom: 0;
  }
`;

const RightSide = styled.div`
  ${size.tabletMin} {
    margin-top: 20px;
  }
`;

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
    margin-bottom: 38px;
    width: 355px;
    font-size: 100px;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    width: 492px;
    font-size: 140px;
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

  ${size.tabletMin} {
    margin-bottom: 42px;
    width: 306px;
    font-size: 20px;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    width: 533px;
    font-size: 35px;
  }
`;

const BoxImage = styled.div`
  position: relative;
  margin-bottom: 0;
`;

const ImagePromo = styled.img`
  margin: 0 auto;
  width: 123px;
  height: 223px;

  ${size.tabletMin} {
    width: 245px;
    height: 490px;
  }

  ${size.desktop} {
    height: 492px;
  }
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

  ${size.tabletMin} {
    width: 421px;
    font-size: 80px;
  }

  ${size.desktop} {
    width: 686px;
    font-size: 160px;
  }
`;
