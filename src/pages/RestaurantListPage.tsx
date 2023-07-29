import styled from "@emotion/styled";
import useRestaurantList from "hooks/useRestaurantList";
import { flexColumn, flexRow } from "mixins/styles";
import { useNavigate, useParams } from "react-router-dom";

export default function RestaurantListPage() {
  const navigate = useNavigate();
  const { id: foodTypeId } = useParams();
  const { data: restaurantList } = useRestaurantList(
    foodTypeId ? parseInt(foodTypeId) : 0
  );

  const handleRestauratClick = (restaurantId: number) => {
    navigate(`/restaurant/${restaurantId}`, { replace: true });
  };

  return (
    <Wrapper>
      {restaurantList?.map((restaurant) => (
        <RestaurantListBtn
          key={restaurant.id}
          onClick={() => handleRestauratClick(restaurant.id)}
        >
          <img alt="food-type" src={restaurant.icon} width={36} height={36} />
          <RestaurantInfo>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <RatingsWrap>
              <img
                alt="ratings"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                width={16}
                height={16}
              />
              <Ratings>{restaurant.ratings}</Ratings>
            </RatingsWrap>
            <MinPrice>최소주문: {restaurant.minPrice}</MinPrice>
          </RestaurantInfo>
        </RestaurantListBtn>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 64px;
`;

const MinPrice = styled.h6`
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
`;

const RatingsWrap = styled.div`
  ${flexRow}
  column-gap: 4px;
`;

const Ratings = styled.h6`
  color: grey;
  margin: 0;
`;

const RestaurantInfo = styled.div`
  ${flexColumn}
  row-gap: 8px;
`;

const RestaurantListBtn = styled.button`
  ${flexRow}
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid grey;
  background-color: #ffffff;
  padding: 24px;
  z-index: 1;
  border-radius: 0;
`;

const RestaurantName = styled.h5`
  color: #1d2745;
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;
