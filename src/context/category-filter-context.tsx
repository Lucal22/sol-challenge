import { ReactNode, createContext, useState } from "react";
import { CategoryFilterTypes } from "../types/categoryFilter";

export const CategoryFilterContext = createContext({
  category: "ALL",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCategory: (value: CategoryFilterTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function CategoryFilterContextProvider({ children }: ProviderProps) {
  const [category, setCategory] = useState<CategoryFilterTypes>("ALL");
  return (
    <CategoryFilterContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
}
