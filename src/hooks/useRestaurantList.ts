import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";
import { IRestaurant } from "libs/order";

const useRestaurantList = (foodTypeId: number) => {
  return useQuery(
    ["restaurantList"],
    async () => {
      const { data } = await axiosClient.get<IRestaurant[]>(
        `/restaurant/food-type/${foodTypeId}`
      );
      return data;
    },
    {}
  );
};

export default useRestaurantList;
