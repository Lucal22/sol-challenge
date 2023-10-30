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
  isFavorite: boolean;
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

export type BookFetchResponse = {
  data: {
    book: Book;
  };
};
