import styled from "@emotion/styled";
import useRestaurantDetail from "hooks/useRestaurantDetail";
import { flexColumn, flexRow } from "mixins/styles";
import { useNavigate, useParams } from "react-router-dom";

export default function RestaurantDetailPage() {
  const navigate = useNavigate();
  const { id: restaurantId } = useParams();
  const { data: restaurant } = useRestaurantDetail(
    restaurantId ? parseInt(restaurantId) : 0
  );

  return (
    <Wrapper>
      <RestaurantName>{restaurant?.name}</RestaurantName>
      {restaurant?.menu_set.map((menu) => (
        <MenuWrap>
          <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuDescription>{menu.description}</MenuDescription>
            <MenuPrice>{`${menu.price.toString().slice(0, 2)},${menu.price
              .toString()
              .slice(2)}원`}</MenuPrice>
          </MenuInfo>
          <img alt={menu.name} src={menu.picture} width={80} height={90} />
        </MenuWrap>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexColumn}
  row-gap: 32px;
  margin-top: 64px;
  padding: 24px;
`;

const MenuName = styled.h2`
  color: #1d2745;
`;

const MenuDescription = styled.h4`
  color: grey;
`;

const MenuPrice = styled.h5`
  color: black;
`;

const RestaurantName = styled.h1`
  color: #1d2745;
`;

const MenuWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  cursor: pointer;
`;

const MenuInfo = styled.div`
  ${flexColumn}
`;
