import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Logo from '../Logo';

const Header: FC = () => {
  return (
    <Section
      color="#fff"
      background="linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%);"
      padding={{
        topMob: '25px',
        bottomMob: '25px',
        topTab: '50px',
        bottomTab: '50px',
      }}
    >
      <Container>
        <BoxHeader>
          <Logo width="161px" height="auto" />
        </BoxHeader>
      </Container>
    </Section>
  );
};

export default Header;

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
