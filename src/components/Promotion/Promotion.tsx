import { FC } from 'react';
import styled from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import Section from 'components/Section';

import { size } from 'styles/variables';

import promotionBgDesk from 'assets/Promotion-background-desktop.png';
import promotionBgMob from 'assets/Promotion-background-mobile.png';
import promotionBgTab from 'assets/Promotion-background-tablet.png';

const TitlePromotion = styled.h2`
  margin-bottom: 20px;
  width: 220px;
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
    width: 330px;
    font-size: 90px;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    width: 492px;
    font-size: 130px;
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

const ButtonContainer = styled.div`
  button {
    width: 290px;
  }
  ${size.tabletMin} {
    button {
      margin: 0;
      width: 330px;
      min-width: 330px;
    }
  }
`;

const Promotion: FC = () => {
  return (
    <Section
      padding={{
        topMob: '50px',
        bottomMob: '256px',
        topTab: '120px',
        bottomTab: '120px',
        topDesk: '80px',
        bottomDesk: '80px',
      }}
      color='#031412'
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
        mob: 'cover, cover',
        tab: 'cover, cover',
        desk: 'cover, cover',
      }}
    >
      <Container>
        <TitlePromotion>1 + 1 = 3</TitlePromotion>
        <Text>
          Закажите два товара и <br /> получите третий бесплатно
        </Text>
        <ButtonContainer>
          <ButtonText>Перейти в каталог</ButtonText>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Promotion;
