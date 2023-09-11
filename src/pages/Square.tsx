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
import SquareShape from "../test";
import ColorBlock from "../components/ColorBlock/ColorBlock";

const SquarePage: FC = () => {
  return (
    <main style={{ display: "flex" }}>
      <div
        style={{
          padding: "100px",
          width: "50%",
          height: 800,
          margin: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SizeSlider />
            <WidthSlider />
            <HeightSlider />
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{ textAlign: "center", padding: "10px", color: "#636388" }}
            >
              Сглаживание углов
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 30,
                padding: 18,
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 30 }}
              >
                <UpperLeftCorner />
                <LowerLeftCorner />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 30 }}
              >
                <UpperRightCorner />
                <LowerRightCorner />
              </div>
            </div>
            <RadiusSlider />
          </div>
        </div>
        <Rotation />
        <ColorBlock />
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
        <div style={{ height: "60%", display: "flex", alignItems: "center" }}>
          <SquareShape />
        </div>
        <div>
          <MyCodeBlock />
        </div>
      </div>
    </main>
  );
};

export default SquarePage;
