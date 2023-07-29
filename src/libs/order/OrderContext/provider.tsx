import { ReactElement, useEffect, useReducer } from "react";

import OrderContext, { initialContext } from "./context";
import type { ContextType } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./state";
import { INewOrder, IRestaurant } from ".";

const OrderProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { newOrder } = state;

  useEffect(() => {
    const totalPrice = newOrder.reduce((total, item) => {
      return total + item.count * item.price;
    }, 0);

    dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
  }, [newOrder]);

  const resetOrder = () => {
    dispatch({ type: "RESET_ORDER" });
  };

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

  const setRestaurant = (targetRestaurant: IRestaurant) => {
    dispatch({ type: "SET_RESTAURANT", payload: targetRestaurant });
  };

  const orderContext: ContextType = {
    ...initialContext,
    ...state,
    resetOrder,
    addItemToOrder,
    increaseItemCount,
    decreaseItemCount,
    setRestaurant,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
