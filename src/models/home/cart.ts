interface Product {
  productId: number;
  quantity: number;
}

interface UpdateCartParams {
  userId: number;
  date: string;
  products: Product[];
}
interface GetCartParams {
  params: object;
  userId: string;
}
interface Cart {
  productId: number;
  quantity: number;
  item: object;
}
interface CartTypes {
  cart: Cart[];
  pending: boolean;
  error: string | null;
  totalPrice: number;
}
export type {CartTypes, Cart, UpdateCartParams, GetCartParams, Product};
