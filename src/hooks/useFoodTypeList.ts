import { useQuery } from "@tanstack/react-query";
import axiosClient from "libs/axios";

interface IFoodTypeList {
  id: number;
  name: string;
  icon: string;
}

const useFoodTypeList = () => {
  return useQuery(["foodTypeList"], async () => {
    const { data } = await axiosClient.get<IFoodTypeList[]>(
      "/restaurant/food-type/"
    );
    return data;
  });
};

export default useFoodTypeList;
