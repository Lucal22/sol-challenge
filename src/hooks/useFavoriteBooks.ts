import axios from "axios";
import { BooksFetchResponse } from "../types/books";

const API_URL = "https://us-central1-ss-devops.cloudfunctions.net/GraphQL";

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
