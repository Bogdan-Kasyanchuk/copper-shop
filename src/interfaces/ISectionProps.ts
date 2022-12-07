import { TChildren } from '../types/TChildren';

export interface ISectionProps {
  children: TChildren['children'];
  color?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
  backgroundAttachment?: string;
  backgroundSize?: string;
  padding?: {
    topMob?: string;
    bottomMob?: string;
    topTab?: string;
    bottomTab?: string;
    topDesk?: string;
    bottomDesk?: string;
  };
}
