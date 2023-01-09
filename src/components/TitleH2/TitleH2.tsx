import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import { ITitleProps } from 'interfaces';

const Text = styled.h2<{ textAalign: string }>`
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.3;
  text-align: ${({ textAalign }) => textAalign ?? null};
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 30px;
    font-size: 60px;
    line-height: 1.1;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    font-size: 100px;
  }
`;

const TitleH2: FC<ITitleProps> = ({ children, textAalign }) => {
  return <Text textAalign={textAalign as string}>{children}</Text>;
};

export default TitleH2;
