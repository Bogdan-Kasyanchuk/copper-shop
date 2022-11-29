import { FC } from 'react';
import sprite from '../../assets/sprite.svg';
import { IIconProps } from '../../interfaces';

const Icon: FC<IIconProps> = ({
  iconName = '',
  width = '20px',
  height = '20px',
  fill = 'currentColor',
  stroke = 'currentColor',
  handlerClick,
}) => {
  return (
    <svg
      className={`icon icon-${iconName}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      onClick={handlerClick}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
