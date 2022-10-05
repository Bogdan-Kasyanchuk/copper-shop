import { FC } from 'react';
import { ILogoProps } from '../../interfaces';
import LogoImg from '../../assets/icon-png/logo.png';

console.log(LogoImg);

const Logo: FC<ILogoProps> = ({ width, height }) => {
  return <img src={LogoImg} alt="Logo" width={width} height={height} />;
};

export default Logo;
