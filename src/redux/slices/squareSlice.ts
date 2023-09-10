import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface iSquareState {
  size: number;
  width: number;
  height: number;
}

const initialState: iSquareState = {
  size: 1,
  width: 150,
  height: 150,
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
  },
});

export const { setSize, setWidth, setHeight } = squareSlice.actions;

export default squareSlice.reducer;
