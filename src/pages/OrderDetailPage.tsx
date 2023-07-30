import styled from "@emotion/styled";
import { newOrderState } from "atoms/order";
import { useOrder } from "libs/order";
import { flexColumn, flexRow } from "mixins/styles";
import { Profiler, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export default function OrderDetailPage() {
  const navigate = useNavigate();
  // const newOrder = useRecoilValue(newOrderState);
  const {
    newOrder,
    increaseItemCount,
    decreaseItemCount,
    resetOrder,
    totalPrice,
    restaurant,
  } = useOrder();

  useEffect(() => {
    if (!newOrder.length) {
      navigate(`/restaurant/${restaurant.id}`);
    }
  }, [newOrder]);

  const handleMoreBtnClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  const handleConfirmBtnClick = () => {
    resetOrder();
    navigate("/");
  };

  function onRender(
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any
  ) {
    // Aggregate or log render timings...
  }

  return (
    <Profiler id="orderDetail" onRender={onRender}>
      <Wrapper>
        <Title>{restaurant.name}</Title>
        {newOrder.map((menu) => (
          <MenuWrap>
            <img alt={menu.name} src={menu.picture} width={100} height={100} />
            <MenuInfo>
              <MenuName>{menu.name}</MenuName>
              <MenuPrice>{`${menu.price.toString().slice(0, 2)},${menu.price
                .toString()
                .slice(2)}원`}</MenuPrice>

              <Counter>
                <DecrementBtn onClick={() => decreaseItemCount(menu.id)}>
                  -
                </DecrementBtn>
                {menu.count}
                <IncrementBtn onClick={() => increaseItemCount(menu.id)}>
                  +
                </IncrementBtn>
              </Counter>
            </MenuInfo>
          </MenuWrap>
        ))}
        <TotalPrice>{`주문금액: ${totalPrice
          .toString()
          .slice(0, 2)},${totalPrice.toString().slice(2)}원`}</TotalPrice>
        <ButtonWrap>
          <MoreBtn onClick={handleMoreBtnClick}>더담기</MoreBtn>
          <ConfirmBtn onClick={handleConfirmBtnClick}>주문완료</ConfirmBtn>
        </ButtonWrap>
      </Wrapper>
    </Profiler>
  );
}

const Wrapper = styled.div`
  ${flexColumn}
  row-gap: 24px;
  height: 100%;
  margin-top: 64px;
  padding: 24px;
  color: #1d2745;
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

const Counter = styled.div`
  ${flexRow}
  width: 120px;
  margin-top: 8px;
  font-size: 16px;
  align-items: center;
  border: 1px solid #1d2745;
  border-radius: 3px;
  justify-content: space-around;
`;

const DecrementBtn = styled.button`
  color: #1d2745;
  padding: 0;
  font-size: 24px;
`;

const IncrementBtn = styled(DecrementBtn)`
  margin-bottom: 2px;
`;

const ConfirmBtn = styled.button`
  background-color: #1d2745;
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
