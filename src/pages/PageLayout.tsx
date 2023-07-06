import styled from "@emotion/styled";
import Footer from "components/Footer";
import Header from "components/Header";

import { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
`;
