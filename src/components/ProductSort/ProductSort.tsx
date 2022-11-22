import { FC, useState } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const ProductSort: FC = () => {
  const [selected, setSelected] = useState('По цене');

  return (
    <BoxSelect>
      <Label htmlFor="select_catalog">Сортировка: </Label>
      <Select
        id="select_catalog"
        value={selected}
        onChange={e => {
          setSelected(e.target.value);
        }}
      >
        <option value="По цене">По цене</option>
        <option value="По рейтингу">По рейтингу</option>
        <option value="Новинки">Новинки</option>
      </Select>
    </BoxSelect>
  );
};

export default ProductSort;

const BoxSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;

  ${size.tabletMin} {
    font-size: 20px;
    margin-right: 20px;
  }
`;

const Select = styled.select`
  padding-right: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  border: none;
  outline: none;

  ${size.tabletMin} {
    font-size: 20px;
  }
`;
