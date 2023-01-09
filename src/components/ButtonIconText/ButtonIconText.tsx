import { FC } from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { IButtonIconTextProps } from 'interfaces';

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  line-height: 1;
  color: #fff;
  background: linear-gradient(278.32deg, #0b3f37 -7.03%, #cb8d62 136.33%);
`;

const Text = styled.span`
  margin-left: 25px;
  font-weight: 700;
  font-size: 18px;
`;

const ButtonIconText: FC<IButtonIconTextProps> = ({
  children,
  iconName,
  widthIcon,
  heightIcon,
}) => {
  return (
    <Button type='button'>
      <Icon iconName={iconName} width={widthIcon} height={heightIcon} />
      <Text> {children}</Text>
    </Button>
  );
};

export default ButtonIconText;
