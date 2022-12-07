import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import { size } from '../../styles/variables';
import { ourHistoryLeft, ourHistoryRight } from '../../data/ourHistory';
import ourHistoryBackground from '../../assets/our-history-background.png';

const OurHistory: FC = () => {
  return (
    <Section
      color="#fff"
      background="#000"
      backgroundImage={{
        mob: `url(${ourHistoryBackground})`,
        tab: `url(${ourHistoryBackground})`,
        desk: `url(${ourHistoryBackground})`,
      }}
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <TitleImage>Copper Pro</TitleImage>
      <Container>
        <TitleH3 textAalign="center">Наша история</TitleH3>
        <BoxList>
          <List>
            {ourHistoryLeft.map(el => (
              <Item key={el.id}>
                <Text>{el.text}</Text>
              </Item>
            ))}
          </List>
          <List>
            {ourHistoryRight.map(el => (
              <Item key={el.id}>
                <Text>{el.text}</Text>
              </Item>
            ))}
          </List>
        </BoxList>
      </Container>
    </Section>
  );
};

export default OurHistory;

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
  ${size.tabletMin} {
    flex-basis: calc((100% - 20px) / 2);
  }

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
  line-height: 1.3;

  ${size.desktop} {
    font-weight: 400;
  }
`;
