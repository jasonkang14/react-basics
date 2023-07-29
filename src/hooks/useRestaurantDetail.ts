import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";
import { IMenu } from "mixins/types";

interface IRestaurantDetail {
  id: number;
  name: string;
  minPrice: number;
  menu_set: IMenu[];
}

const useRestaurantDetail = (restaurantId: number) => {
  return useQuery(
    ["restaurantDetail"],
    async () => {
      const { data } = await axiosClient.get<IRestaurantDetail>(
        `/restaurant/${restaurantId}`
      );
      return data;
    },
    {
      cacheTime: 0,
      staleTime: 0,
      enabled: restaurantId > 0,
    }
  );
};

export default useRestaurantDetail;
