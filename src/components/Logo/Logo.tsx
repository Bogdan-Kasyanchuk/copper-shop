import { FC } from 'react';
import { ILogoProps } from '../../interfaces';
import logoImg from '../../assets/icon-png/logo.png';

const Logo: FC<ILogoProps> = ({ width, height }) => {
  return <img src={logoImg} alt="Logo" width={width} height={height} />;
};

export default Logo;
