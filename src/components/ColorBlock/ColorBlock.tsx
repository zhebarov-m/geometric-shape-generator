import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { setBgColor, setColor } from "../../redux/slices/squareSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { HexColorPicker } from "react-colorful";
import styles from "./index.module.scss";

const ColorBlock: FC = () => {
  const [isColorBlockVisible, setColorBlockVisibility] = useState(false);
  const [isBgColorBlockVisible, setBgColorBlockVisibility] = useState(false);
  const dispatch = useAppDispatch();
  const { color, bgColor } = useSelector((state: RootState) => state.square);

  // Общая функция для обработки изменения цвета
  const handleColorChange = (newColor: string) => {
    dispatch(setColor(newColor));
  };

  // Общая функция для обработки изменения цвета заднего фона
  const handleBgColorChange = (newBgColor: string) => {
    dispatch(setBgColor(newBgColor));
  };

  // Общая функция для обработки изменения значения input цвета
  const handleInputChange = (
    newValue: string,
    setColorFunction: (value: string) => void
  ) => {
    setColorFunction(newValue);
  };

  // Общая функция для переключения видимости блока выбора цвета
  const toggleColorBlock = () => {
    setColorBlockVisibility(true);
  };

  // Общая функция для переключения видимости блока выбора цвета заднего фона
  const toggleBgColorBlock = () => {
    setBgColorBlockVisibility(true);
  };

  return (
    <div className={styles.myComponent}>
      <div className={styles.flexContainer}>
        <label htmlFor="colorInput" className={styles.label}>
          Выбор цвета фигуры
        </label>
        <div className={styles.inputShapeColorContainer}>
          <input
            type="text"
            value={color}
            onClick={toggleColorBlock}
            onChange={(e) =>
              handleInputChange(e.target.value, handleColorChange)
            }
            placeholder="Выбор цвета фигуры"
            id="colorInput"
          />

          <div
            style={{ backgroundColor: color }}
            className={styles.colorIndicator}
          ></div>
          {isColorBlockVisible && (
            <div className={styles.colorBlock}>
              <HexColorPicker color={color} onChange={handleColorChange} />
            </div>
          )}
        </div>
        <label htmlFor="bgColorInput" className={styles.label}>
          Выбор цвета заднего фона
        </label>
        <div className={styles.inputBgColorContainer}>
          <input
            type="text"
            value={bgColor}
            onClick={toggleBgColorBlock}
            onChange={(e) =>
              handleInputChange(e.target.value, handleBgColorChange)
            }
            placeholder="Выбор цвета заднего фона"
            id="bgColorInput"
          />

          <div
            style={{ backgroundColor: bgColor }}
            className={styles.bgColorIndicator}
          ></div>
          {isBgColorBlockVisible && (
            <div className={styles.bgColorBlock}>
              <HexColorPicker color={bgColor} onChange={handleBgColorChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorBlock;
