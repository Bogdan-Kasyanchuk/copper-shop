import { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const ReadMore: FC = () => {
  return (
    <BoxReadMore>
      <Text>Читать больше</Text>
      <Icon iconName="arrow" width="5px" height="8px" />
    </BoxReadMore>
  );
};

export default ReadMore;

const BoxReadMore = styled.div`
  display: flex;
  align-items: center;
  color: #cf9164;

  .icon {
    transform: rotate(90deg);
  }
`;

const Text = styled.span`
  margin-right: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  background: linear-gradient(65.81deg, #5e3928 -24.09%, #e4a16f 104.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
