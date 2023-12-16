export interface INewOrder {
  id: number;
  name: string;
  count: number;
  price: number;
  picture: string;
}

export interface ITargetRestaurant {
  id: number;
  name: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  ratings: number;
  minPrice: number;
  icon: string;
}

export interface IFoodType {
  id: number;
  name: string;
  icon: string;
}

export interface IRestaurantDetail {
  id: number;
  name: string;
  minPrice: number;
  menu_set: IMenu[];
}

export type OrderCategory = "delivery" | "pickup";

export interface IMenu {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
}
