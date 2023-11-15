import styled from "@emotion/styled";
import { flexColumn, flexRow } from "mixins/styles";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterItem>
        <img
          alt="order"
          width={36}
          height={36}
          src={`${import.meta.env.VITE_STORAGE_ADDRESS}/ic-kiosk.png`}
        />
        주문
      </FooterItem>
      <FooterItem>
        <img
          alt="profile"
          width={36}
          height={36}
          src={`${import.meta.env.VITE_STORAGE_ADDRESS}/ic-profile.png`}
        />
        내정보
      </FooterItem>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  ${flexRow};
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
  height: 72px;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
`;

const FooterItem = styled.button`
  ${flexColumn};
  align-items: center;
  color: var(--primary);
`;
