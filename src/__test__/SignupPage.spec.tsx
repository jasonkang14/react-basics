import "@testing-library/jest-dom";

import { expect } from "@jest/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { Route, Routes, Router } from "react-router-dom";

import SignupPage from "../pages/SignupPage";
import { createMemoryHistory } from "history";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("회원가입 페이지", () => {
  test("비밀번호가 일치하지 않으면 에러메시지가 나타난다", async () => {
    const history = createMemoryHistory({ initialEntries: ["/signup"] });

    render(
      <QueryClientProvider client={queryClient}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
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
    expect(errorMessage).toBeInTheDocument();
  });
});
