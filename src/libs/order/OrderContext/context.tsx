import { createContext } from "react";

import { State, initialState } from "./state";
import { INewOrder } from ".";

/** Context */
export type ContextType = State & {
  addItemToOrder: (newOrder: INewOrder) => void;
  increaseItemCount: (menuId: number) => void;
  decreaseItemCount: (menuId: number) => void;
  resetOrder: () => void;
};

const stub = (): never => {
  throw new Error("You forgot to wrap your component in <OrderContext>.");
};

export const initialContext: ContextType = {
  ...initialState,

  // Media Device Control
  addItemToOrder: stub,
  increaseItemCount: stub,
  decreaseItemCount: stub,
  resetOrder: stub,
};

const OrderContext = createContext<ContextType>(initialContext);

export default OrderContext;
