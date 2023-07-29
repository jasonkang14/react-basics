import styled from "@emotion/styled";
import useFoodTypeList from "hooks/useFoodTypeList";
import { flexColumn, flexRow } from "mixins/styles";

export default function FoodTypePage() {
  const { data: foodTypeList } = useFoodTypeList();
  return (
    <Wrapper>
      {foodTypeList?.map((foodType) => (
        <Restaurant key={foodType.name}>
          <img alt={foodType.name} width={56} height={56} src={foodType.icon} />
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
  row-gap: 8px;
  color: #1d2745;
`;
