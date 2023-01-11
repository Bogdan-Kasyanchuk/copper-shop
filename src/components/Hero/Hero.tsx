import { FC } from 'react';
import styled from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Section from 'components/Section';

import { size } from 'styles/variables';

import heroBgDesk from 'assets/Hero-background-desktop.png';
import heroBgTab from 'assets/Hero-background-mobile.png';
import heroBgMob from 'assets/Hero-background-tablet.png';
// import heroImg from 'assets/Hero-image-tablet.png';
import heroImg from 'assets/Hero-image-desktop.png';

const CopperProText = styled.h3`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  width: 206px;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 0.75;
  text-align: right;
  color: #ffffff;

  ${size.mobileMax} {
    display: none;
  }

  ${size.tabletMin} {
    width: 421px;
    font-size: 80px;
  }

  ${size.desktop} {
    width: 686px;
    font-size: 160px;
  }
`;

const ConnectSliderHere = styled.div`
  position: relative;
`;

const LeftRightSidesWrapper = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  margin-bottom: 200px;

  ${size.tabletMin} {
    margin-bottom: 210px;
  }

  ${size.desktop} {
    margin-bottom: 70px;
  }
`;

const RightSide = styled.div``;

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

const BoxImage = styled.div`
  position: absolute;
  z-index: 2;
  right: -65px;
  bottom: -50px;
  margin-bottom: 0;
  overflow: hidden;
  width: 250px;
  height: 475px;
  ${size.tabletMin} {
    right: 80px;
    bottom: -30px;
    width: 320px;
    height: 575px;
  }
  ${size.desktop} {
    right: 40px;
    bottom: -40px;
    width: 472px;
    height: 800px;
  }
`;

const ImagePromo = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const DotsContainer = styled.div`
  margin: 0 auto 50px;
  height: 12px;
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
        topMob: '0',
        bottomMob: '20px',
        topTab: '0',
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
        mob: '200px, cover',
        tab: '370px, cover',
        desk: '885px, cover',
      }}
    >
      <CopperProText>COPPER PRO</CopperProText>
      <Container>
        <Title>ХИТ ПРОДАЖ</Title>

        <ConnectSliderHere>
          <LeftRightSidesWrapper>
            <LeftSide>
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
            </LeftSide>

            <RightSide>
              <BoxImage>
                <ImagePromo src={heroImg} alt='Promotion image' />
              </BoxImage>
            </RightSide>
          </LeftRightSidesWrapper>

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
