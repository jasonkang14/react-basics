import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { foodTypeListApi } from "./queries/foodTypeList";
import { restaurantListApi } from "./queries/restaurantList";

export const store = configureStore({
  reducer: {
    [foodTypeListApi.reducerPath]: foodTypeListApi.reducer,
    [restaurantListApi.reducerPath]: restaurantListApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      foodTypeListApi.middleware,
      restaurantListApi.middleware
    );
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
