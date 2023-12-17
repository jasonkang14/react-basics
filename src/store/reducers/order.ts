import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface INewOrder {
  id: number;
  name: string;
  count: number;
  price: number;
  picture: string;
}

export interface ITargetRestaurant {
  id: number;
  name: string;
  minPrice: number;
}

export interface OrderDetailState {
  orderList: INewOrder[];
  restaurant: ITargetRestaurant;
}

const initialState: OrderDetailState = {
  orderList: [],
  restaurant: {
    id: 0,
    name: "",
    minPrice: 0,
  },
};

export const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<INewOrder>) => {
      console.log("action: ", action);
      state.orderList = [...state.orderList, action.payload];
    },
    setRestaurant(state, action: PayloadAction<ITargetRestaurant>) {
      state.restaurant = action.payload;
    },
    increaseOrderCount(state, action: PayloadAction<number>) {
      state.orderList[action.payload].count += 1;
    },
    decreaseOrderCount(state, action: PayloadAction<number>) {
      state.orderList[action.payload].count -= 1;
      if (state.orderList[action.payload].count === 0) {
        state.orderList.splice(action.payload, 1);
      }
    },
    resetOrder(state) {
      state.orderList = [];
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  addOrder,
  setRestaurant,
  increaseOrderCount,
  decreaseOrderCount,
  resetOrder,
} = orderDetailSlice.actions;

export default orderDetailSlice.reducer;
