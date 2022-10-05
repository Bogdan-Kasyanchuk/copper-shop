import { FC } from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import SocialLinkList from '../../components/SocialLinkList';
import ButtonUp from '../../components/ButtonUp';
import { size } from '../../styles/variables';

const Footer: FC = () => {
  return (
    <Section
      color="#fff"
      background="linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <BoxFooter>
          <BoxLogoPolitics>
            <Logo width="175" height="70" />
            <TextReserved>© 2021 “Copper Pro” Все права защищенны</TextReserved>
            <TextPolitics>Политика конфиденциальности</TextPolitics>
          </BoxLogoPolitics>
          <BoxList>
            <ListNav>
              <Item>Навигация</Item>
              <Item>Каталог</Item>
              <Item>Новости</Item>
              <Item>Доставка</Item>
              <Item>О нас</Item>
              <Item>Контакты</Item>
            </ListNav>
            <ListCat>
              <Item>Каталог</Item>
              <Item>Для эфирных масел</Item>
              <Item>Для гидролатов</Item>
              <Item>Медная посуда</Item>
              <Item>Аксессуары из меди</Item>
              <Item>Индивидуальный заказ</Item>
              <Item>Скидки и предложения</Item>
            </ListCat>
            <BoxListContacts>
              <ListContacts>
                <Item>Контакты</Item>
                <Item>
                  <a
                    href="https://goo.gl/maps/iQ1fi4EBQ65hfGRz9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Бажана 8-Б, Киев, 02132 Украина
                  </a>
                </Item>
                <Item>
                  <a href="tel:+380123456789">+38 (012) 345 67 89</a>
                </Item>
                <Item>
                  <a href="mailto:exa.example@gmail.com">
                    exa.example@gmail.com
                  </a>
                </Item>
              </ListContacts>
              <SocialLinkList />
            </BoxListContacts>
          </BoxList>
        </BoxFooter>
      </Container>
      <ButtonUp />
    </Section>
  );
};

export default Footer;

const BoxFooter = styled.div`
  ${size.min1024} {
    display: flex;
  }
`;

const BoxLogoPolitics = styled.div`
  ${size.mobileMax} {
    margin-bottom: 28px;
  }

  ${size.tabletMin} {
    margin-bottom: 48px;
  }

  img {
    margin-bottom: 16px;
  }

  ${size.min1024} {
    margin-right: auto;

    img {
      margin-bottom: 24px;
    }
  }
`;

const TextReserved = styled.p`
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.34;
  color: #adadad;

  ${size.tabletMin} {
    font-size: 14px;
  }

  ${size.min1024} {
    margin-bottom: 20px;
    max-width: 158px;
  }
`;

const TextPolitics = styled.p<{ politics?: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.34;
  text-decoration-line: underline;

  ${size.tabletMin} {
    font-size: 14px;
  }
`;

const BoxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 420px) {
    padding-right: 15%;
  }

  ${size.min1024} {
    padding-right: 10%;
  }

  @media screen and (min-width: 1920px) {
    padding-right: 0;
  }
`;

const ListNav = styled.ul`
  margin-bottom: 32px;
  order: 0;

  @media screen and (min-width: 420px) {
    margin-right: 40px;
  }

  @media screen and (min-width: 592px) {
    order: 1;
  }

  ${size.tabletMin} {
    margin-right: 70px;
  }

  ${size.desktop} {
    margin-right: 100px;
  }
`;

const ListCat = styled.ul`
  order: 2;

  @media screen and (min-width: 420px) {
    margin-right: 40px;
  }

  @media screen and (min-width: 592px) {
    order: 1;
  }

  ${size.tabletMin} {
    margin-right: 70px;
  }

  ${size.desktop} {
    margin-right: 100px;
  }
`;

const BoxListContacts = styled.div`
  max-width: min-content;
  order: 1;

  @media screen and (min-width: 592px) {
    order: 2;
  }
`;

const ListContacts = styled.ul`
  margin-bottom: 16px;
`;

const Item = styled.li`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.34;

  :first-child {
    font-weight: 800;
    font-size: 16px;
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }

  ${size.tabletMin} {
    :first-child {
      font-size: 18px;
    }
  }
`;
