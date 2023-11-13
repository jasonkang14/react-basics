import React from "react";
import LoginPage from "./LoginPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("<LoginPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
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

    cy.mount(
      <QueryClientProvider client={new QueryClient({})}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });
});
