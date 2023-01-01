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
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  color: #adadad;

  ${size.tabletMin} {
    font-size: 14px;
  }
`;
