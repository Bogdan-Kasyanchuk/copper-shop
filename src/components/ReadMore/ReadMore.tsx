import { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { IReadMoreProps } from '../../interfaces';

const ReadMore: FC<IReadMoreProps> = ({ handlerButton, iconRotate }) => {
  return (
    <Button
      type="button"
      onClick={handlerButton}
      iconRotate={iconRotate as boolean}
    >
      <Text>Читать больше</Text>
      <Icon iconName="arrow" width="6px" height="9px" />
    </Button>
  );
};

export default ReadMore;

const Button = styled.button<{ iconRotate: boolean }>`
  display: flex;
  align-items: center;
  color: #cf9164;
  background-color: transparent;

  .icon {
    transform: ${({ iconRotate }) =>
      iconRotate ? 'rotate(90deg)' : 'rotate(-90deg)'};
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
