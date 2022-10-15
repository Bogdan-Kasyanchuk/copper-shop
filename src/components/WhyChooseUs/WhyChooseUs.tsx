import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Icon from '../../components/Icon';
import { size } from '../../styles/variables';
import { whyChooseUs } from '../../data/whyChooseUs';

const WhyChooseUs: FC = () => {
  return (
    <Section
      color="#031412"
      background="#f7f7f7"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign="center">Почему выбирают нас</TitleH3>
        <List>
          {whyChooseUs.map(el => (
            <Item>
              <BoxIcon>
                <Icon iconName={el.iconName} />
              </BoxIcon>
              <ListDesc>
                <ItemDesc>{el.title}</ItemDesc>
                <Desc>{el.desc}</Desc>
              </ListDesc>
              <BoxReadMore>
                <TextReadMore>Читать больше</TextReadMore>
                <Icon iconName="arrow" width="5px" height="8px" />
              </BoxReadMore>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;

  ${size.tabletMin} {
    margin-top: -35px;
    margin-left: -35px;
  }
`;

const Item = styled.li`
  margin-top: 20px;
  margin-left: 20px;
  flex-basis: calc((100% - 40px) / 2);

  ${size.tabletMin} {
    margin-top: 35px;
    margin-left: 35px;
    flex-basis: calc((100% - 70px) / 2);
  }

  ${size.min1024} {
    flex-basis: calc((100% - 140px) / 4);
  }
`;

const BoxIcon = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;
  background: linear-gradient(278.32deg, #0b3f37 -7.03%, #cb8d62 136.33%);

  ${size.tabletMin} {
    width: 75px;
    height: 75px;
  }

  .icon {
    width: 34px;
    height: 34px;
    stroke-width: 0.25;

    ${size.tabletMin} {
      width: 54px;
      height: 54px;
    }
  }
`;

const ListDesc = styled.dl`
  margin-bottom: 10px;

  ${size.tabletMin} {
    margin-bottom: 15px;
  }
`;

const ItemDesc = styled.dt`
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 16px;
  line-height: 0.97;

  ${size.tabletMin} {
    margin-bottom: 15px;
    font-size: 20px;
  }
`;

const Desc = styled.dd`
  font-weight: 300;
  font-size: 12px;
  line-height: 1.34;

  ${size.tabletMin} {
    font-size: 14px;
  }
`;

const BoxReadMore = styled.div`
  display: flex;
  align-items: center;
  color: #cf9164;

  .icon {
    transform: rotate(90deg);
  }
`;

const TextReadMore = styled.span`
  margin-right: 8px;
  font-weight: 800;
  font-size: 14px;
  line-height: 1.34;
  background: linear-gradient(65.81deg, #5e3928 -24.09%, #e4a16f 104.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
