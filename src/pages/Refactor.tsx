import { useState } from "react";
import styled from "@emotion/styled";
import { INewOrder } from "libs/order";

type Step = "orderType" | "foodType" | "restaurantList" | "menuList" | "cart";

export default function Refactor() {
  const [step, setStep] = useState<Step>("orderType");
  const [order, setOrder] = useState<INewOrder[]>([]);

  const handleConfirmBtnClick = (order: INewOrder[]) => {
    // complete order
  };

  return (
    <>
      {step === "orderType" && (
        <OrderType onClick={() => setStep("foodType")} />
      )}
      {step === "foodType" && <FoodType />}
      {step === "restaurantList" && <RestaurantList />}
      {step === "menuList" && (
        <MenuList
          onClick={() => {
            setOrder((prev) => [
              ...prev,
              { id: 1, name: "", count: 0, price: 1, picture: "" },
            ]);
            setStep("cart");
          }}
        />
      )}
      {step === "cart" && <Cart onClick={() => handleConfirmBtnClick(order)} />}
    </>
  );
}

const OrderType = styled.div``;
const FoodType = styled.div``;
const RestaurantList = styled.div``;
const MenuList = styled.div``;
const Cart = styled.div``;
