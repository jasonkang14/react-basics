import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";

interface IRestaurant {
  id: number;
  name: string;
  ratings: number;
  minPrice: number;
  icon: string;
}

const useRestaurantList = (foodTypeId: number) => {
  return useQuery(
    ["restaurantList"],
    async () => {
      const { data } = await axiosClient.get<IRestaurant[]>(
        `/restaurant/food-type/${foodTypeId}`
      );
      return data;
    },
    {
      enabled: foodTypeId > 0,
    }
  );
};

export default useRestaurantList;
