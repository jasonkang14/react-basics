import styled from "@emotion/styled";

import useRestaurantList from "hooks/useRestaurantList";
import { Profiler, useRef } from "react";
import { useParams } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import useIntersection from "hooks/useIntersection";

export default function RestaurantListPage() {
  const { id: foodTypeId } = useParams();
  const targetRef = useRef(null);
  const isIntersecting = useIntersection(targetRef, {
    threshold: 0.5, // 예시: 50% 이상이 화면에 보일 때 감지
  });

  const { data: restaurantList } = useRestaurantList(
    foodTypeId ? parseInt(foodTypeId) : 0
  );

  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log("id: ", id);
    console.log("phase: ", phase);
    console.log("actualDuration: ", actualDuration);
    console.log("baseDuration: ", baseDuration);
    console.log("startTime: ", startTime);
    console.log("commitTime: ", commitTime);
  }
  return (
    <Profiler id="restaurantList" onRender={onRender}>
      <Wrapper data-cy="restaurantWrapper">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Wrapper>
    </Profiler>
  );
}

const Wrapper = styled.div`
  margin-top: 64px;
`;

const EmptyDiv = styled.div`
  height: 24px;
`;
