import {
  INewOrder,
  IRestaurant,
  ITargetRestaurant,
  IFoodType,
  IRestaurantDetail,
} from ".";

export type State = {
  newOrder: INewOrder[];
  totalPrice: number;
  restaurant: ITargetRestaurant;
  restaurantList: IRestaurant[];
  foodTypeList: IFoodType[];
  restaurantDetail: IRestaurantDetail;
};

export const initialState: State = {
  newOrder: [],
  totalPrice: 0,
  restaurantList: [],
  restaurant: {
    id: 0,
    name: "",
  },
  foodTypeList: [],
  restaurantDetail: {
    id: 0,
    name: "",
    minPrice: 0,
    menu_set: [],
  },
};
