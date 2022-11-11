import { FC } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const Breadcrumb: FC = () => {
  return (
    <BreadcrumbTag>
      Главная / <span>О нас</span>
    </BreadcrumbTag>
  );
};

export default Breadcrumb;

const BreadcrumbTag = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 1;

  span {
    font-weight: 700;
  }

  ${size.tabletMin} {
    font-weight: 500;
    font-size: 18px;
  }
`;
