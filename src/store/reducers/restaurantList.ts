import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IRestaurant {
  id: number;
  name: string;
  ratings: number;
  minPrice: number;
  icon: string;
}

export interface RestaurantListState {
  restaurantList: IRestaurant[];
}

const initialState: RestaurantListState = {
  restaurantList: [],
};

export const restaurantListSlice = createSlice({
  name: "restaurantList",
  initialState,
  reducers: {
    setRestaurantList: (state, action: PayloadAction<IRestaurant[]>) => {
      state.restaurantList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurantList } = restaurantListSlice.actions;

export default restaurantListSlice.reducer;
