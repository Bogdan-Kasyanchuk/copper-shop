import { FC } from 'react';
import { TChildren } from '../../types';

const Section: FC<TChildren> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
