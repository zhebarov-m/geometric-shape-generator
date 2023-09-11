import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { setColor } from "../../redux/slices/squareSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { HexColorPicker } from "react-colorful";
import { InputAdornment, TextField } from "@mui/material";

const ColorBlock: FC = () => {
  const [isColorBlockVisible, setColorBlockVisibility] = useState(false);
  const dispatch = useAppDispatch();
  const { color } = useSelector((state: RootState) => state.square);
  const handleColorChange = (newColor: string) => {
    dispatch(setColor(newColor));
  };

  const handleColorChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setColor(e.target.value));
  };

  const toggleColorBlock = () => {
    setColorBlockVisibility(!isColorBlockVisible);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <h3>Выбор цвета фигуры:</h3>
        <TextField
          value={color}
          onClick={toggleColorBlock}
          onChange={handleColorChangeInput}
          label="Выбор цвета фигуры"
          id="outlined-end-adornment"
          sx={{
            m: 1,
            width: '25ch',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'initial', // Установите начальный цвет границы (обычно это серый или другой цвет по умолчанию)
              },
              '&.Mui-focused fieldset': {
                borderColor: '#474bff', // Установите цвет границы при фокусе
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "18%",
                    backgroundColor: color,
                  }}
                ></div>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { fontSize: "14px", marginLeft: 3, color: '#474bff' }, // Установите желаемый размер шрифта
          }}
        />
      </div>
      {isColorBlockVisible && ( // Условный рендеринг
        <div style={{ position: "absolute", top: 50, left: 192 }}>
          <HexColorPicker
            color={color}
            onChange={(event) => handleColorChange(event)}
          />
        </div>
      )}
    </div>
  );
};

export default ColorBlock;
