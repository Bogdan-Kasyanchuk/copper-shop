import { MouseEventHandler } from 'react';

export interface IIconProps {
  iconName: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  handlerClick?: MouseEventHandler<HTMLOrSVGElement>;
}
