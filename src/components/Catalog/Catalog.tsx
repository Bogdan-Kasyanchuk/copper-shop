import { FC } from 'react';
import styled from 'styled-components';

import Breadcrumb from 'components/Breadcrumb';
import CatalogCard from 'components/CatalogCard';
import Container from 'components/Container';
import ProductCard from 'components/ProductCard';
import ProductSearch from 'components/ProductSearch';
import ProductSort from 'components/ProductSort';
import Section from 'components/Section';
import TitleH3 from 'components/TitleH3';

import { size } from 'styles/variables';

import { catalog } from 'data/catalog';
import { products } from 'data/products';

const BoxListCatalog = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #ebebeb;

  ${size.desktop} {
    margin-bottom: 35px;
  }
`;

const ListCatalog = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;
  padding-bottom: 20px;

  ${size.tabletMin} {
    margin-top: -30px;
    margin-left: -30px;
    padding-bottom: 40px;
  }

  ${size.desktop} {
    flex-wrap: nowrap;
    margin-top: 0;
    margin-left: 0;
  }
`;

const BoxProductSearch = styled.div`
  margin-bottom: 20px;

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const ListProducts = styled.ul`
  margin-bottom: 20px;

  ${size.tabletMin} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;
    margin-bottom: 30px;
  }

  ${size.desktop} {
    margin-top: -35px;
    margin-left: -35px;
    margin-bottom: 50px;
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

const Catalog: FC = () => {
  return (
    <Section
      color='#031412'
      padding={{
        topMob: '30px',
        bottomMob: '40px',
        topDesk: '40px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <Breadcrumb />
        <TitleH3 textAalign='left'>Каталог</TitleH3>
        <BoxListCatalog>
          <ListCatalog>
            {catalog.map((el) => (
              <CatalogCard key={el.id} el={el} />
            ))}
          </ListCatalog>
        </BoxListCatalog>
        <BoxProductSearch>
          <ProductSearch />
          <ProductSort />
        </BoxProductSearch>
        <ListProducts>
          {products.map((el) => (
            <ProductCard key={el.id} el={el} />
          ))}
        </ListProducts>
        <Pagination>Пагинация</Pagination>
      </Container>
    </Section>
  );
};

export default Catalog;
