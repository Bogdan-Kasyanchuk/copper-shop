import { FC, useRef } from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper';
import Icon from '../Icon';
import 'swiper/css';
import { size } from '../../styles/variables';
import { ISliderVerticalProps } from '../../interfaces';

const SliderVertical: FC<ISliderVerticalProps> = ({
  onSlideChange,
  children,
}) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <BoxSlider className="slider-vertical">
      <Swiper
        direction={'vertical'}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        keyboard={true}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
        }}
        modules={[Keyboard]}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={onSlideChange}
        className="mySwiper"
      >
        {children}
      </Swiper>
      <Button
        aria-label="Previous"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <Icon iconName="arrow" width="18px" height="28px" />
      </Button>
      <Button aria-label="Next" onClick={() => swiperRef.current?.slideNext()}>
        <Icon iconName="arrow" width="18px" height="28px" />
      </Button>
    </BoxSlider>
  );
};

export default SliderVertical;

const BoxSlider = styled.div`
  position: relative;
  height: 100%;

  .swiper {
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  color: #fff;
  padding: 3px 9px;

  .icon {
    width: 8px;
    height: 14px;
  }

  &:nth-child(2) {
    top: 0;
    background: linear-gradient(195.45deg, #0b3f37 38.27%, #cb8d62 141.81%);

    &:hover {
      background: linear-gradient(2.18deg, #5e3928 20.13%, #e4a16f 92.93%);
    }

    .icon {
      transform: rotate(-90deg);
    }
  }

  &:last-child {
    bottom: 0;
    background: linear-gradient(375.45deg, #0b3f37 38.27%, #cb8d62 141.81%);

    &:hover {
      background: linear-gradient(182.18deg, #5e3928 20.13%, #e4a16f 92.93%);
    }

    .icon {
      transform: rotate(90deg);
    }
  }

  ${size.tabletMin} {
    padding: 4px 13px;

    .icon {
      width: 14px;
      height: 22px;
    }
  }
`;
