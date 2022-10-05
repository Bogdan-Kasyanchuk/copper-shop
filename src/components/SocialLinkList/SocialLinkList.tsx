import { FC } from 'react';
import styled from 'styled-components';
import SocialLinkItem from '../../components/SocialLinkItem';
import Icon from '../../components/Icon';

const SocialLinkList: FC = () => {
  return (
    <List className="social-list">
      <SocialLinkItem href="https://twitter.com">
        <Icon iconName="twiter" width="21px" height="17px" />
      </SocialLinkItem>
      <SocialLinkItem href="https://uk-ua.facebook.com">
        <Icon iconName="facebook" width="10px" height="18px" />
      </SocialLinkItem>
      <SocialLinkItem href="https://www.youtube.com/">
        <Icon iconName="instagram" width="18px" height="18px" />
      </SocialLinkItem>
    </List>
  );
};

export default SocialLinkList;

const List = styled.ul`
  display: flex;
  align-items: center;
`;
