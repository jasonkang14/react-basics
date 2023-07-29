import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";
import OrderTypePage from "./OrderTypePage";
import FoodTypePage from "./FoodTypePage";
import RestaurantListPage from "./RestaurantListPage";
import RestaurantDetailPage from "./RestaurantDetailPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<OrderTypePage />} />
      <Route path="/food-type" element={<FoodTypePage />} />
      <Route path="/food-type/:id" element={<RestaurantListPage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
    </Route>
  )
);
