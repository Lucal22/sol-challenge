import axios from "axios";
import { BooksFetchResponse } from "../types/books";
import { API_URL } from "../config/app-config";

export default async function fetchFavoriteBooks(): Promise<BooksFetchResponse> {
  const data = await axios.post(API_URL, {
    query: `query{
        favoriteBooks{
          id
          name
          author{
            name
          }
          cover
        }
      }`,
  });

  if (data.data.errors) {
    throw new Error(data.data.errors[0].message);
  }
  return {
    data: {
      favoriteBooks: data.data.data?.favoriteBooks,
    },
  };
}
