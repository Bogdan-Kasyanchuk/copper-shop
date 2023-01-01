import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import Icon from '../Icon';
import ReadMore from '../ReadMore';
import { size } from '../../styles/variables';
import { whyChooseUs } from '../../data/whyChooseUs';

const WhyChooseUs: FC = () => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);
  const [index, setIndex] = useState<string>('');

  const toggleReadMore = (id: string): void => {
    if (index === id) {
      setIsTruncated(!isTruncated);
      return;
    }
    setIsTruncated(false);
    setIndex(id);
  };

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
            <Item key={el.id}>
              <BoxIcon>
                <Icon iconName={el.iconName} />
              </BoxIcon>
              <ListDesc>
                <ItemDesc>{el.title}</ItemDesc>
                <Desc isTruncated={isTruncated || el.id !== index}>
                  {el.desc}
                </Desc>
              </ListDesc>
              <ReadMore
                handlerButton={() => toggleReadMore(el.id)}
                iconRotate={isTruncated || el.id !== index}
              />
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

  .icon {
    width: 34px;
    height: 34px;
    stroke-width: 0.25;

    ${size.tabletMin} {
      width: 54px;
      height: 54px;
    }
  }

  ${size.tabletMin} {
    width: 75px;
    height: 75px;
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
  font-weight: 700;
  font-size: 16px;
  line-height: 1;

  ${size.tabletMin} {
    margin-bottom: 15px;
    font-size: 20px;
  }
`;

const Desc = styled.dd<{ isTruncated: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;

  ${({ isTruncated }) =>
    isTruncated
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        `
      : null};

  ${size.tabletMin} {
    font-size: 14px;
  }
`;
