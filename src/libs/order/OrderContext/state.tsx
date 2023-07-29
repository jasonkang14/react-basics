import { INewOrder } from ".";

export type State = {
  newOrder: INewOrder[];
};

export const initialState: State = {
  newOrder: [],
};
