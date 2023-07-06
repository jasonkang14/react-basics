import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/login" element={<LoginPage />} />)
);
