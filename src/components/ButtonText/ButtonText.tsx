import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const ButtonText: FC = () => {
  return <Button type="button">Перейти в каталог</Button>;
};

export default ButtonText;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: #fff;
  background: linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%);

  ${size.tabletMin} {
    margin-left: auto;
    margin-right: auto;
    width: initial;
    min-width: 330px;
  }
`;
