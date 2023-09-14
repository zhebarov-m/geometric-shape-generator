import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface iSquareState {
  size: number;
  width: number;
  height: number;
  color: string;
  bgColor: string;
}

const initialState: iSquareState = {
  size: 1,
  width: 150,
  height: 150,
  color: "#474bff",
  bgColor: "#ffffff",
};

const squareSlice = createSlice({
  name: "squareParams",
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
  },
});

export const { setSize, setWidth, setHeight, setColor, setBgColor } = squareSlice.actions;

export default squareSlice.reducer;
