import { CategoryFilterTypes } from "./categoryFilter";

export type BookCard = {
  id: string;
  name: string;
  cover: string;
  author: {
    name: string;
  };
  category: CategoryFilterTypes;
};

export type Book = BookCard & {
  description: string;
  category: string;
};

export type FavoriteBooksFetchResponse = {
  data: {
    favoriteBooks: BookCard[];
  };
};

export type BooksFetchResponse = {
  data: {
    allBooks: BookCard[];
  };
};
