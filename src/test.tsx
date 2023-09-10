import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const SquareShape: React.FC = () => {
  const { size, width, height } = useSelector(
    (state: RootState) => state.square
  );
  const angles = useSelector((state: RootState) => state.radius.angles);
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
    <div>
      <div
        ref={squareRef}
        style={{
          transform: `scale(${size})`,
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: "white",
          color: "#22558899",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: `${angles[0]}px ${angles[1]}px ${angles[2]}px ${angles[3]}px`,
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
