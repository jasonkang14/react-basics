import { INewOrder } from "libs/order";
import { atom } from "recoil";

export const newOrderState = atom<INewOrder[]>({
  key: "newOrderState",
  default: [],
});
