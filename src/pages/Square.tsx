import { FC, useState } from "react";
import SizeSlider from "../components/SettingsShapes/Size";
import HeightSlider from "../components/SettingsShapes/Height";
import Rotation from "../components/SettingsShapes/SquareRotation";
import WidthSlider from "../components/SettingsShapes/Width";
import RadiusSlider from "../components/SettingsShapes/Ragius/TotalRadius";
import UpperLeftCorner from "../components/SettingsShapes/Ragius/UpperLeftCorner/UpperLeftCorner";
import LowerLeftCorner from "../components/SettingsShapes/Ragius/LowerLeftCorner/LowerLeftCorner";
import UpperRightCorner from "../components/SettingsShapes/Ragius/UpperRightCorner/UpperRightCorner";
import LowerRightCorner from "../components/SettingsShapes/Ragius/LowerRightCorner/LowerRightCorner";
import MyCodeBlock from "../components/CodeBlock/CodeBlock";
import SquareShape from "../test";
import { ColorResult, TwitterPicker } from "react-color"; // Импорт компонента выбора цвета
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { setColor } from "../redux/slices/squareSlice";

const SquarePage: FC = () => {
  const [isColorBlockVisible, setColorBlockVisibility] = useState(false);
  const dispatch = useAppDispatch();
  const { color } = useSelector((state: RootState) => state.square);
  console.log(color);

  const handleColorChange = (selectedColor: ColorResult) => {
    dispatch(setColor(selectedColor.hex));
  };

  const toggleColorBlock = () => {
    setColorBlockVisibility(!isColorBlockVisible);
  };

  return (
    <main style={{ display: "flex" }}>
      <div
        style={{
          border: "2px solid #888",
          padding: "10px",
          width: "50%",
          height: 800,
          margin: 10,
        }}
      >
        {/* <h2
          style={{
            textAlign: "center",
            margin: "10px",
            fontFamily: "monospace",
          }}
        >
          Параметры для настройки фигуры:
        </h2> */}
        <SizeSlider />
        <WidthSlider />
        <HeightSlider />
        <div>
          <h3 style={{ textAlign: "center", padding: "10px" }}>
            Сглаживание углов
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 30,
              padding: 20,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <UpperLeftCorner />
              <LowerLeftCorner />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <UpperRightCorner />
              <LowerRightCorner />
            </div>
          </div>
          <RadiusSlider />
        </div>
        <Rotation />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h3>Выбор цвета фигуры:</h3>
            <div
              onClick={toggleColorBlock} // Добавляем обработчик клика
              style={{
                width: 60,
                height: 30,
                backgroundColor: "#fff",
                cursor: "pointer",
                border: "2px solid #aaccee",
              }}
            ></div>
          </div>
          {isColorBlockVisible && ( // Условный рендеринг
            <div style={{ position: "absolute", top: 50, left: 192 }}>
              <TwitterPicker color={color} onChange={handleColorChange} />
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "30px 0px",
        }}
      >
        <div>
          <MyCodeBlock />
        </div>
        <div style={{ height: "60%", display: "flex", alignItems: "center" }}>
          <SquareShape />
        </div>
      </div>
    </main>
  );
};

export default SquarePage;
