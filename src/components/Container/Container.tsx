import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import { TChildren } from 'types';

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 320px;

  ${size.tabletMin} {
    width: 768px;
    padding-left: 50px;
    padding-right: 50px;
  }

  ${size.min1024} {
    width: 1024px;
  }

  ${size.desktop} {
    width: 1500px;
  }
`;

const Container: FC<TChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
