// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IRestaurant {
  id: number;
  name: string;
  ratings: number;
  minPrice: number;
  icon: string;
}

// Define a service using a base URL and expected endpoints
export const restaurantListApi = createApi({
  reducerPath: "restaurantList",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ADDRESS }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<IRestaurant[], number>({
      query: (foodTypeId) => `restaurant/food-type/${foodTypeId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRestaurantListQuery } = restaurantListApi;
