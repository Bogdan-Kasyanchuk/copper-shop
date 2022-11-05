import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';
import { ITitleH3Props } from '../../interfaces';

const TitleH3: FC<ITitleH3Props> = ({ children, textAalign }) => {
  return <Text textAalign={textAalign as string}>{children}</Text>;
};

export default TitleH3;

const Text = styled.h3<{ textAalign: string }>`
  margin-bottom: 25px;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.32;
  text-align: ${({ textAalign }) => textAalign ?? null};
  text-transform: uppercase;

  ${size.tabletMin} {
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 0.9;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    font-size: 50px;
  }
`;
