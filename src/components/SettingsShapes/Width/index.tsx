import { Slider, styled } from "@mui/material";
import { FC } from "react";
import styles from "./index.module.scss";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setWidth } from "../../../redux/slices/squareSlice";

const PrettoSlider = styled(Slider)({
  color: "#474bff",
  height: 7,
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
    fontSize: 12,
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

const WidthSlider: FC = () => {
  const dispatch = useAppDispatch();
  const { width } = useSelector((state: RootState) => state.square);
  console.log(width);

  const handleWidthChange = (_event: Event, newValue: number | number[]) => {
    console.log(newValue);

    dispatch(setWidth(newValue as number));
  };

  return (
    <div className={styles.widthSliderContainer}>
      <p>Ширина:</p>
      <PrettoSlider
        value={width}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        min={10}
        max={300}
        onChange={handleWidthChange}
      />
    </div>
  );
};

export default WidthSlider;
