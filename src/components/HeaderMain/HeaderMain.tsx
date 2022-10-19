import { FC } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Icon from '../Icon';
import { size } from '../../styles/variables';

const HeaderMain: FC = () => {
  return (
    <Section
      color="#fff"
      background="linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%);"
      padding={{
        topMob: '25px',
        bottomMob: '25px',
        topTab: '50px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <BoxHeaderMain>
          <Logo width="115px" height="auto" />

          <Navigation />

          <LinkStyled
            href="/favorite"
            toTopMob="0"
            toRightMob="150px"
            toTopTab="0"
            toRightTab="190px"
            toTopDesk="0"
            toRightDesk="390px"
          >
            <IconStyled iconName="heart" fill="#0b3f37" />
          </LinkStyled>
          <LinkStyled
            href="/user"
            toTopMob="0"
            toRightMob="110px"
            toTopTab="0"
            toRightTab="120px"
            toTopDesk="0"
            toRightDesk="320px"
          >
            <IconStyled iconName="user" fill="#0b3f37" />
          </LinkStyled>
          <LinkStyled
            href="/basket-order"
            toTopMob="0"
            toRightMob="70px"
            toTopTab="0"
            toRightTab="50px"
            toTopDesk="0"
            toRightDesk="250px"
          >
            <IconStyled iconName="basket-order" fill="#E4A16F" />
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
  ${size.min1024} {
    display: flex;
    align-items: flex-end;
    align-content: center;
  }
  img {
    width: 115px;
    height: auto;
    ${size.tabletMin} {
      width: 160px;
      margin-bottom: 50px;
    }
    ${size.min1024} {
      margin-bottom: 0;
      margin-right: 75px;
    }
  }
  ${size.mobileMax} {
    nav {
      display: none;
    }
  }
  ${size.min1024} {
    nav ul li:not(:last-child) {
      margin-right: 50px;
    }
  }
`;
const LinkStyled = styled.a<{
  toTopMob: string;
  toRightMob: string;
  toTopTab: string;
  toRightTab: string;
  toTopDesk: string;
  toRightDesk: string;
}>`
  position: absolute;
  top: ${({ toTopMob }) => toTopMob ?? null};
  right: ${({ toRightMob }) => toRightMob ?? null};
  display: flex;
  align-items: flex-end;
  padding: 32px 5px 5px;
  background: #ffffff;
  ${size.tabletMin} {
    padding: 50px 10px 10px;
    top: ${({ toTopTab }) => toTopTab ?? null};
    right: ${({ toRightTab }) => toRightTab ?? null};
  }
  ${size.desktop} {
    top: ${({ toTopDesk }) => toTopDesk ?? null};
    right: ${({ toRightDesk }) => toRightDesk ?? null};
  }
`;
const IconStyled = styled(Icon)`
  width: 20px;
  height: 20px;
  ${size.tabletMin} {
    width: 30px;
    height: 30px;
  }
`;
const BurgerMenuButton = styled.button<{ toTop: string; toRight: string }>`
  position: absolute;
  top: ${({ toTop }) => toTop};
  right: ${({ toRight }) => toRight};
  padding: 5px 32px 5px 5px;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
  ${size.tabletMin} {
    display: none;
  }
`;
