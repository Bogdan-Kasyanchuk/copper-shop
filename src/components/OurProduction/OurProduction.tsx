import { FC } from 'react';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import TitleH3 from '../TitleH3';
import CatalogCard from '../CatalogCard';
import { size } from '../../styles/variables';
import { catalogOurProduction } from '../../data/catalogOurProduction';

const OurProduction: FC = () => {
  return (
    <Section
      color="#031412"
      padding={{
        topMob: '20px',
        bottomMob: '40px',
        topDesk: '40px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <TitleH3 textAalign="center">Наша продукция</TitleH3>
        <ListCatalog>
          {catalogOurProduction.map(el => (
            <CatalogCard key={el.id} el={el} />
          ))}
        </ListCatalog>
      </Container>
    </Section>
  );
};

export default OurProduction;

const ListCatalog = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;

  li {
    ${size.tabletMin} {
      flex-basis: calc((100% - 45px) / 3);
      margin-top: 15px;
      margin-left: 15px;
      height: 235px;
    }

    ${size.min1024} {
      flex-basis: calc((100% - 90px) / 3);
      margin-top: 30px;
      margin-left: 30px;
      height: 318px;
    }

    ${size.desktop} {
      flex-basis: calc((100% - 90px) / 3);
      margin-top: 30px;
      margin-left: 30px;
      height: 491px;
    }
  }

  p {
    ${size.desktop} {
      font-size: 30px;
    }
  }

  ${size.tabletMin} {
    margin-top: -15px;
    margin-left: -15px;
  }

  ${size.min1024} {
    margin-top: -30px;
    margin-left: -30px;
  }
`;
