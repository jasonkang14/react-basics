import styled from "@emotion/styled";
import OrderType from "components/OrderType";
import { flexColumn } from "mixins/styles";

export default function MainPage() {
  const handleDeliveryBtnClick = () => {};
  const handlePickupBtnClick = () => {};

  return (
    <Wrapper>
      <OrderType
        handleOrderTypeClick={handleDeliveryBtnClick}
        icon="ic-delivery.png"
        orderType="delivery"
      />
      <OrderType
        handleOrderTypeClick={handlePickupBtnClick}
        icon="ic-pickup.png"
        orderType="pickup"
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  ${flexColumn};
  padding: 24px 16px;
  row-gap: 16px;
`;
