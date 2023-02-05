import { FC } from 'react';
import styled from 'styled-components';

import ButtonText from 'components/ButtonText';
import Container from 'components/Container';

import { size } from 'styles/variables';

import { IHeroCardProps } from 'interfaces';

const Title = styled.h2`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.15;
  color: #ffffff;
  ${size.mobileMin} {
    width: 200px;
  }
  ${size.tabletMin} {
    padding-bottom: 15px;
    margin-bottom: 25px;
    width: 388px;
    font-size: 60px;
  }
  ${size.tabletMin} {
    width: 400px;
  }
  ${size.desktop} {
    padding-bottom: 50px;
    margin-bottom: 50px;
    width: 740px;
    font-size: 100px;
    line-height: 0.75;
  }
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #ffffff, rgba(0, 0, 0, 0));
  }
`;

const ProductTitle = styled.h3`
  margin-bottom: 15px;
  width: 200px;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.3;
  color: #ffffff;
  ${size.tabletMin} {
    margin-bottom: 25px;
    width: 400px;
    font-size: 30px;
  }

  ${size.desktop} {
    margin-bottom: 40px;
    width: 500px;
    font-size: 50px;
    line-height: 0.97;
  }
`;

const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  width: 165px;
  ${size.tabletMin} {
    margin-bottom: 45px;
    width: 250px;
  }
  ${size.desktop} {
    margin-bottom: 40px;
    width: 330px;
  }
`;

const ButtonContainer = styled.div`
  button {
    width: 155px;
  }
  ${size.tabletMin} {
    button {
      margin: 0;
      width: 255px;
      min-width: 255px;
    }
  }
  ${size.desktop} {
    button {
      width: 330px;
    }
  }
`;

const ProductPriceTitle = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 0.97;
  color: #ffffff;
  ${size.tabletMin} {
    font-size: 24px;
  }
  ${size.desktop} {
    font-size: 30px;
  }
`;

const ProductPrice = styled.b`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 0.97;
  color: #ffffff;
  ${size.tabletMin} {
    font-size: 24px;
  }
  ${size.desktop} {
    font-size: 30px;
  }
`;

const ContainerWrapper = styled.div`
  position: absolute;
  top: 123px;
  left: 0;
  z-index: 1;
  padding-left: 15px;
  padding-right: 15px;
  ${size.tabletMin} {
    top: 300px;
    padding-left: 50px;
    padding-right: 50px;
  }
  ${size.min1024} {
    top: 100px;
  }
  ${size.desktop} {
    top: 230px;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right bottom;

  ${size.mobileMinMax} {
    height: 720px;
  }
  ${size.tabletMinMax} {
    height: 1016px;
  }
  ${size.desktop} {
    height: 896px;
  }
`;

const HeroCard: FC<IHeroCardProps> = ({ el }) => {
  return (
    <>
      <Container>
        <ContainerWrapper>
          <Title>ХИТ ПРОДАЖ</Title>
          <div key={el.id}>
            <ProductTitle>{el.title}</ProductTitle>
            <ProductPriceContainer>
              <ProductPriceTitle>Цена</ProductPriceTitle>
              <ProductPrice>{el.price}</ProductPrice>
            </ProductPriceContainer>
            <ButtonContainer>
              <ButtonText>Купить</ButtonText>
            </ButtonContainer>
          </div>
        </ContainerWrapper>
      </Container>
      <div>
        <picture>
          <source srcSet={el.imgUrlMob} media='(max-width: 767px)' sizes='' type='' />
          <source srcSet={el.imgUrlTab} media='(max-width: 1023px)' sizes='' type='' />
          <source srcSet={el.imgUrlDesk} media='(min-width: 1024px)' sizes='' type='' />
          <HeroImg src={el.imgUrlDesk} alt='ХИТ ПРОДАЖ' />
        </picture>
      </div>
    </>
  );
};

export default HeroCard;
