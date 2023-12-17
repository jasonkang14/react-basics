import styled from "@emotion/styled";

import { flexColumn, flexRow } from "mixins/styles";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import {
  decreaseOrderCount,
  increaseOrderCount,
  resetOrder,
} from "store/reducers/order";

export default function OrderDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderList, restaurant } = useSelector(
    (state: RootState) => state.orderReducer
  );

  const handleMoreBtnClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  const handleConfirmBtnClick = () => {
    dispatch(resetOrder());
    navigate("/");
  };

  useEffect(() => {
    if (orderList.length === 0) {
      navigate(`/restaurant/${restaurant.id}`);
    }
  }, [orderList]);

  return (
    <Wrapper>
      <Title>{restaurant.name}</Title>
      {orderList.map((menu, index) => (
        <MenuWrap key={menu.id}>
          <img alt={menu.name} src={menu.picture} width={100} height={100} />
          <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuPrice>{`${menu.price.toString().slice(0, 2)},${menu.price
              .toString()
              .slice(2)}원`}</MenuPrice>

            <Counter>
              <DecrementBtn onClick={() => dispatch(decreaseOrderCount(index))}>
                -
              </DecrementBtn>
              {menu.count}
              <IncrementBtn onClick={() => dispatch(increaseOrderCount(index))}>
                +
              </IncrementBtn>
            </Counter>
          </MenuInfo>
        </MenuWrap>
      ))}
      <TotalPrice>
        {
          //   `주문금액: ${totalPrice
          // .toString()
          //     .slice(0, 2)},${totalPrice.toString().slice(2)}원`
        }
      </TotalPrice>
      <ButtonWrap>
        <MoreBtn onClick={handleMoreBtnClick}>더담기</MoreBtn>
        <ConfirmBtn onClick={handleConfirmBtnClick}>주문완료</ConfirmBtn>
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
