import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root: FC = () => {
  return (
    <div>
      Root
      <Outlet />
    </div>
  );
};

export default Root;
