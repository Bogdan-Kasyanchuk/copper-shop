import { FC, useRef } from 'react';
import styled from 'styled-components';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

import Icon from 'components/Icon';

import { size } from 'styles/variables';

import { ISliderProps } from 'interfaces';

const BoxSlider = styled.div`
  position: relative;
  margin-bottom: 30px;

  ${size.tabletMin} {
    margin-bottom: 40px;
  }

  li {
    margin-top: initial;
    margin-left: initial;
    flex-basis: initial;
  }

  .swiper {
    padding-bottom: 35px;

    ${size.tabletMin} {
      padding-bottom: 50px;
    }

    ${size.desktop} {
      padding-bottom: 60px;
    }
  }

  .swiper-pagination {
    bottom: 0;
    line-height: 0.75;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #031412;
    opacity: initial;
    border-radius: initial;
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(65.81deg, #5e3928 -24.09%, #e4a16f 104.02%);
  }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  top: calc(50% - 25px);
  transform: translateY(-50%);
  z-index: 1;
  border: 1px solid #031412;
  background: #fff;
  padding: 10px 25px;

  &:hover {
    background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);
    color: #fff;
    border: none;
  }

  &:nth-child(2) {
    left: -50px;

    .icon {
      transform: rotate(-180deg);
    }
  }

  &:last-child {
    right: -50px;
  }

  ${size.min1024} {
    display: initial;
  }

  ${size.desktop} {
    top: calc(50% - 30px);
  }
`;

const Slider: FC<ISliderProps> = ({ children }) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <BoxSlider>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet(_, className: string): string {
            return `<span class="${className}"></span>`;
          },
        }}
        keyboard
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Keyboard]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='mySwiper'
      >
        {children}
      </Swiper>
      <Button aria-label='Previous' onClick={() => swiperRef.current?.slidePrev()}>
        <Icon iconName='arrow' width='18px' height='28px' />
      </Button>
      <Button aria-label='Next' onClick={() => swiperRef.current?.slideNext()}>
        <Icon iconName='arrow' width='18px' height='28px' />
      </Button>
    </BoxSlider>
  );
};

export default Slider;
