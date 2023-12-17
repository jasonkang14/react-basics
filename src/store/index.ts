import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { foodTypeListApi } from "./queries/foodTypeList";
import { restaurantListApi } from "./queries/restaurantList";
import { restaurantDetailApi } from "./queries/restaurantDetail";
import orderDetailReducer from "./reducers/order";

export const store = configureStore({
  reducer: {
    orderReducer: orderDetailReducer,
    [foodTypeListApi.reducerPath]: foodTypeListApi.reducer,
    [restaurantListApi.reducerPath]: restaurantListApi.reducer,
    [restaurantDetailApi.reducerPath]: restaurantDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      foodTypeListApi.middleware,
      restaurantListApi.middleware,
      restaurantDetailApi.middleware
    );
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
