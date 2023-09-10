import { Slider, styled } from "@mui/material";
import { FC } from "react";
import styles from "./index.module.scss";
import { RootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { setSize } from "../../../redux/slices/squareSlice";

const PrettoSlider = styled(Slider)({
  color: "#AACCEE",
  height: 7,
  width: 500,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#1976d2",
    border: "2px solid #AACCEE",
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
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#1976d2",
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
  const dispatch = useAppDispatch()
  const {size} = useSelector((state: RootState) => state.square)
  
  const handleSizeChange = (_event: Event, newValue: number | number[]) => {
    dispatch(setSize(newValue as number))
  }

  return (
    <div className={styles.sizeSliderContainer}>
      <p>size:</p>
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
