export type BookCard = {
  id: string;
  name: string;
  cover: string;
  author: {
    name: string;
  };
};

export type Book = BookCard & {
  description: string;
  category: string;
};

export type BooksFetchResponse = {
  data: {
    favoriteBooks: BookCard[];
  };
};
