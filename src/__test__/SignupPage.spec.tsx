import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

import { ThemeProvider } from "@emotion/react";

import { theme } from "../theme";
import { Route, Router, Routes } from "react-router-dom";

import SignupPage from "pages/SignupPage";

describe("회원가입 페이지", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("비밀번호가 일치하지 않으면 에러메시지가 나타난다", async () => {
    // const history = createMemoryHistory({ initialEntries: ["/signup"] });

    render(
      <ThemeProvider theme={theme}>
        {/* <Router location={history.location} navigator={history}> */}
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        {/* </Router> */}
      </ThemeProvider>
    );

    const passwordInput = screen.getByLabelText("비밀번호");
    const confirmPasswordInput = screen.getByLabelText("비밀번호 확인");

    fireEvent.change(passwordInput, {
      target: { value: "password" },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "wrongPassword" },
    });

    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toBeVisible();
  });
});
