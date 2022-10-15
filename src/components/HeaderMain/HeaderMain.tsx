import { FC } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Logo from '../Logo';
// import Navigation from '../Navigation';
import Icon from '../Icon';

const HeaderMain: FC = () => {
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
        <BoxHeaderMain>
          <Logo width="115px" height="auto" />

          <LinkStyled href="/favorite" toTop="0" toRight="150px">
            <Icon iconName="heart" fill="#000" />
          </LinkStyled>
          <LinkStyled href="/user" toTop="0" toRight="110px">
            <Icon iconName="user" fill="#000" />
          </LinkStyled>
          <LinkStyled href="/basket" toTop="0" toRight="70px">
            <Icon iconName="basket-order" fill="#000" />
          </LinkStyled>

          <BurgerMenuButton type="button" toTop="30px" toRight="0">
            <Icon iconName="burger" fill="#fff"></Icon>
          </BurgerMenuButton>
        </BoxHeaderMain>
      </Container>
    </Section>
  );
};

export default HeaderMain;

const BoxHeaderMain = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-start;
  align-content: center;
`;
const LinkStyled = styled.a<{ toTop: string; toRight: string }>`
  position: absolute;
  top: ${({ toTop }) => toTop};
  right: ${({ toRight }) => toRight};
  display: flex;
  padding: 32px 5px 5px;
  background: #ffffff;
  svg:hover {
    fill: #0b3f37;
  }
`;
const BurgerMenuButton = styled.button<{ toTop: string; toRight: string }>`
  position: absolute;
  top: ${({ toTop }) => toTop};
  right: ${({ toRight }) => toRight};
  padding: 5px 32px 5px 5px;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
`;
