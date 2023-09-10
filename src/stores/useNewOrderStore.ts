import { create } from "zustand";

export interface INewOrder {
  id: number;
  name: string;
  count: number;
  price: number;
  picture: string;
}

interface INewOrderState {
  orders: INewOrder[];
  addItemToOrder: (order: INewOrder) => void;
  increaseItemCount: (menuId: number) => void;
  decreaseItemCount: (menuId: number) => void;
  resetOrder: () => void;
}

const useNewOrderStore = create<INewOrderState>()((set) => ({
  orders: [],

  addItemToOrder: (newItem: INewOrder) =>
    set((state) => ({ orders: [...state.orders, newItem] })),

  increaseItemCount: (menuId: number) =>
    set((state) => {
      console.log("menu.id: ", menuId);
      console.log("state.orders: ", state.orders);
      return {
        orders: state.orders.map((item) =>
          item.id === menuId ? { ...item, count: item.count + 1 } : item
        ),
      };
    }),
  decreaseItemCount: (menuId: number) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === menuId ? { ...item, count: item.count - 1 } : item
      ),
    })),
  resetOrder: () => set(() => ({ orders: [] })),
}));

export default useNewOrderStore;
