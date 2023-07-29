import { INewOrder } from ".";

export type State = {
  newOrder: INewOrder[];
  totalPrice: number;
};

export const initialState: State = {
  newOrder: [],
  totalPrice: 0,
};
