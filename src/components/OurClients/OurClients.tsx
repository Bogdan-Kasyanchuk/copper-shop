import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import { size } from '../../styles/variables';
import ourClientshBackground from '../../assets/our-clients-background.png';

const OurClients: FC = () => {
  return (
    <Section
      color="#fff"
      background="#000"
      backgroundImage={ourClientshBackground}
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <TitleImage>Copper Pro</TitleImage>
      <Container>
        <TitleH3 textAalign="center">Наши клиенты</TitleH3>
        <BoxList>
          <List>
            <Item>
              <Text>
                Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. Chartreuse
                Disrupt посадил птицу на лебеду jianbing. Хэштег для позднего
                завтрака с питьевым уксусом, скейтборд с тильдой холодного
                отжима.
              </Text>
            </Item>
            <Item>
              <Text>
                Крафтовый пивной шалфей занимает кардиган из ретро-фарма и стол,
                а также фланель из кейтара для гастропабов.
              </Text>
            </Item>
            <Item>
              <Text>
                Unicorn jean шорты quinoa подлинный cronut tilde twee YOLO,
                потроха эстетичный yuccie iPhone truffaut seitan.
              </Text>
            </Item>
            <Item>
              <Text>
                Создавайте пивные путники, лесорубы, суккуленты своими руками,
                Helvetica Vexillologist, следующий уровень разбудили толстовку с
                капюшоном keffiyeh tumblr schlitz chambray пишущую машинку.
              </Text>
            </Item>
            <Item>
              <Text>Плитка метро шестиугольника keffiyeh.</Text>
            </Item>
          </List>
          <List>
            <Item>
              <Text>
                Синтетический этический биодизельный путин. Горькая борода
                шалфей лоу-фай. Пало Санто буквально пледы лампочки Эдисона,
                вилы пить уксус аутентичный пабст уличное искусство метро плитка
                крафтовое пиво одно происхождение кофе шаман ловец снов.
              </Text>
            </Item>
            <Item>
              <Text>
                Williamsburg sriracha portland, ассиметричная свиная грудинка
                для микродозирования la croix 3 wolf moon umami.
              </Text>
            </Item>
            <Item>
              <Text>
                Четырехдолларовые тосты, модный топор трюффо, ломо-клетчатый мех
                PBR & B Scester Остин Палео Thundercats семейная реликвия
                Knausgaard от фермы до стола.
              </Text>
            </Item>
          </List>
        </BoxList>
      </Container>
    </Section>
  );
};

export default OurClients;

const TitleImage = styled.p`
  display: none;

  ${size.desktop} {
    position: absolute;
    left: -172px;
    bottom: 158px;
    display: block;
    width: min-content;
    font-family: 'Playfair Display', serif;
    font-size: 145px;
    line-height: 0.8;
    text-transform: uppercase;
    transform: rotate(-90deg);
  }
`;

const BoxList = styled.div`
  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  ${size.desktop} {
    max-width: 920px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const List = styled.ul`
  flex-basis: calc((100% - 20px) / 2);

  ${size.desktop} {
    flex-basis: calc((100% - 30px) / 2);
  }
`;

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.32;

  ${size.desktop} {
    font-weight: 400;
  }
`;
