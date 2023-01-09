import { FC, useState } from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { size } from 'styles/variables';

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #031412;

  ${size.tabletMin} {
    flex-basis: 220px;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 10px 5px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  border: none;
  outline: none;
`;

const Button = styled.button`
  padding: 5px 0 5px 10px;
  border: 0;
  background-color: transparent;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const ProductSearch: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Form onSubmit={() => console.log(1)}>
      <Label htmlFor='input_catalog'>Поиск: </Label>
      <Input
        id='input_catalog'
        type='text'
        autoComplete='off'
        placeholder='Поиск'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type='submit'>
        <Icon iconName='search' width='15px' height='15px' />
      </Button>
    </Form>
  );
};

export default ProductSearch;
