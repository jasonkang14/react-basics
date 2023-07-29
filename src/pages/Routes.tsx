import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import OrderTypePage from "./OrderTypePage";
import FoodTypePage from "./FoodTypePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<OrderTypePage />} />
      <Route path="/food-type" element={<FoodTypePage />} />
    </Route>
  )
);
