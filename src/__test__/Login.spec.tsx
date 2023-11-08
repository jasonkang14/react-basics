import "@testing-library/jest-dom";

import {
  act,
  fireEvent,
  render,
  //   renderHook,
  screen,
  //   waitFor,
} from "@testing-library/react";

import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import LoginPage from "../pages/LoginPage";

// import useLogin from "../hooks/useLogin";

const queryClient = new QueryClient({
  defaultOptions: {},
});

// const testWrapper = ({ children }) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );

describe("로그인 테스트", () => {
  test("로그인 실패 시 에러메시지", async () => {
    const routes = [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
      initialIndex: 0,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    // const { result } = renderHook(() => useLogin(), {
    //   wrapper: testWrapper,
    // });

    act(() => {
      const loginBtn = screen.getByRole("button", { name: /로그인/ });
      userEvent.click(loginBtn);
    });

    // await waitFor(async () => {
    //   expect(result.current.isError);

    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
    // });
  });
});
