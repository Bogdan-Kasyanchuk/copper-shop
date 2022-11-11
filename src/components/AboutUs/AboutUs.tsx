import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Breadcrumb from '../Breadcrumb';
import TitleH2 from '../TitleH2';
import { size } from '../../styles/variables';
import aboutUs from '../../assets/about-us.png';
import commaGroup from '../../assets/icon-png/comma-group.png';
import signature from '../../assets/icon-png/signature.png';

const AboutUs: FC = () => {
  return (
    <Section
      color="#031412"
      background="#f7f7f7"
      padding={{
        topMob: '30px',
        bottomMob: '30px',
        topDesk: '40px',
        bottomDesk: '40px',
      }}
    >
      <Container>
        <Breadcrumb />
        <BoxAboutUs>
          <BoxContent>
            <TitleH2 textAalign="left">О нас</TitleH2>
            <Text>Мы любим все, что сделано из меди</Text>
            <Signature>Иван Иванов</Signature>
          </BoxContent>
          <BoxImage>
            <Image src={aboutUs} alt="About us" />
          </BoxImage>
        </BoxAboutUs>
      </Container>
    </Section>
  );
};

export default AboutUs;

const BoxAboutUs = styled.div`
  ${size.min1024} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BoxContent = styled.div`
  margin-bottom: 40px;
  padding-top: 40px;

  h2 {
    position: relative;
  }

  h2::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -20px;
    width: 50%;
    height: 1px;
    background-color: #031412;
  }

  ${size.tabletMin} {
    margin-bottom: 0;
    padding-top: 100px;

    h2::after {
      bottom: -30px;
      width: 66%;
    }
  }

  ${size.min1024} {
    flex-basis: calc((100% - 10%) / 2);
    padding-top: 0;

    h2::after {
      width: 100%;
    }
  }

  ${size.desktop} {
    h2::after {
      bottom: -50px;
    }
  }
`;

const Text = styled.p`
  position: relative;
  margin: 0 auto 45px;
  max-width: 200px;
  padding-top: 45px;
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0.7px;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 34px;
    height: 26px;
    background-image: url(${commaGroup});
  }

  &::before {
    top: 25px;
    left: -45px;
  }

  &::after {
    bottom: -23px;
    right: -45px;
  }

  ${size.tabletMin} {
    margin: 0 0 100px;
    max-width: 390px;
    padding-top: 40px;
    padding-left: 70px;
    font-size: 30px;

    &::before {
      left: 0;
    }
  }

  ${size.min1024} {
    margin-bottom: 60px;
    max-width: 100%;
    padding-left: 60px;

    &::after {
      right: 10px;
    }
  }

  ${size.desktop} {
    padding-left: 75px;
    padding-top: 50px;
    font-size: 50px;

    &::before {
      top: 35px;
    }
  }
`;

const Signature = styled.span`
  position: relative;
  display: inline-block;
  max-width: 85px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    position: absolute;
    content: '';
    top: -7px;
    left: 85px;
    width: 89px;
    height: 43px;
    background-image: url(${signature});
    background-size: cover;
  }

  ${size.tabletMin} {
    font-size: 18px;

    &::after {
      top: -20px;
      left: 110px;
      width: 150px;
      height: 72px;
    }
  }

  ${size.desktop} {
    max-width: 165px;
    font-size: 30px;

    &::after {
      top: -15px;
      left: 165px;
      width: 189px;
      height: 91px;
    }
  }
`;

const BoxImage = styled.div`
  ${size.tabletMin} {
    height: 310px;
  }

  ${size.min1024} {
    flex-basis: calc((100% - 10%) / 2);
    height: 100%;
  }
`;

const Image = styled.img`
  ${size.tabletMin} {
    position: relative;
    left: 335px;
    width: 320px;
    bottom: 60px;
  }

  ${size.min1024} {
    position: static;
    width: auto;
    height: 450px;
  }

  ${size.desktop} {
    height: 650px;
  }
`;
