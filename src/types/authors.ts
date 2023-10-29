export type AuthorsCard = {
  id: string;
  name: string;
  picture: string;
  booksCount: number;
};

export type AuthorsFetchResponse = {
  data: {
    favoriteAuthors: AuthorsCard[];
  };
};
