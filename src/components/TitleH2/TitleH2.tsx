import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';
import { ITitleH3Props } from '../../interfaces';

const TitleH2: FC<ITitleH3Props> = ({ children, textAalign }) => {
  return <Text textAalign={textAalign as string}>{children}</Text>;
};

export default TitleH2;

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
    line-height: 0.9;
  }

  ${size.desktop} {
    margin-bottom: 50px;
    font-size: 100px;
  }
`;
