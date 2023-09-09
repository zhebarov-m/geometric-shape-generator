import { FC } from "react";
import Input from "../../../Input/Input";

const LowerLeftCorner: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h4 style={{ width: 150 }}>Левый нижний угол</h4>
      <Input radiusValue="0px 0px 0px 15px" />
    </div>
  );
};

export default LowerLeftCorner;
