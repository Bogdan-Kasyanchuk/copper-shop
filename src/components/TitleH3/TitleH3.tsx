import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import { ITitleProps } from 'interfaces';

const Text = styled.h3<{ textAalign: string }>`
  margin-bottom: 25px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  text-align: ${({ textAalign }) => textAalign ?? null};
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.1;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    font-size: 50px;
  }
`;
const TitleH3: FC<ITitleProps> = ({ children, textAalign }) => {
  return <Text textAalign={textAalign as string}>{children}</Text>;
};

export default TitleH3;
