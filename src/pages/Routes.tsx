import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import OrderTypePage from "./MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<OrderTypePage />} />
    </Route>
  )
);
