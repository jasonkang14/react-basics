import React, { ReactElement, useReducer } from "react";

import OrderContext, { initialContext } from "./context";
import type { ContextType } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./state";
import { INewOrder } from ".";

const OrderProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToOrder = (newOrder: INewOrder) => {
    dispatch({ type: "ADD_ITEM_TO_ORDER", payload: newOrder });
  };

  const increaseItemCount = (menuId: number) => {
    console.log("menuId: ", menuId);
    dispatch({ type: "INCREASE_ITEM_COUNT", payload: menuId });
  };

  const decreaseItemCount = (menuId: number) => {
    dispatch({ type: "DECREASE_ITEM_COUNT", payload: menuId });
  };

  const orderContext: ContextType = {
    ...initialContext,
    ...state,

    addItemToOrder,
    increaseItemCount,
    decreaseItemCount,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;