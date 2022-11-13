import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import Breadcrumb from '../Breadcrumb';
import TitleH2 from '../TitleH2';
import NewsCard from '../NewsCard';
import { size } from '../../styles/variables';
import { news } from '../../data/news';

const News: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '30px',
        bottomMob: '40px',
        topDesk: '40px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <Breadcrumb />
        <TitleH2 textAalign="left">Новости</TitleH2>
        <List>
          {news.map(el => (
            <NewsCard key={el.id} el={el} />
          ))}
        </List>
        <Pagination>Пагинация</Pagination>
      </Container>
    </Section>
  );
};

export default News;

const List = styled.ul`
  margin-bottom: 25px;

  li {
    :not(:last-child) {
      margin-bottom: 25px;

      ${size.min1024} {
        margin-bottom: 0;
      }
    }
  }

  ${size.tabletMin} {
    margin-bottom: 35px;
  }

  ${size.min1024} {
    display: flex;
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: -30px;
  }
`;

const Pagination = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  height: 50px;
  background-color: #f3d0d0;
`;
