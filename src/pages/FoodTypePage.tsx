import styled from "@emotion/styled";
import useFoodTypeList from "hooks/useFoodTypeList";
import { flexColumn, flexRow } from "mixins/styles";
import { useNavigate } from "react-router-dom";

export default function FoodTypePage() {
  const navigate = useNavigate();
  const { data: foodTypeList } = useFoodTypeList();

  const handleFoodTypeClick = (foodTypeId: number) => {
    navigate(`/food-type/${foodTypeId}`);
  };

  return (
    <Wrapper>
      {foodTypeList?.map((foodType) => (
        <FoodType key={foodType.id} data-cy={foodType.id}>
          <img
            alt={foodType.name}
            width={56}
            height={56}
            src={foodType.icon}
            onClick={() => handleFoodTypeClick(foodType.id)}
          />
          {foodType.name}
        </FoodType>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexRow};
  margin-top: 64px;
  padding-top: 24px;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FoodType = styled.button`
  ${flexColumn};
  align-items: center;
  font-weight: bold;
  row-gap: 8px;
  color: var(--primary);
`;
