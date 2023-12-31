import { Slider, styled } from "@mui/material";
import { FC } from "react";
import styles from "./index.module.scss";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setSize } from "../../../redux/slices/squareSlice";

const PrettoSlider = styled(Slider)({
  color: "#474bff",
  height: 8,
  width: 300,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 22,
    width: 22,
    backgroundColor: "#fff",
    border: "2px solid #474bff20",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 10,
    background: "unset",
    padding: 0,
    width: 28,
    height: 28,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#474bff",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const SizeSlider: FC = () => {
  const dispatch = useAppDispatch();
  const { size } = useSelector((state: RootState) => state.square);

  const handleSizeChange = (_event: Event, newValue: number | number[]) => {
    dispatch(setSize(newValue as number));
  };

  return (
    <div className={styles.sizeSliderContainer}>
      <p>Масштаб фигуры:</p>
      <PrettoSlider
        value={size}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        min={0.1}
        max={1.5}
        step={0.01}
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default SizeSlider;
