import { FC } from 'react';
import styled from 'styled-components';

import { size } from 'styles/variables';

import { TChildren } from 'types';

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

const ButtonText: FC<TChildren> = ({ children }) => {
  return (
    <Button className='btn-text' type='button'>
      {children}
    </Button>
  );
};

export default ButtonText;
