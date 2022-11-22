import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import { size } from '../../styles/variables';
import ourClientsBackgroundCounter from '../../assets/our-clients-background-counter.png';

const OurClients: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
        bottomDesk: '135px',
        topDesk: '135px',
      }}
    >
      <Container>
        <BoxOurClients>
          <BoxContent>
            <TitleH3>Наши клиенты</TitleH3>
            <Text>
              Мы требовательны к себе, чтобы каждый день становится лучше для
              наших клиентов и находить лучшие решения для каждого из них
            </Text>
          </BoxContent>
          <BoxCounter>
            <TitleCounter>Счетчик клиентов</TitleCounter>
            <Counter>12346</Counter>
          </BoxCounter>
        </BoxOurClients>
      </Container>
    </Section>
  );
};

export default OurClients;

const BoxOurClients = styled.div`
  text-align: center;

  ${size.min1024} {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;

const BoxContent = styled.div`
  margin-bottom: 50px;

  ${size.tabletMin} {
    margin-bottom: 90px;
  }

  ${size.min1024} {
    margin-bottom: 0;
    flex-basis: calc(35% - 40px);
  }

  ${size.desktop} {
    flex-basis: calc(42% - 90px);
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.2;

  ${size.tabletMin} {
    font-size: 20px;
  }

  ${size.desktop} {
    font-weight: 400;
  }
`;

const BoxCounter = styled.div`
  ${size.min1024} {
    flex-basis: calc(65% - 40px);
  }

  ${size.desktop} {
    flex-basis: calc(58% - 90px);
  }
`;

const TitleCounter = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${size.tabletMin} {
    margin-bottom: 20px;
    font-size: 30px;
  }

  ${size.desktop} {
    margin-bottom: 25px;
    font-size: 50px;
  }
`;

const Counter = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 100px;
  line-height: 1;
  background: url(${ourClientsBackgroundCounter});
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${size.tabletMin} {
    font-size: 200px;
  }

  ${size.desktop} {
    font-size: 250px;
  }
`;
