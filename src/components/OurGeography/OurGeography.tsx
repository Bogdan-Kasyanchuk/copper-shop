import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import { size } from '../../styles/variables';
import ourGeography from '../../assets/our-geography.png';

const OurGeography: FC = () => {
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
        <BoxOurGeography>
          <BoxContent>
            <TitleH3>Наша география</TitleH3>
            <Text>
              Наше производство находится в Украине, но клиенты из более чем 50
              стран радуются товарам, приобретенным в нашем магазине.
            </Text>
          </BoxContent>
          <div>
            <img src={ourGeography} alt="Our geography" />
          </div>
        </BoxOurGeography>
      </Container>
    </Section>
  );
};

export default OurGeography;

const BoxOurGeography = styled.div`
  ${size.min1024} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BoxContent = styled.div`
  margin-bottom: 20px;
  text-align: center;

  ${size.tabletMin} {
    margin-bottom: 40px;
  }

  ${size.min1024} {
    margin-bottom: 0;
    margin-right: 75px;
    max-width: 365px;
    text-align: left;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.24;

  ${size.desktop} {
    font-weight: 400;
    font-size: 20px;
  }
`;
