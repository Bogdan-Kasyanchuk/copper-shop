import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';
import { scrollTop } from '../../helpers/scrollTop';

const ButtonUp: FC = () => {
  return (
    <Button type="button" onClick={scrollTop}>
      <Text> Вверх</Text>
    </Button>
  );
};

export default ButtonUp;

const Button = styled.button`
  position: absolute;
  right: 15px;
  bottom: 0;
  padding: 26px 16px 90px;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);

  ${size.tabletMin} {
    right: 50px;
  }

  ${size.desktop} {
    right: 92px;
  }
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
  writing-mode: vertical-rl;
`;
