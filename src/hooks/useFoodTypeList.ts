import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";

interface IFoodType {
  id: number;
  name: string;
  icon: string;
}

const useFoodTypeList = () => {
  return useQuery(["foodTypeList"], async () => {
    const { data } = await axiosClient.get<IFoodType[]>(
      "/restaurant/food-type/"
    );
    return data;
  });
};

export default useFoodTypeList;
