import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface iSquareState {
  size: number;
  width: number;
  height: number;
  color: string;
}

const initialState: iSquareState = {
  size: 1,
  width: 150,
  height: 150,
  color: "#ffffff",
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
  },
});

export const { setSize, setWidth, setHeight, setColor } = squareSlice.actions;

export default squareSlice.reducer;
