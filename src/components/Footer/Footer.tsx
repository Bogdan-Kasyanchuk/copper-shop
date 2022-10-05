import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Logo from '../Logo';
import RightsReserved from '../RightsReserved';
import { size } from '../../styles/variables';

const Footer: FC = () => {
  return (
    <Section
      color="#fff"
      background="linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '60px',
        bottomTab: '60px',
      }}
    >
      <Container>
        <BoxFooter>
          <Logo width="175" height="70" />
          <RightsReserved />
        </BoxFooter>
      </Container>
    </Section>
  );
};

export default Footer;

const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 24px;
  }

  .rights-reserved {
    max-width: 132px;
    text-align: center;

    ${size.tabletMin} {
      max-width: 158px;
    }

    ${size.min1024} {
      max-width: 162px;
    }
  }
`;
