import { useState } from "react";
import * as Styled from "./styles";
import { CategoryFilterTypes } from "../../types/categoryFilter";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";

const categories = [
  { name: "Todos", category: "ALL" },
  { name: "Tecnologia", category: "TECHNOLOGY" },
  { name: "Viagem", category: "TRAVEL" },
  { name: "Terror", category: "HORROR" },
  { name: "Aventura", category: "ADVENTURE" },
  { name: "Comédia", category: "COMEDY" },
  { name: "Romance", category: "ROMANCE" },
];

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilterTypes>("ALL");
  const { setCategory } = useCategoryFilter();

  function handleCategoryClick(index: CategoryFilterTypes) {
    if (index === activeCategory) {
      return;
    } else {
      setActiveCategory(index);
      setCategory(index);
    }
  }

  return (
    <Styled.Container>
      {categories.map((category) => {
        return (
          <Styled.Categories
            key={category.category}
            active={category.category === activeCategory}
            onClick={() =>
              handleCategoryClick(category.category as CategoryFilterTypes)
            }
          >
            <p>{category.name}</p>
          </Styled.Categories>
        );
      })}
    </Styled.Container>
  );
}
