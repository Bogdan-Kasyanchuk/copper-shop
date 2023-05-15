import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const PersonalArea: FC = () => {
  return (
    <div>
      PersonalArea
      <Outlet />
    </div>
  );
};

export default PersonalArea;
