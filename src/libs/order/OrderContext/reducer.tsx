import { produce } from "immer";

import { initialState, type State } from "./state";
import type { INewOrder, IRestaurant, ITargetRestaurant } from "./types";

/** Actions */
export type Action =
  | { type: "RESET_ORDER" }
  | { type: "ADD_ITEM_TO_ORDER"; payload: INewOrder }
  | { type: "INCREASE_ITEM_COUNT"; payload: number }
  | { type: "DECREASE_ITEM_COUNT"; payload: number }
  | { type: "SET_TOTAL_PRICE"; payload: number }
  | { type: "SET_TARGET_RESTAURANT"; payload: ITargetRestaurant }
  | { type: "SET_RESTAURANT_LIST"; payload: IRestaurant[] };

/** Reducer */
export const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case "RESET_ORDER":
      return initialState;

    case "ADD_ITEM_TO_ORDER":
      return produce(prevState, (draft) => {
        draft.newOrder.push(action.payload);
      });

    case "INCREASE_ITEM_COUNT":
      return produce(prevState, (draft) => {
        const targetMenu = draft.newOrder.find(
          (order) => order.id === action.payload
        );

        if (!targetMenu) return;
        targetMenu.count += 1;
      });

    case "DECREASE_ITEM_COUNT":
      return produce(prevState, (draft) => {
        const targetMenu = draft.newOrder.find(
          (order) => order.id === action.payload
        );

        if (!targetMenu) return;
        targetMenu.count -= 1;
      });

    case "SET_TOTAL_PRICE":
      return produce(prevState, (draft) => {
        draft.totalPrice = action.payload;
      });

    case "SET_TARGET_RESTAURANT":
      return produce(prevState, (draft) => {
        draft.restaurant = action.payload;
      });

    case "SET_RESTAURANT_LIST":
      return produce(prevState, (draft) => {
        draft.restaurantList = action.payload;
      });

    default:
      return prevState;
  }
};
