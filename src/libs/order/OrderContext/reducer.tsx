import { castDraft, produce } from "immer";

import type { State } from "./state";
import type { INewOrder } from "./types";

/** Actions */
export type Action =
  | { type: "ADD_ITEM_TO_ORDER"; payload: INewOrder }
  | { type: "INCREASE_ITEM_COUNT"; payload: number }
  | { type: "DECREASE_ITEM_COUNT"; payload: number };

/** Reducer */
export const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM_TO_ORDER":
      return produce(prevState, (draft) => {
        draft.newOrder.push(action.payload);
      });

    case "INCREASE_ITEM_COUNT":
      return produce(prevState, (draft) => {
        console.log("prevState: ", prevState.newOrder);
        console.log("draft.newORder: ", draft.newOrder);
        console.log("action.payload: ", action.payload);
        const targetMenu = draft.newOrder.find(
          (order) => order.id === action.payload
        );
        console.log("targetMenu:", targetMenu);
        if (!targetMenu) return;
        targetMenu.count += 1;
        const filtered = prevState.newOrder.filter(
          (order) => order.id !== action.payload
        );
        console.log("filtered: ", filtered);
        draft.newOrder = [...filtered, targetMenu];
      });

    case "DECREASE_ITEM_COUNT":
      return produce(prevState, (draft) => {
        const targetMenu = draft.newOrder.find(
          (order) => order.id === action.payload
        );
        console.log("target menu in dec: ", targetMenu);
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
