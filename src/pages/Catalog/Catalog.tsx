import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Catalog: FC = () => {
  return (
    <div>
      Catalog
      <Outlet />
    </div>
  );
};

export default Catalog;
