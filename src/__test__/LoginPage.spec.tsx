import "@testing-library/jest-dom";
import * as nock from "nock";

import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ThemeProvider } from "@emotion/react";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

import { theme } from "../theme";
import LoginPage from "../pages/LoginPage";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";

import OrderTypePage from "../pages/OrderTypePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useLogin from "../hooks/useLogin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const testWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("로그인 페이지", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test("로그인에 성공하면 메인화면으로 리다이렉트", async () => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router location={history.location} navigator={history}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<OrderTypePage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    );

    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    fireEvent.change(emailInput, {
      target: { value: "registered" },
    });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    act(() => {
      const loginBtn = screen.getByRole("button", { name: /로그인/ });
      userEvent.click(loginBtn);
    });

    nock("https://wanted.byeongjinkang.com")
      .post(`/user/login`, {
        username: "registered",
        password: "password",
      })
      .reply(200, { token: "AUTH_TOKEN" });

    await waitFor(async () => {
      expect(history.location.pathname).toBe("/");
    });
  });

  test("로그인 실패 시 에러메시지", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={["/login"]}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );

    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    fireEvent.change(emailInput, {
      target: { value: "un-registered" },
    });
    fireEvent.change(passwordInput, { target: { value: "wrong-password" } });

    const { result } = renderHook(() => useLogin(), {
      wrapper: testWrapper,
    });

    act(() => {
      const loginBtn = screen.getByRole("button", { name: /로그인/ });
      userEvent.click(loginBtn);
    });

    nock("https://wanted.byeongjinkang.com")
      .post(`/user/login`, {
        username: "un-registered",
        password: "wrong-password",
      })
      .reply(401, { msg: "LOGIN_FAILED" });

    await waitFor(async () => {
      expect(result.current.isError);
      const errorMessage = await screen.findByTestId("error-message");
      expect(errorMessage).toBeVisible();
    });
  });
});
