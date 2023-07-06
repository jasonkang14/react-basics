import styled from "@emotion/styled";
import { flexRow } from "mixins/styles";
import { OrderCategory } from "mixins/types";
import { MouseEventHandler } from "react";

interface IOrderType {
  orderType: OrderCategory;
  icon: string;
  handleOrderTypeClick: MouseEventHandler<HTMLButtonElement>;
}

const orderCategory = {
  delivery: "배달",
  pickup: "포장",
};

export default function OrderType({
  orderType,
  icon,
  handleOrderTypeClick,
}: IOrderType) {
  return (
    <OrderTypeBtn onClick={handleOrderTypeClick}>
      <img
        width={40}
        height={40}
        src={`${import.meta.env.VITE_STORAGE_ADDRESS}/${icon}`}
      />
      {orderCategory[orderType]}
    </OrderTypeBtn>
  );
}

const OrderTypeBtn = styled.button`
  ${flexRow};
  width: 100%;
  column-gap: 24px;
  color: #1d2745;
  font-weight: bold;
  font-size: 24px;
  border: 1px solid #1d2745;
  border-radius: 4px;
  padding: 24px;
`;
