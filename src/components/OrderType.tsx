import styled from "@emotion/styled";
import { flexRow } from "../mixins/styles";
import { OrderCategory } from "../mixins/types";
import { MouseEventHandler } from "react";

interface IOrderType {
  orderType: OrderCategory;
  icon: string;
  testId: string;
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
  testId,
}: IOrderType) {
  return (
    <OrderTypeBtn onClick={handleOrderTypeClick} data-cy={testId}>
      <img
        width={40}
        height={40}
        src={`https://kr.object.ncloudstorage.com/icons/${icon}`}
      />
      {orderCategory[orderType]}
    </OrderTypeBtn>
  );
}

const OrderTypeBtn = styled.button`
  ${flexRow};
  width: 100%;
  column-gap: 24px;
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 24px;
`;
