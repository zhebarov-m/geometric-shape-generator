import { FC } from "react";
import { useAppDispatch } from "../../redux/store";
import { setAngle } from "../../redux/slices/squareRadiusSlice";

const inputStyle = {
  width: "50px",
  height: "50px",
  padding: "4px",
  border: "1px solid #ccc",
  outline: "none",
  background: "#fff",
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: "Roboto",
};

interface iInputProps {
  angles: string[];
  angleIndex: number;
  radiusValue: string;
}

const Input: FC<iInputProps> = (props) => {
  const dispatch = useAppDispatch();
  const { angles, angleIndex, radiusValue } = props;

  const handleAngleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;

    // Отправляем новое значение угла и индекс через действие setAngle
    dispatch(setAngle({ angleIndex, value: newValue }));
  };
console.log(angles);

  return (
    <div>
      <input
        value={angles[angleIndex]}
        style={{
          ...inputStyle,
          borderRadius: radiusValue,
          textAlign: "center",
          color: "#111",
        }}
        placeholder="0"
        type="number"
        onChange={(event) => handleAngleChange(event)}
      />
    </div>
  );
};

export default Input;
