import styled from "@emotion/styled";
import { flexRow } from "mixins/styles";

export default function Header() {
  return (
    <StyledHeader>
      <Button>
        우리집
        <img
          alt="dropdown"
          width={16}
          height={16}
          src={`${import.meta.env.VITE_STORAGE_ADDRESS}/ic-down-white.svg`}
        />
      </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  ${flexRow}
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: var(--primary);
  height: 64px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Button = styled.button`
  ${flexRow};
  column-gap: 2px;
  font-weight: bold;
`;
