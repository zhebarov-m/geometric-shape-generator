import { FC } from "react";
import Input from "../../../Input/Input";

const LowerRightCorner: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Input radiusValue="0px 0px 15px 0px" />
      <h4 style={{ width: 150 }}>Правый нижний угол</h4>
    </div>
  );
};

export default LowerRightCorner;
