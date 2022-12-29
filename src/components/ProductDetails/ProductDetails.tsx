import { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SliderVertical from '../SliderVertical';
import { size } from '../../styles/variables';
import Container from '../Container';
import Section from '../Section';
import Breadcrumb from '../Breadcrumb';
import TitleH3 from '../TitleH3';
import SocialLinkList from '../SocialLinkList';
import ButtonText from '../ButtonText';
import Icon from '../Icon';
import { productDetails } from '../../data/productDetails';

const ProductDetails: FC = () => {
  const [fullImg, setFullImg] = useState<{
    src: string;
    alt: string;
  }>({ src: '', alt: '' });
  const [count, setCount] = useState<number>(1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSlideChange = (e: any) => {
    const { src, alt } = e.imagesToLoad[e.snapIndex];
    setFullImg({ src, alt });
  };

  return (
    <Section
      color="#031412"
      padding={{
        topMob: '40px',
        bottomMob: '40px',
        topTab: '80px',
        bottomTab: '80px',
      }}
    >
      <Container>
        <Breadcrumb />
        <BoxProductDetails>
          <BoxSlider>
            <SliderVertical onSlideChange={onSlideChange}>
              {productDetails.img.map(el => (
                <SwiperSlide key={el.id}>
                  <PrevImage src={el.imgUrl} alt={el.title} />
                </SwiperSlide>
              ))}
            </SliderVertical>
            <BoxImage>
              <Image src={fullImg.src} alt={fullImg.alt} />
              {productDetails.sale && <Sale>Sale</Sale>}
              <Favorite favorite={productDetails.favorite}>
                <Icon
                  iconName={
                    productDetails.favorite ? 'heart-favorite' : 'heart'
                  }
                  width="22px"
                  height="19px"
                />
              </Favorite>
            </BoxImage>
          </BoxSlider>
          <BoxContent>
            <BoxTitle>
              <TitleH3 textAalign="left">{productDetails.title}</TitleH3>
              <BoxStatusArticle>
                <BoxStatus>
                  <Icon iconName="check" width="15px" height="11px" />
                  <Status> {productDetails.status}</Status>
                </BoxStatus>
                <Article>
                  Артикул: <b>{productDetails.article}</b>
                </Article>
              </BoxStatusArticle>
            </BoxTitle>
            <BoxDescription>
              <DescriptionTitle>Описание</DescriptionTitle>
              <Description>{productDetails.description}</Description>
            </BoxDescription>
            <BoxPurchase>
              <BoxPriceTitle>
                <PriceTitle>Цена</PriceTitle>
                <BoxPrice>
                  <Price oldPrice={productDetails.oldPrice}>
                    {productDetails.price}
                  </Price>
                  {productDetails.oldPrice && (
                    <OldPrice>{productDetails.oldPrice}</OldPrice>
                  )}
                </BoxPrice>
              </BoxPriceTitle>
              <BoxCountButton>
                <BoxCount>
                  <ButtonCount
                    type="button"
                    disabled={count < 2}
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </ButtonCount>
                  <Count>{count}</Count>
                  <ButtonCount
                    type="button"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </ButtonCount>
                </BoxCount>
                <ButtonText>Купить</ButtonText>
              </BoxCountButton>
            </BoxPurchase>
            <BoxLink>
              <Sharing>Поделиться</Sharing>
              <SocialLinkList />
            </BoxLink>
          </BoxContent>
        </BoxProductDetails>
        <BoxDesc>
          <DescrTitle>Описание</DescrTitle>
          <DescText>
            {productDetails.descriptionFull.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </DescText>
        </BoxDesc>
      </Container>
    </Section>
  );
};

export default ProductDetails;

const BoxProductDetails = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;

  ${size.desktop} {
    display: flex;
    column-gap: 30px;
    padding-bottom: 40px;
  }
`;

const BoxSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  margin-bottom: 30px;
  height: 250px;

  .slider-vertical {
    flex-basis: 45px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${size.tabletMin} {
    column-gap: 30px;
    height: 520px;

    .slider-vertical {
      flex-basis: 100px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  ${size.desktop} {
    margin-bottom: initial;
  }
`;

const PrevImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BoxImage = styled.div`
  position: relative;
  flex-basis: calc(100% - 45px - 15px);
  height: 100%;

  ${size.tabletMin} {
    flex-basis: calc(100% - 100px - 30px);
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Favorite = styled.span<{ favorite: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 14px 7px;
  color: ${({ favorite }) => (favorite ? '#A4704D' : '#031412')};
  background: #fff;

  ${size.desktop} {
    padding: 20px 10px;
    .icon {
      width: 30px;
      height: 26px;
    }
  }
`;

const Sale = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 0.9;
  color: #fff;
  text-transform: uppercase;
  background: #9b0000;
  z-index: 1;
`;

const BoxContent = styled.div`
  ${size.desktop} {
    flex-basis: calc(100% - 650px - 30px);
  }
`;

const BoxTitle = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;

  ${size.desktop} {
    h3 {
      margin-bottom: 40px;
      font-size: 40px;
    }
  }
`;

const BoxStatusArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxStatus = styled.div`
  display: flex;
  align-items: center;
  color: #4b7159;
`;

const Status = styled.span`
  padding-left: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
`;

const Article = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
`;

const BoxDescription = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;
`;

const DescriptionTitle = styled.p`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.3;

  ${size.desktop} {
    font-weight: 400;
  }
`;

const BoxPurchase = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;
`;

const BoxPriceTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PriceTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  ${size.tabletMin} {
    font-size: 35px;
  }
`;

const BoxPrice = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
`;

const Price = styled.span<{ oldPrice: string }>`
  font-weight: 700;
  font-size: 24px;
  color: ${({ oldPrice }) => (oldPrice ? '#9B0000' : '#031412')};

  ${size.tabletMin} {
    font-size: 35px;
  }
`;

const OldPrice = styled.span`
  margin-left: 12px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: line-through;
  opacity: 0.3;

  ${size.tabletMin} {
    font-size: 25px;
  }
`;

const BoxCountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;

  ${size.tabletMin} {
    column-gap: 30px;

    .btn-text {
      margin-left: initial;
      margin-right: initial;
    }
  }
`;

const BoxCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e6e8e7;
`;

const ButtonCount = styled.button`
  padding: 12px 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${size.tabletMin} {
    padding-left: 21px;
    padding-right: 21px;
  }
`;

const Count = styled.span`
  min-width: 60px;
  padding: 12px 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
  border-left: 1px solid #e6e8e7;
  border-right: 1px solid #e6e8e7;

  ${size.tabletMin} {
    min-width: 110px;
  }
`;

const BoxLink = styled.div`
  display: flex;
  align-items: center;
  color: #4b7159;
`;

const Sharing = styled.span`
  margin-right: auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  color: #031412;
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-right: 50px;
  }
`;

const BoxDesc = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e8e7;

  ${size.desktop} {
    padding-bottom: 40px;
  }
`;

const DescrTitle = styled.p`
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.1;
  text-transform: uppercase;

  ${size.tabletMin} {
    font-size: 40px;
  }

  ${size.desktop} {
    margin-bottom: 30px;
  }
`;

const DescText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.3;

  p {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${size.desktop} {
    font-weight: 400;
  }
`;
