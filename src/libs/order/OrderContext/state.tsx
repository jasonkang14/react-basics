import { INewOrder, IRestaurant } from ".";

export type State = {
  newOrder: INewOrder[];
  totalPrice: number;
  restaurant: IRestaurant;
};

export const initialState: State = {
  newOrder: [],
  totalPrice: 0,
  restaurant: {
    id: 0,
    name: "",
  },
};
