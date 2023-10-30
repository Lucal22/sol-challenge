import { CategoryFilterContext } from "../context/category-filter-context";
import { useContext } from "react";

export function useCategoryFilter() {
  return useContext(CategoryFilterContext);
}
