import { FC, useRef } from 'react';
import styled from 'styled-components';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

import Container from 'components/Container';
import Icon from 'components/Icon';

import { size } from 'styles/variables';

import { ISliderProps } from 'interfaces';

const BoxSlider = styled.div`
  position: relative;

  li {
    margin-top: initial;
    margin-left: initial;
    flex-basis: initial;
  }

  .swiper {
    position: relative;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 125px;
    left: 15px;
    z-index: 1;
    width: auto;
    line-height: 0.75;
    ${size.mobileMin} {
      left: calc((100vw - 320px + 25px) / 2);
    }
    ${size.tabletMin} {
      left: calc((100vw - 768px + 90px) / 2);
    }
    ${size.min1440} {
      left: calc((100vw - 1440px + 25px) / 2);
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #ffffff;
    opacity: initial;
    border-radius: initial;
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(65.81deg, #5e3928 -24.09%, #e4a16f 104.02%);
  }
`;

const SvgContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 15px;
  z-index: 1;
  color: white;
  ${size.tabletMin} {
    left: 47px;
  }
  ::before {
    content: '';
    display: block;
    margin-bottom: 5px;
    margin-left: 9px;
    width: 1px;
    height: 32px;
    background: #fff;
  }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  top: calc(50% - 25px);
  transform: translateY(-50%);
  z-index: 1;
  border: 1px solid #ffffff;
  background: transparent;
  padding: 10px 25px;
  &:hover {
    background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
    color: #fff;
    border: none;
  }
  &:nth-last-child(2) {
    left: 0;
    .icon {
      transform: rotate(-180deg);
    }
  }
  &:last-child {
    right: 0;
  }
  ${size.min1024} {
    display: initial;
  }
  ${size.desktop} {
    top: calc(50% - 30px);
  }
`;

const SliderHero: FC<ISliderProps> = ({ children }) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <BoxSlider>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          renderBullet(_, className: string): string {
            return `<span class="${className}"></span>`;
          },
        }}
        keyboard
        modules={[Autoplay, Pagination, Keyboard]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='mySwiper'
      >
        {children}
      </Swiper>
      <Container>
        <SvgContainer>
          <Icon iconName='mouse' width='20px' height='20px' />
        </SvgContainer>
      </Container>
      <Button aria-label='Previous' onClick={() => swiperRef.current?.slidePrev()}>
        <Icon iconName='arrow' width='18px' height='28px' />
      </Button>
      <Button aria-label='Next' onClick={() => swiperRef.current?.slideNext()}>
        <Icon iconName='arrow' width='18px' height='28px' />
      </Button>
    </BoxSlider>
  );
};

export default SliderHero;
