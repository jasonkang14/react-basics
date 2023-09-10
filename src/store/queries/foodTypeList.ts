// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IFoodType {
  id: number;
  name: string;
  icon: string;
}
// Define a service using a base URL and expected endpoints
export const foodTypeListApi = createApi({
  reducerPath: "foodTypeListApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_ADDRESS }),
  endpoints: (builder) => ({
    getFoodTypeList: builder.query<IFoodType[], void>({
      query: () => `restaurant/food-type`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFoodTypeListQuery } = foodTypeListApi;
