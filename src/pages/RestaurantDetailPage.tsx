import styled from "@emotion/styled";

import { flexColumn, flexRow } from "mixins/styles";
import { IMenu } from "mixins/types";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurantDetailQuery } from "store/queries/restaurantDetail";
import { addOrder, setRestaurant } from "store/reducers/order";

export default function RestaurantDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: restaurantId } = useParams();
  const targetRestaurantId = restaurantId ? parseInt(restaurantId) : 0;

  const { data: restaurantDetail } =
    useGetRestaurantDetailQuery(targetRestaurantId);

  const handleMenuClick = (menu: IMenu) => {
    dispatch(
      addOrder({
        name: menu.name,
        id: menu.id,
        price: menu.price,
        count: 1,
        picture: menu.picture,
      })
    );
    dispatch(
      setRestaurant({
        id: targetRestaurantId,
        name: restaurantDetail?.name || "",
        minPrice: restaurantDetail?.minPrice || 0,
      })
    );

    navigate("/order");
  };

  return (
    <Wrapper>
      <RestaurantName>{restaurantDetail?.name}</RestaurantName>
      {restaurantDetail?.menu_set.map((menu) => (
        <MenuWrap key={menu.id} onClick={() => handleMenuClick(menu)}>
          <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuDescription>{menu.description}</MenuDescription>
            <MenuPrice>{`${menu.price.toString().slice(0, 2)},${menu.price
              .toString()
              .slice(2)}원`}</MenuPrice>
          </MenuInfo>
          <img alt={menu.name} src={menu.picture} width={80} height={80} />
        </MenuWrap>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexColumn}
  row-gap: 16px;
  margin-top: 64px;
  padding: 24px;
`;

const MenuName = styled.h2`
  color: var(--primary);
`;

const MenuDescription = styled.h4`
  color: grey;
`;

const MenuPrice = styled.h5`
  color: black;
`;

const RestaurantName = styled.h1`
  color: var(--primary);
`;

const MenuWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: 1px solid grey;
`;

const MenuInfo = styled.div`
  ${flexColumn}
`;
