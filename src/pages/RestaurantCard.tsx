import styled from "@emotion/styled";

import { targetRestaurantState } from "atoms/order";
import useIntersection from "hooks/useIntersection";

import { IRestaurant } from "libs/order";
import { flexColumn, flexRow } from "mixins/styles";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

export default function RestaurantCard({ restaurant }: IRestaurantCardProps) {
  const navigate = useNavigate();
  const setRestaurant = useSetRecoilState(targetRestaurantState);

  const handleRestaurantClick = (
    restaurantId: number,
    restaurantName: string
  ) => {
    setRestaurant({ id: restaurantId, name: restaurantName });
    navigate(`/restaurant/${restaurantId}`, { replace: true });
  };

  return (
    <RestaurantBtn
      data-cy={restaurant.id}
      key={restaurant.id}
      onClick={() => handleRestaurantClick(restaurant.id, restaurant.name)}
    >
      {/* {isIntersecting && ( */}
      <>
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
      </>
      {/* )} */}
    </RestaurantBtn>
  );
}

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

const RestaurantBtn = styled.button`
  ${flexRow}
  column-gap: 16px;
  width: 100%;
  border-bottom: 1px solid grey;
  background-color: var(--white);
  padding: 24px;
  z-index: 1;
  border-radius: 0;
`;

const RestaurantName = styled.h5`
  color: var(--primary);
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;
