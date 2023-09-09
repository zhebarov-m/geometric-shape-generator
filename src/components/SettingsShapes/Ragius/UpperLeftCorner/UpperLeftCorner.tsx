import { FC } from "react";
import Input from "../../../Input/Input";

const UpperLeftCorner: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h4 style={{ width: 150 }}>Левый верхний угол</h4>
      <Input radiusValue="15px 0px 0px 0px" />
    </div>
  );
};

export default UpperLeftCorner;
