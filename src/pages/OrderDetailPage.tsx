import styled from "@emotion/styled";
import {
  newOrderState,
  targetRestaurantState,
  totalPriceState,
} from "atoms/order";
import { flexColumn, flexRow } from "mixins/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function OrderDetailPage() {
  const navigate = useNavigate();
  const totalPrice = useRecoilValue(totalPriceState);
  const restaurant = useRecoilValue(targetRestaurantState);
  const [newOrder, changeCount] = useRecoilState(newOrderState);

  useEffect(() => {
    if (!newOrder.length) {
      navigate(`/restaurant/${restaurant.id}`);
    }
  }, [newOrder]);

  const handleMoreBtnClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  const handleConfirmBtnClick = () => {
    alert("주문이 완료되었습니다");
    navigate("/");
  };

  const handleIncrementBtnClick = (menuId: number) => {
    changeCount((oldArray) =>
      oldArray.map((item) =>
        item.id === menuId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrementBtnClick = (menuId: number) => {
    changeCount((oldArray) =>
      oldArray.map((item) =>
        item.id === menuId ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <Wrapper>
      <Title>{restaurant.name}</Title>
      {newOrder.map((menu) => (
        <MenuWrap>
          <img alt={menu.name} src={menu.picture} width={100} height={100} />
          <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuPrice>{`${menu.price.toLocaleString()}원`}</MenuPrice>

            <CounterSection data-cy="counter">
              <DecrementBtn
                data-cy="decrementBtn"
                onClick={() => handleDecrementBtnClick(menu.id)}
              >
                -
              </DecrementBtn>
              {menu.count}
              <IncrementBtn
                data-cy="incrementBtn"
                onClick={() => handleIncrementBtnClick(menu.id)}
              >
                +
              </IncrementBtn>
            </CounterSection>
          </MenuInfo>
        </MenuWrap>
      ))}
      <TotalPrice>{`주문금액: ${totalPrice.toLocaleString()}원`}</TotalPrice>
      <ButtonWrap>
        <MoreBtn onClick={handleMoreBtnClick}>더담기</MoreBtn>
        <ConfirmBtn data-cy="completeBtn" onClick={handleConfirmBtnClick}>
          주문완료
        </ConfirmBtn>
      </ButtonWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexColumn}
  row-gap: 24px;
  height: 100%;
  margin-top: 64px;
  padding: 24px;
  color: var(--primary);
`;

const Title = styled.h2``;

const MenuWrap = styled.div`
  ${flexRow};
  column-gap: 16px;
  align-items: start;
`;

const MenuInfo = styled.div`
  ${flexColumn};
`;

const MenuName = styled.h3``;

const MenuPrice = styled.h4``;

const CounterSection = styled.section`
  ${flexRow}
  width: 120px;
  margin-top: 8px;
  font-size: 16px;
  align-items: center;
  border: 1px solid var(--primary);
  border-radius: 3px;
  justify-content: space-around;
`;

const DecrementBtn = styled.button`
  color: var(--primary);
  padding: 0;
  font-size: 24px;
`;

const IncrementBtn = styled(DecrementBtn)`
  margin-bottom: 2px;
`;

const ConfirmBtn = styled.button`
  background-color: var(--primary);
  border: none;
  outline: none;
`;

const MoreBtn = styled(ConfirmBtn)``;

const TotalPrice = styled.h4`
  margin-top: 24px;
`;

const ButtonWrap = styled.div`
  ${flexRow};
  column-gap: 16px;
`;
