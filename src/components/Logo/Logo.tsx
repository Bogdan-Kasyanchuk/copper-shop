import { FC } from 'react';

import logoImg from 'assets/icon-png/logo.png';

import { ILogoProps } from 'interfaces';

const Logo: FC<ILogoProps> = ({ width, height }) => {
  return <img src={logoImg} alt='Logo' width={width} height={height} />;
};

export default Logo;
