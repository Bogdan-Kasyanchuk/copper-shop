import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import { size } from '../../styles/variables';
import ourWorth from '../../assets/our-worth.jpg';
import efficiency from '../../assets/icon-png/efficiency.png';
import quality from '../../assets/icon-png/quality.png';
import flexibility from '../../assets/icon-png/flexibility.png';

const OurWorth: FC = () => {
  return (
    <Section
      color="#031412"
      background="#fff"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <BoxOurWorth>
          <BoxImage>
            <TitleImage>Copper Pro</TitleImage>
          </BoxImage>
          <BoxContent>
            <TitleH3>Наши ценности</TitleH3>
            <Text>
              Наше производство находится в Украине, но клиенты из более чем 50
              стран радуются товарам, приобретенным в нашем магазине.
            </Text>
            <List>
              <Item>Оперативность</Item>
              <Item>Качественный товар и сервис</Item>
              <Item>Гибкость</Item>
            </List>
          </BoxContent>
        </BoxOurWorth>
      </Container>
    </Section>
  );
};

export default OurWorth;

const BoxOurWorth = styled.div`
  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
  }

  ${size.desktop} {
    align-items: center;
  }
`;

const BoxImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 262px;
  background-color: #031412;
  background-image: url(${ourWorth});
  background-size: cover;

  ${size.mobileMax} {
    margin-bottom: 28px;
  }

  ${size.tabletMin} {
    flex-basis: calc((100% - 35px) / 2);
    height: 282px;
  }

  ${size.min1024} {
    height: 330px;
  }

  ${size.desktop} {
    height: 620px;
  }
`;
const TitleImage = styled.p`
  width: min-content;
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  line-height: 0.8;
  color: #fff;
  text-align: right;
  text-transform: uppercase;

  ${size.desktop} {
    font-size: 136px;
  }
`;

const BoxContent = styled.div`
  ${size.mobileMax} {
    text-align: center;
  }

  ${size.tabletMin} {
    flex-basis: calc((100% - 35px) / 2);
  }

  ${size.desktop} {
    padding-right: 210px;
  }
`;

const Text = styled.p`
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.24;

  ${size.tabletMin} {
    margin-bottom: 40px;
  }

  ${size.desktop} {
    font-weight: 400;
    font-size: 20px;
  }
`;

const List = styled.ul`
  ${size.mobileMax} {
    padding-left: 45px;
    padding-right: 45px;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 0.97;
  text-align: left;

  :not(:last-child) {
    margin-bottom: 20px;

    ${size.desktop} {
      margin-bottom: 40px;
    }
  }

  ::before {
    content: '';
    display: block;
    margin-right: 16px;
    min-width: 50px;
    height: 50px;

    ${size.desktop} {
      margin-right: 30px;
      min-width: 60px;
      height: 60px;
    }
  }

  :first-child::before {
    background-image: url(${efficiency});
    background-size: cover;
  }

  :nth-child(2)::before {
    height: 44px;
    background-image: url(${quality});
    background-size: cover;

    ${size.desktop} {
      height: 52px;
    }
  }

  :last-child::before {
    background-image: url(${flexibility});
    background-size: cover;
  }

  ${size.desktop} {
    font-size: 25px;
  }
`;
