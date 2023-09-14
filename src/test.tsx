import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const SquareShape: React.FC = () => {
  const { size, width, height, color, bgColor } = useSelector(
    (state: RootState) => state.square
  );
  const angles = useSelector((state: RootState) => state.radius.angles);
  const { radius } = useSelector((state: RootState) => state.radius);
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [currentWidth, setCurrentWidth] = useState<number>(width);
  const [currentHeight, setCurrentHeight] = useState<number>(height);

  useEffect(() => {
    if (squareRef.current) {
      // Получите текущие размеры div и обновите состояние
      const rect = squareRef.current.getBoundingClientRect();
      setCurrentWidth(rect.width);
      setCurrentHeight(rect.height);
    }
  }, [width, height, size]);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: 500,
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #e1e1ef",
        borderRadius: 10,
      }}
    >
      <div
        ref={squareRef}
        style={{
          transform: `scale(${size})`,
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
          color: "#22558899",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: radius
            ? `${radius}%`
            : `${angles[0]}px ${angles[1]}px ${angles[2]}px ${angles[3]}px`,
            boxShadow: '0px 0px 0px 0px #fff'
            
        }}
      >
        <p>{`${currentWidth.toFixed(0)}px`}</p>
        <span>x</span>
        <p>{`${currentHeight.toFixed(0)}px`}</p>
      </div>
    </div>
  );
};

export default SquareShape;
