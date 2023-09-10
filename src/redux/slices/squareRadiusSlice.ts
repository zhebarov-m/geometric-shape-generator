import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Обновленный тип состояния
interface iSquareState {
  angles: string[]; // Массив углов
  radius: string;
}

const initialState: iSquareState = {
  angles: ["0", "0", "0", "0"], // Изначально четыре элемента в массиве
  radius: "",
};

const squareRadiusSlice = createSlice({
  name: "squareRadius",
  initialState,
  reducers: {
    setAngle: (state, action: PayloadAction<{ angleIndex: number; value: string }>) => {
      const { angleIndex, value } = action.payload;
      
      if (angleIndex >= 0 && angleIndex < state.angles.length) {
        state.angles[angleIndex] = value;
      }
    },
    setRadius: (state, action: PayloadAction<string>) => {
      state.radius = action.payload;
    },
  },
});

export const { setAngle, setRadius } = squareRadiusSlice.actions;

export default squareRadiusSlice.reducer;
