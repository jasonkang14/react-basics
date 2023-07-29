export type OrderCategory = "delivery" | "pickup";
export interface IMenu {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
}
