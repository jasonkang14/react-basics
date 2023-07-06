import styled from "@emotion/styled";
import { flexColumn, flexRow } from "mixins/styles";

const foodTypeArray = [
  {
    name: "피자",
    icon: "ic-pizza.png",
  },
  {
    name: "동남아",
    icon: "ic-asian.png",
  },
  {
    name: "햄버거",
    icon: "ic-burger.png",
  },
  {
    name: "디저트",
    icon: "ic-cake.png",
  },
  {
    name: "치킨",
    icon: "ic-chicken.png",
  },
  {
    name: "탕,찌개",
    icon: "ic-hotpot.png",
  },
  {
    name: "고기",
    icon: "ic-meat.png",
  },
  {
    name: "중식",
    icon: "ic-noodle.png",
  },
  {
    name: "샐러드",
    icon: "ic-salad.png",
  },
];

export default function FoodTypePage() {
  return (
    <Wrapper>
      {foodTypeArray.map((foodType) => (
        <Restaurant>
          <img
            alt="pizza"
            width={56}
            height={56}
            src={`${import.meta.env.VITE_STORAGE_ADDRESS}/${foodType.icon}`}
          />
          {foodType.name}
        </Restaurant>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexRow};
  margin-top: 40px;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Restaurant = styled.button`
  ${flexColumn};
  align-items: center;
  font-weight: bold;
  color: #1d2745;
`;
