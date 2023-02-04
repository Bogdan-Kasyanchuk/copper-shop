import { TChildren } from 'types';

export interface ISectionProps {
  children: TChildren['children'];
  className?: string;
  color?: string;
  backgroundColor?: string;
  background?: string;
  backgroundImage?: {
    mob?: string;
    tab?: string;
    desk?: string;
  };
  backgroundRepeat?: {
    mob?: string;
    tab?: string;
    desk?: string;
  };
  backgroundPosition?: {
    mob?: string;
    tab?: string;
    desk?: string;
  };
  backgroundAttachment?: {
    mob?: string;
    tab?: string;
    desk?: string;
  };
  backgroundSize?: {
    mob?: string;
    tab?: string;
    desk?: string;
  };
  padding?: {
    topMob?: string;
    bottomMob?: string;
    topTab?: string;
    bottomTab?: string;
    topDesk?: string;
    bottomDesk?: string;
  };
}
