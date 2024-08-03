interface CategoriesPropsTypes {
  title: string;
}
interface CategoriesTypes {
  categories: object[];
  selectedCategory: string;
  pending: boolean;
  error: string | null;
}
export type {CategoriesPropsTypes, CategoriesTypes};
