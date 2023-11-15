import styled from "@emotion/styled";

import { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--white);
`;
