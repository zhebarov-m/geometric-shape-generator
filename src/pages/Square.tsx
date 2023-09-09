import { FC } from "react";
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

const SquarePage: FC = () => {
  const code = `
  .square {
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    transform: rotate(45deg);
}
`;

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
        <h2
          style={{
            textAlign: "center",
            margin: "10px",
            fontFamily: "monospace",
          }}
        >
          Параметры для настройки фигуры:
        </h2>
        <SizeSlider />
        <WidthSlider />
        <HeightSlider />
        <div>
          <h3>Сглаживание углов</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 30,
              margin: 50,
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
      </div>
      <div>
        <MyCodeBlock
          code={code}
          language="css"
          showLineNumbers={true}
          startingLineNumber={1}
        />
      </div>
    </main>
  );
};

export default SquarePage;
