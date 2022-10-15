import { FC } from 'react';
import styled from 'styled-components';

const Navigation: FC = () => {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavListItemLink href="#Каталог">Каталог</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="#Новости">Новости</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="#Доставка">Доставка</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="#Онас">О нас</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="#Контакты">Контакты</NavListItemLink>
        </NavListItem>
      </NavList>
    </nav>
  );
};

export default Navigation;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
const NavListItem = styled.li`
  a:hover {
    background: linear-gradient(92.09deg, #5e3928 -79.4%, #e4a16f 84.12%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
    border-bottom: 1px solid #e4a16f;
  }
`;
const NavListItemLink = styled.a`
  padding: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 0.9375;
  text-align: center;
  color: #ffffff;
  border-bottom: 1px solid transparent;
`;
