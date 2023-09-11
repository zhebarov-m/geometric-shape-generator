import { FC } from "react";
import Input from "../../../Input/Input";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

const UpperRightCorner: FC = () => {
  const angles = useSelector((state: RootState) => state.radius.angles);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Input angles={angles} angleIndex={1} radiusValue="0px 15px 0px 0px" />
    </div>
  );
};

export default UpperRightCorner;
