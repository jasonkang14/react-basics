import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";

interface IMenu {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
}

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
      enabled: restaurantId > 0,
    }
  );
};

export default useRestaurantDetail;
