import { FC } from 'react';
import styled from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Section from 'components/Section';

import { size } from 'styles/variables';

import heroBgDesk from 'assets/hero_bg_desktop_1920-896.png';
import heroBgMob from 'assets/hero_bg_mobile_1920-729.png';
import heroBgTab from 'assets/hero_bg_tablet_1920-1024.png';

const ConnectSliderHere = styled.div`
  position: relative;
`;

const HeroContentWrapper = styled.div`
  margin-bottom: 200px;

  ${size.tabletMin} {
    margin-bottom: 210px;
  }

  ${size.desktop} {
    margin-bottom: 70px;
  }
`;

const Title = styled.h2`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.15;
  color: #ffffff;
  ${size.mobileMin} {
    width: 200px;
  }
  ${size.tabletMin} {
    padding-bottom: 15px;
    margin-bottom: 25px;
    width: 388px;
    font-size: 60px;
  }
  ${size.desktop} {
    padding-bottom: 50px;
    margin-bottom: 50px;
    width: 740px;
    font-size: 100px;
    line-height: 0.75;
  }
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #ffffff, rgba(0, 0, 0, 0));
  }
`;

const ProductTitle = styled.h3`
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.3;
  color: #ffffff;
  ${size.tabletMin} {
    margin-bottom: 25px;
    font-size: 30px;
  }
  ${size.desktop} {
    margin-bottom: 40px;
    font-size: 50px;
    line-height: 0.97;
  }
`;

const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  width: 165px;
  ${size.tabletMin} {
    margin-bottom: 45px;
    width: 250px;
  }
  ${size.desktop} {
    margin-bottom: 40px;
    width: 330px;
  }
`;

const ButtonContainer = styled.div`
  button {
    width: 155px;
  }
  ${size.tabletMin} {
    button {
      margin: 0;
      width: 255px;
      min-width: 255px;
    }
  }
  ${size.desktop} {
    button {
      margin: 0;
      width: 330px;
    }
  }
`;

const ProductPriceTitle = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 0.97;
  color: #ffffff;
  ${size.tabletMin} {
    font-size: 24px;
  }
  ${size.desktop} {
    font-size: 30px;
  }
`;

const ProductPrice = styled.b`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 0.97;
  color: #ffffff;
  ${size.tabletMin} {
    font-size: 24px;
  }
  ${size.desktop} {
    font-size: 30px;
  }
`;

const DotsContainer = styled.div`
  margin-bottom: 50px;
  height: 12px;
  width: 60px;
  background-color: blue;
`;

const SvgContainer = styled.div`
  position: relative;
  color: white;
  ::before {
    content: '';
    display: block;
    width: 1px;
    height: 32px;
    margin-bottom: 5px;
    background: #fff;
    margin-left: 9px;
  }
`;

const Hero: FC = () => {
  return (
    <Section
      color='#ffffff'
      background='#000000'
      padding={{
        topMob: '20px',
        bottomMob: '20px',
        topTab: '140px',
        bottomTab: '30px',
        topDesk: '100px',
        bottomDesk: '40px',
      }}
      backgroundImage={{
        mob: `url(${heroBgMob}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
        tab: `url(${heroBgTab}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
        desk: `url(${heroBgDesk}), linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)`,
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
        <Title>ХИТ ПРОДАЖ</Title>

        <ConnectSliderHere>
          <HeroContentWrapper>
            <ProductTitle>
              Дистиллятор для <br /> эфирных масел
            </ProductTitle>
            <ProductPriceContainer>
              <ProductPriceTitle>Цена</ProductPriceTitle>
              <ProductPrice>4 906 грн</ProductPrice>
            </ProductPriceContainer>
            <ButtonContainer>
              <ButtonText>Купить</ButtonText>
            </ButtonContainer>
          </HeroContentWrapper>

          <DotsContainer>...dots...</DotsContainer>
          <SvgContainer>
            <Icon iconName='mouse' width='20px' height='20px' />
          </SvgContainer>
        </ConnectSliderHere>
      </Container>
    </Section>
  );
};

export default Hero;
