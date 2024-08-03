interface Product {
  title: string;
  id: number;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductsTypes {
  products: Product[];
  newArrival: Product[];
  bestSeller: Product[];
  pending: boolean;
  error: string | null;
}

export type {ProductsTypes, Product};
