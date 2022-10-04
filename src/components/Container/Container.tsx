import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';
import { TChildren } from '../../types';

const Container: FC<TChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  ${size.tabletMin} {
    min-width: 768px;
    padding-left: 50px;
    padding-right: 50px;
  }

  ${size.desktop} {
    width: 1500px;
  }
`;
