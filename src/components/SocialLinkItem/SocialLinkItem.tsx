import { FC } from 'react';
import styled from 'styled-components';
import { ISocialLinkItemProps } from '../../interfaces';

const SocialLinkItem: FC<ISocialLinkItemProps> = ({ href, children }) => {
  return (
    <Item>
      <a
        className="social-link"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    </Item>
  );
};

export default SocialLinkItem;

const Item = styled.li`
  :not(:last-child) {
    margin-right: 18px;
  }
`;
