import { FC } from "react";

const inputStyle = {
  width: "50px",
  height: "50px",
  padding: "4px",
  border: "1px solid #ccc",
  outline: "none",
  background: "#fff",
  fontSize: "24px",
  fontWeight: 700,
  fontFamily: 'Roboto'
};

interface iInputProps {
  radiusValue: string;
}

const Input: FC<iInputProps> = (props) => {
  const { radiusValue } = props;
  return (
    <div>
      <input
        style={{
          ...inputStyle,
          borderRadius: radiusValue,
          textAlign: "center",
          color: "#111",
        }}
        placeholder="0"
        type="number"
      />
    </div>
  );
};

export default Input;
