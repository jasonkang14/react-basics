import { produce } from "immer";

import { initialState, type State } from "./state";
import type { INewOrder } from "./types";

/** Actions */
export type Action =
  | { type: "RESET_ORDER" }
  | { type: "ADD_ITEM_TO_ORDER"; payload: INewOrder }
  | { type: "INCREASE_ITEM_COUNT"; payload: number }
  | { type: "DECREASE_ITEM_COUNT"; payload: number };

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
        const filtered = prevState.newOrder.filter(
          (order) => order.id !== action.payload
        );

        draft.newOrder = [...filtered, targetMenu];
      });

    case "DECREASE_ITEM_COUNT":
      return produce(prevState, (draft) => {
        const targetMenu = draft.newOrder.find(
          (order) => order.id === action.payload
        );

        if (!targetMenu) return;
        targetMenu.count -= 1;
        const filtered = draft.newOrder.filter(
          (order) => order.id !== action.payload
        );
        if (targetMenu.count === 0) {
          draft.newOrder = filtered;
          return;
        }
        draft.newOrder = [...filtered, targetMenu];
      });

    default:
      return prevState;
  }
};
