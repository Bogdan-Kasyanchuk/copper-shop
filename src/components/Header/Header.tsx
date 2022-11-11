import { FC, useState } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Icon from '../Icon';
import Logo from '../Logo';
import { size } from '../../styles/variables';

const Header: FC = () => {
  const [isBurger, setIsBurger] = useState<boolean>(false);

  const toggleBurgerMenu = (): void => {
    setIsBurger(!isBurger);

    isBurger
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden');
  };

  return (
    <>
      <Section
        color="#fff"
        background="linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)"
        padding={{
          bottomMob: '30px',
          bottomDesk: '45px',
        }}
      >
        <Container>
          <BoxHeader>
            <Logo width="115" height="31" />
            <Navigation>
              <ListNav>
                <ItemNav>Каталог</ItemNav>
                <ItemNav>Новости</ItemNav>
                <ItemNav>Доставка</ItemNav>
                <ItemNav>О нас</ItemNav>
                <ItemNav>Контакты</ItemNav>
              </ListNav>
            </Navigation>
            <ListBtn>
              <ItemBtn>
                <Count>1</Count>
                <Icon iconName="heart" width="20px" height="20px" />
              </ItemBtn>
              <ItemBtn>
                <Icon iconName="user" width="20px" height="20px" />
              </ItemBtn>
              <ItemBtn>
                <Count>1</Count>
                <Icon iconName="basket-order" width="20px" height="20px" />
              </ItemBtn>
            </ListBtn>
            <Button type="button" onClick={toggleBurgerMenu}>
              <Icon iconName="burger" width="26px" height="20px" />
            </Button>
          </BoxHeader>
        </Container>
      </Section>
      {isBurger && (
        <Backdrop>
          <BurgerMenu>
            <Container>
              <BoxButton>
                <ListBtnBurger>
                  <ItemBtnBurger>
                    <CountBurger>1</CountBurger>
                    <Icon iconName="heart" width="20px" height="20px" />
                  </ItemBtnBurger>
                  <ItemBtnBurger>
                    <Icon iconName="user" width="20px" height="20px" />
                  </ItemBtnBurger>
                  <ItemBtnBurger>
                    <CountBurger>1</CountBurger>
                    <Icon iconName="basket-order" width="20px" height="20px" />
                  </ItemBtnBurger>
                </ListBtnBurger>
                <ButtonBurger type="button" onClick={toggleBurgerMenu}>
                  <Icon iconName="close" width="20px" height="20px" />
                </ButtonBurger>
              </BoxButton>
              <nav>
                <ul>
                  <ItemNavBurger>Каталог</ItemNavBurger>
                  <ItemNavBurger>Новости</ItemNavBurger>
                  <ItemNavBurger>Доставка</ItemNavBurger>
                  <ItemNavBurger>О нас</ItemNavBurger>
                  <ItemNavBurger>Контакты</ItemNavBurger>
                </ul>
              </nav>
            </Container>
          </BurgerMenu>
        </Backdrop>
      )}
    </>
  );
};

export default Header;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${size.tabletMin} {
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 50px;

    img {
      width: 160px;
      height: 43px;
      margin-right: auto;
    }
  }

  ${size.min1024} {
    justify-content: space-between;
    flex-wrap: nowrap;

    img {
      margin-right: initial;
    }
  }
`;

const Navigation = styled.nav`
  display: none;

  ${size.tabletMin} {
    display: block;
    order: 3;
  }

  ${size.min1024} {
    order: initial;
  }
`;

const ListNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemNav = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1;

  &:not(:last-child) {
    margin-right: 55px;

    ${size.min1024} {
      margin-right: 35px;
    }

    ${size.desktop} {
      margin-right: 55px;
    }
  }

  ${size.desktop} {
    font-weight: 600;
    font-size: 20px;
  }
`;

const ListBtn = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemBtn = styled.li`
  position: relative;
  padding: 30px 10px 10px;
  background-color: #fff;
  color: #0b3f37;

  &:first-child {
    display: none;

    ${size.tabletMin} {
      display: block;
    }
  }

  &:not(:last-child) {
    margin-right: 15px;
  }

  ${size.tabletMin} {
    .icon {
      width: 28px;
      height: 28px;
    }
  }

  ${size.desktop} {
    padding-top: 45px;
  }
`;

const Count = styled.span`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #e4a16f;

  ${size.tabletMin} {
    top: 12px;
    font-size: 20px;
  }

  ${size.desktop} {
    top: 20px;
    font-size: 25px;
  }
`;

const Button = styled.button`
  position: relative;
  padding: 8px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  .icon {
    position: relative;
    z-index: 1;
    stroke-width: 0.1;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% + 15px);
    background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
    z-index: 0;
  }

  ${size.tabletMin} {
    display: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: initial;

  ${size.tabletMin} {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
`;

const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 125px;
`;

const ListBtnBurger = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
`;

const ItemBtnBurger = styled.li`
  position: relative;
  padding: 50px 10px 10px;
  background-color: #fff;
  color: #0b3f37;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const CountBurger = styled.span`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #e4a16f;
`;

const ButtonBurger = styled.button`
  padding: 8px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;

const ItemNavBurger = styled.li`
  font-weight: 500;
  font-size: 30px;
  line-height: 2.1;
  text-align: center;
  color: #fff;
`;
