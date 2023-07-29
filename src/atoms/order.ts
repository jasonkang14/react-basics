import { INewOrder, ITargetRestaurant } from "libs/order";
import { atom, selector } from "recoil";

export const newOrderState = atom<INewOrder[]>({
  key: "newOrderState",
  default: [],
});

export const totalPriceState = selector({
  key: "totalPriceState",
  get: ({ get }) => {
    const items = get(newOrderState); // your atom containing the list of objects

    return items.reduce((total, item) => total + item.price * item.count, 0);
  },
});

export const targetRestaurantState = atom<ITargetRestaurant>({
  key: "targetRestaurantState",
  default: {
    id: 0,
    name: "",
  },
});
