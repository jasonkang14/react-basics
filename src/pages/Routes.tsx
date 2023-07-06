import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import OrderTypePage from "./MainPage";
import FoodTypePage from "./FoodTypePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<OrderTypePage />} />
      <Route path="/food" element={<FoodTypePage />} />
    </Route>
  )
);
