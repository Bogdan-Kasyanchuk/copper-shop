import { TChildren } from '../types/TChildren';

export interface ISectionProps {
  children: TChildren['children'];
  color?: string;
  background?: string;
  backgroundImage?: string;
  padding?: {
    topMob?: string;
    bottomMob?: string;
    topTab?: string;
    bottomTab?: string;
    topDesk?: string;
    bottomDesk?: string;
  };
}
