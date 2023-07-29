import { createContext } from "react";

import { State, initialState } from "./state";
import { INewOrder, IRestaurant } from ".";

/** Context */
export type ContextType = State & {
  addItemToOrder: (newOrder: INewOrder) => void;
  increaseItemCount: (menuId: number) => void;
  decreaseItemCount: (menuId: number) => void;
  resetOrder: () => void;
  setRestaurant: (targetRestaurant: IRestaurant) => void;
  totalPrice: number;
  restaurant: IRestaurant;
};

const stub = (): never => {
  throw new Error("You forgot to wrap your component in <OrderContext>.");
};

export const initialContext: ContextType = {
  ...initialState,

  addItemToOrder: stub,
  increaseItemCount: stub,
  decreaseItemCount: stub,
  resetOrder: stub,
  setRestaurant: stub,

  totalPrice: 0,
  restaurant: {
    id: 0,
    name: "",
  },
};

const OrderContext = createContext<ContextType>(initialContext);

export default OrderContext;
