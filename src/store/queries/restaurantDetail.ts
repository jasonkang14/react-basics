// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IRestaurantDetail {
  id: number;
  name: string;
  minPrice: number;
  menu_set: IMenu[];
}

export interface IMenu {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
}

// Define a service using a base URL and expected endpoints
export const restaurantDetailApi = createApi({
  reducerPath: "restaurantDetail",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ADDRESS }),
  endpoints: (builder) => ({
    getRestaurantDetail: builder.query<IRestaurantDetail, number>({
      query: (restaurantId) => `restaurant/${restaurantId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRestaurantDetailQuery } = restaurantDetailApi;
