import { INewOrder, IRestaurant, ITargetRestaurant } from ".";

export type State = {
  newOrder: INewOrder[];
  totalPrice: number;
  restaurant: ITargetRestaurant;
  restaurantList: IRestaurant[];
};

export const initialState: State = {
  newOrder: [],
  totalPrice: 0,
  restaurantList: [],
  restaurant: {
    id: 0,
    name: "",
  },
};
