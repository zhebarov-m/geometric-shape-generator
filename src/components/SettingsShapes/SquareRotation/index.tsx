import * as React from "react";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';

const Rotation: React.FC = () => {
  return (
    <div>
      <button><RotateLeftIcon /></button>
      
      <button><RotateRightIcon /></button>
    </div>
  );
};

export default Rotation;
