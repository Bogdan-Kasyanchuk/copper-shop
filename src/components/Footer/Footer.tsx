import { FC } from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import Logo from 'components/Logo';
import RightsReserved from 'components/RightsReserved';
import Section from 'components/Section';

import { size } from 'styles/variables';

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

const Footer: FC = () => {
  return (
    <Section
      color='#fff'
      background='linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '60px',
        bottomTab: '60px',
      }}
    >
      <Container>
        <BoxFooter>
          <Logo width='175' height='70' />
          <RightsReserved />
        </BoxFooter>
      </Container>
    </Section>
  );
};

export default Footer;
