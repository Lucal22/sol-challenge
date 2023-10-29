import axios from "axios";
import { API_URL } from "../config/app-config";
import { AuthorsFetchResponse } from "../types/authors";

export default async function fetchFavoriteAuthors(): Promise<AuthorsFetchResponse> {
  const data = await axios.post(API_URL, {
    query: `query{
        favoriteAuthors{
        id
        name
        picture
        booksCount
    }
      }`,
  });

  if (data.data.errors) {
    throw new Error(data.data.errors[0].message);
  }
  return {
    data: {
      favoriteAuthors: data.data.data?.favoriteAuthors,
    },
  };
}
