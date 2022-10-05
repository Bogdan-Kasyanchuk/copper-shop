import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const RightsReserved: FC = () => {
  return (
    <Text className="rights-reserved">
      © 2022 “Copper Pro” Все права защищенны
    </Text>
  );
};

export default RightsReserved;

const Text = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 1.34;
  color: #adadad;

  ${size.tabletMin} {
    font-size: 14px;
  }

  ${size.min1024} {
    font-weight: 400;
  }
`;
