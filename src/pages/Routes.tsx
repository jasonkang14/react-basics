import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "./LoginPage";

import FoodTypePage from "./FoodTypePage";
import RestaurantListPage from "./RestaurantListPage";
import RestaurantDetailPage from "./RestaurantDetailPage";
import OrderDetailPage from "./OrderDetailPage";
import SignupPage from "./SignupPage";
import OrderTypePage from "./OrderTypePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<OrderTypePage />} />
      <Route path="/food-type" element={<FoodTypePage />} />
      <Route path="/food-type/:id" element={<RestaurantListPage />} />
      <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
      <Route path="/order" element={<OrderDetailPage />} />
    </Route>
  )
);
