import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Logo from '../Logo';
import RightsReserved from '../RightsReserved';
import SocialLinkList from '../SocialLinkList';
import ButtonUp from '../ButtonUp';
import { size } from '../../styles/variables';

const FooterMain: FC = () => {
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
          <BoxLogo>
            <Logo width="175" height="70" />
            <RightsReserved />
            <TextPolitics>Политика конфиденциальности</TextPolitics>
          </BoxLogo>
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
                  <a href="mailto:ex.example@gmail.com">ex.example@gmail.com</a>
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

export default FooterMain;

const BoxFooter = styled.div`
  ${size.tabletMin} {
    padding-right: 100px;
  }

  ${size.min1024} {
    display: flex;
    justify-content: space-between;
  }

  ${size.desktop} {
    padding-right: 120px;
  }
`;

const BoxLogo = styled.div`
  img {
    margin-bottom: 16px;

    ${size.min1024} {
      margin-bottom: 24px;
    }
  }

  .rights-reserved {
    margin-bottom: 5px;

    ${size.min1024} {
      margin-bottom: 20px;
      max-width: 162px;
    }
  }

  ${size.mobileMax} {
    margin-bottom: 28px;
  }

  ${size.tabletMax} {
    margin-bottom: 48px;
  }
`;

const TextPolitics = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-decoration-line: underline;

  ${size.tabletMin} {
    font-size: 14px;
  }
`;

const BoxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListNav = styled.ul`
  margin-bottom: 32px;
  order: 0;

  ${size.tabletMin} {
    margin-right: 70px;
    order: 1;
  }

  ${size.desktop} {
    margin-right: 100px;
  }
`;

const ListCat = styled.ul`
  order: 2;

  ${size.tabletMin} {
    margin-right: 70px;
    order: 1;
  }

  ${size.desktop} {
    margin-right: 100px;
  }
`;

const BoxListContacts = styled.div`
  max-width: min-content;
  order: 1;

  ${size.tabletMin} {
    order: 2;
  }
`;

const ListContacts = styled.ul`
  margin-bottom: 16px;
`;

const Item = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;

  :first-child {
    font-weight: 700;
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
