import { FC } from "react";
import Input from "../../../Input/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const LowerLeftCorner: FC = () => {
  const angles = useSelector((state: RootState) => state.radius.angles)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Input angles={angles} angleIndex={2} radiusValue="0px 0px 0px 15px" />
    </div>
  );
};

export default LowerLeftCorner;
