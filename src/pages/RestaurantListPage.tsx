import styled from "@emotion/styled";
// import { targetRestaurantState } from "atoms/order";
import RestaurantCard from "components/RestaurantCard";
import useRestaurantList from "hooks/useRestaurantList";

import {
  // useNavigate,
  useParams,
} from "react-router-dom";
// import { useSetRecoilState } from "recoil";

export default function RestaurantListPage() {
  // const navigate = useNavigate();

  // const setRestaurant = useSetRecoilState(targetRestaurantState);
  const { id: foodTypeId } = useParams();
  const { data: restaurantList } = useRestaurantList(
    foodTypeId ? parseInt(foodTypeId) : 0
  );

  return (
    <Wrapper>
      {restaurantList?.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 64px;
`;
