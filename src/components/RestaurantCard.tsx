import styled from "@emotion/styled";
import useVisibility from "hooks/useVisibility";
import { flexColumn, flexRow } from "mixins/styles";
import { IRestaurant } from "mixins/types";
import { useRef } from "react";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

export default function RestaurantCard({ restaurant }: IRestaurantCardProps) {
  const cardRef = useRef(null);
  const isVisible = useVisibility(cardRef);

  return (
    <RestaurantListBtn key={restaurant.id} ref={cardRef}>
      {isVisible && (
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
      )}
    </RestaurantListBtn>
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
